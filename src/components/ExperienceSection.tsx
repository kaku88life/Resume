import { timeline, languages } from "../data/resume-data";

function TimelineItem({ item, isLast }: { item: typeof timeline[0]; isLast: boolean }) {
  return (
    <div className="relative pl-8 pb-8">
      {!isLast && (
        <div className="absolute left-[11px] top-6 bottom-0 w-0.5 bg-primary/20" />
      )}
      <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full bg-primary flex items-center justify-center">
        <div className="w-2 h-2 rounded-full bg-white" />
      </div>
      <div className="bg-white rounded-lg p-5 border border-gray-100">
        <span className="text-xs font-medium text-primary/70 tracking-wide">
          {item.period}
        </span>
        <h4 className="text-base font-bold text-gray-900 mt-1">{item.title}</h4>
        <p className="text-sm text-accent font-medium">{item.role}</p>
        <p className="text-sm text-gray-600 mt-2 leading-relaxed">{item.description}</p>

        {item.details && item.details.length > 0 && (
          <ul className="mt-3 space-y-1">
            {item.details.map((d) => (
              <li key={d} className="flex items-start gap-2 text-sm text-gray-500">
                <span className="mt-1.5 w-1 h-1 rounded-full bg-gray-400 shrink-0" />
                {d}
              </li>
            ))}
          </ul>
        )}

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

export function ExperienceSection() {
  return (
    <section id="experience" className="bg-surface py-16 md:py-20">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-primary">
          Experience
        </h2>
        <p className="text-gray-500 mt-2">
          從業務到開發，每段經歷都在累積把需求變成產品的能力。
        </p>

        <div className="grid md:grid-cols-3 gap-12 mt-10">
          {/* Timeline */}
          <div className="md:col-span-2">
            {timeline.map((item, i) => (
              <TimelineItem key={item.period} item={item} isLast={i === timeline.length - 1} />
            ))}
          </div>

          {/* Languages */}
          <div>
            <h3 className="text-xl font-bold text-primary mb-4">
              語言能力
            </h3>
            <div className="space-y-3">
              {languages.map((l) => (
                <div
                  key={l.name}
                  className={`flex items-center gap-3 p-3 rounded-lg ${
                    l.highlight ? "bg-primary/5 border border-primary/20" : "bg-white border border-gray-100"
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
        </div>
      </div>
    </section>
  );
}
