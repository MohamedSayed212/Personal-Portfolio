// Two-segment toggle showing BOTH languages with the current one highlighted,
// rather than a single button showing the other language — a visitor who lands
// on the wrong version shouldn't have to guess what the button does.
//
// Each label is written in its own language ("English" / "العربية") so it is
// readable to the person who needs it.
//
// These are <button>s, not links: switching language changes React state in
// SiteShell and re-renders in place. There is no navigation and no page reload,
// so a link would be wrong both semantically and for assistive tech.
function LanguageSwitcher({ t, locale, onLocaleChange, className = "" }) {
  const options = [
    { code: "en", label: t.short.en, full: t.en },
    { code: "ar", label: t.short.ar, full: t.ar },
  ];

  return (
    <div
      className={`flex items-center gap-1 rounded-xl border border-neutral-600 p-1 ${className}`}
      role="group"
      aria-label={t.label}
    >
      {options.map((option) => {
        const isActive = option.code === locale;

        return (
          <button
            key={option.code}
            type="button"
            lang={option.code}
            onClick={() => onLocaleChange(option.code)}
            aria-pressed={isActive}
            title={option.full}
            className={`rounded-lg px-2.5 py-1.5 text-sm font-semibold transition duration-200 ${
              isActive
                ? "bg-white text-black"
                : "text-secondary hover:bg-white/10 hover:text-white"
            }`}
          >
            {option.label}
            <span className="sr-only"> — {option.full}</span>
          </button>
        );
      })}
    </div>
  );
}

export default LanguageSwitcher;
