"""Generate a professional PDF resume from resume data."""
from reportlab.lib.pagesizes import A4
from reportlab.lib.units import mm
from reportlab.lib.colors import HexColor, white, black
from reportlab.lib.styles import ParagraphStyle
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle,
    HRFlowable, KeepTogether
)
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.lib.enums import TA_LEFT, TA_CENTER
import os

# Register CJK font
font_paths = [
    "C:/Windows/Fonts/msjh.ttc",      # Microsoft JhengHei
    "C:/Windows/Fonts/msyh.ttc",       # Microsoft YaHei
    "C:/Windows/Fonts/mingliu.ttc",    # MingLiU
]
FONT_NAME = "Helvetica"
for fp in font_paths:
    if os.path.exists(fp):
        try:
            pdfmetrics.registerFont(TTFont("CJK", fp, subfontIndex=0))
            pdfmetrics.registerFont(TTFont("CJK-Bold", fp, subfontIndex=1))
            FONT_NAME = "CJK"
            break
        except Exception:
            try:
                pdfmetrics.registerFont(TTFont("CJK", fp))
                FONT_NAME = "CJK"
                break
            except Exception:
                continue

BOLD_FONT = "CJK-Bold" if FONT_NAME == "CJK" else "Helvetica-Bold"

# Colors
PRIMARY = HexColor("#003366")
PRIMARY_LIGHT = HexColor("#0a4a8a")
ACCENT = HexColor("#c4a265")
GRAY = HexColor("#555555")
LIGHT_GRAY = HexColor("#999999")
BG_LIGHT = HexColor("#f0f4f8")

# Styles
style_name = ParagraphStyle("Name", fontName=BOLD_FONT, fontSize=22, textColor=PRIMARY, leading=28)
style_position = ParagraphStyle("Position", fontName=FONT_NAME, fontSize=11, textColor=GRAY, leading=16)
style_contact = ParagraphStyle("Contact", fontName=FONT_NAME, fontSize=8.5, textColor=LIGHT_GRAY, leading=13)
style_summary = ParagraphStyle("Summary", fontName=FONT_NAME, fontSize=9, textColor=HexColor("#333333"), leading=14, spaceAfter=4)
style_section = ParagraphStyle("Section", fontName=BOLD_FONT, fontSize=13, textColor=PRIMARY, leading=18, spaceBefore=10, spaceAfter=6)
style_subsection = ParagraphStyle("Subsection", fontName=BOLD_FONT, fontSize=10, textColor=HexColor("#222222"), leading=14)
style_body = ParagraphStyle("Body", fontName=FONT_NAME, fontSize=8.5, textColor=HexColor("#444444"), leading=13)
style_small = ParagraphStyle("Small", fontName=FONT_NAME, fontSize=7.5, textColor=LIGHT_GRAY, leading=11)
style_bullet = ParagraphStyle("Bullet", fontName=FONT_NAME, fontSize=8.5, textColor=HexColor("#444444"), leading=12, leftIndent=10, bulletIndent=0)
style_tag = ParagraphStyle("Tag", fontName=FONT_NAME, fontSize=7.5, textColor=PRIMARY, leading=11)
style_highlight = ParagraphStyle("Highlight", fontName=BOLD_FONT, fontSize=8.5, textColor=PRIMARY, leading=13)

def section_header(title):
    return [
        HRFlowable(width="100%", thickness=1.5, color=PRIMARY, spaceBefore=6, spaceAfter=2),
        Paragraph(title, style_section),
    ]

def bullet(text):
    return Paragraph(f"<bullet>&bull;</bullet> {text}", style_bullet)

