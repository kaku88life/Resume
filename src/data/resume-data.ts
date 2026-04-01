export const hero = {
  name: "郭子睿",
  position: "應徵野球革命 後端工程師",
  summary:
    "腦中永遠有下一個想做的東西——非本科出身，2026 年 1 月開始透過 Claude Code 自學開發，3 個月內嘗試了超過 8 個專案，從麻將遊戲到 SaaS CRM，每個都從真實生活需求出發。我擅長的不是寫程式，而是從使用者的角度定義問題，快速把想法驗證成可運作的產品。",
  contact: {
    email: "kaku88life@gmail.com",
    website: "https://kaku88life.com",
  },
  baseballIdentity: [
    "15 年棒球觀賽經驗",
    "10 年 Fantasy Baseball（Keeper/Dynasty League）",
    "高中校隊 + 大學乙組",
    "富邦悍將 & 德州遊騎兵球迷",
    "熟悉進階數據：WAR、FIP、Barrel%、wRC+、K%、Zone%、RF/DRS...",
  ],
};

export const motivation = [
  "曾是野球革命的付費用戶——15 年球迷、10 年 Fantasy 玩家、打過棒球。身為一般球迷，我理解訂閱的門檻在哪裡，也對如何擴大用戶群有具體的想法。",
  "日文 N1 + 棒球知識的交集——能直接理解日本棒球媒體原文、NPB 數據來源。",
  "AI 開發效率——3 個月內從零完成 3 個生產級應用，證明快速交付能力。",
  "數據敏感度經商業驗證——在信義房屋自行建立客戶數據分析體系，用數據驅動決策。",
  "全遠端工作力已驗證——日本數位游牧一個月期間完成 539 個 commits，同時旅行、記錄行程、寫部落格。",
  "誠實的期待——希望透過這份工作磨練後端技術，同時用棒球知識和產品直覺為野球革命創造價值。如果有其他更合適的角色，也很樂意討論。",
];

export const articles = [
  {
    title: "富邦悍將 25 人保護名單推測",
    url: "https://www.facebook.com/share/p/1P5o6tyCg5/",
    date: "2025/12/12",
    summary: "從攻守數據分析各位置保留策略、預測 FA 補償方向。附自製數據表，引用野球革命 Rebas 資料。",
    engagement: "50 讚、6 留言、2 分享",
  },
  {
    title: "江少慶 FA 補償數據分析",
    url: "https://www.facebook.com/share/p/14brDiFJY6n/",
    date: "2025/12/19",
    summary: "用 FIP、BABIP、K%、BB% 逐年分析江少慶生涯數據，解釋為何未在保護名單中。文末附 FIP/BABIP 科普解說。",
  },
];

export const mainProjects = [
  {
    title: "棒球 Fantasy League 數據追蹤平台",
    url: "https://5man-keeperleague.zeabur.app/2026",
    tech: ["FastAPI", "Next.js 15", "PostgreSQL", "Docker", "Zeabur"],
    motivation:
      "我是這個 16 隊 Keeper League 的 Commissioner（聯盟長）。每年休賽季都要花大量時間手動處理合約計算、薪資驗算等繁瑣作業。我決定把整個流程自動化，讓我能把時間花在真正有趣的部分：分析球員數據和制定戰略。",
    myWork: [
      "以 Commissioner 身份定義聯盟所有規則（1+1+X 合約制度、薪資上限、FAAB 買斷計算）",
      "規劃功能優先順序：Keeper 選擇核心流程 → 陣容同步 → LINE 通知 → 數據分析",
      "提供 2014-2026 共 12 年歷史資料做合約重建",
      "申請 Yahoo Fantasy API、LINE Messaging API、MLB Stats API 帳號",
      "每日實際使用，持續回報問題並驅動改進",
    ],
    result: "16 位聯盟成員實際使用中。今年 Keeper 選擇作業時間從往年數天縮短到幾小時。",
  },
  {
    title: "不動產實價查詢與 AI 顧問平台",
    url: "https://real-estate-ai-adviser.kaku88life.com/",
    tech: ["Next.js 14", "Prisma", "PostgreSQL", "OpenAI API", "NewebPay", "Docker"],
    motivation:
      "5 年不動產業務經驗讓我看到一個問題：內政部實價登錄的「單價」是用總價除以建物移轉總面積（含公設、車位面積），消費者無法準確判斷真實房價。本平台採用「實坪單價」——（總價 - 車位價）÷ 主建物面積，還原每坪真實使用空間的價值。這跟野球革命在做的事本質上相似：挖掘更深層的數據，讓使用者看到更貼近真實的面貌。",
    myWork: [
      "基於 5 年業務經驗定義「實坪制」計算邏輯（扣除車位、推估得房率）",
      "設計停車位價格推估演算法（用統計均值反推）",
      "規劃 AI 智能填表功能（URL/截圖/文字三種輸入模式）",
      "設計點數經濟與訂閱制商業模型",
      "申請 NewebPay 金流、OpenAI API、Apify 等服務帳號",
    ],
    result: "含 23 個資料模型、金流訂閱、AI 分析、互動式地圖（15 萬+ POI）的完整 SaaS 產品。",
  },
  {
    title: "多租戶 CRM 系統",
    tech: ["Next.js 14", "FastAPI", "SQLAlchemy", "PostgreSQL"],
    motivation:
      "太太從事美甲工作，需要一套系統來吸引客戶預約、管理預約狀況、追蹤維護客戶關係。先用 Google Apps Script + Sheets 做了第一版，後來進化成通用型 SaaS CRM。這套會員系統後來也直接套用到我的不動產平台上。",
    myWork: [
      "決定 SaaS 多租戶架構方向",
      "定義 10+ 產業模板（美甲、健身、醫療、餐飲等）",
      "規劃會員生命週期分級邏輯（潛在 → 新客 → 常客 → VIP → 流失）",
    ],
    result: "25 張資料表、158+ API 端點、完整預約/會員/分析功能。",
  },
];

