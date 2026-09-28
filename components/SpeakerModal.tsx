"use client";

import { useEffect } from "react";
import { X, Building2, Award } from "lucide-react";
import { Speaker } from "@/lib/site";

interface SpeakerModalProps {
  speaker: Speaker | null;
  onClose: () => void;
}

export default function SpeakerModal({ speaker, onClose }: SpeakerModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (speaker) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [speaker, onClose]);

  if (!speaker) return null;

  return (
    <div className="speaker-modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="speaker-modal-card" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className="speaker-modal-close" aria-label="Close speaker details">
          <X size={20} />
        </button>

        <div className="speaker-modal-top">
          <div className="speaker-modal-avatar">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={speaker.image} alt={speaker.name} />
          </div>
          <div className="speaker-modal-meta">
            <span className="speaker-modal-badge">
              <Award size={13} className="inline mr-1" />
              INVITED RESOURCE PERSON
            </span>
            <h3>{speaker.name}</h3>
            <p className="speaker-modal-inst">
              <Building2 size={15} className="inline mr-1.5" />
              {speaker.institution}
            </p>
          </div>
        </div>

        <div className="speaker-modal-body">
          <div className="speaker-info-block">
            <p className="speaker-info-text">
              Invited speaker at <strong>Quantum Spike – 2026</strong>: International Conference on Contemporary Physics,
              Optics and Emerging Technologies, Department of Physics, Bankura Sammilani College.
            </p>
          </div>
        </div>

        <div className="speaker-modal-footer">
          <span>08–09 October 2026 • Bankura Sammilani College</span>
          <button onClick={onClose} className="btn-close-speaker">
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
