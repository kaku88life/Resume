"""Concise 2-page PDF resume. Baseball-related content first."""
from reportlab.lib.pagesizes import A4
from reportlab.lib.units import mm
from reportlab.lib.colors import HexColor, Color
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.enums import TA_CENTER
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle,
    KeepTogether, Image, Flowable, HRFlowable, PageBreak
)
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
import os

for fp in ["C:/Windows/Fonts/msjh.ttc", "C:/Windows/Fonts/msyh.ttc"]:
    if os.path.exists(fp):
        try:
            pdfmetrics.registerFont(TTFont("CJK", fp, subfontIndex=0))
            pdfmetrics.registerFont(TTFont("CJK-Bold", fp, subfontIndex=1))
            break
        except Exception:
            pdfmetrics.registerFont(TTFont("CJK", fp))
            break

F = "CJK"
FB = "CJK-Bold"
PRIMARY = HexColor("#003366")
ACCENT = HexColor("#c4a265")
DARK = HexColor("#1a1a1a")
GRAY = HexColor("#555555")
LGRAY = HexColor("#999999")
WHITE = HexColor("#ffffff")
SURFACE = HexColor("#f0f4f8")

W, H = A4
CW = W - 36 * mm


class StatBox(Flowable):
    def __init__(self, number, label, width=100, height=56, bg=PRIMARY):
        Flowable.__init__(self)
        self.number, self.label = str(number), label
        self.bw, self.bh, self.bg = width, height, bg
    def wrap(self, *a): return self.bw, self.bh
    def draw(self):
        c = self.canv
        c.setFillColor(self.bg)
        c.roundRect(0, 0, self.bw, self.bh, 6, fill=1, stroke=0)
        c.setFillColor(WHITE)
        c.setFont(FB, 22)
        c.drawCentredString(self.bw/2, self.bh-32, self.number)
        c.setFont(F, 8.5)
        c.setFillColor(Color(1,1,1,0.7))
        c.drawCentredString(self.bw/2, 7, self.label)


class SectionBar(Flowable):
    def __init__(self, title, width=None):
        Flowable.__init__(self)
        self.title, self.sw = title, width or CW
    def wrap(self, *a): return self.sw, 28
    def draw(self):
        c = self.canv
        c.setFillColor(ACCENT)
        c.rect(0, 5, 5, 19, fill=1, stroke=0)
        c.setFillColor(PRIMARY)
        c.setFont(FB, 15)
        c.drawString(13, 7, self.title)
        tw = c.stringWidth(self.title, FB, 15)
        c.setStrokeColor(HexColor("#ddd"))
        c.setLineWidth(0.5)
        c.line(18+tw, 14, self.sw, 14)


def ps(name, **kw):
    d = {"fontName": F, "fontSize": 11, "leading": 16, "textColor": GRAY}
    d.update(kw)
    return ParagraphStyle(name, **d)

S = {
    "name": ps("name", fontName=FB, fontSize=28, textColor=PRIMARY, leading=34),
    "pos": ps("pos", fontSize=13, textColor=GRAY, leading=17),
    "contact": ps("contact", fontSize=10, textColor=LGRAY, leading=14),
    "summary": ps("summary", fontSize=11, textColor=DARK, leading=16.5),
    "tag": ps("tag", fontSize=9.5, textColor=PRIMARY, leading=14),
    "body": ps("body", fontSize=11, textColor=HexColor("#444"), leading=16),
    "bullet": ps("bullet", fontSize=11, textColor=HexColor("#444"), leading=15.5, leftIndent=14, bulletIndent=0),
    "small": ps("small", fontSize=9, textColor=LGRAY, leading=13),
    "sub": ps("sub", fontName=FB, fontSize=12, textColor=DARK, leading=16),
    "hl": ps("hl", fontName=FB, fontSize=11, textColor=PRIMARY, leading=16),
    "center": ps("center", fontSize=8.5, textColor=LGRAY, alignment=TA_CENTER),
    "proj_title": ps("pt", fontName=FB, fontSize=12.5, textColor=DARK, leading=17),
    "exp_title": ps("et", fontSize=11, textColor=DARK, leading=16),
    "motiv": ps("motiv", fontSize=11, textColor=HexColor("#444"), leading=16),
    "motto": ps("motto", fontSize=10, textColor=LGRAY, leading=14),
}

