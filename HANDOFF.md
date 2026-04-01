# Resume Website - Session Handoff

## Project Status: 80% Complete

### What's Done
- Vite + React + TypeScript + Tailwind CSS 專案已建立
- 所有 4 個 section 的元件已完成並可正常渲染
  - `HeroSection`: 棒球願景 Hero + 經歷時間軸 + 棒球經歷 + 語言 + 動機
  - `ProjectsSection`: 3 個主要專案（含動機故事）+ 2 篇 Facebook 文章
  - `SkillsSection`: 開發流程圖 + 誠實能力區分 + 技術表格 + 數位游牧數據
  - `OtherWorksSection`: 5 個其他專案 + 學歷
  - `Navbar`: 固定導覽列（滾動變色）
  - `Footer`: 聯繫資訊
- `npm run build` 通過無錯誤
- Word 履歷 (.docx) 也在此資料夾中（不在 git 追蹤內）

### What Remains
1. **Navbar 修正**
   - 已修正透明/深藍背景和文字顏色切換
   - 需要視覺驗證修正是否生效
   - Navbar py-4 的上下 padding 可能需要微調

2. **GitHub Pages 部署**
   - `vite.config.ts` 已設定 `base: '/resume-rebas/'`
   - 需要：建立 GitHub repo → push → 設定 GitHub Pages
   - 之後掛自訂網域（用 CNAME 檔案）

3. **手機版驗證**
   - 桌面版已確認正常
   - 需要用 resize 工具確認手機版排版

4. **可能的改進**
   - 專案截圖（目前是純文字卡片）
   - 滾動動畫（intersection observer）
   - Facebook 文章可考慮嵌入 iframe 而非純連結
   - email 地址需要使用者確認（目前用 kaku88life@gmail.com）

### Key Files
- `src/data/resume-data.ts` — 所有文字內容集中在此，修改內容只需改這裡
- `src/components/` — 6 個元件
- `vite.config.ts` — base path 設定（GitHub Pages 用）

### Commands
```bash
cd "C:/vibe coding/Resume"
npm run dev          # 本地開發 (port 5173)
npm run build        # 建置
npx vite preview     # 預覽建置結果
```

### Context
- 使用者：郭子睿，應徵野球革命後端工程師
- 設計風格：藍白色系（富邦悍將 + 遊騎兵球迷）
- Hero 以棒球產業願景開場，不是傳統的「我是誰」
- 所有能力描述都誠實區分「我做的」vs「AI 協助的」
