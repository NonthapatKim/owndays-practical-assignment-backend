# OWNDAYS Landing — Backend

Express + TypeScript API for branch listing and appointment booking.

## How to run

```sh
npm install
cp .env.example .env
npm run dev            # dev server (nodemon)
npm run build && npm start  # production
```

## What's done

- `GET /branch` — list all OWNDAYS branches
- `POST /booking` — create a booking (name, email, phone, branch, date)
- `GET /booking` — list all bookings

## AI assistance

Used AI to assist with the following:

- Validating correctness of logic and data handling across routes
- Generating `branches.json` with the full list of OWNDAYS branch locations
- Fixing route issues, particularly the `POST /booking` handler (field validation and response structure)

## What I'd improve with more time

- **Connection to MySQL**
- **Full CRUD**