def build_pdf():
    output_path = "C:/vibe coding/Resume/郭子睿_履歷.pdf"
    doc = SimpleDocTemplate(
        output_path,
        pagesize=A4,
        topMargin=15*mm,
        bottomMargin=12*mm,
        leftMargin=18*mm,
        rightMargin=18*mm,
    )
    story = []

    # === HEADER ===
    story.append(Paragraph("郭子睿  Kaku", style_name))
    story.append(Paragraph("應徵野球革命 後端工程師", style_position))
    story.append(Spacer(1, 3))
    story.append(Paragraph(
        "Email: kaku88life@gmail.com  |  Web: kaku88life.com  |  LINE: kaku850205",
        style_contact
    ))
    story.append(Spacer(1, 4))

    # Summary
    story.append(Paragraph(
        "腦中永遠有下一個想做的東西——非本科出身，2026 年 1 月開始透過 Claude Code 自學開發，"
        "3 個月內嘗試了超過 8 個專案，從麻將遊戲到 SaaS CRM、實坪制實價登錄網站、Fantasy Baseball 網站、"
        "個人學習、資源管理、工作流優化等等，都從真實生活需求出發。"
        "我不擅長寫程式，但換位思考、從使用者的角度定義問題，透過工具快速驗證想法、不斷嘗試，是我正在努力的方向。",
        style_summary
    ))

    # Baseball identity
    tags = "15 年球迷  |  10 年 Fantasy Baseball  |  高中校隊 + 大學乙組  |  富邦悍將 & 遊騎兵  |  熟悉 WAR / FIP / Barrel% / wRC+"
    story.append(Paragraph(tags, style_tag))

    # === WHY REBAS ===
    story.extend(section_header("為什麼是野球革命"))

    motivations = [
        "曾是野球革命的付費用戶——15 年球迷、10 年 Fantasy 玩家、打過棒球。身為一般球迷，我理解訂閱的門檻在哪裡，也對如何擴大用戶群有具體的想法。",
        "日文 N1 + 棒球知識——能直接閱讀日本棒球媒體原文與 NPB 數據來源。",
        "AI 開發效率——3 個月內從零完成 3 個生產級應用，證明快速交付能力。",
        "數據敏感度經商業驗證——在信義房屋自行建立客戶數據分析體系，用數據驅動決策。",
        "自律與持續投入——日本數位游牧一個月，539 個 commits。方法到處都有，但想做到什麼才是關鍵。",
        "誠實的期待——希望磨練後端技術，用棒球知識和產品直覺為野球革命創造價值。如果有其他更合適的角色，也很樂意討論。",
    ]
    for m in motivations:
        story.append(bullet(m))

    # === EXPERIENCE ===
    story.extend(section_header("經歷"))

    experiences = [
        {
            "period": "2026/01 - 現在",
            "title": "自學開發",
            "role": "Vibe Coding with Claude Code",
            "desc": "3 個月內獨立交付 3 個生產級 Web 應用，涵蓋棒球數據、不動產 AI、CRM 系統。",
            "highlights": "3 個生產級應用 | 539 commits/月（日本遠端） | 200+ REST API 端點 | 57+ 資料庫表",
        },
        {
            "period": "2022/11 - 2025/08",
            "title": "信義房屋 日本事業 台灣分處",
            "role": "跨國不動產業務",
            "desc": "管理 4,132 筆客戶，促成 92 件日本不動產成交。",
            "details": [
                "自行建立客戶數據分析體系（Excel 資料庫）",
                "使用 LINE 官方帳號進行客戶管理與行銷",
                "使用 Canva 製作行銷素材與視覺內容",
                "每年舉辦 100+ 場說明會",
                "專案規劃、執行與跨部門協調",
            ],
            "highlights": "4,132 筆客戶 | 92 件成交 | 100+ 場說明會/年 | 22.5% 再購率",
        },
        {
            "period": "2019/11 - 2022/11",
            "title": "信義房屋 台灣",
            "role": "不動產業務",
            "desc": "台灣不動產買賣仲介，3 年業務經驗。",
            "details": ["客戶開發與關係維護", "市場資料收集、彙整與分析報告", "跨部門溝通協調"],
        },
    ]

    for exp in experiences:
        group = []
        group.append(Paragraph(
            f"<font color='#999999'>{exp['period']}</font>  "
            f"<b>{exp['title']}</b>  "
            f"<font color='#c4a265'>{exp['role']}</font>",
            ParagraphStyle("ExpTitle", fontName=FONT_NAME, fontSize=9, leading=14)
        ))
        group.append(Paragraph(exp["desc"], style_body))
        if "details" in exp:
            for d in exp["details"]:
                group.append(bullet(d))
        if "highlights" in exp:
            group.append(Paragraph(exp["highlights"], style_highlight))
        group.append(Spacer(1, 4))
        story.append(KeepTogether(group))

    # === EDUCATION & LANGUAGES ===
    story.append(Paragraph(
        "<b>學歷</b>  輔仁大學 日本語文學系 | 台北市立松山高中      "
        "<b>語言</b>  中文（母語）| 日文 JLPT N1 | 英文（基礎溝通）",
        ParagraphStyle("EduLang", fontName=FONT_NAME, fontSize=8.5, textColor=HexColor("#444444"), leading=13)
    ))

    # === PROJECTS ===
    story.extend(section_header("主要專案"))

    projects = [
        {
            "name": "5-Man Fantasy League",
            "tech": "FastAPI, Next.js 15, PostgreSQL, Docker",
            "url": "5man-keeperleague.zeabur.app",
            "desc": "16 隊 Keeper League 管理平台。以 Commissioner 身份定義所有規則，自動化合約計算、薪資驗算。",
            "result": "16 位成員使用中，選秀前準備作業從數天縮短到 1 小時。",
        },
        {
            "name": "實家 Jikka 實坪制不動產平台",
            "tech": "Next.js 14, Prisma, PostgreSQL, OpenAI API, NewebPay",
            "url": "real-estate-ai-adviser.kaku88life.com",
            "desc": "用「實坪單價」還原每坪真實使用空間價值。含 AI 分析、金流訂閱、互動式地圖（15 萬+ POI）。",
            "result": "23 個資料模型、金流訂閱、AI 分析的完整 SaaS 產品。",
        },
        {
            "name": "多租戶 CRM 系統",
            "tech": "Next.js 14, FastAPI, SQLAlchemy, PostgreSQL",
            "desc": "通用型 SaaS CRM，支援 10+ 產業模板、會員生命週期分級。",
            "result": "25 張資料表、158+ API 端點、完整預約/會員/分析功能。",
        },
    ]

    for p in projects:
        group = []
        url_text = f"  <font color='#999999'>({p['url']})</font>" if "url" in p else ""
        group.append(Paragraph(
            f"<b>{p['name']}</b>{url_text}",
            ParagraphStyle("ProjTitle", fontName=FONT_NAME, fontSize=9.5, leading=14, textColor=HexColor("#222222"))
        ))
        group.append(Paragraph(
            f"<font color='#003366'>{p['tech']}</font>",
            style_small
        ))
        group.append(Paragraph(p["desc"], style_body))
        group.append(Paragraph(f"<b>Result:</b> {p['result']}", style_highlight))
        group.append(Spacer(1, 4))
        story.append(KeepTogether(group))

    # Other projects
    story.append(Paragraph("<b>其他專案:</b> LINE 靈感助手 Bot | 個人部落格 (kaku88life.com) | GAS 美甲預約系統 | 貸款試算器 | 程式規劃工具", style_body))

    # === SKILLS ===
    story.extend(section_header("能力"))

    story.append(Paragraph("<b>I Do This (我負責的部分)</b>", style_subsection))
    my_skills = [
        "產品需求定義與功能規劃", "商業邏輯規格描述（棒球規則/不動產稅制/CRM 分層 → AI 可實作規格）",
        "第三方服務申請與帳號管理", "視覺 QA 與問題回報", "基礎 Git 操作", "數據分析與報表建立"
    ]
    story.append(Paragraph(" | ".join(my_skills), style_body))
    story.append(Spacer(1, 3))

    story.append(Paragraph("<b>AI Assists (AI 協助，我理解概念)</b>", style_subsection))
    ai_skills = ["技術方案選型", "資料庫結構設計", "API 串接", "部署流程"]
    story.append(Paragraph(" | ".join(ai_skills), style_body))
    story.append(Spacer(1, 3))

    story.append(Paragraph("<b>Tech Stack</b>", style_subsection))
    tech_lines = [
        "後端: FastAPI, Next.js API Routes  |  資料庫: PostgreSQL, Prisma, SQLAlchemy",
        "前端: React, Next.js, TypeScript, Tailwind CSS  |  部署: Docker, Zeabur, GitHub",
        "API: Yahoo Fantasy, MLB Stats, LINE, OpenAI, NewebPay, Google OAuth",
        "工具: Claude Code (Vibe Coding), Git",
    ]
    for line in tech_lines:
        story.append(Paragraph(line, style_body))

    # === FOOTER ===
    story.append(Spacer(1, 10))
    story.append(HRFlowable(width="100%", thickness=0.5, color=LIGHT_GRAY))
    story.append(Paragraph(
        "Work for life, work with passion  |  kaku88life.github.io/Resume/",
        ParagraphStyle("Footer", fontName=FONT_NAME, fontSize=7.5, textColor=LIGHT_GRAY, alignment=TA_CENTER, leading=12, spaceBefore=4)
    ))

    doc.build(story)
    print(f"PDF generated: {output_path}")

if __name__ == "__main__":
    build_pdf()
