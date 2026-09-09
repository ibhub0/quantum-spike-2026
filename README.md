# Quantum Spike 2026 — Conference Website

A polished, responsive Next.js website for **Quantum Spike 2026**, the National Conference on Contemporary Physics, Optics & Emerging Technologies at Bankura Sammilani College.

## Stack

- Next.js 15 + React 19
- TypeScript
- CSS (no UI framework required)
- Lucide icons
- Vercel-ready

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Deploy to Vercel

1. Push this folder to GitHub/GitLab/Bitbucket.
2. Import the repository into Vercel.
3. Keep the default Next.js build settings.
4. Deploy.

No environment variables are required for the current static version.

## Before launch: update these items

All event facts live in `lib/site.ts` so the committee can update them in one place.

Recommended final updates:

- Replace `registrationUrl` with the actual registration form URL.
- Add the final abstract submission URL / Google Form when available.
- Publish the approved programme and session timings.
- Add speaker headshots and biographies if the organizing team wants them.
- Add payment instructions / UPI / bank details when approved.
- Confirm final committee spellings and institutional affiliations against the official circular.

The supplied conference poster is included as `public/conference-poster.jpg` and is available through the “View brochure” button.

## Design direction

The visual system intentionally moves away from the current Google Sites look toward a modern academic-conference identity: dark scientific hero, quantum-orbit motif, restrained blue/cyan accent, generous typography, structured content cards, responsive mobile navigation, and clear registration CTAs.
