import { useState } from "react";

const links = [
  { href: "#about", label: "關於我" },
  { href: "#strengths", label: "優勢" },
  { href: "#experience", label: "經歷" },
  { href: "#skills", label: "能力" },
  { href: "#projects", label: "作品" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md"
    >
      <div className="mx-auto max-w-5xl flex items-center justify-between px-6 py-4">
        <a href="#" className="text-lg font-bold text-primary">
          Kaku
        </a>
        {/* Desktop */}
        <div className="hidden md:flex gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-gray-600 hover:text-primary transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>
        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 text-gray-600"
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
