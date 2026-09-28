"use client";

import { useState, useEffect, useRef } from "react";
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
  Copy,
  Building,
  Plane,
  Train,
  Bus,
  Users,
  Award,
  BookOpen,
  Calendar,
  CreditCard,
  QrCode,
  FileText,
  Clock,
  Send,
  UserCheck,
  GraduationCap,
  Briefcase,
} from "lucide-react";

import { site, Speaker } from "@/lib/site";
import QuantumCanvas from "@/components/QuantumCanvas";
import CountdownTimer from "@/components/CountdownTimer";
import BrochureModal from "@/components/BrochureModal";
import SpeakerModal from "@/components/SpeakerModal";
import AbstractPortal from "@/components/AbstractPortal";

interface NavSubItem {
  label?: string;
  href?: string;
  desc?: string;
  badge?: string;
  isModal?: boolean;
  tab?: "core" | "advisory" | "organizing" | "volunteers";
}

interface NavCategory {
  title: string;
  href?: string;
  items?: NavSubItem[];
  isMegaCommittees?: boolean;
}

const navCategories: NavCategory[] = [
  {
    title: "About",
    href: "#about",
  },
  {
    title: "Programme",
    items: [
      { label: "Research Themes", href: "#themes", desc: "10 Frontier physics focus tracks" },
      { label: "Distinguished Speakers", href: "#speakers", desc: "Invited national & international physicists" },
      { label: "Detailed Schedule", href: "#schedule", desc: "Two-day academic agenda & timings" },
    ],
  },
  {
    title: "Committees",
    isMegaCommittees: true,
    items: [
      { label: "Core Leadership", href: "#committees", tab: "core", desc: "Patron, Chairperson & Convenor" },
      { label: "Advisory Committee", href: "#committees", tab: "advisory", desc: "Distinguished national physicists" },
      { label: "Organizing Committee", href: "#committees", tab: "organizing", desc: "Department of Physics faculty" },
      { label: "Student Volunteers", href: "#committees", tab: "volunteers", desc: "Dedicated student organizing team", badge: "Student Team" },
    ],
  },
  {
    title: "Registration & Papers",
    items: [
      { label: "Delegate Registration Fees", href: "#registration", desc: "Students ₹300, Scholars ₹500, Faculty ₹1000" },
      { label: "Bank & UPI Details", href: "#registration", desc: "NEFT/RTGS & scan-to-pay UPI QR" },
      { label: "Abstract Submission Portal", href: "#portal", desc: "Oral & poster paper submission" },
      { label: "Preparation Guidelines", href: "#portal", desc: "300 words format, template & awards" },
    ],
  },
  {
    title: "Information",
    items: [
      { label: "Venue & Travel Guide", href: "#venue", desc: "Air, rail & road routes to Bankura" },
      { label: "Frequently Asked Questions", href: "#faq", desc: "Common queries & assistance" },
      { label: "Official Circular Brochure", isModal: true, desc: "Fullscreen circular poster & PDF" },
      { label: "Contact Organizing Team", href: "#contact", desc: "Physics department & helpdesk" },
    ],
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [brochureOpen, setBrochureOpen] = useState(false);
  const [selectedSpeaker, setSelectedSpeaker] = useState<Speaker | null>(null);
  const [activeCommitteeTab, setActiveCommitteeTab] = useState<"core" | "advisory" | "organizing" | "volunteers">("core");
  const [activeDay, setActiveDay] = useState<"day1" | "day2">("day1");
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  // Close timer ref for bulletproof hover without flickering/closing on cursor movement
  const closeTimerRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (title: string) => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
    setOpenDropdown(title);
  };

  const handleMouseLeave = () => {
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    closeTimerRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 240); // 240ms grace period so moving cursor across gap never closes dropdown
  };

  const handleTriggerClick = (title: string) => {
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    setOpenDropdown((prev) => (prev === title ? null : title));
  };

  // Close dropdown on outside click
  useEffect(() => {
    const handleDocumentClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest(".nav-wrap")) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("click", handleDocumentClick);
    return () => {
      document.removeEventListener("click", handleDocumentClick);
      if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    };
  }, []);

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2500);
  };

  const handleNavClick = (subItem: NavSubItem) => {
    if (subItem.isModal) {
      setBrochureOpen(true);
    }
    if (subItem.tab) {
      setActiveCommitteeTab(subItem.tab);
    }
    setOpenDropdown(null);
    setMenuOpen(false);
  };

  return (
    <main>
      {/* ================= TOP ANNOUNCEMENT BAR ================= */}
      <div className="announcement-bar">
        <div className="container announcement-content">
          <div className="announcement-badge">
            <span className="live-pulse" />
            <span>ANRF (SERB-DST) CORE RESEARCH GRANT FUNDED • OCTOBER 08–09, 2026</span>
          </div>
          <div className="announcement-links">
            <button onClick={() => setBrochureOpen(true)} className="announcement-link">
              <Download size={13} />
              <span>Brochure Poster</span>
            </button>
            <a
              href={site.links.registrationForm}
              target="_blank"
              rel="noopener noreferrer"
              className="announcement-link highlight"
            >
              <span>Registration Form (Google Form)</span>
              <ArrowRight size={13} />
            </a>
          </div>
        </div>
      </div>

      {/* ================= NAVIGATION ================= */}
      <nav className="nav-wrap">
        <div className="container nav-inner">
          <a className="brand" href="#top" aria-label="Quantum Spike 2026 Home">
            <div className="brand-mark">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={site.logo} alt="Quantum Spike 2026 Official Logo" className="brand-logo-img" />
            </div>
            <div className="brand-text">
              <div className="brand-title-row">
                <span className="brand-title">
                  QUANTUM <span>SPIKE</span>
                </span>
                <span className="brand-year-tag">2026</span>
              </div>
              <span className="brand-sub">BANKURA SAMMILANI COLLEGE</span>
            </div>
          </a>

          {/* Desktop & Mobile Dropdown Navigation */}
          <div className={`nav-links ${menuOpen ? "is-open" : ""}`}>
            {navCategories.map((cat) => {
              if (!cat.items) {
                return (
                  <a
                    key={cat.title}
                    href={cat.href}
                    className="nav-link direct-link"
                    onClick={() => {
                      setOpenDropdown(null);
                      setMenuOpen(false);
                    }}
                  >
                    {cat.title}
                  </a>
                );
              }

              const isOpen = openDropdown === cat.title;

              return (
                <div
                  className="nav-dropdown-wrapper"
                  key={cat.title}
                  onMouseEnter={() => handleMouseEnter(cat.title)}
                  onMouseLeave={handleMouseLeave}
                >
                  <button
                    className={`nav-link dropdown-trigger ${isOpen ? "is-active" : ""}`}
                    onClick={() => handleTriggerClick(cat.title)}
                    aria-expanded={isOpen}
                  >
                    <span>{cat.title}</span>
                    <ChevronDown size={14} className={`dropdown-icon ${isOpen ? "rotate" : ""}`} />
                  </button>

                  {/* Committees Mega Menu (3 Side-by-Side Columns: Core Left | Advisory & Organizing Middle | Volunteers Right) */}
                  {cat.isMegaCommittees && isOpen && (
                    <div
                      className="nav-dropdown-menu mega-menu-committees"
                      onMouseEnter={() => handleMouseEnter(cat.title)}
                      onMouseLeave={handleMouseLeave}
                    >
                      <div className="mega-menu-header">
                        <div className="mega-header-title">
                          <Users size={16} className="text-cyan-400" />
                          <span>CONFERENCE COMMITTEES &amp; LEADERSHIP</span>
                        </div>
                        <span className="mega-header-sub">Department of Physics • Bankura Sammilani College</span>
                      </div>

                      <div className="mega-menu-grid">
                        {/* Column 1: Core Leadership (Left) */}
                        <div className="mega-col mega-col-left">
                          <div className="mega-col-heading">
                            <span className="col-badge badge-cyan">CORE LEADERSHIP</span>
                            <h4>Patron, Chair &amp; Convenor</h4>
                          </div>

                          <div className="mega-core-list">
                            {site.people.core.map((p) => (
                              <div
                                key={p.name}
                                className="mega-leader-item"
                                onClick={() => handleNavClick({ href: "#committees", tab: "core" })}
                                role="button"
                                tabIndex={0}
                              >
                                <span className="leader-role-tag">{p.designation}</span>
                                <strong>{p.name}</strong>
                                <span className="leader-desc">{p.role}</span>
                              </div>
                            ))}
                          </div>

                          <a
                            href="#committees"
                            className="mega-view-btn"
                            onClick={() => handleNavClick({ href: "#committees", tab: "core" })}
                          >
                            <span>Explore Core Leadership</span>
                            <ArrowRight size={13} />
                          </a>
                        </div>

                        {/* Column 2: Advisory (Top) & Organizing (Bottom) (Middle) */}
                        <div className="mega-col mega-col-mid">
                          {/* Top: Advisory Committee */}
                          <div className="mega-subgroup">
                            <div className="mega-col-heading">
                              <span className="col-badge badge-blue">ADVISORY BOARD</span>
                              <h4>Advisory Committee ({site.people.advisory.length})</h4>
                            </div>
                            <p className="mega-desc-text">
                              Distinguished physicists and academicians guiding the conference:
                            </p>
                            <div className="mega-names-snippet">
                              <span>Prof. Prasanta K. Panigrahi (SOA)</span>
                              <span>Prof. Krishnendu Sengupta (IACS)</span>
                              <span>Prof. Utpal Roy (IIT Patna) &amp; more</span>
                            </div>
                            <a
                              href="#committees"
                              className="mega-inline-link"
                              onClick={() => handleNavClick({ href: "#committees", tab: "advisory" })}
                            >
                              <span>View All 7 Advisory Members →</span>
                            </a>
                          </div>

                          <div className="mega-inner-divider" />

                          {/* Bottom: Organizing Committee */}
                          <div className="mega-subgroup">
                            <div className="mega-col-heading">
                              <span className="col-badge badge-purple">FACULTY TEAM</span>
                              <h4>Organizing Committee ({site.people.organizing.length})</h4>
                            </div>
                            <p className="mega-desc-text">
                              Faculty members, Department of Physics &amp; IQAC:
                            </p>
                            <div className="mega-names-snippet">
                              <span>Dr. Chakradhar Rajowar (HOD)</span>
                              <span>Dr. Uttam Mondal (Associate Prof)</span>
                              <span>Dr. Pradipta Chakraborty &amp; faculty</span>
                            </div>
                            <a
                              href="#committees"
                              className="mega-inline-link"
                              onClick={() => handleNavClick({ href: "#committees", tab: "organizing" })}
                            >
                              <span>View All 6 Faculty Organizers →</span>
                            </a>
                          </div>
                        </div>

                        {/* Column 3: Student Volunteers (Right) */}
                        <div className="mega-col mega-col-right">
                          <div className="mega-col-heading">
                            <span className="col-badge badge-green">STUDENT TEAM</span>
                            <h4>Student Volunteers ({site.people.volunteers.length})</h4>
                          </div>

                          <div className="mega-volunteers-list">
                            {site.people.volunteers.map((v) => (
                              <div
                                key={v.name}
                                className="mega-volunteer-item"
                                onClick={() => handleNavClick({ href: "#committees", tab: "volunteers" })}
                                role="button"
                                tabIndex={0}
                              >
                                <div className="volunteer-row-top">
                                  <strong>{v.name}</strong>
                                  <span className="v-pill">BSC Phys</span>
                                </div>
                                <span className="v-role">{v.role}</span>
                              </div>
                            ))}
                          </div>

                          <a
                            href="#committees"
                            className="mega-view-btn"
                            onClick={() => handleNavClick({ href: "#committees", tab: "volunteers" })}
                          >
                            <span>View Volunteers Profile</span>
                            <ArrowRight size={13} />
                          </a>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Standard Dropdown for other menus (Programme, Registration, Information) */}
                  {!cat.isMegaCommittees && isOpen && (
                    <div
                      className="nav-dropdown-menu"
                      onMouseEnter={() => handleMouseEnter(cat.title)}
                      onMouseLeave={handleMouseLeave}
                    >
                      <div className="nav-dropdown-header">
                        <span>{cat.title}</span>
                      </div>
                      <div className="nav-dropdown-list">
                        {cat.items.map((sub) => (
                          <a
                            key={sub.label}
                            href={sub.href || "#"}
                            className="nav-dropdown-item"
                            onClick={(e) => {
                              if (sub.isModal) e.preventDefault();
                              handleNavClick(sub);
                            }}
                          >
                            <div className="nav-dropdown-item-main">
                              <div className="nav-dropdown-item-title">
                                <strong>{sub.label}</strong>
                                {sub.badge && <span className="dropdown-badge">{sub.badge}</span>}
                              </div>
                              {sub.desc && <span className="nav-dropdown-item-desc">{sub.desc}</span>}
                            </div>
                            <ArrowRight size={13} className="nav-dropdown-arrow" />
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="nav-actions">
            <button
              onClick={() => setBrochureOpen(true)}
              className="btn-brochure-nav"
            >
              <Download size={15} />
              <span>Brochure</span>
            </button>
            <a
              href={site.links.registrationForm}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-register-nav"
            >
              <span>Register</span>
              <ArrowRight size={14} />
            </a>
          </div>

          <button
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* ================= HERO SECTION ================= */}
      <section className="hero" id="top">
        <QuantumCanvas />
        <div className="hero-radial-bg" />

        <div className="container hero-container">
          {/* Institutional Accreditation & Grant Banner */}
          <div className="hero-institutional-bar">
            <div className="inst-badge inst-left">
              <div className="inst-logo-frame">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={site.institution.logo}
                  alt="Bankura Sammilani College Emblem"
                  className="inst-emblem-img"
                />
              </div>
              <div className="inst-text">
                <span className="inst-title">{site.institution.college}</span>
                <span className="inst-sub">
                  Est. 1948 • {site.institution.accreditation} • Affiliated to Bankura University
                </span>
              </div>
            </div>

            <div className="inst-divider" />

            <div className="inst-badge inst-right">
              <div className="inst-logo-frame">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={site.funding.logo}
                  alt="ANRF SERB DST Emblem"
                  className="anrf-emblem-img"
                />
              </div>
              <div className="inst-text">
                <span className="inst-title">{site.funding.agency}</span>
                <span className="inst-sub">
                  (SERB-DST) Core Research Grant Project • Govt. of India
                </span>
              </div>
            </div>
          </div>

          <div className="hero-layout">
            <div className="hero-content">
              <div className="grant-kicker">
                <span className="grant-dot" />
                <span>ANRF (SERB-DST) • CORE RESEARCH GRANT FUNDED</span>
              </div>

              <h1 className="hero-title">
                QUANTUM <span className="quantum-title-accent">SPIKE</span>
                <sup className="hero-year">2026</sup>
              </h1>

              <p className="hero-subtitle">
                {site.subtitle}
              </p>

              <div className="theme-quote-badge">
                <Sparkles size={15} />
                <span>&ldquo;{site.themeQuote}&rdquo;</span>
              </div>

              <div className="motto-strip">
                <span>⚡ {site.motto}</span>
                <span className="motto-sep">•</span>
                <span>🌐 {site.pillars}</span>
              </div>

              <p className="hero-host">
                Organized by <strong>{site.institution.department}</strong>, in collaboration with{" "}
                <strong>{site.institution.iqac}</strong>, {site.institution.college} (
                {site.institution.accreditation}).
              </p>

              <div className="hero-actions">
                <a
                  href={site.links.registrationForm}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary-glow"
                >
                  <span>Register for Conference</span>
                  <ArrowRight size={17} />
                </a>

                <button
                  onClick={() => setBrochureOpen(true)}
                  className="btn-glass"
                >
                  <Download size={17} />
                  <span>Conference Circular</span>
                </button>

                <a href="#portal" className="btn-glass">
                  <FileText size={17} />
                  <span>Call for Abstracts</span>
                </a>
              </div>

              <div className="hero-meta-strip">
                <div className="meta-item">
                  <CalendarDays size={16} />
                  <span>{site.dates}</span>
                </div>
                <div className="meta-item">
                  <MapPin size={16} />
                  <span>{site.institution.college}, West Bengal</span>
                </div>
                <div className="meta-item">
                  <Mail size={16} />
                  <a href={`mailto:${site.email}`}>{site.email}</a>
                </div>
              </div>
            </div>

            {/* Right Visual: Official Crest Pedestal & Instrumentation Countdown */}
            <div className="hero-visual">
              <div className="hero-emblem-card">
                <div className="emblem-pedestal">
                  <div className="emblem-glow-ring" />
                  <div className="emblem-frame">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={site.logo}
                      alt="Quantum Spike 2026 Official Logo"
                      className="emblem-img"
                    />
                  </div>
                </div>
                <div className="emblem-meta">
                  <span className="emblem-meta-title">QUANTUM SPIKE 2026</span>
                  <span className="emblem-meta-sub">Department of Physics • Bankura Sammilani College</span>
                </div>
              </div>

              <div className="quantum-core-card">
                <CountdownTimer />

                <div className="hero-card-links">
                  <a
                    href={site.links.registrationForm}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="quick-link-pill"
                  >
                    <Send size={14} />
                    <span>Google Form</span>
                  </a>
                  <a href="#registration" className="quick-link-pill">
                    <CreditCard size={14} />
                    <span>Bank &amp; UPI</span>
                  </a>
                  <a href="#schedule" className="quick-link-pill">
                    <Clock size={14} />
                    <span>Schedule</span>
                  </a>
                  <a href="#venue" className="quick-link-pill">
                    <MapPin size={14} />
                    <span>Directions</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= STATS STRIP ================= */}
      <section className="stats-strip">
        <div className="container stats-grid">
          <div className="stat-item">
            <div className="stat-icon">
              <Calendar size={22} />
            </div>
            <div className="stat-content">
              <strong>02</strong>
              <span>Days of Academic Deliberations</span>
            </div>
          </div>

          <div className="stat-item">
            <div className="stat-icon">
              <Microscope size={22} />
            </div>
            <div className="stat-content">
              <strong>10</strong>
              <span>Frontier Research Themes</span>
            </div>
          </div>

          <div className="stat-item">
            <div className="stat-icon">
              <Users size={22} />
            </div>
            <div className="stat-content">
              <strong>09+</strong>
              <span>Eminent Resource Persons</span>
            </div>
          </div>

          <div className="stat-item">
            <div className="stat-icon">
              <Award size={22} />
            </div>
            <div className="stat-content">
              <strong>₹300</strong>
              <span>Subsidized Student Registration</span>
            </div>
          </div>
        </div>
      </section>

      {/* ================= ABOUT SECTION ================= */}
      <section className="section" id="about">
        <div className="container about-grid">
          <div className="about-card">
            <span className="eyebrow">01 · About the Conference</span>
            <h2>Where Fundamental Physics Meets Tomorrow</h2>
            <p>
              The primary goal of <strong>QUANTUM SPIKE – 2026</strong> is to create a vibrant academic
              platform that brings together students, research scholars, faculty members, and researchers to
              explore recent developments and emerging directions across contemporary physics, optics, and
              emerging technologies.
            </p>
            <p>
              The event aligns with the core vision of India&apos;s <strong>National Quantum Mission</strong> by
              connecting young minds with experts working in diverse areas of modern physics through plenary
              lectures, invited talks, oral paper presentations, and interactive exhibitions.
            </p>

            <div className="about-highlights">
              <div className="about-hl-item">
                <Check size={18} />
                <span>Funded by Anusandhan National Research Foundation (ANRF / SERB-DST)</span>
              </div>
              <div className="about-hl-item">
                <Check size={18} />
                <span>Paper presentation slots &amp; publication in conference abstract volume</span>
              </div>
              <div className="about-hl-item">
                <Check size={18} />
                <span>Dedicated pickup shuttle services from Durgapur Airport (RDP) &amp; Bankura (BQA)</span>
              </div>
            </div>

            <div className="college-badge">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={site.institution.logo}
                alt="Bankura Sammilani College Logo"
                className="college-logo-img"
              />
              <div className="college-info">
                <strong>Bankura Sammilani College (Est. 1948)</strong>
                <span>NAAC Accredited B++ (CGPA 2.97) • Affiliated with Bankura University</span>
              </div>
            </div>
          </div>

          {/* Important Dates */}
          <div className="deadlines-card">
            <span className="eyebrow">Key Timeline</span>
            <h3>Important Dates</h3>
            <div className="deadline-list">
              {site.deadlines.map((d) => (
                <div
                  key={d.label}
                  className={`deadline-row ${d.highlight ? "highlight" : ""}`}
                >
                  <span className="deadline-label">{d.label}</span>
                  <span className="deadline-date">{d.date}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-6 border-t border-white/10" style={{ marginTop: "24px", paddingTop: "20px", borderTop: "1px solid rgba(255,255,255,0.08)" }}>
              <div className="flex items-center justify-between" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div>
                  <strong style={{ display: "block", color: "#fff", fontSize: "14px" }}>Registration Window</strong>
                  <span style={{ fontSize: "12px", color: "#94a3b8" }}>10 September – 05 October 2026</span>
                </div>
                <a
                  href={site.links.registrationForm}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary-glow"
                  style={{ padding: "10px 18px", fontSize: "12px" }}
                >
                  Register Now →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= RESEARCH THEMES ================= */}
      <section className="section themes-section" id="themes">
        <div className="container">
          <div className="section-head text-center">
            <span className="eyebrow">02 · Scientific Scope</span>
            <h2>Ten Research Themes. One Cohesive Dialogue.</h2>
            <p>
              The conference covers cutting-edge theoretical, experimental, and computational research spanning
              fundamental quantum physics to deployable emerging technologies.
            </p>
          </div>

          <div className="themes-grid">
            {site.topics.map((topic, idx) => (
              <div className="theme-card" key={topic}>
                <span className="theme-number">{String(idx + 1).padStart(2, "0")}</span>
                <div className="theme-content">
                  <h3>{topic}</h3>
                  <p>Frontier academic focus track &amp; presentation theme</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= RESOURCE PERSONS (SPEAKERS) ================= */}
      <section className="section" id="speakers">
        <div className="container">
          <div className="section-head text-center">
            <span className="eyebrow">03 · Eminent Speakers</span>
            <h2>Distinguished Resource Persons</h2>
            <p>
              Learn from internationally renowned physicists, senior academicians, and pioneering researchers
              from leading institutions across India and abroad.
            </p>
          </div>

          <div className="speakers-grid">
            {site.speakers.map((s) => (
              <div
                key={s.name}
                className="speaker-card"
                onClick={() => setSelectedSpeaker(s)}
                role="button"
                tabIndex={0}
              >
                <div className="speaker-avatar-wrap">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={s.image} alt={s.name} className="speaker-avatar" />
                </div>
                <h3>{s.name}</h3>
                <p className="speaker-institution">{s.institution}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PROGRAMME SCHEDULE ================= */}
      <section className="section schedule-section" id="schedule">
        <div className="container">
          <div className="section-head text-center">
            <span className="eyebrow">04 · Scientific Programme</span>
            <h2>Two-Day Detailed Schedule</h2>
            <p>
              Explore session timings, inaugural addresses, invited lectures, oral presentations, and interactive
              poster sessions.
            </p>
          </div>

          <div className="day-switch-wrap">
            <div className="day-switcher">
              <button
                className={`day-tab ${activeDay === "day1" ? "active" : ""}`}
                onClick={() => setActiveDay("day1")}
              >
                Day 1 • 08 October 2026
              </button>
              <button
                className={`day-tab ${activeDay === "day2" ? "active" : ""}`}
                onClick={() => setActiveDay("day2")}
              >
                Day 2 • 09 October 2026
              </button>
            </div>
          </div>

          <div className="timeline-card">
            <h3 className="schedule-day-title">{site.schedule[activeDay].title}</h3>
            <p className="schedule-day-sub">{site.schedule[activeDay].date}</p>

            <div className="timeline-items">
              {site.schedule[activeDay].items.map((item) => (
                <div className="timeline-item" key={item.time + item.title}>
                  <div className="timeline-time">{item.time}</div>
                  <div className="timeline-content">
                    {item.badge && <span className="timeline-badge">{item.badge}</span>}
                    <h4>{item.title}</h4>
                    <p>{item.details}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= CALL FOR ABSTRACTS & PORTAL ================= */}
      <AbstractPortal />

      {/* ================= LEADERSHIP & COMMITTEES ================= */}
      <section className="section" id="committees">
        <div className="container">
          <div className="section-head text-center">
            <span className="eyebrow">06 · Leadership &amp; Organization</span>
            <h2>The Leadership Behind Quantum Spike 2026</h2>
            <p>
              Guided by dedicated academic leadership, distinguished national advisors, and the Department of
              Physics faculty team.
            </p>
          </div>

          <div className="committee-nav-tabs">
            <button
              className={`comm-tab ${activeCommitteeTab === "core" ? "active" : ""}`}
              onClick={() => setActiveCommitteeTab("core")}
            >
              Core Leadership
            </button>
            <button
              className={`comm-tab ${activeCommitteeTab === "advisory" ? "active" : ""}`}
              onClick={() => setActiveCommitteeTab("advisory")}
            >
              Advisory Committee ({site.people.advisory.length})
            </button>
            <button
              className={`comm-tab ${activeCommitteeTab === "organizing" ? "active" : ""}`}
              onClick={() => setActiveCommitteeTab("organizing")}
            >
              Organizing Committee ({site.people.organizing.length})
            </button>
            <button
              className={`comm-tab ${activeCommitteeTab === "volunteers" ? "active" : ""}`}
              onClick={() => setActiveCommitteeTab("volunteers")}
            >
              Student Volunteers ({site.people.volunteers.length})
            </button>
          </div>

          {activeCommitteeTab === "core" && (
            <div className="core-grid">
              {site.people.core.map((p) => (
                <div className="core-card" key={p.name}>
                  {p.image ? (
                    <div className="core-avatar-wrap">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={p.image} alt={p.name} className="core-avatar" />
                    </div>
                  ) : (
                    <div className="core-avatar-wrap flex items-center justify-center bg-slate-800 text-cyan-400">
                      <Users size={32} />
                    </div>
                  )}
                  <span className="core-role">{p.designation}</span>
                  <h3>{p.name}</h3>
                  <p>{p.role}</p>
                </div>
              ))}
            </div>
          )}

          {activeCommitteeTab === "advisory" && (
            <div className="advisory-grid">
              {site.people.advisory.map((m) => (
                <div className="advisory-row" key={m.name}>
                  <Award size={20} className="text-cyan-400 flex-shrink-0" />
                  <div>
                    <h4>{m.name}</h4>
                    <p>{m.role}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeCommitteeTab === "organizing" && (
            <div className="advisory-grid">
              {site.people.organizing.map((m) => (
                <div className="advisory-row" key={m.name}>
                  <Users size={20} className="text-cyan-400 flex-shrink-0" />
                  <div>
                    <h4>{m.name}</h4>
                    <p>{m.role}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeCommitteeTab === "volunteers" && (
            <div className="volunteers-grid" id="volunteers">
              {site.people.volunteers.map((v) => (
                <div className="volunteer-card" key={v.name}>
                  <div className="volunteer-badge-icon">
                    <Sparkles size={22} />
                  </div>
                  <h3>{v.name}</h3>
                  <p className="volunteer-role">{v.role}</p>
                  <span className="volunteer-dept">Department of Physics, Bankura Sammilani College</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ================= REGISTRATION & PAYMENT HUB ================= */}
      <section className="section registration-hub" id="registration">
        <div className="container">
          <div className="section-head text-center">
            <span className="eyebrow">07 · Delegate Registration</span>
            <h2>Register for Quantum Spike 2026</h2>
            <p>
              Registration opens on <strong>10 September 2026</strong> and closes on{" "}
              <strong>05 October 2026</strong>. Select your category, complete fee payment, and submit the
              official Google Form.
            </p>
          </div>

          {/* Pricing Tiers */}
          <div className="fees-grid">
            {site.fees.map((fee) => (
              <div
                key={fee.category}
                className={`fee-card ${fee.popular ? "featured" : ""}`}
              >
                {fee.popular && <span className="popular-badge">MOST POPULAR</span>}
                <h3 className="fee-category">{fee.category}</h3>
                <p className="fee-desc">{fee.description}</p>
                <div className="fee-price">
                  {fee.amount} <span>/ delegate</span>
                </div>

                <ul className="fee-perks">
                  {fee.perks.map((perk) => (
                    <li key={perk} className="fee-perk-item">
                      <Check size={16} />
                      <span>{perk}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={site.links.registrationForm}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={fee.popular ? "btn-primary-glow text-center" : "btn-glass text-center"}
                  style={{ justifyContent: "center" }}
                >
                  <span>Register ({fee.amount})</span>
                  <ArrowRight size={15} />
                </a>
              </div>
            ))}
          </div>

          {/* Payment & UPI Card */}
          <div className="payment-details-card">
            <div className="qr-box">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={site.payment.qrImage}
                alt="Bankura Sammilani College UPI QR Code"
              />
              <span>Scan via any UPI App</span>
            </div>

            <div className="bank-info">
              <span className="eyebrow">Direct Bank Transfer / NEFT / RTGS / IMPS</span>
              <h3>Indian Bank Account Details</h3>

              <div className="bank-table">
                <div className="bank-field">
                  <div>
                    <span className="field-label">Account Name</span>
                    <span className="field-value">{site.payment.beneficiary}</span>
                  </div>
                  <button
                    onClick={() => handleCopy(site.payment.beneficiary, "name")}
                    className="btn-copy"
                    title="Copy Account Name"
                  >
                    {copiedKey === "name" ? <Check size={17} color="#00f2fe" /> : <Copy size={17} />}
                  </button>
                </div>

                <div className="bank-field">
                  <div>
                    <span className="field-label">Account Number</span>
                    <span className="field-value">{site.payment.accountNumber}</span>
                  </div>
                  <button
                    onClick={() => handleCopy(site.payment.accountNumber, "acc")}
                    className="btn-copy"
                    title="Copy Account Number"
                  >
                    {copiedKey === "acc" ? <Check size={17} color="#00f2fe" /> : <Copy size={17} />}
                  </button>
                </div>

                <div className="bank-field">
                  <div>
                    <span className="field-label">Bank &amp; Branch</span>
                    <span className="field-value">
                      {site.payment.bank} ({site.payment.branch})
                    </span>
                  </div>
                </div>

                <div className="bank-field">
                  <div>
                    <span className="field-label">IFSC Code</span>
                    <span className="field-value">{site.payment.ifsc}</span>
                  </div>
                  <button
                    onClick={() => handleCopy(site.payment.ifsc, "ifsc")}
                    className="btn-copy"
                    title="Copy IFSC Code"
                  >
                    {copiedKey === "ifsc" ? <Check size={17} color="#00f2fe" /> : <Copy size={17} />}
                  </button>
                </div>
              </div>

              <div className="payment-note">
                <QrCode size={20} className="flex-shrink-0 text-amber-400" />
                <span>
                  <strong>Important:</strong> After transferring funds or scanning QR, save your payment receipt
                  and note down the <strong>Transaction Reference ID / UTR Number</strong>. Upload it when
                  completing the Google Form registration below.
                </span>
              </div>

              <div style={{ marginTop: "24px", display: "flex", gap: "14px", flexWrap: "wrap" }}>
                <a
                  href={site.links.registrationForm}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary-glow"
                >
                  <Send size={16} />
                  <span>Open Official Google Form Registration</span>
                </a>

                <a
                  href={`mailto:${site.email}?subject=Quantum Spike 2026 Payment Enquiry`}
                  className="btn-glass"
                >
                  <Mail size={16} />
                  <span>Payment Support Desk</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= VENUE & TRAVEL GUIDE ================= */}
      <section className="section venue-section" id="venue">
        <div className="container">
          <div className="section-head text-center">
            <span className="eyebrow">08 · Travel &amp; Location</span>
            <h2>Conference Venue &amp; Travel Guide</h2>
            <p>
              Bankura Sammilani College is situated in the scenic district of Bankura, West Bengal, easily
              accessible by air, rail, and road.
            </p>
          </div>

          <div className="venue-grid">
            <div className="venue-card">
              <div className="venue-image-wrap">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={site.institution.campusImage}
                  alt="Bankura Sammilani College Campus"
                  className="venue-image"
                />
                <span className="venue-overlay-badge">Est. September 01, 1948</span>
              </div>

              <div className="venue-details">
                <h3>{site.institution.college}</h3>
                <p>
                  A premier educational landmark founded by the Bankura Sammilani Registered Society, situated
                  in the heart of Bankura town between the sacred rivers Dwarakeshwar and Gandheswari.
                </p>

                <div className="map-embed-container">
                  <iframe
                    src={site.institution.mapEmbedUrl}
                    title="Bankura Sammilani College Location"
                    loading="lazy"
                    allowFullScreen
                  />
                </div>

                <div style={{ marginTop: "16px" }}>
                  <a
                    href={site.institution.mapDirectLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-glass"
                    style={{ width: "100%", justifyContent: "center" }}
                  >
                    <MapPin size={16} />
                    <span>Open in Google Maps App</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Travel Guides */}
            <div className="travel-guides">
              {site.travel.map((item) => (
                <div className="travel-card" key={item.mode}>
                  <div className="travel-icon">
                    {item.mode === "By Plane" ? (
                      <Plane size={22} />
                    ) : item.mode === "By Train" ? (
                      <Train size={22} />
                    ) : (
                      <Bus size={22} />
                    )}
                  </div>
                  <div className="travel-info">
                    <h4>{item.title}</h4>
                    <span className="travel-tag">{item.tag}</span>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= FAQ SECTION ================= */}
      <section className="section" id="faq">
        <div className="container">
          <div className="section-head text-center">
            <span className="eyebrow">09 · Frequently Asked Questions</span>
            <h2>Common Queries &amp; Assistance</h2>
            <p>Everything you need to know about delegate participation, papers, and logistics.</p>
          </div>

          <div className="faq-wrap">
            {site.faqs.map((faq, idx) => (
              <div className="faq-item" key={faq.q}>
                <button
                  className="faq-button"
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  aria-expanded={activeFaq === idx}
                >
                  <span>{faq.q}</span>
                  <ChevronDown size={19} className={activeFaq === idx ? "rotate" : ""} />
                </button>
                {activeFaq === idx && <p className="faq-answer">{faq.a}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CONTACT SECTION ================= */}
      <section className="section contact-section" id="contact">
        <div className="container contact-grid">
          <div>
            <span className="eyebrow">10 · Get In Touch</span>
            <h2>Connect with the Organizing Team</h2>
            <p style={{ marginTop: "14px", color: "#94a3b8" }}>
              For technical queries regarding paper submissions, delegate registrations, accommodation requests,
              or sponsorship proposals, please reach out to our team.
            </p>

            <div style={{ marginTop: "24px", display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <a
                href={site.links.registrationForm}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary-glow"
              >
                <span>Google Form Registration</span>
                <ExternalLink size={15} />
              </a>

              <a
                href={site.links.officialSite}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-glass"
              >
                <span>Google Site Reference</span>
                <ExternalLink size={15} />
              </a>
            </div>
          </div>

          <div className="contact-card">
            <div className="contact-row">
              <Mail size={20} />
              <div>
                <strong>Official Email</strong>
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </div>
            </div>

            <div className="contact-row">
              <Building size={20} />
              <div>
                <strong>Host Institution</strong>
                <span>
                  Department of Physics, Bankura Sammilani College
                  <br />
                  Kenduadihi, Bankura, West Bengal - 722102, India
                </span>
              </div>
            </div>

            <div className="contact-row">
              <Award size={20} />
              <div>
                <strong>Grant Details</strong>
                <span>ANRF (SERB-DST) Core Research Grant Project</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer>
        <div className="container">
          <div className="footer-top">
            <div className="footer-col">
              <div className="brand" style={{ marginBottom: "14px" }}>
                <div className="brand-mark">
                  <Orbit size={22} />
                </div>
                <div className="brand-text">
                  <span className="brand-title">
                    QUANTUM <span>SPIKE</span>
                  </span>
                  <span className="brand-sub">2026 • BSC PHYS</span>
                </div>
              </div>
              <p>
                National / International Conference on Contemporary Physics, Optics and Emerging Technologies.
                Organized by the Department of Physics in collaboration with IQAC, Bankura Sammilani College.
                Funded by ANRF (SERB-DST).
              </p>
            </div>

            <div className="footer-col">
              <h4>Quick Navigation</h4>
              <ul className="footer-nav">
                <li><a href="#about">About Conference</a></li>
                <li><a href="#themes">Research Themes</a></li>
                <li><a href="#speakers">Distinguished Speakers</a></li>
                <li><a href="#schedule">Programme Schedule</a></li>
                <li><a href="#registration">Fees &amp; UPI Details</a></li>
                <li><a href="#portal">Abstract Submission</a></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>Official Resources</h4>
              <ul className="footer-nav">
                <li>
                  <button onClick={() => setBrochureOpen(true)} className="text-left">
                    Brochure Poster Lightbox
                  </button>
                </li>
                <li>
                  <a href={site.links.brochureDrive} target="_blank" rel="noopener noreferrer">
                    Google Drive Brochure PDF ↗
                  </a>
                </li>
                <li>
                  <a href={site.links.registrationForm} target="_blank" rel="noopener noreferrer">
                    Official Registration Form ↗
                  </a>
                </li>
                <li>
                  <a href={site.links.officialSite} target="_blank" rel="noopener noreferrer">
                    Google Site (Original) ↗
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <span>© 2026 Department of Physics, Bankura Sammilani College. All rights reserved.</span>
            <span style={{ color: "#00f2fe", fontWeight: 600 }}>✦ {site.creatorCredit}</span>
            <span>ANRF (SERB-DST) Core Research Grant Funded</span>
          </div>
        </div>
      </footer>

      {/* ================= FLOATING WATERMARK ================= */}
      <div className="floating-watermark" title="Official Platform Development & Maintenance">
        <span className="watermark-dot" />
        <span>{site.creatorCredit}</span>
      </div>

      {/* ================= MODALS ================= */}
      <BrochureModal isOpen={brochureOpen} onClose={() => setBrochureOpen(false)} />
      <SpeakerModal speaker={selectedSpeaker} onClose={() => setSelectedSpeaker(null)} />
    </main>
  );
}
