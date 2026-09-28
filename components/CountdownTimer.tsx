"use client";

import { useEffect, useState } from "react";
import { Clock, Calendar, Bell } from "lucide-react";
import { site } from "@/lib/site";

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
    isPast: boolean;
  }>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isPast: false,
  });

  useEffect(() => {
    const target = new Date(site.isoStartDate).getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      const diff = target - now;

      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, isPast: true });
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds, isPast: false });
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleAddToCalendar = () => {
    const title = encodeURIComponent("Quantum Spike 2026 - International Conference");
    const details = encodeURIComponent(
      "International Conference on Contemporary Physics, Optics and Emerging Technologies at Bankura Sammilani College, West Bengal. ANRF (SERB-DST) Core Research Grant Funded.\nOfficial Website: https://sites.google.com/view/quantum-spike-2026/home"
    );
    const location = encodeURIComponent("Department of Physics, Bankura Sammilani College, Kenduadihi, Bankura, West Bengal - 722102");
    // 20261008T040000Z to 20261009T120000Z in UTC
    const googleCalUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=20261008T040000Z/20261009T120000Z&details=${details}&location=${location}`;
    window.open(googleCalUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="countdown-container">
      <div className="countdown-header">
        <span className="live-pulse" />
        <span className="countdown-label">
          <Clock size={14} className="inline mr-1" />
          {timeLeft.isPast ? "Conference In Session" : "CONFERENCE COUNTDOWN"}
        </span>
        <button
          onClick={handleAddToCalendar}
          className="cal-btn"
          title="Add to Google Calendar"
        >
          <Calendar size={13} />
          <span>Add to Calendar</span>
        </button>
      </div>

      <div className="countdown-units">
        <div className="time-block">
          <span className="time-value">{String(timeLeft.days).padStart(2, "0")}</span>
          <span className="time-label">DAYS</span>
        </div>
        <span className="time-sep">:</span>
        <div className="time-block">
          <span className="time-value">{String(timeLeft.hours).padStart(2, "0")}</span>
          <span className="time-label">HOURS</span>
        </div>
        <span className="time-sep">:</span>
        <div className="time-block">
          <span className="time-value">{String(timeLeft.minutes).padStart(2, "0")}</span>
          <span className="time-label">MINUTES</span>
        </div>
        <span className="time-sep">:</span>
        <div className="time-block">
          <span className="time-value accent-sec">{String(timeLeft.seconds).padStart(2, "0")}</span>
          <span className="time-label">SECONDS</span>
        </div>
      </div>

      <div className="countdown-footer">
        <span>📍 08–09 October 2026 • Bankura Sammilani College, West Bengal</span>
      </div>
    </div>
  );
}
