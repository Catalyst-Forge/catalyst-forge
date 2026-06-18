import sys
from pathlib import Path

# Remove hermes-agent injected paths that shadow the project venv
sys.path = [
    p for p in sys.path
    if "hermes-agent" not in p
]

# Ensure project venv site-packages take priority
_VENV_SITE = Path(__file__).resolve().parent.parent / "venv" / "Lib" / "site-packages"
if _VENV_SITE.exists():
    sys.path.insert(0, str(_VENV_SITE))

import pytest
from fastapi.testclient import TestClient
from main import app


@pytest.fixture
def client():
    """Synchronous TestClient for the FastAPI app."""
    with TestClient(app, base_url="http://test") as c:
        yield c
