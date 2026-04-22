# LiveSlope

LiveSlope is a full-stack ski area web app with three main parts:

- a FastAPI backend with authentication and favorites
- a React + Vite frontend with interactive map UI
- a Python importer that fetches ski slope data from OpenStreetMap (Overpass)

Visit at https://liveslope.onrender.com

## Repository Structure

```text
.
├── backend/                FastAPI API service
├── LiveSlope-frontend/     React + Vite web client
├── ski-area-importer/      Data import job for slopes
├── db/
│   └── init_db.sql         PostgreSQL schema bootstrap
└── test.rest               HTTP request collection for local testing
```

## Tech Stack

- Backend: FastAPI, SQLAlchemy, PostgreSQL
- Frontend: React 19, Vite, React Router, Leaflet, React Hook Form, Zod
- Importer: Python, SQLAlchemy, requests, Overpass API
- Containers: Docker

## Prerequisites

- Docker (for containerized setup)
- or local tooling:
	- Python 3.12+
	- Node.js 20+
	- PostgreSQL

## Database Setup

Create the schema by running [db/init_db.sql](db/init_db.sql) against your PostgreSQL database.

Required tables:

- user
- slope
- favorite

## Environment Variables

Backend and importer use:

- `DATABASE_URL` (PostgreSQL connection string)

Backend also uses:

- `FRONTEND_URL` (CORS allowed origin, e.g. `http://localhost:5173`)

## Run Locally (without Docker)

### 1. Backend

```bash
cd backend
pip install -r requirements.txt
export DATABASE_URL="postgresql+psycopg2://USER:PASSWORD@HOST:5432/DBNAME"
export FRONTEND_URL="http://localhost:5173"
uvicorn main:app --host 0.0.0.0 --port 8000 --reload
```

Backend is available at `http://localhost:8000`.

### 2. Frontend

```bash
cd LiveSlope-frontend
npm install
npm run dev
```

Frontend is available at `http://localhost:5173`.

### 3. Importer (optional)

The importer fetches ski data and then sleeps until 03:00 before the next run.

```bash
cd ski-area-importer
pip install -r requirements.txt
export DATABASE_URL="postgresql+psycopg2://USER:PASSWORD@HOST:5432/DBNAME"
python importer.py
```

## Run with Docker

### Backend

```bash
cd backend
docker build -t liveslope-backend .
docker run --rm -p 8000:8000 \
	-e DATABASE_URL="postgresql+psycopg2://USER:PASSWORD@HOST:5432/DBNAME" \
	-e FRONTEND_URL="http://localhost:8080" \
	liveslope-backend
```

### Frontend

```bash
cd LiveSlope-frontend
docker build -t liveslope-frontend .
docker run --rm -p 8080:80 liveslope-frontend
```

### Importer

```bash
cd ski-area-importer
docker build -t liveslope-importer .
docker run --rm \
	-e DATABASE_URL="postgresql+psycopg2://USER:PASSWORD@HOST:5432/DBNAME" \
	liveslope-importer
```

## API Overview

Base URL: `http://localhost:8000`

Auth:

- `POST /auth/register`
- `POST /auth/login`
- `POST /auth/logout`
- `GET /auth/me`

User:

- `PUT /user/password`
- `DELETE /user/`

Slopes:

- `GET /slopes?min_lat=...&max_lat=...&min_lon=...&max_lon=...`

Favorites:

- `GET /favorites/`
- `POST /favorites/{slope_id}`
- `DELETE /favorites/{slope_id}`

Health / diagnostics:

- `GET /`
- `GET /db`

See [test.rest](test.rest) for ready-to-run local API requests.

## Notes

- Session-based authentication is enabled via server-side sessions.
- Current frontend API base is configured as `/api/` in [LiveSlope-frontend/src/functions/api-base-url.js](LiveSlope-frontend/src/functions/api-base-url.js).
- Importer currently targets a fixed region (Alps range window) and deduplicates results by OSM object id.