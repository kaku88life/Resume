import type { ReactNode } from "react";
import { coreStrengths, aiExperience } from "../data/resume-data";

const iconMap: Record<string, ReactNode> = {
  bridge: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M4 21V14a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v7" />
      <path d="M2 14h20" />
      <path d="M6 10V3h4v7" />
      <path d="M14 10V3h4v7" />
    </svg>
  ),
  globe: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  ),
  ai: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 2a4 4 0 0 1 4 4v2a4 4 0 0 1-8 0V6a4 4 0 0 1 4-4z" />
      <path d="M16 14h.01" />
      <path d="M8 14h.01" />
      <path d="M12 16v2" />
      <path d="M9 18h6" />
      <path d="M7 22h10" />
      <path d="M8 14V10" />
      <path d="M16 14V10" />
    </svg>
  ),
  chart: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M3 3v18h18" />
      <path d="m19 9-5 5-4-4-3 3" />
    </svg>
  ),
  rocket: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  ),
  lightbulb: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
      <path d="M9 18h6" />
      <path d="M10 22h4" />
    </svg>
  ),
};

const categoryColors: Record<string, string> = {
  "AI 開發": "bg-blue-100 text-blue-700",
  "AI 產品整合": "bg-purple-100 text-purple-700",
  "資料自動化": "bg-green-100 text-green-700",
  "瀏覽器自動化": "bg-amber-100 text-amber-700",
  "知識管理": "bg-teal-100 text-teal-700",
};

export function MotivationSection() {
  return (
    <section id="strengths" className="py-16 md:py-20">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-primary">
          Core Strengths
        </h2>
        <p className="text-gray-500 mt-2">
          懂傳產痛點、親手用 AI 解過問題、能用業務語言向客戶解釋 AI 價值。
        </p>

        {/* Strength Cards Grid */}
        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {coreStrengths.map((s) => (
            <div
              key={s.title}
              className="p-5 bg-white rounded-xl border border-gray-200 hover:shadow-md hover:border-primary/30 transition-all"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  {iconMap[s.icon]}
                </div>
                <h3 className="font-bold text-gray-900 text-sm">
                  {s.title}
                </h3>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                {s.description}
              </p>
            </div>
          ))}
        </div>

        {/* AI Experience Showcase */}
        <div className="mt-12">
          <h3 className="text-xl font-bold text-primary mb-2">
            AI Tools & Integration Experience
          </h3>
          <p className="text-gray-500 text-sm mb-6">
            不只是用 AI 寫 Code——將 AI 整合進產品，設計功能流程與商業模型。
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {aiExperience.map((tool) => (
              <div
                key={tool.name}
                className="p-4 bg-surface rounded-lg border border-gray-100"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-bold text-sm text-gray-900">
                    {tool.name}
                  </span>
                  <span
                    className={`px-2 py-0.5 text-[10px] font-medium rounded-full ${
                      categoryColors[tool.category] || "bg-gray-100 text-gray-600"
                    }`}
                  >
                    {tool.category}
                  </span>
                </div>
                <p className="text-xs text-gray-500 leading-relaxed">
                  {tool.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
