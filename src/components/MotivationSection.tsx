import { motivation, articles } from "../data/resume-data";

const baseUrl = import.meta.env.BASE_URL;

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

export function MotivationSection() {
  return (
    <section className="py-16 md:py-20">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-primary">
          為什麼是野球革命
        </h2>
        <p className="text-gray-500 mt-2">
          Work for life, work with passion——當工作來自真心在乎的事，投入程度不需要任何人督促。
        </p>

        <div className="mt-8 flex flex-col md:flex-row gap-8 items-start">
          {/* Baseball photo */}
          <div className="shrink-0 md:sticky md:top-24">
            <img
              src={`${baseUrl}baseball.jpg`}
              alt="Watching baseball at PayPay Dome"
              className="w-full md:w-56 rounded-xl object-cover shadow-md"
            />
            <p className="text-xs text-gray-400 mt-2 text-center">PayPay Dome, Fukuoka 2026</p>
          </div>

          <div className="flex-1">
        <ul className="space-y-4">
          {motivation.map((m, i) => (
            <li key={i} className="flex items-start gap-4">
              <span className="mt-0.5 w-7 h-7 rounded-full bg-primary/10 text-primary text-sm font-bold flex items-center justify-center shrink-0">
                {i + 1}
              </span>
              <span className="text-gray-700 leading-relaxed">{m}</span>
            </li>
          ))}
        </ul>
          </div>
        </div>

        {/* FB Articles */}
        <div className="mt-12">
          <h3 className="text-xl font-bold text-primary mb-4">
            棒球分析文章（引用 Rebas 數據）
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
