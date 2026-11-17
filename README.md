# AutoScan Intelligence — Front-end Prototype

Frontend prototype for an internal, multibrand automotive diagnostic workflow.

## Stack
- React + TypeScript + Vite
- React Router
- Tailwind CSS
- Lucide React

## Requirements
- Node.js 18+

## Run locally
```bash
npm install
npm run dev
```

## Production build
```bash
npm run build
npm run preview
```

## Current modules
- Dashboard and collapsible navigation
- PT-BR / EN language switch
- Vehicle registration and local list
- New diagnostic session workflow
- Demonstration OBD-II scanner interface
- Demonstration diagnostic analysis and technical checklist
- DTC reference library (illustrative data)
- Local diagnostic session history
- Technical report with browser print / Save as PDF
- Settings page

## Important limitations
This is a **frontend-only prototype**. Scanner values, vehicle ECU modules, DTC readings and diagnostic hypotheses shown in the UI are mock/demo data. It does not connect to a physical OBD-II adapter or vehicle ECU. No backend, database persistence, authentication, or real AI diagnostic engine is included. Local records are held in browser memory and reset when the app reloads.

Before operational use, the diagnostic definitions and repair procedures must be reviewed against current manufacturer documentation and appropriate technical references. A code or automated hypothesis is not a confirmed diagnosis.

## Collaboration
Use feature branches and pull requests for team changes. Keep `.env` files, credentials, customer data and secrets out of this repository.
