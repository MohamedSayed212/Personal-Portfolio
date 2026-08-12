"use client";

import { useEffect, useRef, useState } from "react";
import { FaGlobe, FaCheck, FaChevronDown } from "react-icons/fa";

// A single globe button that opens a small menu, rather than two segments
// sitting side by side.
//
// Deliberately a globe rather than flag icons: Arabic is not the language of
// one country, so a flag would be picking a nation to stand in for a language.
// The globe is neutral, and each option is written in its own script so it is
// readable to the person who needs it.
function LanguageSwitcher({ t, locale, onLocaleChange, className = "" }) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  const options = [
    { code: "en", label: t.en, short: t.short.en },
    { code: "ar", label: t.ar, short: t.short.ar },
  ];

  const current = options.find((option) => option.code === locale);

  // Close on outside click and on Escape. Both listeners are only attached
  // while the menu is actually open.
  useEffect(() => {
    if (!isOpen) return;

    const handlePointerDown = (event) => {
      if (!containerRef.current?.contains(event.target)) setIsOpen(false);
    };
    const handleKeyDown = (event) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const select = (code) => {
    onLocaleChange(code);
    setIsOpen(false);
  };

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      <button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-label={t.label}
        className="flex items-center gap-2 rounded-xl border border-neutral-600 px-3 py-2 text-sm font-semibold text-secondary transition duration-200 hover:border-accent/40 hover:bg-white/10 hover:text-white"
      >
        <FaGlobe size={15} aria-hidden="true" className="shrink-0" />
        <span>{current?.short}</span>
        <FaChevronDown
          size={10}
          aria-hidden="true"
          className={`shrink-0 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        // `end-0` (not right-0) so the menu hangs off the correct edge once the
        // page mirrors into RTL.
        <ul
          role="listbox"
          aria-label={t.label}
          className="absolute end-0 top-full z-50 mt-2 min-w-[168px] overflow-hidden rounded-xl border border-white/10 bg-[#1b1b1b] py-1 shadow-[0_18px_40px_-12px_rgba(0,0,0,0.85)]"
        >
          {options.map((option) => {
            const isActive = option.code === locale;

            return (
              <li key={option.code} role="none">
                <button
                  type="button"
                  role="option"
                  aria-selected={isActive}
                  lang={option.code}
                  onClick={() => select(option.code)}
                  className={`flex w-full items-center justify-between gap-3 px-3 py-2.5 text-start text-sm transition duration-150 ${
                    isActive
                      ? "bg-white/10 font-semibold text-white"
                      : "text-secondary hover:bg-white/5 hover:text-white"
                  }`}
                >
                  <span>{option.label}</span>
                  {isActive && (
                    <FaCheck
                      size={12}
                      aria-hidden="true"
                      className="shrink-0 text-accent"
                    />
                  )}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default LanguageSwitcher;
