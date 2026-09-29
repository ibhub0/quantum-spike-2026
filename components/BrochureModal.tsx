"use client";

import { useEffect, useState } from "react";
import { X, Download, ExternalLink, ZoomIn, ZoomOut, RotateCcw } from "lucide-react";
import { site } from "@/lib/site";

interface BrochureModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BrochureModal({ isOpen, onClose }: BrochureModalProps) {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
      setScale(1);
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="lightbox-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="lightbox-panel" onClick={(e) => e.stopPropagation()}>
        {/* Header toolbar */}
        <div className="lightbox-header">
          <div className="lightbox-title">
            <strong>Quantum Spike 2026</strong>
            <span>Official Conference Brochure & Poster</span>
          </div>

          <div className="lightbox-tools">
            <button
              onClick={() => setScale((s) => Math.min(s + 0.25, 2.5))}
              className="tool-btn"
              title="Zoom In"
            >
              <ZoomIn size={18} />
            </button>
            <button
              onClick={() => setScale((s) => Math.max(s - 0.25, 0.5))}
              className="tool-btn"
              title="Zoom Out"
            >
              <ZoomOut size={18} />
            </button>
            <button
              onClick={() => setScale(1)}
              className="tool-btn"
              title="Reset Zoom"
            >
              <RotateCcw size={17} />
            </button>
            <a
              href={site.links.brochurePoster}
              download="Quantum-Spike-2026-Brochure.jpg"
              className="tool-btn highlight"
              title="Download Brochure Image"
            >
              <Download size={18} />
              <span>Download</span>
            </a>
            <a
              href={site.links.brochureDrive}
              target="_blank"
              rel="noopener noreferrer"
              className="tool-btn drive-link"
              title="Open Google Drive Full PDF"
            >
              <ExternalLink size={18} />
              <span>Google Drive</span>
            </a>
            <button onClick={onClose} className="close-btn" aria-label="Close modal">
              <X size={22} />
            </button>
          </div>
        </div>

        {/* Image viewport */}
        <div className="lightbox-viewport">
          <div
            className="lightbox-image-wrap"
            style={{ transform: `scale(${scale})`, transition: "transform 0.2s ease-out" }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={site.links.brochurePoster}
              alt="Quantum Spike 2026 Official Conference Brochure"
              className="lightbox-img"
            />
          </div>
        </div>

        <div className="lightbox-footer">
          <span>Tip: Use mouse wheel or toolbar to zoom. Click outside or press ESC to close.</span>
          <a
            href={site.links.registrationForm}
            target="_blank"
            rel="noopener noreferrer"
            className="lightbox-cta"
          >
            Register via Google Form →
          </a>
        </div>
      </div>
    </div>
  );
}
