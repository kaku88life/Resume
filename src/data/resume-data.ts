export const hero = {
  name: "郭子睿",
  nameEn: "Kaku",
  position: "AI Application x Business Strategy x Cross-border Operations",
  summary:
    "懂傳產痛點、親手用 AI 解過問題、能用業務語言向客戶解釋 AI 價值。5 年不動產與跨國營運經歷，結合 2026 年起利用 AI 工具獨立開發多個 MVP 的實戰經驗。擅長從真實需求出發定義問題、以 AI 加速驗證商業假設。不是「寫 Code 的人」，而是「決定做什麼、為什麼做、怎麼用 AI 做到」的人——能在技術、業務與用戶之間扮演橋樑角色。",
  contact: {
    email: "kaku88life@gmail.com",
    website: "https://kaku88life.com",
    line: "kaku850205",
  },
  identityTags: [
    "AI 應用落地實戰",
    "5 年跨國不動產營運",
    "日文 JLPT N1",
    "0-to-1 產品開創者",
    "Vibe Coding 開發者",
  ],
};

export const coreStrengths = [
  {
    title: "傳產痛點 x AI 解方",
    description:
      "5 年不動產業務讓我看到產業的資訊不透明問題，親手用 OpenAI API 打造 AI 智能填表功能解決它。能從業務現場出發，定義 AI 可以解決的真實問題。",
    icon: "bridge",
  },
  {
    title: "跨國業務溝通",
    description:
      "日文 N1，曾任信義房屋日本事業專案經理，管理 4,132 筆客戶、促成 92 件跨境成交。能直接對接日本市場與日文技術文件。",
    icon: "globe",
  },
  {
    title: "AI 工具實戰應用",
    description:
      "不只是用 AI 寫 Code——將 OpenAI API、Gemini、LINE Bot、Apify 等工具整合進產品，設計 AI 功能的使用者流程與商業模型。",
    icon: "ai",
  },
  {
    title: "數據驅動決策",
    description:
      "在信義房屋自行建立客戶數據分析體系，追蹤客戶生命週期、轉換率與成交分析，用數據而非直覺做業務決策。",
    icon: "chart",
  },
  {
    title: "快速 MVP 驗證",
    description:
      "3 個月內從零交付 3 個生產級 Web 應用。透過 Vibe Coding 方法論，將想法快速轉化為可運作的產品原型。",
    icon: "rocket",
  },
  {
    title: "產品思維優先",
    description:
      "每個專案都從「使用者需要什麼」出發，不是從「技術能做什麼」出發。誠實區分自己做的與 AI 協助的，聚焦在產品定義與商業邏輯。",
    icon: "lightbulb",
  },
];

export const aiExperience = [
  {
    name: "Claude Code",
    category: "AI 開發",
    description: "主要開發夥伴，透過 Vibe Coding 工作流完成所有專案的架構設計與程式實作",
  },
  {
    name: "OpenAI API (GPT-4)",
    category: "AI 產品整合",
    description: "Jikka 平台的 AI 智能填表功能——URL 解析、截圖 OCR、自然語言輸入三種模式",
  },
  {
    name: "Google Gemini",
    category: "AI 產品整合",
    description: "LINE Bot 多語言翻譯與文字處理引擎、職涯策略分析與市場研究、商業企劃發想與結構化輸出",
  },
  {
    name: "Apify",
    category: "資料自動化",
    description: "不動產資料爬蟲與自動化擷取，串接至 Jikka 平台資料庫",
  },
  {
    name: "Playwright",
    category: "瀏覽器自動化",
    description: "求職平台資料擷取、自動化測試與網頁結構分析",
  },
  {
    name: "Notion API",
    category: "知識管理",
    description: "LINE Bot 串接 Notion，語音/文字自動歸檔為結構化筆記",
  },
];

