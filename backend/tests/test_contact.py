import pytest
from fastapi.testclient import TestClient


def test_contact_validation_missing_message(client: TestClient):
    """Contact endpoint rejects request with too-short message."""
    response = client.post(
        "/api/contact",
        json={
            "name": "Test User",
            "email": "test@example.com",
            "message": "Hi",
            "phone": "08123456789",
        },
    )
    assert response.status_code == 422


def test_contact_validation_invalid_email(client: TestClient):
    """Contact endpoint rejects invalid email."""
    response = client.post(
        "/api/contact",
        json={
            "name": "Test User",
            "email": "not-an-email",
            "message": "Hello, I need a CRM system for my business.",
            "phone": "08123456789",
        },
    )
    assert response.status_code == 422


def test_contact_honeypot_bypass(client: TestClient):
    """Honeypot field (website) returns ok without sending email."""
    response = client.post(
        "/api/contact",
        json={
            "name": "Bot",
            "email": "bot@spam.com",
            "message": "Buy my product now!!!",
            "phone": "08111111111",
            "website": "http://spam.com",
        },
    )
    assert response.status_code == 200
    assert response.json() == {"ok": True}


def test_contact_no_email_config(client: TestClient):
    """Contact returns 503 when Resend is not configured."""
    response = client.post(
        "/api/contact",
        json={
            "name": "Prospect",
            "email": "prospect@company.com",
            "message": "I'd like to discuss a custom CRM solution for our team.",
            "phone": "08129876543",
            "company": "ACME Corp",
        },
    )
    assert response.status_code == 503
    assert "not configured" in response.json()["detail"].lower()


@pytest.mark.skip(reason="Requires mocking httpx.AsyncClient to avoid 12s Resend timeouts")
def test_contact_rate_limit(client: TestClient):
    """Rate limiting kicks in after 5 requests within 10 minutes."""
    payload = {
        "name": "Flooder",
        "email": "flood@test.com",
        "message": "Repeated contact form submission test message.",
        "phone": "08111111111",
    }
    for _ in range(5):
        response = client.post("/api/contact", json=payload)
        assert response.status_code in (200, 503)

    response = client.post("/api/contact", json=payload)
    assert response.status_code == 429
