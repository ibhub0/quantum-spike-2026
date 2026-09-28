# QUANTUM SPIKE 2026 — Next-Level Conference Platform

Official website for **QUANTUM SPIKE - 2026**: International Conference on Contemporary Physics, Optics and Emerging Technologies, hosted by the **Department of Physics** in collaboration with **IQAC, Bankura Sammilani College** (West Bengal, India), funded by **ANRF (SERB-DST) Core Research Grant**.

- **Official Google Site Reference**: [sites.google.com/view/quantum-spike-2026/home](https://sites.google.com/view/quantum-spike-2026/home)
- **Official Google Form Registration**: [forms.gle/maMGGFNcUTv7ndWf8](https://forms.gle/maMGGFNcUTv7ndWf8)
- **Dates**: 08–09 October 2026
- **Venue**: Bankura Sammilani College, Kenduadihi, Bankura, West Bengal - 722102

---

## What's New & Upgraded (Next-Level Overhaul)

1. **Authentic Official Data & Committee Alignment**:
   - Synchronized with all data from the official Google Site:
     - **Patron**: Dr. Narugopal Mukherjee (Principal, Bankura Sammilani College)
     - **Chairperson**: Dr. Arunava Chattopadhyay (Coordinator, IQAC)
     - **Convenor**: Dr. Priyam Das (Assistant Professor, Dept. of Physics)
     - **Treasurer**: Dr. Pradipta Chakraborty (Dept. of Physics)
     - **Advisory Committee**: 7 distinguished professors from IACS, IIT Patna, Bennett University, Sidho-Kanho-Birsha University, JIIT, and National Center for Nuclear Research (Poland).
     - **Organizing Committee**: Department of Physics faculty members.
2. **Real Photos & High-Res Assets**:
   - Complete local offline asset bundle under `public/images/`:
     - Speaker headshots for all 9 eminent resource persons.
     - Core leadership portraits.
     - College campus architecture image & logo.
     - ANRF (SERB-DST) official grant badge.
     - Official Bankura Sammilani College UPI Payment QR code.
3. **Interactive Quantum Particle Canvas**:
   - Smooth HTML5 Canvas particle simulation with quantum entanglement wave lines and cursor-repulsion dynamics (`components/QuantumCanvas.tsx`).
4. **Live Conference Countdown**:
   - Real-time countdown widget ticking down to October 08, 2026 09:30 AM IST with an instant **"Add to Google Calendar"** button (`components/CountdownTimer.tsx`).
5. **Interactive Brochure Lightbox & Zoom Viewer**:
   - Fullscreen modal for the official circular brochure with Zoom In/Out, Reset, Download Image, and Google Drive PDF link (`components/BrochureModal.tsx`).
6. **Resource Persons (Speakers) Interactive Gallery**:
   - Cards with real portraits, institute badges, research topics, and a detailed profile modal on click (`components/SpeakerModal.tsx`).
7. **2-Day Programme Schedule Explorer**:
   - Interactive Day 1 (Oct 08) & Day 2 (Oct 09) tabbed switcher with detailed session breakdowns, keynote slots, lunch, and oral presentations.
8. **Registration & Banking / UPI Hub**:
   - 3-tier fee structure: Students (₹300), PhD/Scholars (₹500), Faculty (₹1000).
   - High-res UPI QR Code.
   - Indian Bank details with **1-Click Copy** buttons for Account Number, IFSC, Beneficiary, and Email with instant copied tooltips.
   - Prominent link to the official Google Form.
9. **Research Submissions & Data Collection Portal**:
   - Call for Abstracts with clear guidelines (Max 300 words, oral vs poster).
   - Downloadable resources (Abstract format template, Brochure JPG, Drive PDF).
   - Working API route (`app/api/abstract/route.ts`) for data collection and pre-registration logging.
10. **Venue, Travel & Interactive Map**:
    - College history & campus photo.
    - Air travel guide (Durgapur Airport RDP + arranged conference pick-ups).
    - Train (Bankura BQA ~3km) and road travel directions.
    - Embedded Google Map with direct navigation link.

---

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Library**: React 19 + TypeScript
- **Styling**: Vanilla CSS (`globals.css`) with glassmorphism, glowing quantum borders, and dark cosmic palette
- **Icons**: Lucide React
- **Deployment**: Vercel / Netlify / Node server ready

---

## Local Development

```bash
# Run dev server
pnpm dev
# or: npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
# Production build
pnpm build
# or: npm run build
```
