import { hero } from "../data/resume-data";

export function HeroSection() {
  return (
    <section id="about">
      <div className="bg-gradient-to-br from-primary-dark via-primary to-primary-light text-white">
        <div className="mx-auto max-w-5xl px-6 pt-28 pb-16 md:pt-36 md:pb-20">
          {/* Name & Position */}
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            {hero.name}
          </h1>
          <p className="mt-3 text-lg text-white/70">{hero.position}</p>

          {/* Contact */}
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={`mailto:${hero.contact.email}`}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/15 hover:bg-white/25 rounded-lg text-sm transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><path d="m22 6-10 7L2 6"/></svg>
              Email
            </a>
            <a
              href={hero.contact.website}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/15 hover:bg-white/25 rounded-lg text-sm transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
              kaku88life.com
            </a>
          </div>

          {/* Summary */}
          <p className="mt-8 text-base md:text-lg text-white/85 max-w-3xl leading-relaxed">
            {hero.summary}
          </p>

          {/* Baseball Identity Tags */}
          <div className="mt-8 flex flex-wrap gap-2">
            {hero.baseballIdentity.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1.5 text-xs font-medium bg-white/10 text-white/80 rounded-full border border-white/15"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
