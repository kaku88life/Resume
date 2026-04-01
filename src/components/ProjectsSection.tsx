import { mainProjects, otherProjects, education } from "../data/resume-data";

function ProjectCard({ project }: { project: typeof mainProjects[0] }) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
      <div className="p-6 md:p-8">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 inline-flex items-center gap-1 px-3 py-1.5 bg-primary text-white text-xs font-medium rounded-lg hover:bg-primary-light transition-colors"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
              Demo
            </a>
          )}
        </div>

        <div className="flex flex-wrap gap-2 mt-3">
          {project.tech.map((t) => (
            <span key={t} className="px-2 py-0.5 text-xs font-medium bg-surface-alt text-primary rounded">
              {t}
            </span>
          ))}
        </div>

        <div className="mt-5 p-4 bg-surface rounded-lg border-l-4 border-accent">
          <p className="text-xs font-bold text-accent uppercase tracking-wider mb-1">
            Why I Built This
          </p>
          <p className="text-sm text-gray-700 leading-relaxed">{project.motivation}</p>
        </div>

        <div className="mt-5">
          <p className="text-xs font-bold text-primary uppercase tracking-wider mb-2">
            My Contribution
          </p>
          <ul className="space-y-1.5">
            {project.myWork.map((w) => (
              <li key={w} className="flex items-start gap-2 text-sm text-gray-600">
                <span className="mt-1.5 w-1 h-1 rounded-full bg-primary shrink-0" />
                {w}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-5 p-3 bg-primary/5 rounded-lg">
          <p className="text-sm text-primary font-medium">
            <span className="font-bold">Result: </span>
            {project.result}
          </p>
        </div>
      </div>
    </div>
  );
}

export function ProjectsSection() {
  return (
    <section id="projects" className="bg-surface py-16 md:py-20">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-primary">
          Projects
        </h2>
        <p className="text-gray-500 mt-2">
          每個專案都從真實生活需求出發，彼此之間有技術和經驗的傳承。
        </p>

        <div className="mt-10 space-y-8">
          {mainProjects.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </div>

        {/* Other Projects */}
        <div className="mt-12">
          <h3 className="text-xl font-bold text-primary mb-2">Other Projects</h3>
          <p className="text-gray-500 text-sm mb-6">
            每個小專案都有它的角色——技術嘗試、生活工具、或是通往大專案的墊腳石。
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {otherProjects.map((p) => (
              <div
                key={p.title}
                className="bg-white rounded-lg border border-gray-200 p-5 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start justify-between">
                  <h4 className="font-bold text-gray-900 text-sm">{p.title}</h4>
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
