import { skills } from "../data/resume-data";

function FlowStep({ label, index, total }: { label: string; index: number; total: number }) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex flex-col items-center">
        <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold">
          {index + 1}
        </div>
        <span className="text-xs text-gray-600 mt-1 text-center max-w-[5rem]">{label}</span>
      </div>
      {index < total - 1 && (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-primary/40 shrink-0">
          <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" />
        </svg>
      )}
    </div>
  );
}

function SkillCard({ label, desc, accent }: { label: string; desc: string; accent: boolean }) {
  return (
    <div className={`p-4 rounded-lg border ${accent ? "bg-primary/5 border-primary/20" : "bg-white border-gray-200"}`}>
      <p className={`font-bold text-sm ${accent ? "text-primary" : "text-gray-900"}`}>{label}</p>
      <p className="text-xs text-gray-500 mt-1 leading-relaxed">{desc}</p>
    </div>
  );
}

export function SkillsSection() {
  const { devFlow, myWork, aiAssisted, techStack, nomadStats } = skills;

  return (
    <section id="skills" className="py-16 md:py-20">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-primary">
          How I Think & Work
        </h2>
        <p className="text-gray-500 mt-2">
          我的開發流程、誠實的能力區分、以及技術接觸經驗。
        </p>

        {/* Dev Flow */}
        <div className="mt-10 p-6 bg-surface rounded-xl border border-gray-100">
          <h3 className="text-lg font-bold text-gray-900 mb-6">My Development Flow</h3>
          <div className="flex flex-wrap items-start justify-center gap-4">
            {devFlow.map((step, i) => (
              <FlowStep key={step} label={step} index={i} total={devFlow.length} />
            ))}
          </div>
        </div>

        {/* Honest Split */}
        <div className="grid md:grid-cols-2 gap-6 mt-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-primary" />
              <h3 className="text-lg font-bold text-primary">
                I Do This
              </h3>
            </div>
            <div className="space-y-3">
              {myWork.map((s) => (
                <SkillCard key={s.label} label={s.label} desc={s.desc} accent />
              ))}
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-gray-400" />
              <h3 className="text-lg font-bold text-gray-600">
                AI Assists (I Understand the Concepts)
              </h3>
            </div>
            <div className="space-y-3">
              {aiAssisted.map((s) => (
                <SkillCard key={s.label} label={s.label} desc={s.desc} accent={false} />
              ))}
            </div>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="mt-10">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Tech Stack Experience</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <tbody>
                {techStack.map((row, i) => (
                  <tr key={row.category} className={i % 2 === 0 ? "bg-surface" : "bg-white"}>
                    <td className="px-4 py-3 font-bold text-primary whitespace-nowrap w-32">
                      {row.category}
                    </td>
                    <td className="px-4 py-3 text-gray-600">{row.items}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Nomad Stats */}
        <div className="mt-10 p-6 bg-primary text-white rounded-xl">
          <h3 className="text-lg font-bold mb-4">{nomadStats.period}</h3>
          <p className="text-white/70 text-sm mb-6">
            邊旅行邊開發——證明全遠端工作的自律與產出能力
          </p>
          <div className="grid grid-cols-4 gap-4">
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold">{nomadStats.avgCommitsPerDay}</p>
              <p className="text-xs text-white/60 mt-1">Commits / Day</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold">{nomadStats.totalCommits}</p>
              <p className="text-xs text-white/60 mt-1">Total Commits</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold">{nomadStats.projects}</p>
              <p className="text-xs text-white/60 mt-1">Projects</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold">{nomadStats.days}</p>
              <p className="text-xs text-white/60 mt-1">Days</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