export const mainProjects = [
  {
    title: "實家 Jikka — 實坪制不動產 AI 平台",
    url: "https://jikka.app/",
    tech: ["Next.js 14", "Prisma", "PostgreSQL", "OpenAI API", "NewebPay", "Docker"],
    motivation:
      "5 年不動產業務經驗讓我看到一個問題：內政部實價登錄的「單價」包含公設面積，消費者無法判斷真實房價。本平台採用「實坪單價」還原每坪真實使用空間的價值，並導入 AI 智能填表降低使用門檻。",
    myWork: [
      "基於 5 年業務經驗定義「實坪制」計算邏輯（扣除車位、推估得房率）",
      "設計 AI 智能填表功能規格（URL 解析 / 截圖 OCR / 自然語言三種輸入模式）",
      "設計停車位價格推估演算法（統計均值反推）",
      "規劃點數經濟與訂閱制商業模型（輕用戶 / 重用戶 / 企業版）",
      "申請並整合 NewebPay 金流、OpenAI API、Apify 等第三方服務",
    ],
    result: "含 23 個資料模型、金流訂閱、AI 分析、互動式地圖（15 萬+ POI）的完整 SaaS 產品 MVP。",
  },
  {
    title: "多租戶 CRM 系統",
    tech: ["Next.js 14", "FastAPI", "SQLAlchemy", "PostgreSQL"],
    motivation:
      "從美甲預約管理的真實需求出發，先用 Google Apps Script + Sheets 做第一版驗證，再進化為通用型 SaaS CRM 平台。這套會員系統後來也直接套用到 Jikka 不動產平台上。",
    myWork: [
      "決定 SaaS 多租戶架構方向",
      "定義 10+ 產業模板（美甲、健身、醫療、餐飲等）",
      "規劃會員生命週期分級邏輯（潛在 → 新客 → 常客 → VIP → 流失）",
    ],
    result: "25 張資料表、158+ API 端點、完整預約/會員/分析功能。",
  },
  {
    title: "5-Man Fantasy League — 聯盟管理自動化",
    url: "https://5man-keeperleague.zeabur.app/",
    tech: ["FastAPI", "Next.js 15", "PostgreSQL", "LINE API", "Docker"],
    motivation:
      "身為 16 隊 Fantasy Baseball 聯盟長，每年需花數天手動處理合約計算與薪資驗算。決定將複雜的聯盟規則邏輯化、流程自動化，並串接 LINE 做即時通知。",
    myWork: [
      "定義所有聯盟規則並轉化為可實作的商業邏輯規格",
      "規劃功能優先順序：核心流程 → 資料同步 → LINE 通知 → 數據分析",
      "提供 12 年歷史資料用於系統驗證與合約重建",
      "申請並整合 Yahoo Fantasy API、LINE Messaging API、MLB Stats API",
    ],
    result: "16 位成員實際使用中。每年準備作業時間從數天縮短至 1 小時。",
  },
];

export const otherProjects = [
  {
    title: "LINE 靈感助手 Bot",
    tech: ["Python", "Flask", "OpenAI", "Gemini", "Notion API"],
    description: "整合 GPT + Gemini 雙 AI 引擎的 LINE Bot。語音轉文字、多語言翻譯、快速存 Notion。展示 AI API 串接與 Chatbot 開發能力。",
  },
  {
    title: "個人部落格",
    tech: ["Astro 5", "React 19", "Tailwind", "Pagefind", "Leaflet"],
    description: "旅遊記錄、花費追蹤、作品集展示平台。日本數位游牧期間持續更新。",
    url: "https://kaku88life.com",
  },
  {
    title: "求職情報系統",
    tech: ["Node.js", "Playwright", "AI Agent"],
    description: "自動化爬蟲 + AI 評分的求職工具。多平台職缺掃描、自動評估匹配度、產出結構化報告。",
  },
  {
    title: "貸款試算器",
    tech: ["Vanilla JS", "Chart.js", "jsPDF"],
    description: "多幣別、多語言的貸款模擬計算器，支援 PDF/Excel 匯出。",
  },
  {
    title: "程式規劃工具",
    tech: ["React", "XYFlow", "Zustand", "IndexedDB"],
    description: "視覺化流程圖編輯器，用於 AI 開發前的架構規劃，含本地持久化。",
  },
];

