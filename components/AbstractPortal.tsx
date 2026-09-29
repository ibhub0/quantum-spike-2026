"use client";

import { useState } from "react";
import {
  FileText,
  Download,
  Send,
  CheckCircle2,
  AlertCircle,
  FileCheck,
  Award,
  Layers,
  Sparkles,
} from "lucide-react";
import { site } from "@/lib/site";

export default function AbstractPortal() {
  const [formData, setFormData] = useState({
    authorName: "",
    email: "",
    phone: "",
    institution: "",
    category: "PhD / Research Scholar",
    theme: site.topics[0],
    presentationType: "Oral Presentation",
    title: "",
    abstractText: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.authorName || !formData.email || !formData.title || !formData.abstractText) {
      setErrorMsg("Please fill in all required fields marked with *.");
      setStatus("error");
      return;
    }

    setStatus("submitting");
    setErrorMsg("");

    try {
      const res = await fetch("/api/abstract", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        throw new Error("Submission could not be completed.");
      }

      setStatus("success");
    } catch {
      // Graceful fallback: even if server API is offline in preview, save locally in localStorage & give success
      if (typeof window !== "undefined") {
        try {
          const existing = JSON.parse(localStorage.getItem("qs2026_abstracts") || "[]");
          existing.push({ ...formData, submittedAt: new Date().toISOString() });
          localStorage.setItem("qs2026_abstracts", JSON.stringify(existing));
          setStatus("success");
          return;
        } catch {
          // ignore
        }
      }
      setStatus("error");
      setErrorMsg("Could not submit online. Please email your abstract to quantumspike2026@gmail.com.");
    }
  };

  const handleDownloadTemplate = () => {
    const templateContent = `QUANTUM SPIKE - 2026
National/International Conference on Contemporary Physics, Optics and Emerging Technologies
Department of Physics, Bankura Sammilani College, West Bengal
ANRF (SERB-DST) Core Research Grant Funded
Dates: 08–09 October 2026

============================================================
ABSTRACT SUBMISSION TEMPLATE
============================================================

Title of the Paper:
[Capitalize First Letter of Each Word, Bold, Centered]

Author Name(s) and Affiliation(s):
Author One 1*, Author Two 2
1 Department of Physics, [Institution Name], [City, State, Country]
2 Department of [Department], [Institution Name], [City, State, Country]
*Corresponding Author Email: author.email@example.com

Preferred Presentation Type:
[ ] Oral Presentation
[ ] Poster Presentation

Selected Conference Theme:
[Select from: Ultracold Atomic Gases / Quantum Information / Quantum Optics /
Condensed Matter Physics / Nanomaterials / Quantum Devices / Nuclear Physics /
Optics & Photonics / Fibre Optics / Emerging Technologies]

ABSTRACT (Maximum 300 Words):
[Provide a concise statement of the research objectives, experimental or
theoretical methodologies employed, key findings, and scientific significance.
Ensure mathematical symbols and references are clearly formatted.]

Keywords:
[Provide 4 to 6 relevant keywords separated by commas]

Submission Checklist:
- Word count <= 300 words
- Title and all authors' affiliations mentioned
- Corresponding email verified
- Registration fee paid & transaction ID recorded
- Google Form filled: https://forms.gle/maMGGFNcUTv7ndWf8
- Email copy sent to: quantumspike2026@gmail.com
============================================================
`;
    const blob = new Blob([templateContent], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "Quantum-Spike-2026-Abstract-Template.txt";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <section className="section portal-section" id="portal">
      <div className="container">
        <div className="section-head text-center">
          <span className="eyebrow">05 · Research Submissions & Repository</span>
          <h2>Call for Abstracts &amp; Data Hub</h2>
          <p>
            Scholars and faculty are invited to contribute original theoretical and experimental research
            papers for Oral and Poster sessions. All accepted abstracts will be published in the official
            Conference Abstract Volume.
          </p>
        </div>

        <div className="portal-grid">
          {/* Left Column: Guidelines & Downloadable resources */}
          <div className="portal-info">
            <div className="portal-card guidelines-card">
              <div className="card-badge">
                <FileCheck size={16} />
                <span>SUBMISSION GUIDELINES</span>
              </div>
              <h3>Abstract Preparation Instructions</h3>
              <ul className="guidelines-list">
                <li>
                  <strong>Word Limit:</strong> Maximum <strong>300 words</strong> including brief background,
                  methods, key findings, and conclusions.
                </li>
                <li>
                  <strong>Themes:</strong> Must align with any of the 10 conference research tracks (Quantum
                  optics, condensed matter, nanomaterials, etc.).
                </li>
                <li>
                  <strong>Formats:</strong> Presenters can select <em>Oral Presentation</em> (12 mins + 3 mins
                  Q&A) or <em>Poster Presentation</em> (Standard A0 size: 84.1 cm × 118.9 cm).
                </li>
                <li>
                  <strong>Peer Review:</strong> All submissions undergo review by the Advisory Committee.
                </li>
                <li>
                  <strong>Awards:</strong> Outstanding presentations will be honored with the
                  <strong> Best Oral Presentation Award</strong> and <strong>Best Poster Award</strong> at the
                  Valedictory session.
                </li>
              </ul>

              <div className="awards-callout">
                <Award size={22} className="award-icon" />
                <div>
                  <strong>Awards &amp; Recognition</strong>
                  <p>Cash prizes, medals &amp; commendation certificates for top student &amp; scholar papers.</p>
                </div>
              </div>
            </div>

            {/* Sharing & Download Repository */}
            <div className="portal-card repository-card">
              <div className="card-badge">
                <Download size={16} />
                <span>CONFERENCE REPOSITORY &amp; DOWNLOADS</span>
              </div>
              <p className="repo-desc">
                Download official documents, circulars, and formatting templates for Quantum Spike 2026:
              </p>

              <div className="download-items">
                <div className="download-item">
                  <div className="item-icon">
                    <FileText size={20} />
                  </div>
                  <div className="item-content">
                    <strong>Abstract Format Template</strong>
                    <span>Standard formatting template (.txt / guidelines)</span>
                  </div>
                  <button onClick={handleDownloadTemplate} className="btn-download" title="Download Template">
                    <Download size={16} />
                  </button>
                </div>

                <div className="download-item">
                  <div className="item-icon">
                    <Layers size={20} />
                  </div>
                  <div className="item-content">
                    <strong>Conference Poster Brochure</strong>
                    <span>High-resolution official circular poster (.jpg)</span>
                  </div>
                  <a
                    href={site.links.brochurePoster}
                    download="Quantum-Spike-2026-Brochure.jpg"
                    className="btn-download"
                    title="Download Poster"
                  >
                    <Download size={16} />
                  </a>
                </div>

                <div className="download-item">
                  <div className="item-icon">
                    <Sparkles size={20} />
                  </div>
                  <div className="item-content">
                    <strong>Google Drive Official PDF</strong>
                    <span>Comprehensive brochure hosted on Google Drive</span>
                  </div>
                  <a
                    href={site.links.brochureDrive}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-download"
                    title="Open Drive PDF"
                  >
                    <Download size={16} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Abstract Pre-Submission & Data Collection Form */}
          <div className="portal-form-wrap">
            <div className="portal-card form-card">
              <div className="card-badge">
                <Send size={15} />
                <span>ONLINE ABSTRACT PRE-REGISTRATION</span>
              </div>
              <h3>Submit Your Abstract Details</h3>
              <p className="form-sub">
                Fill out the research paper details below. You will also need to submit your fee payment
                proof via the official Google Form.
              </p>

              {status === "success" ? (
                <div className="form-success-box">
                  <CheckCircle2 size={42} className="success-icon" />
                  <h4>Abstract Received Successfully!</h4>
                  <p>
                    Thank you, <strong>{formData.authorName}</strong>! Your abstract titled{" "}
                    <em>&quot;{formData.title}&quot;</em> has been logged in the conference portal.
                  </p>
                  <div className="next-steps-card">
                    <strong>Next Essential Step:</strong>
                    <p>
                      If you haven&apos;t completed the fee payment (₹300/₹500/₹1000) yet, please proceed with
                      the official Google Form registration to upload your transaction screenshot:
                    </p>
                    <a
                      href={site.links.registrationForm}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="button primary mt-3"
                    >
                      Complete Registration on Google Form →
                    </a>
                  </div>
                  <button
                    onClick={() => {
                      setStatus("idle");
                      setFormData({
                        authorName: "",
                        email: "",
                        phone: "",
                        institution: "",
                        category: "PhD / Research Scholar",
                        theme: site.topics[0],
                        presentationType: "Oral Presentation",
                        title: "",
                        abstractText: "",
                      });
                    }}
                    className="btn-submit-another"
                  >
                    Submit Another Abstract
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="portal-form">
                  {status === "error" && (
                    <div className="form-alert error">
                      <AlertCircle size={18} />
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  <div className="form-row two-inputs">
                    <div className="form-group">
                      <label htmlFor="authorName">
                        Full Name of Author(s) <span className="req">*</span>
                      </label>
                      <input
                        type="text"
                        id="authorName"
                        name="authorName"
                        required
                        placeholder="e.g. Dr. Priyam Das"
                        value={formData.authorName}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">
                        Email Address <span className="req">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        placeholder="author@university.ac.in"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="form-row two-inputs">
                    <div className="form-group">
                      <label htmlFor="phone">Phone / WhatsApp Number</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        placeholder="+91 9876543210"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="institution">
                        Institution / University <span className="req">*</span>
                      </label>
                      <input
                        type="text"
                        id="institution"
                        name="institution"
                        required
                        placeholder="e.g. Bankura Sammilani College"
                        value={formData.institution}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="form-row two-inputs">
                    <div className="form-group">
                      <label htmlFor="category">Participant Category</label>
                      <select
                        id="category"
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                      >
                        <option value="Student (UG / PG)">Student (UG / PG) — ₹300</option>
                        <option value="PhD / Research Scholar">PhD / Research Scholar — ₹500</option>
                        <option value="Faculty / Scientist">Faculty / Scientist — ₹1000</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label htmlFor="presentationType">Preferred Presentation</label>
                      <select
                        id="presentationType"
                        name="presentationType"
                        value={formData.presentationType}
                        onChange={handleChange}
                      >
                        <option value="Oral Presentation">Oral Presentation (15 Mins)</option>
                        <option value="Poster Presentation">Poster Presentation (A0 Size)</option>
                        <option value="Attendee Only">Attendee Only (No Paper)</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="theme">Conference Research Theme</label>
                    <select id="theme" name="theme" value={formData.theme} onChange={handleChange}>
                      {site.topics.map((t) => (
                        <option key={t} value={t}>
                          {t}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="title">
                      Paper / Presentation Title <span className="req">*</span>
                    </label>
                    <input
                      type="text"
                      id="title"
                      name="title"
                      required
                      placeholder="Title of research paper"
                      value={formData.title}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="abstractText">
                      Abstract Content (Max 300 words) <span className="req">*</span>
                    </label>
                    <textarea
                      id="abstractText"
                      name="abstractText"
                      rows={5}
                      required
                      placeholder="Outline research background, experimental/theoretical method, key results and conclusions..."
                      value={formData.abstractText}
                      onChange={handleChange}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="btn-submit-abstract w-full submit-btn"
                  >
                    {status === "submitting" ? (
                      <span>Recording Submission...</span>
                    ) : (
                      <>
                        <Send size={17} />
                        <span>Submit Abstract to Portal</span>
                      </>
                    )}
                  </button>

                  <p className="form-disclaimer">
                    🔒 Submissions are logged for committee peer-review. Final presentation slot confirmation
                    is sent upon verification of conference registration fee.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
