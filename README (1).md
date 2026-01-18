# STYLETEXT Quickstart

## Prerequisites
- Python 3.9+ (venv already set up at `.venv/`)
- MongoDB running at `mongodb://localhost:27017` (DB name: `test_database`)

## Backend (FastAPI)
1) Install deps (already installed, re-run if needed):
	```bash
	cd backend
	../.venv/bin/pip install -r requirements.txt
	```
2) Run the API:
	```bash
	cd backend
	../.venv/bin/python -m uvicorn server:app --reload
	```
3) Endpoints (default CORS `*`):
	- GET http://127.0.0.1:8000/api/
	- POST http://127.0.0.1:8000/api/status  body: {"client_name":"demo"}
	- GET http://127.0.0.1:8000/api/status

Env file used: `backend/.env`
```
MONGO_URL="mongodb://localhost:27017"
DB_NAME="test_database"
CORS_ORIGINS="*"
```

## Frontend (built bundle)
- Existing static build lives in `frontend/build`.
- Serve locally:
  ```bash
  cd frontend
  python -m http.server 3000 --directory build
  ```
- Open http://localhost:3000

## Common Tasks
- Stop servers: CTRL+C in the terminal running uvicorn or http.server.
- Logs: check the terminal where each server was started.