export const timeline = [
  {
    period: "2019/11 - 2022/11",
    title: "信義房屋 台灣",
    role: "不動產業務",
    description: "台灣不動產買賣仲介，3 年業務經驗。",
    details: [
      "客戶開發與長期關係維護",
      "市場資料收集、彙整與分析報告（房價趨勢、競品分析）",
      "跨部門溝通協調（產權、貸款、代書）",
    ],
  },
  {
    period: "2022/11 - 2025/08",
    title: "信義房屋 日本事業 台灣分處",
    role: "專案經理",
    description:
      "管理 4,132 筆客戶，促成 92 件日本不動產成交。",
    details: [
      "自行建立客戶數據分析體系（Excel 資料庫），追蹤客戶生命週期與轉換率",
      "使用 LINE 官方帳號進行客戶分群管理與行銷推播",
      "使用 Canva 製作行銷素材與視覺內容",
      "每年舉辦 100+ 場說明會，包含主持、簡報、現場 Q&A",
      "跨部門協調：台灣業務、日本事務所、法務、財務",
    ],
    highlights: [
      "4,132 筆跨六都客戶資料",
      "92 件成交（80 位客戶）",
      "每年 100+ 場說明會",
      "22.5% 再購率",
    ],
  },
  {
    period: "2026/01 - 現在",
    title: "AI 應用開發與求職準備",
    role: "Vibe Coding with Claude Code",
    description:
      "3 個月內獨立交付 3 個生產級 Web 應用，涵蓋不動產 AI、CRM 系統、聯盟管理自動化。",
    details: [
      "利用 AI 工具從零建立完整 SaaS 產品",
      "整合 OpenAI API、Gemini、LINE API 等 AI 服務至產品中",
      "準備證券商高級業務員執照（金融科技方向）",
    ],
    highlights: [
      "3 個生產級應用",
      "200+ REST API 端點",
      "57+ 資料庫表設計",
    ],
  },
];

export const languages = [
  { name: "中文", level: "母語" },
  { name: "日文", level: "JLPT N1", highlight: true },
  { name: "英文", level: "基礎溝通" },
];

export const skills = {
  myWork: [
    { label: "產品需求定義與功能規劃", desc: "決定做什麼功能、優先順序、使用者流程" },
    { label: "商業邏輯規格描述", desc: "將不動產稅制、CRM 客戶分層、聯盟合約規則等複雜邏輯，轉化為 AI 可實作的清晰規格" },
    { label: "AI 功能設計與整合管理", desc: "定義 AI 功能的使用者流程、選擇合適的 AI 模型、申請 API 並管理金鑰與環境變數" },
    { label: "第三方服務申請與串接", desc: "金流（NewebPay）、社群（LINE API）、資料（Apify）、AI（OpenAI / Gemini）" },
    { label: "視覺 QA 與問題回報", desc: "使用瀏覽器 DevTools、Console、截圖定位問題" },
    { label: "數據分析與報表建立", desc: "自行設計客戶管理 Excel、統計轉換率與成交分析" },
  ],
  aiAssisted: [
    { label: "技術方案選型", desc: "從 AI 建議中選擇方案（如 FastAPI vs Express、Prisma vs SQLAlchemy）" },
    { label: "資料庫結構設計", desc: "提供業務規則與資料關係，AI 設計 Schema；理解正規化、外鍵、索引" },
    { label: "API 實作與串接", desc: "定義需求規格，AI 負責實作，我負責驗證與整合測試" },
    { label: "部署與 DevOps", desc: "環境變數自己管理，Docker / CI/CD 設定由 AI 處理" },
  ],
  devFlow: [
    "需求定義",
    "規格描述",
    "AI 實作",
    "視覺驗證",
    "迭代改進",
  ],
  techStack: [
    { category: "AI 工具", items: "Claude Code、OpenAI API (GPT-4)、Google Gemini、Apify、Playwright" },
    { category: "後端", items: "FastAPI (Python)、Next.js API Routes、Flask" },
    { category: "資料庫", items: "PostgreSQL、SQLite、Prisma ORM、SQLAlchemy ORM" },
    { category: "前端", items: "React、Next.js、TypeScript、Tailwind CSS、Astro" },
    { category: "API 整合", items: "LINE Messaging API、OpenAI API、NewebPay、Notion API、Google OAuth" },
    { category: "部署", items: "Docker、Zeabur、GitHub Pages、Cloudflare R2" },
  ],
  nomadStats: {
    period: "2026 年 3 月（日本數位游牧）",
    avgCommitsPerDay: 18,
    totalCommits: 539,
    projects: 4,
    days: 30,
  },
};

export const education = [
  { school: "輔仁大學", major: "日本語文學系" },
  { school: "台北市立松山高中", major: "" },
];
