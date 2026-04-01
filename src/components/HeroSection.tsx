import { hero, about, timeline } from "../data/resume-data";

function TimelineItem({ item, isLast }: { item: typeof timeline[0]; isLast: boolean }) {
  return (
    <div className="relative pl-8 pb-8">
      {/* Vertical line */}
      {!isLast && (
        <div className="absolute left-[11px] top-6 bottom-0 w-0.5 bg-primary/20" />
      )}
      {/* Dot */}
      <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full bg-primary flex items-center justify-center">
        <div className="w-2 h-2 rounded-full bg-white" />
      </div>
      <div className="bg-surface rounded-lg p-5 border border-gray-100">
        <span className="text-xs font-medium text-primary/70 tracking-wide">
          {item.period}
        </span>
        <h4 className="text-base font-bold text-gray-900 mt-1">{item.title}</h4>
        <p className="text-sm text-accent font-medium">{item.role}</p>
        <p className="text-sm text-gray-600 mt-2 leading-relaxed">{item.description}</p>
        {item.highlights && (
          <div className="flex flex-wrap gap-2 mt-3">
            {item.highlights.map((h) => (
              <span
                key={h}
                className="px-2.5 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
              >
                {h}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export function HeroSection() {
  return (
    <section id="about" className="pt-24">
      {/* Hero */}
      <div className="bg-gradient-to-br from-primary-dark via-primary to-primary-light text-white">
        <div className="mx-auto max-w-5xl px-6 py-20 md:py-28">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight tracking-tight">
            {hero.headline}
          </h1>
          <p className="mt-6 text-lg md:text-xl text-white/80 max-w-3xl leading-relaxed">
            {hero.subheadline}
          </p>
          <div className="mt-10 flex flex-col sm:flex-row sm:items-center gap-4">
            <div>
              <p className="text-2xl font-bold">{hero.name}</p>
              <p className="text-white/70 text-sm mt-1">{hero.position}</p>
            </div>
            <div className="sm:ml-auto flex flex-wrap gap-3">
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
          </div>
        </div>
      </div>

      {/* About content */}
      <div className="mx-auto max-w-5xl px-6 py-16">
        <p className="text-gray-700 leading-relaxed text-lg">{about.summary}</p>

        <div className="grid md:grid-cols-2 gap-12 mt-12">
          {/* Left: Timeline */}
          <div>
            <h3 className="text-xl font-bold text-primary mb-6">
              經歷
            </h3>
            {timeline.map((item, i) => (
              <TimelineItem key={item.period} item={item} isLast={i === timeline.length - 1} />
            ))}
          </div>

          {/* Right: Baseball + Languages + Motivation */}
          <div className="space-y-8">
            {/* Baseball */}
            <div>
              <h3 className="text-xl font-bold text-primary mb-4">
                棒球經歷
              </h3>
              <ul className="space-y-2">
                {about.baseball.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>

            {/* Languages */}
            <div>
              <h3 className="text-xl font-bold text-primary mb-4">
                語言能力
              </h3>
              <div className="space-y-3">
                {about.languages.map((l) => (
                  <div
                    key={l.name}
                    className={`flex items-center gap-3 p-3 rounded-lg ${
                      l.highlight ? "bg-primary/5 border border-primary/20" : "bg-gray-50"
                    }`}
                  >
                    <span className="font-bold text-sm text-primary min-w-[3rem]">
                      {l.name}
                    </span>
                    <span className={`text-sm ${l.highlight ? "text-primary font-medium" : "text-gray-600"}`}>
                      {l.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Motivation */}
            <div>
              <h3 className="text-xl font-bold text-primary mb-4">
                為什麼是野球革命
              </h3>
              <ul className="space-y-3">
                {about.motivation.map((m, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
                    <span className="mt-0.5 w-5 h-5 rounded-full bg-primary/10 text-primary text-xs font-bold flex items-center justify-center shrink-0">
                      {i + 1}
                    </span>
                    <span className="leading-relaxed">{m}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
