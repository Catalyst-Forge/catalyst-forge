import os
import sys
from logging.config import fileConfig

from alembic import context
from sqlalchemy import engine_from_config, pool
from sqlalchemy.orm import declarative_base

# --- Hermes PYTHONPATH guard: prevent import conflicts with hermes venv ---
_FILTER_PREFIX = os.path.join(os.environ.get("LOCALAPPDATA", ""), "hermes", "hermes-agent")
_current = os.environ.get("PYTHONPATH", "")
_filtered = os.pathsep.join(p for p in _current.split(os.pathsep) if _FILTER_PREFIX not in p)
os.environ["PYTHONPATH"] = _filtered

# Prepend backend dir so project imports resolve before anything else
_backend_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path = [p for p in sys.path if _FILTER_PREFIX not in p]
sys.path.insert(0, _backend_dir)

from core.config import settings  # noqa: E402

# this is the Alembic Config object, which provides
# access to the values within the .ini file in use.
config_obj = context.config

# Interpret the config file for Python logging.
if config_obj.config_file_name is not None:
    fileConfig(config_obj.config_file_name)

# Set sqlalchemy.url from project settings
if settings.DATABASE_URL:
    config_obj.set_main_option("sqlalchemy.url", settings.DATABASE_URL)

# Base class for model autogenerate support.
# When real SQLAlchemy models are added to backend/models/, import them here
# and set target_metadata to their shared Base.metadata.
Base = declarative_base()
target_metadata = Base.metadata

# other values from the config, defined by the needs of env.py,
# can be acquired:
# my_important_option = config.get_main_option("my_important_option")
# ... etc.


def run_migrations_offline() -> None:
    """Run migrations in 'offline' mode.

    This configures the context with just a URL
    and not an Engine, though an Engine is acceptable
    here as well.  By skipping the Engine creation
    we don't even need a DBAPI to be available.

    Calls to context.execute() here emit the given string to the
    script output.

    """
    url = config_obj.get_main_option("sqlalchemy.url")
    context.configure(
        url=url,
        target_metadata=target_metadata,
        literal_binds=True,
        dialect_opts={"paramstyle": "named"},
    )

    with context.begin_transaction():
        context.run_migrations()


def run_migrations_online() -> None:
    """Run migrations in 'online' mode.

    In this scenario we need to create an Engine
    and associate a connection with the context.

    """
    connectable = engine_from_config(
        config_obj.get_section(config_obj.config_ini_section, {}),
        prefix="sqlalchemy.",
        poolclass=pool.NullPool,
    )

    with connectable.connect() as connection:
        context.configure(
            connection=connection, target_metadata=target_metadata
        )

        with context.begin_transaction():
            context.run_migrations()


if context.is_offline_mode():
    run_migrations_offline()
else:
    run_migrations_online()
