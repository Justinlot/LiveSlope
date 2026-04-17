CREATE TABLE IF NOT EXISTS "user" (
    id SERIAL PRIMARY KEY,
    username VARCHAR(255) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS "slope" (
    id SERIAL PRIMARY KEY,
    osm_id BIGINT UNIQUE,
    name VARCHAR(255) NOT NULL,
    difficulty VARCHAR(50),
    latitude DOUBLE PRECISION,
    longitude DOUBLE PRECISION
);

ALTER TABLE "slope"
ADD COLUMN IF NOT EXISTS osm_id BIGINT;

CREATE UNIQUE INDEX IF NOT EXISTS slope_osm_id_unique_idx ON "slope" (osm_id);

CREATE TABLE IF NOT EXISTS "favorite" (
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL,
    slope_id INTEGER NOT NULL,
    FOREIGN KEY (user_id) REFERENCES "user"(id) ON DELETE CASCADE,
    FOREIGN KEY (slope_id) REFERENCES "slope"(id) ON DELETE CASCADE
);