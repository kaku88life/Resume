import { mainProjects, articles } from "../data/resume-data";

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

        {/* Motivation box */}
        <div className="mt-5 p-4 bg-surface rounded-lg border-l-4 border-accent">
          <p className="text-xs font-bold text-accent uppercase tracking-wider mb-1">
            Why I Built This
          </p>
          <p className="text-sm text-gray-700 leading-relaxed">{project.motivation}</p>
        </div>

        {/* My work */}
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

        {/* Result */}
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

function ArticleCard({ article }: { article: typeof articles[0] }) {
  return (
    <a
      href={article.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block p-5 bg-white rounded-lg border border-gray-200 hover:shadow-md hover:border-primary/30 transition-all"
    >
      <div className="flex items-center gap-2 text-xs text-gray-500">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
        <span>Facebook</span>
        <span>|</span>
        <span>{article.date}</span>
        {article.engagement && (
          <>
            <span>|</span>
            <span>{article.engagement}</span>
          </>
        )}
      </div>
      <h4 className="font-bold text-gray-900 mt-2">{article.title}</h4>
      <p className="text-sm text-gray-600 mt-1 leading-relaxed">{article.summary}</p>
      <p className="text-xs text-primary font-medium mt-2">
        Data source: Rebas
      </p>
    </a>
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

        {/* Articles */}
        <div className="mt-12">
          <h3 className="text-xl font-bold text-primary mb-4">
            棒球分析文章（引用野球革命 Rebas 數據）
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {articles.map((a) => (
              <ArticleCard key={a.title} article={a} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