def bul(text):
    return Paragraph(f"<bullet>&bull;</bullet> {text}", S["bullet"])

def link(url, text=None):
    return f'<a href="{url}" color="#0066cc">{text or url}</a>'


def build_pdf():
    out = "C:/vibe coding/Resume/郭子睿_履歷_2p_v2.pdf"
    doc = SimpleDocTemplate(out, pagesize=A4,
        topMargin=14*mm, bottomMargin=12*mm, leftMargin=18*mm, rightMargin=18*mm)
    story = []

    # ══════════════════════════════════════════════
    # PAGE 1: Hero + 動機 + 棒球專案 + FB文章
    # ══════════════════════════════════════════════

    # Hero
    photo_path = "C:/vibe coding/Resume/public/profile.jpg"
    if os.path.exists(photo_path):
        photo = Image(photo_path, width=28*mm, height=28*mm)
        name_parts = [
            Paragraph("郭子睿  <font color='#999999'>Kaku</font>", S["name"]),
            Paragraph("應徵野球革命 後端工程師", S["pos"]),
            Spacer(1, 3),
            Paragraph(
                f'{link("https://mail.google.com/mail/?view=cm&to=kaku88life@gmail.com", "Email")}  |  '
                f'{link("https://kaku88life.com", "kaku88life.com")}  |  LINE: kaku850205',
                S["contact"]),
        ]
        header = Table([[photo, name_parts]], colWidths=[32*mm, CW-32*mm])
        header.setStyle(TableStyle([
            ("VALIGN", (0,0), (-1,-1), "MIDDLE"),
            ("LEFTPADDING", (0,0), (-1,-1), 0),
            ("RIGHTPADDING", (0,0), (-1,-1), 0),
        ]))
        story.append(header)
    story.append(Spacer(1, 10))

    # Summary
    story.append(Paragraph(
        "腦中永遠有下一個想做的東西——非本科出身，2026 年 1 月開始透過 Claude Code 自學開發，"
        "3 個月內嘗試了超過 8 個專案。我不擅長寫程式，但換位思考、從使用者的角度定義問題，"
        "透過工具快速驗證想法、不斷嘗試，是我正在努力的方向。",
        S["summary"]))
    story.append(Spacer(1, 6))

    # Tags
    story.append(Paragraph(
        "15 年球迷  |  10 年 Fantasy Baseball  |  高中校隊 + 大學乙組  |  "
        "富邦悍將 & 遊騎兵  |  熟悉 WAR / FIP / Barrel% / wRC+", S["tag"]))
    story.append(Spacer(1, 12))

    # Stats
    sw = CW/5 - 4
    stats = Table([[
        StatBox("8+", "專案數", sw, 56, PRIMARY),
        StatBox("18", "Commits/Day", sw, 56, PRIMARY),
        StatBox("200+", "API 端點", sw, 56, PRIMARY),
        StatBox("57+", "資料庫表", sw, 56, PRIMARY),
        StatBox("N1", "日文 JLPT", sw, 56, ACCENT),
    ]], colWidths=[sw+4]*5)
    stats.setStyle(TableStyle([
        ("ALIGN", (0,0), (-1,-1), "CENTER"),
        ("LEFTPADDING", (0,0), (-1,-1), 2),
        ("RIGHTPADDING", (0,0), (-1,-1), 2),
    ]))
    story.append(stats)
    story.append(Spacer(1, 16))

    # ── 為什麼是野球革命 ──
    story.append(SectionBar("為什麼是野球革命"))
    story.append(Spacer(1, 4))
    story.append(Paragraph(
        "Work for life, work with passion——當工作來自真心在乎的事，投入程度不需要任何人督促。",
        S["motto"]))
    story.append(Spacer(1, 8))

    motivations = [
        "曾是野球革命的付費用戶——15 年球迷、10 年 Fantasy 玩家、日文 N1，能直接閱讀日本棒球媒體原文與 NPB 數據來源。身為一般球迷，我理解訂閱的門檻，也對擴大用戶群有具體想法。",
        "3 個月內從零完成 3 個生產級應用——在信義房屋也曾自行建立客戶數據分析體系，用數據驅動決策。",
        "自律與持續投入——日本數位游牧一個月，平均每日 18 commits。只要決定要做，就會找到方法做到。",
        "誠實的期待——希望磨練後端技術，用棒球知識和產品直覺為野球革命創造價值。如果有其他更合適的角色，也很樂意討論。",
    ]
    for i, m in enumerate(motivations):
        row = Table(
            [[Paragraph(f"<font color='#c4a265'><b>{i+1}</b></font>",
                ps(f"mn{i}", fontName=FB, fontSize=12, textColor=ACCENT, alignment=TA_CENTER)),
              Paragraph(m, S["motiv"])]],
            colWidths=[20, CW-20])
        row.setStyle(TableStyle([
            ("VALIGN", (0,0), (-1,-1), "TOP"),
            ("LEFTPADDING", (0,0), (-1,-1), 0),
            ("TOPPADDING", (0,0), (-1,-1), 2),
            ("BOTTOMPADDING", (0,0), (-1,-1), 2),
        ]))
        story.append(row)

    story.append(Spacer(1, 10))

    # ── 棒球專案（最相關，放 Page 1）──
    story.append(KeepTogether([
        Paragraph(f"<b>5-Man Fantasy League</b>  {link('https://5man-keeperleague.zeabur.app/2026', 'Demo')}", S["proj_title"]),
        Paragraph("<font color='#003366'>FastAPI  |  Next.js 15  |  PostgreSQL  |  Docker</font>", S["small"]),
        Spacer(1, 3),
        Paragraph("身為 16 隊 Keeper League 的聯盟長，將合約計算、薪資驗算全面自動化。", S["body"]),
        Paragraph(f"<b>Result:</b> 16 位成員使用中，選秀前準備從數天縮短到 1 小時。", S["hl"]),
    ]))

    story.append(Spacer(1, 8))

    # FB articles (compact)
    story.append(Paragraph(
        f"<b>棒球分析文章:</b> "
        f"{link('https://www.facebook.com/share/p/1P5o6tyCg5/', '富邦悍將 25 人保護名單推測')} | "
        f"{link('https://www.facebook.com/share/p/14brDiFJY6n/', '江少慶 FA 補償數據分析')} "
        f"<font color='#003366'>(Data source: Rebas)</font>",
        S["body"]))

    # ══════════════════════════════════════════════
    # PAGE 2: 其他專案 + 經歷 + Tech Stack
    # ══════════════════════════════════════════════
    story.append(PageBreak())

    story.append(SectionBar("Projects"))
    story.append(Spacer(1, 10))

    other_projects = [
        {
            "name": "實家 Jikka 實坪制不動產平台",
            "tech": "Next.js 14  |  Prisma  |  PostgreSQL  |  OpenAI API  |  NewebPay",
            "url": "https://real-estate-ai-adviser.kaku88life.com/",
            "why": "用「實坪單價」還原真實房價——挖掘更深層的數據，讓使用者看到更貼近真實的面貌。",
            "result": "23 個資料模型、金流訂閱、AI 分析、互動式地圖（15 萬+ POI）。",
        },
        {
            "name": "多租戶 CRM 系統",
            "tech": "Next.js 14  |  FastAPI  |  SQLAlchemy  |  PostgreSQL",
            "why": "從太太的美甲預約需求出發，進化成支援 10+ 產業模板的通用型 SaaS CRM。",
            "result": "25 張資料表、158+ API 端點、完整預約/會員/分析功能。",
        },
    ]
    for p in other_projects:
        g = []
        url_link = f"  {link(p['url'], 'Demo')}" if "url" in p else ""
        g.append(Paragraph(f"<b>{p['name']}</b>{url_link}", S["proj_title"]))
        g.append(Paragraph(f"<font color='#003366'>{p['tech']}</font>", S["small"]))
        g.append(Spacer(1, 3))
        g.append(Paragraph(f"<font color='#c4a265'><b>WHY</b></font>  {p['why']}", S["body"]))
        g.append(Paragraph(f"<b>Result:</b> {p['result']}", S["hl"]))
        g.append(Spacer(1, 10))
        story.append(KeepTogether(g))

    # Other projects (one line)
    story.append(Paragraph(
        f"<b>Other:</b> LINE Bot | {link('https://kaku88life.com', '個人部落格')} | "
        "GAS 預約系統 | 貸款試算器 | 程式規劃工具", S["body"]))
    story.append(Spacer(1, 14))

    # ── 經歷 ──
    story.append(SectionBar("經歷"))
    story.append(Spacer(1, 8))

    experiences = [
        ("2026/01 - 現在", "自學開發", "Vibe Coding with Claude Code",
         "3 個月內獨立交付 3 個生產級 Web 應用（棒球數據、不動產 AI、CRM）。",
         "3 個生產級應用  |  200+ API 端點  |  57+ 資料庫表"),
        ("2022/11 - 2025/08", "信義房屋 日本事業", "專案經理",
         "管理 4,132 筆客戶、促成 92 件成交。自行建立數據分析體系、每年 100+ 場說明會。",
         "4,132 筆客戶  |  92 件成交  |  22.5% 再購率"),
        ("2019/11 - 2022/11", "信義房屋 台灣", "不動產業務",
         "3 年業務經驗。客戶開發、資料分析、跨部門溝通。", None),
    ]
    for period, title, role, desc, tags in experiences:
        g = []
        g.append(Paragraph(f"<font color='#999'>{period}</font>",
            ps("period", fontSize=9.5, textColor=LGRAY, leading=13)))
        g.append(Paragraph(f"<b>{title}</b>  <font color='#c4a265'>{role}</font>",
            ps("exp_name", fontName=FB, fontSize=12, textColor=DARK, leading=16)))
        g.append(Spacer(1, 2))
        g.append(Paragraph(desc, S["body"]))
        if tags:
            g.append(Spacer(1, 2))
            g.append(Paragraph(f"<font color='#003366'><b>{tags}</b></font>",
                ps("etag", fontSize=9, textColor=PRIMARY, leading=13)))
        g.append(Spacer(1, 8))
        story.append(KeepTogether(g))

    # 學歷 + 語言
    story.append(Paragraph(
        "<b>學歷</b>  輔仁大學 日本語文學系  |  松山高中      "
        "<b>語言</b>  中文（母語）| 日文 JLPT N1 | 英文（基礎溝通）",
        S["body"]))
    story.append(Spacer(1, 12))

    # Tech Stack
    story.append(SectionBar("Tech Stack"))
    story.append(Spacer(1, 6))
    tech = [
        ["後端", "FastAPI (Python)、Next.js API Routes"],
        ["資料庫", "PostgreSQL、Prisma ORM、SQLAlchemy ORM"],
        ["前端", "React、Next.js、TypeScript、Tailwind CSS"],
        ["API", "Yahoo Fantasy、MLB Stats、LINE、OpenAI、NewebPay"],
        ["部署/工具", "Docker、Zeabur、GitHub、Git、Claude Code"],
    ]
    tt = Table(tech, colWidths=[CW*0.16, CW*0.84])
    tt.setStyle(TableStyle([
        ("FONTNAME", (0,0), (0,-1), FB), ("FONTNAME", (1,0), (1,-1), F),
        ("FONTSIZE", (0,0), (-1,-1), 10), ("LEADING", (0,0), (-1,-1), 15),
        ("TEXTCOLOR", (0,0), (0,-1), PRIMARY), ("TEXTCOLOR", (1,0), (1,-1), GRAY),
        ("LEFTPADDING", (0,0), (-1,-1), 6),
        ("TOPPADDING", (0,0), (-1,-1), 4), ("BOTTOMPADDING", (0,0), (-1,-1), 4),
        ("ROWBACKGROUNDS", (0,0), (-1,-1), [SURFACE, WHITE]),
        ("BOX", (0,0), (-1,-1), 0.5, HexColor("#e0e0e0")),
        ("INNERGRID", (0,0), (-1,-1), 0.3, HexColor("#eee")),
    ]))
    story.append(tt)

    # Footer
    story.append(Spacer(1, 12))
    story.append(HRFlowable(width="100%", thickness=0.5, color=LGRAY))
    story.append(Spacer(1, 4))
    story.append(Paragraph(
        f'Work for life, work with passion  |  {link("https://kaku88life.github.io/Resume/", "kaku88life.github.io/Resume")}',
        S["center"]))

    doc.build(story)
    print(f"PDF generated: {out}")

if __name__ == "__main__":
    build_pdf()