export const otherProjects = [
  {
    title: "LINE 靈感助手 Bot",
    tech: ["Python", "Flask", "OpenAI", "Gemini", "Notion API"],
    description: "旅遊時用於快速翻譯、語音轉文字、筆記存 Notion。後來將 LINE Bot 技術轉用到棒球平台，做為聯盟公告/提醒系統。",
  },
  {
    title: "個人部落格",
    tech: ["Astro 5", "React 19", "Tailwind", "Pagefind", "Leaflet"],
    description: "旅遊記錄、花費追蹤、作品集展示平台。3 月日本數位游牧期間持續更新。",
    url: "https://kaku88life.com",
  },
  {
    title: "GAS 美甲預約系統",
    tech: ["Google Apps Script", "Google Sheets"],
    description: "CRM 系統的前身，用 Google Sheets 做的第一版預約管理，包含會員、預約、優惠券功能。",
  },
  {
    title: "貸款試算器",
    tech: ["Vanilla JS", "Chart.js", "jsPDF"],
    description: "多幣別、多語言的貸款模擬計算器，支援 PDF/Excel 匯出。",
  },
  {
    title: "程式規劃工具",
    tech: ["React", "XYFlow", "Zustand", "IndexedDB"],
    description: "視覺化流程圖編輯器，含本地持久化。",
  },
];

export const timeline = [
  {
    period: "2019/11 - 2022/11",
    title: "信義房屋 台灣",
    role: "不動產業務",
    description: "台灣不動產買賣仲介，3 年業務經驗。",
    details: [
      "客戶開發與關係維護",
      "市場資料收集、彙整與分析報告",
      "跨部門溝通協調",
    ],
  },
  {
    period: "2022/11 - 2025/08",
    title: "信義房屋 日本事業 台灣分處",
    role: "跨國不動產業務",
    description:
      "管理 4,132 筆客戶，促成 92 件日本不動產成交。",
    details: [
      "自行建立客戶數據分析體系（Excel 資料庫）",
      "使用 LINE 官方帳號進行客戶管理與行銷",
      "使用 Canva 製作行銷素材與視覺內容",
      "每年舉辦 100+ 場說明會",
      "專案規劃、執行與跨部門協調",
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
    title: "自學開發",
    role: "Vibe Coding with Claude Code",
    description:
      "3 個月內獨立交付 3 個生產級 Web 應用，涵蓋棒球數據、不動產 AI、CRM 系統。",
    details: [],
    highlights: [
      "3 個生產級應用",
      "539 commits / 月（日本遠端）",
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
    { label: "商業邏輯規格描述", desc: "將棒球合約規則、不動產稅制、CRM 客戶分層等複雜邏輯，轉化為 AI 可實作的清晰規格" },
    { label: "第三方服務申請與帳號管理", desc: "API 金鑰申請、OAuth 設定、Zeabur 環境變數配置" },
    { label: "視覺 QA 與問題回報", desc: "使用瀏覽器 DevTools、Console、截圖定位問題" },
    { label: "基礎 Git 操作", desc: "push / pull / status / log / commit，理解 branch 與 merge" },
    { label: "數據分析與報表建立", desc: "自行設計客戶管理 Excel、統計轉換率與成交分析" },
  ],
  aiAssisted: [
    { label: "技術方案選型", desc: "從 AI 建議中選擇方案（如 FastAPI vs Express）" },
    { label: "資料庫結構", desc: "提供資料與規則，AI 設計 Schema；已有正規化、外鍵、索引的初步概念" },
    { label: "API 串接", desc: "提出需要的功能，AI 建議適合的 API 並實作，我負責申請帳號與設定" },
    { label: "部署流程", desc: "Zeabur 環境變數自己管理，Docker/CI/CD 設定由 AI 處理" },
  ],
  devFlow: [
    "需求定義",
    "規格描述",
    "AI 實作",
    "視覺驗證",
    "迭代改進",
  ],
  techStack: [
    { category: "後端框架", items: "FastAPI (Python)、Next.js API Routes" },
    { category: "資料庫", items: "PostgreSQL、SQLite、Prisma ORM、SQLAlchemy ORM" },
    { category: "前端", items: "React、Next.js、TypeScript、Tailwind CSS" },
    { category: "API 串接", items: "Yahoo Fantasy API、MLB Stats API、LINE API、OpenAI API、NewebPay、Google OAuth" },
    { category: "部署", items: "Docker、Zeabur、GitHub" },
    { category: "版本控制", items: "Git (push/pull/status/log/commit/branch)" },
    { category: "AI 開發工具", items: "Claude Code (Vibe Coding)" },
  ],
  nomadStats: {
    period: "2026 年 3 月（日本數位游牧）",
    commits: 539,
    projects: 4,
    days: 30,
  },
};

export const education = [
  { school: "輔仁大學", major: "日本語文學系" },
  { school: "台北市立松山高中", major: "" },
];
