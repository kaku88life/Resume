import { useState, useEffect } from "react";

const sections = [
  { id: "about", label: "關於我" },
  { id: "motivation", label: "動機" },
  { id: "experience", label: "經歷" },
  { id: "skills", label: "能力" },
  { id: "projects", label: "作品" },
];

export function ScrollNav() {
  const [active, setActive] = useState("");
  const [progress, setProgress] = useState(0);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      // Progress bar
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);

      // Back to top visibility
      setShowTop(scrollTop > 400);

      // Active section detection
      let current = "";
      for (const s of sections) {
        const el = document.getElementById(s.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150) current = s.id;
        }
      }
      setActive(current);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Progress bar */}
      <div className="fixed top-0 left-0 right-0 z-[60] h-0.5">
        <div
          className="h-full bg-accent transition-[width] duration-100"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Side dot nav - desktop only */}
      <nav className="fixed right-4 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col gap-3">
        {sections.map((s) => (
          <a
            key={s.id}
            href={`#${s.id}`}
            className="group flex items-center gap-2 justify-end"
          >
            <span
              className={`text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200 ${
                active === s.id ? "text-primary" : "text-gray-400"
              }`}
            >
              {s.label}
            </span>
            <span
              className={`block rounded-full transition-all duration-300 ${
                active === s.id
                  ? "w-3 h-3 bg-primary shadow-sm"
                  : "w-2 h-2 bg-gray-300 hover:bg-primary/50"
              }`}
            />
          </a>
        ))}
      </nav>

      {/* Back to top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`fixed bottom-6 right-6 z-40 w-10 h-10 rounded-full bg-primary/80 hover:bg-primary text-white flex items-center justify-center shadow-lg transition-all duration-300 ${
          showTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
        aria-label="Back to top"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M18 15l-6-6-6 6" />
        </svg>
      </button>
    </>
  );
}
