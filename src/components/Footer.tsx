import { hero } from "../data/resume-data";

export function Footer() {
  return (
    <footer className="bg-primary-dark text-white py-12">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <p className="text-2xl font-bold">{hero.name}</p>
        <p className="text-white/60 text-sm mt-2">{hero.position}</p>
        <div className="flex justify-center gap-6 mt-6">
          <a
            href={`mailto:${hero.contact.email}`}
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
