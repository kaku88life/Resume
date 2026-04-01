import { otherProjects, education } from "../data/resume-data";

export function OtherWorksSection() {
  return (
    <section id="other" className="bg-surface py-16 md:py-20">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-primary">
          Other Projects
        </h2>
        <p className="text-gray-500 mt-2">
          每個小專案都有它的角色——技術嘗試、生活工具、或是通往大專案的墊腳石。
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-8">
          {otherProjects.map((p) => (
            <div
              key={p.title}
              className="bg-white rounded-lg border border-gray-200 p-5 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between">
                <h3 className="font-bold text-gray-900 text-sm">{p.title}</h3>
                {p.url && (
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary-light"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                  </a>
                )}
              </div>
              <div className="flex flex-wrap gap-1.5 mt-2">
                {p.tech.map((t) => (
                  <span key={t} className="px-1.5 py-0.5 text-[10px] font-medium bg-surface-alt text-primary/80 rounded">
                    {t}
                  </span>
                ))}
              </div>
              <p className="text-xs text-gray-500 mt-3 leading-relaxed">
                {p.description}
              </p>
            </div>
          ))}
        </div>

        {/* Education */}
        <div className="mt-12">
          <h3 className="text-xl font-bold text-primary mb-4">Education</h3>
          <div className="flex flex-wrap gap-4">
            {education.map((e) => (
              <div key={e.school} className="bg-white rounded-lg border border-gray-200 px-5 py-4">
                <p className="font-bold text-gray-900 text-sm">{e.school}</p>
                {e.major && <p className="text-xs text-gray-500 mt-0.5">{e.major}</p>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
