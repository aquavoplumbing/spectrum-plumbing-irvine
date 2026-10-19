"use client";

import React, { useEffect, useState } from "react";

export function ReadingProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const articleElement = document.getElementById("article-content");
          if (!articleElement) {
            setProgress(0);
            ticking = false;
            return;
          }

          const rect = articleElement.getBoundingClientRect();
          const windowHeight = window.innerHeight;
          const totalHeight = rect.height;

          // How far the top of the article has scrolled past the top of the viewport
          const scrolledPast = -rect.top;
          // Reading completes when the bottom of article aligns with bottom of viewport
          const maxScroll = totalHeight - windowHeight;

          if (maxScroll <= 0) {
            setProgress(0);
          } else {
            const rawProgress = (scrolledPast / maxScroll) * 100;
            const clamped = Math.min(100, Math.max(0, rawProgress));
            setProgress(clamped);
          }

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <div
      className="fixed top-0 left-0 right-0 z-50 h-[3px] bg-transparent pointer-events-none"
      aria-hidden="true"
    >
      <div
        className="h-full bg-gradient-to-r from-[#087BDB] via-[#168DFF] to-[#38BDF8] transition-all duration-150 ease-out shadow-[0_0_8px_rgba(56,189,248,0.6)]"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
