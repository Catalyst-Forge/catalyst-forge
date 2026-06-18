import pytest
from fastapi.testclient import TestClient


def test_health_check(client: TestClient):
    """Health endpoint returns 200 with status info."""
    response = client.get("/health")
    assert response.status_code == 200
    data = response.json()
    assert data["status"] == "ok"
    assert "Catalyst" in data["service"]
