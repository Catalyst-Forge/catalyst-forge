import html
import time
from typing import Annotated

import httpx
from fastapi import APIRouter, Header, HTTPException, status

from core.config import settings
from schemas.contact import ContactRequest

router = APIRouter()

_request_log: dict[str, list[float]] = {}


@router.post("/contact")
async def submit_contact(
    payload: ContactRequest,
    x_forwarded_for: Annotated[str | None, Header()] = None,
):
    client_ip = _get_client_ip(x_forwarded_for)

    if _is_rate_limited(client_ip):
        raise HTTPException(
            status_code=status.HTTP_429_TOO_MANY_REQUESTS,
            detail="Too many requests. Please try again later.",
        )

    if payload.website:
        return {"ok": True}

    if not settings.RESEND_API_KEY or not settings.CONTACT_FROM:
        raise HTTPException(
            status_code=status.HTTP_503_SERVICE_UNAVAILABLE,
            detail="Email service is not configured.",
        )

    email_payload = {
        "from": settings.CONTACT_FROM,
        "to": settings.CONTACT_TO,
        "reply_to": payload.email,
        "subject": f"Website inquiry from {payload.name}",
        "html": _build_email_html(payload),
        "text": _build_email_text(payload),
    }

    try:
        async with httpx.AsyncClient(timeout=12.0) as client:
            response = await client.post(
                "https://api.resend.com/emails",
                json=email_payload,
                headers={
                    "Authorization": f"Bearer {settings.RESEND_API_KEY}",
                    "User-Agent": "CatalystForge/1.0",
                },
            )
            if response.status_code >= 400:
                raise HTTPException(
                    status_code=status.HTTP_502_BAD_GATEWAY,
                    detail="Failed to send email.",
                )
    except httpx.HTTPError as exc:
        raise HTTPException(
            status_code=status.HTTP_502_BAD_GATEWAY,
            detail="Email service is unavailable.",
        ) from exc

    return {"ok": True}


def _get_client_ip(x_forwarded_for: str | None) -> str:
    if not x_forwarded_for:
        return "unknown"

    return x_forwarded_for.split(",")[0].strip() or "unknown"


def _is_rate_limited(client_ip: str) -> bool:
    now = time.monotonic()
    window_seconds = 10 * 60
    max_requests = 5
    recent_requests = [
        timestamp
        for timestamp in _request_log.get(client_ip, [])
        if now - timestamp < window_seconds
    ]

    if len(recent_requests) >= max_requests:
        _request_log[client_ip] = recent_requests
        return True

    recent_requests.append(now)
    _request_log[client_ip] = recent_requests
    return False


def _build_email_html(payload: ContactRequest) -> str:
    escaped_message = html.escape(payload.message).replace("\n", "<br />")
    tracking_rows = "\n".join(
        _build_optional_html_row(label, value)
        for label, value in [
            ("Need", payload.need_type),
            ("Budget", payload.budget_range),
            ("Timeline", payload.timeline),
            ("Landing page", payload.page_path),
            ("UTM source", payload.utm_source),
            ("UTM medium", payload.utm_medium),
            ("UTM campaign", payload.utm_campaign),
            ("UTM content", payload.utm_content),
            ("UTM term", payload.utm_term),
        ]
    )

    return f"""
    <div style="font-family:Arial,sans-serif;color:#1a1a2e;line-height:1.6">
      <h2 style="color:#1B3A5C">New CatalystForge website inquiry</h2>
      <p><strong>Name:</strong> {html.escape(payload.name)}</p>
      <p><strong>Email:</strong> {html.escape(str(payload.email))}</p>
      <p><strong>Phone:</strong> {html.escape(payload.phone or "-")}</p>
      <p><strong>Company:</strong> {html.escape(payload.company or "-")}</p>
      {tracking_rows}
      <hr style="border:none;border-top:1px solid #e5e7eb;margin:24px 0" />
      <p><strong>Message:</strong></p>
      <p>{escaped_message}</p>
    </div>
    """


def _build_email_text(payload: ContactRequest) -> str:
    return "\n".join(
        [
            "New CatalystForge website inquiry",
            "",
            f"Name: {payload.name}",
            f"Email: {payload.email}",
            f"Phone: {payload.phone or '-'}",
            f"Company: {payload.company or '-'}",
            f"Need: {payload.need_type or '-'}",
            f"Budget: {payload.budget_range or '-'}",
            f"Timeline: {payload.timeline or '-'}",
            f"Landing page: {payload.page_path or '-'}",
            f"UTM source: {payload.utm_source or '-'}",
            f"UTM medium: {payload.utm_medium or '-'}",
            f"UTM campaign: {payload.utm_campaign or '-'}",
            f"UTM content: {payload.utm_content or '-'}",
            f"UTM term: {payload.utm_term or '-'}",
            "",
            "Message:",
            payload.message,
        ]
    )


def _build_optional_html_row(label: str, value: str) -> str:
    escaped_label = html.escape(label)
    escaped_value = html.escape(value or "-")
    return f"<p><strong>{escaped_label}:</strong> {escaped_value}</p>"
