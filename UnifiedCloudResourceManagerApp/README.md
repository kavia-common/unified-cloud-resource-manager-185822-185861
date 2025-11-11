# Unified Cloud Resource Manager (React + Supabase)

This app provides a unified dashboard to manage AWS, Azure, and GCP resources. It uses Supabase for authentication, data, and realtime.

Quick start:
- Copy .env.example to .env and set REACT_APP_SUPABASE_URL and REACT_APP_SUPABASE_ANON_KEY
- npm install
- npm start

Routes:
- /auth/* (signin, signup, magic-link)
- /, /cloud/aws, /cloud/azure, /cloud/gcp
- /cloud/:provider/resources/:id
- /teams, /audit, /settings

Feature flags:
- Build-time env REACT_APP_FEATURE_FLAGS, can be JSON or comma-separated "k:v"
- Database table "feature_flags" with columns: (id uuid pk, key text unique, enabled boolean, description text)

Provider SDKs:
- This repo ships with mock providers only. Real SDKs must be integrated securely via serverless/edge functions. Do not embed secrets.

Testing:
- Cypress configured with cypress.config.js and example specs in cypress/e2e

Documentation placeholder:
- A complete setup, schema, and architecture guide will be provided in the next step.
