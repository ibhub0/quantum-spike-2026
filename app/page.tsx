"use client";

import { useState } from "react";
import {
  ArrowRight,
  CalendarDays,
  Check,
  ChevronDown,
  Download,
  ExternalLink,
  Mail,
  MapPin,
  Menu,
  Microscope,
  Orbit,
  Sparkles,
  X,
} from "lucide-react";
import { site } from "@/lib/site";

const nav = [
  ["About", "about"],
  ["Themes", "themes"],
  ["Speakers", "speakers"],
  ["Programme", "programme"],
  ["Committee", "committee"],
  ["Registration", "registration"],
  ["Contact", "contact"],
];

function SectionTitle({ eyebrow, title, text }: { eyebrow: string; title: string; text?: string }) {
  return (
    <div className="section-head">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
}

export default function Home() {
  const [open, setOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  return (
    <main>
      <a className="skip-link" href="#about">Skip to content</a>
      <div className="announcement">
        <span><Sparkles size={15} /> National Conference • 08–09 October 2026</span>
        <a href="#registration">Registration deadline · 05 October <ArrowRight size={14} /></a>
      </div>

      <nav className="nav-wrap">
        <div className="nav-inner">
          <a className="brand" href="#top" aria-label="Quantum Spike home">
            <span className="brand-mark"><Orbit size={24} /></span>
            <span><strong>QUANTUM</strong><em>SPIKE</em><small>2026 · BSC</small></span>
          </a>
          <div id="main-navigation" className={`nav-links ${open ? "is-open" : ""}`}>
            {nav.map(([label, id]) => <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>{label}</a>)}
            <a className="nav-cta" href="#registration" onClick={() => setOpen(false)}>Register <ArrowRight size={15} /></a>
          </div>
          <button className="menu-btn" onClick={() => setOpen(!open)} aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open} aria-controls="main-navigation">
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      <section className="hero" id="top">
        <div className="hero-grid" />
        <div className="hero-glow hero-glow-a" /><div className="hero-glow hero-glow-b" />
        <div className="container hero-content">
          <div className="hero-copy">
            <div className="kicker"><span /> EXPLORING THE SCIENCE OF WHAT’S NEXT</div>
            <div className="edition-label">NATIONAL CONFERENCE <span>08—09 OCT / 2026</span></div>
            <h1>Quantum<span>Spike<span className="title-star">✳</span></span></h1>
            <p className="hero-sub">National Conference on Contemporary Physics, Optics &amp; Emerging Technologies</p>
            <p className="hero-intro">A two-day meeting of students, researchers, faculty and scientists exploring the ideas, instruments and technologies shaping the next era of physics.</p>
            <div className="hero-actions">
              <a className="button primary" href="#registration">Register for the conference <ArrowRight size={18} /></a>
              <a className="button ghost" href={site.brochure} target="_blank" rel="noreferrer"><Download size={17} /> View brochure</a>
            </div>
            <div className="hero-meta">
              <span><CalendarDays size={18} /> 08–09 October 2026</span>
              <span><MapPin size={18} /> Bankura Sammilani College, West Bengal</span>
            </div>
          </div>
          <div className="quantum-art" aria-hidden="true">
            <div className="art-topline"><span>FIG. 01 / QUANTUM FIELD</span><span>ψ (x, t)</span></div>
            <svg viewBox="0 0 520 520" className="field-art">
              <defs>
                <radialGradient id="fieldGlow"><stop stopColor="#d8ff78" stopOpacity=".2"/><stop offset="1" stopColor="#d8ff78" stopOpacity="0"/></radialGradient>
                <linearGradient id="fieldLine" x2="1" y2="1"><stop stopColor="#d8ff78"/><stop offset=".5" stopColor="#76918c"/><stop offset="1" stopColor="#d8ff78" stopOpacity=".15"/></linearGradient>
              </defs>
              <circle cx="260" cy="260" r="240" fill="url(#fieldGlow)"/>
              <g className="field-rotate">
                {Array.from({length: 24}, (_, i) => <ellipse key={i} cx="260" cy="260" rx="203" ry="79" transform={`rotate(${i * 7.5} 260 260)`} fill="none" stroke="url(#fieldLine)" strokeWidth=".8" />)}
              </g>
              <circle cx="260" cy="260" r="228" fill="none" stroke="#728477" strokeOpacity=".3" strokeDasharray="2 9"/>
              <path d="M260 12v42M260 466v42M12 260h42M466 260h42" stroke="#d8ff78" strokeOpacity=".55"/>
              <circle cx="260" cy="260" r="6" fill="#d8ff78"/>
              <circle cx="439" cy="164" r="5" fill="#d8ff78"/>
            </svg>
            <div className="art-bottomline"><span>SUPERPOSITION. CONNECTION. POSSIBILITY.</span><span>01 — ∞</span></div>
          </div>
        </div>
      </section>

      <section className="stats-strip">
        <div className="container stats">
          <div><strong>02</strong><span>Conference days</span></div>
          <div><strong>{String(site.topics.length).padStart(2, "0")}</strong><span>Research themes</span></div>
          <div><strong>{String(site.people.resourcePersons.length).padStart(2, "0")}</strong><span>Resource persons</span></div>
          <div><strong>₹300</strong><span>Student registration</span></div>
        </div>
      </section>

      <section className="section" id="about">
        <div className="container two-col">
          <SectionTitle eyebrow="01 · The conference" title="Where fundamental physics meets tomorrow." text="Quantum Spike 2026 is designed as an open, interdisciplinary platform for exchanging ideas across quantum science, optics, condensed matter and emerging technologies." />
          <div className="about-card">
            <div className="card-icon"><Microscope /></div>
            <p>The conference aligns with the vision of India’s National Quantum Mission by connecting young minds with contemporary research and practical insights. It aims to inspire higher studies, strengthen scientific outlook and build a motivated community around India’s growing quantum ecosystem.</p>
            <div className="mini-rule" />
            <span className="small-label">HOST INSTITUTION</span>
            <strong>Department of Physics<br />Bankura Sammilani College</strong>
          </div>
        </div>
      </section>

      <section className="section dark-section" id="themes">
        <div className="container">
          <SectionTitle eyebrow="02 · Research themes" title="Ten directions. One scientific conversation." text="The programme spans established frontiers and emerging technologies, welcoming interdisciplinary perspectives." />
          <div className="topic-grid">
            {site.topics.map((topic, i) => <div className="topic" key={topic}><span>{String(i + 1).padStart(2, "0")}</span><strong>{topic}</strong><ArrowRight size={17} /></div>)}
          </div>
        </div>
      </section>

      <section className="section" id="speakers">
        <div className="container">
          <SectionTitle eyebrow="03 · Resource persons" title="Learn from researchers across India." text="The conference brings together eminent scientists, researchers and educators from leading institutions." />
          <div className="people-grid">
            {site.people.resourcePersons.map((person, i) => {
              const [name, inst] = person.split(" — ");
              return <article className="person-card" key={person}><div className="person-num">{String(i + 1).padStart(2, "0")}</div><h3>{name}</h3><p>{inst}</p></article>;
            })}
          </div>
        </div>
      </section>

      <section className="section soft-section" id="programme">
        <div className="container two-col programme-layout">
          <SectionTitle eyebrow="04 · Programme" title="Two days built around exchange." text="Explore the two-day programme outline. Session timings and presentation slots are awaiting approval from the organizing committee." />
          <div className="timeline">
            <div className="timeline-item"><span>DAY 01</span><div><h3>08 October 2026</h3><p>Inauguration · Keynote sessions · Invited talks · Technical discussions</p></div></div>
            <div className="timeline-item"><span>DAY 02</span><div><h3>09 October 2026</h3><p>Invited talks · Research presentations · Interactive sessions · Valedictory</p></div></div>
            <div className="timeline-note"><Check size={17} /> Provisional outline · final schedule to follow.</div><a className="calendar-link" href="/quantum-spike-2026.ics" download><CalendarDays size={17} /> Save the conference dates <ArrowRight size={16} /></a>
          </div>
        </div>
      </section>

      <section className="section" id="committee">
        <div className="container">
          <SectionTitle eyebrow="05 · Leadership & committee" title="The people behind Quantum Spike." />
          <div className="leadership-grid">
            {[site.people.patron, site.people.chairperson, site.people.convenor].map((p, i) => <article className={`leader-card ${i === 2 ? "featured" : ""}`} key={p.name}><span>{["Patron", "Chairperson", "Convenor"][i]}</span><h3>{p.name}</h3><p>{p.role}</p></article>)}
          </div>
          <div className="committee-list"><div className="committee-title">Organizing committee</div>{site.people.organizing.map(p => <div className="committee-row" key={p.name}><strong>{p.name}</strong><span>{p.role}</span></div>)}</div>
        </div>
      </section>

      <section className="registration-section" id="registration">
        <div className="container registration-grid">
          <div><span className="eyebrow">06 · Registration</span><h2>Join the conversation.</h2><p>Registration window: <strong>{site.registrationOpen}</strong> to <strong>{site.registrationClose}</strong>. Choose the category that applies to you.</p><a className="button light" href={`mailto:${site.email}?subject=Quantum Spike 2026 Registration enquiry`}>Register / enquire by email <ArrowRight size={17} /></a></div>
          <div className="fee-card">{site.fees.map(f => <div className="fee-row" key={f.label}><span>{f.label}</span><strong>{f.amount}</strong></div>)}<div className="fee-note">Contact the organizing team for registration availability, payment instructions and confirmation.</div></div>
        </div>
      </section>

      <section className="section faq-section">
        <div className="container two-col">
          <SectionTitle eyebrow="07 · Practical information" title="Everything you need before you arrive." />
          <div className="faq-list">
            {["Who can attend?", "What are the registration dates?", "Where is the conference held?", "How will final programme and submission details be shared?"] .map((q, i) => <div className="faq" key={q}><button id={`faq-question-${i}`} aria-expanded={activeFaq === i} aria-controls={`faq-answer-${i}`} onClick={() => setActiveFaq(activeFaq === i ? null : i)}><span>{q}</span><ChevronDown size={18} className={activeFaq === i ? "rotate" : ""} /></button>{<p id={`faq-answer-${i}`} role="region" aria-labelledby={`faq-question-${i}`} hidden={activeFaq !== i}>{["Students, PhD/research scholars, faculty members, early-career researchers and scientists interested in the conference themes are welcome.", `Registration opens ${site.registrationOpen} and closes ${site.registrationClose}.`, "The event will be hosted by the Department of Physics, Bankura Sammilani College, Bankura, West Bengal.", "Approved programme and submission details will be shared on this page when available. Contact the organizing committee for the latest information."][i]}</p>}</div>)}
          </div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="container contact-grid">
          <div><span className="eyebrow">08 · Contact</span><h2>Questions? Let’s connect.</h2><p>For registration, participation, programme or institutional enquiries, contact the organizing team.</p></div>
          <div className="contact-card"><a href={`mailto:${site.email}`}><Mail size={19} /><span>{site.email}</span></a><div><MapPin size={19} /><span>Department of Physics<br />Bankura Sammilani College<br />Bankura, West Bengal, India</span></div></div>
        </div>
      </section>

      <footer><div className="container footer-inner"><div className="brand footer-brand"><span className="brand-mark"><Orbit size={21} /></span><span><strong>QUANTUM</strong><em>SPIKE</em><small>2026 · BSC</small></span></div><p>National Conference on Contemporary Physics, Optics &amp; Emerging Technologies</p><div className="footer-links"><a href={site.officialSite} target="_blank" rel="noreferrer">Official conference site <ExternalLink size={13} /></a><a href="#top">Back to top ↑</a></div></div></footer>
    </main>
  );
}
