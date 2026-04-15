# LiveSlope Frontend

Frontend for the LiveSlope application. The app is built with React and Vite and provides an interactive ski-area map together with login and registration pages.

## Overview

This frontend represents the user interface for LiveSlope. The current version includes:

- a home page with a Leaflet map
- markers for ski areas from local sample data
- a side panel with ski areas inside the current map bounds
- login and registration pages with form validation
- simple utility links for About, Imprint, and Privacy

Note: Authentication is currently implemented as a placeholder. Ski areas are also loaded from local sample data instead of an external API.

## Technologies

- React 19
- Vite
- React Router
- Leaflet
- React Hook Form
- Zod

## Project Structure

```text
src/
	App.jsx                Routing and app wrapper
	components/            Reusable UI components
	functions/             Helper functions for data logic
	pages/                 Pages such as home, login, and register
	styles/                CSS files for the different sections
	assets/                Contexts and sample data
	zod-schemes/           Validation schemas
```

## Running Locally

Make sure Node.js and npm are installed.

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

### Build for production

```bash
npm run build
```

### Preview the production build

```bash
npm run preview
```

### Run linting

```bash
npm run lint
```

## Key Screens

- Home page: map with automatically filtered ski areas in the visible region
- Login: sign-in form with required fields
- Register: form with Zod validation and password confirmation

## Current Development State

- Authentication methods are still placeholders and currently only log to the console.
- Map markers are based on local ski-area data.
- The map uses OpenStreetMap tiles via Leaflet.

