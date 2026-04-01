import { useState, useEffect } from "react";

const links = [
  { href: "#about", label: "關於我" },
  { href: "#projects", label: "作品" },
  { href: "#skills", label: "能力" },
  { href: "#other", label: "其他" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 shadow-md backdrop-blur-sm" : "bg-primary-dark"
      }`}
    >
      <div className="mx-auto max-w-5xl flex items-center justify-between px-6 py-4">
        <a href="#" className={`text-lg font-bold ${scrolled ? "text-primary" : "text-white"}`}>
          Kaku
        </a>
        {/* Desktop */}
        <div className="hidden md:flex gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-sm font-medium transition-colors ${
                scrolled ? "text-gray-600 hover:text-primary" : "text-white/80 hover:text-white"
              }`}
            >
              {l.label}
            </a>
          ))}
        </div>
        {/* Mobile toggle */}
        <button
          className={`md:hidden p-2 ${scrolled ? "text-gray-600" : "text-white"}`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path d="M6 6l12 12M6 18L18 6" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>
      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 pb-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="block py-3 text-gray-600 hover:text-primary"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
