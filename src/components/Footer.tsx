import { hero } from "../data/resume-data";

export function Footer() {
  return (
    <footer className="bg-primary-dark text-white py-16">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <p className="text-3xl font-bold">{hero.name}</p>
        <p className="text-white/60 text-sm mt-2">{hero.position}</p>

        {/* CTA */}
        <div className="mt-8">
          <a
            href={`https://mail.google.com/mail/?view=cm&to=${hero.contact.email}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-accent hover:bg-accent-light text-primary-dark font-bold rounded-lg transition-colors text-base"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><path d="m22 6-10 7L2 6"/></svg>
            聯繫我
          </a>
        </div>

        <div className="flex justify-center gap-6 mt-8">
          <a
            href={`https://mail.google.com/mail/?view=cm&to=${hero.contact.email}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/70 hover:text-white transition-colors text-sm"
          >
            {hero.contact.email}
          </a>
          <a
            href={hero.contact.website}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/70 hover:text-white transition-colors text-sm"
          >
            kaku88life.com
          </a>
        </div>
        <div className="mt-8 pt-6 border-t border-white/10 text-xs text-white/40">
          Built with Vibe Coding (Claude Code + React + Tailwind)
        </div>
      </div>
    </footer>
  );
}
