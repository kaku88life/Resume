"""Generate PDF resume matching website layout. 4 pages, clean page breaks."""
from reportlab.lib.pagesizes import A4
from reportlab.lib.units import mm
from reportlab.lib.colors import HexColor, Color
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.enums import TA_LEFT, TA_CENTER
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
    def __init__(self, number, label, width=100, height=62, bg=PRIMARY):
        Flowable.__init__(self)
        self.number, self.label = str(number), label
        self.bw, self.bh, self.bg = width, height, bg
    def wrap(self, *a): return self.bw, self.bh
    def draw(self):
        c = self.canv
        c.setFillColor(self.bg)
        c.roundRect(0, 0, self.bw, self.bh, 6, fill=1, stroke=0)
        c.setFillColor(WHITE)
        c.setFont(FB, 24)
        c.drawCentredString(self.bw/2, self.bh-36, self.number)
        c.setFont(F, 9)
        c.setFillColor(Color(1,1,1,0.7))
        c.drawCentredString(self.bw/2, 8, self.label)


class SectionBar(Flowable):
    def __init__(self, title, width=None):
        Flowable.__init__(self)
        self.title, self.sw = title, width or CW
    def wrap(self, *a): return self.sw, 30
    def draw(self):
        c = self.canv
        c.setFillColor(ACCENT)
        c.rect(0, 6, 5, 20, fill=1, stroke=0)
        c.setFillColor(PRIMARY)
        c.setFont(FB, 16)
        c.drawString(14, 8, self.title)
        tw = c.stringWidth(self.title, FB, 16)
        c.setStrokeColor(HexColor("#ddd"))
        c.setLineWidth(0.5)
        c.line(20+tw, 16, self.sw, 16)


class FlowStep(Flowable):
    def __init__(self, num, label, width=90, has_arrow=True):
        Flowable.__init__(self)
        self.num, self.label, self.fw, self.has_arrow = str(num), label, width, has_arrow
    def wrap(self, *a): return self.fw, 42
    def draw(self):
        c = self.canv
        cx = 20
        c.setFillColor(PRIMARY)
        c.circle(cx, 28, 14, fill=1, stroke=0)
        c.setFillColor(WHITE)
        c.setFont(FB, 12)
        c.drawCentredString(cx, 24, self.num)
        c.setFillColor(GRAY)
        c.setFont(F, 9)
        c.drawCentredString(cx, 6, self.label)
        if self.has_arrow:
            c.setStrokeColor(HexColor("#bbb"))
            c.setLineWidth(1.2)
            ax = self.fw - 12
            c.line(40, 28, ax, 28)
            c.line(ax-5, 32, ax, 28)
            c.line(ax-5, 24, ax, 28)


def ps(name, **kw):
    d = {"fontName": F, "fontSize": 11, "leading": 16, "textColor": GRAY}
    d.update(kw)
    return ParagraphStyle(name, **d)

S = {
    "name": ps("name", fontName=FB, fontSize=30, textColor=PRIMARY, leading=36),
    "pos": ps("pos", fontSize=14, textColor=GRAY, leading=18),
    "contact": ps("contact", fontSize=10, textColor=LGRAY, leading=14),
    "summary": ps("summary", fontSize=11, textColor=DARK, leading=17),
    "tag": ps("tag", fontSize=9.5, textColor=PRIMARY, leading=14),
    "body": ps("body", fontSize=10.5, textColor=HexColor("#444"), leading=16),
    "bullet": ps("bullet", fontSize=10.5, textColor=HexColor("#444"), leading=15.5, leftIndent=14, bulletIndent=0),
    "small": ps("small", fontSize=9, textColor=LGRAY, leading=13),
    "sub": ps("sub", fontName=FB, fontSize=12, textColor=DARK, leading=17),
    "hl": ps("hl", fontName=FB, fontSize=10.5, textColor=PRIMARY, leading=16),
    "center": ps("center", fontSize=8.5, textColor=LGRAY, alignment=TA_CENTER),
    "proj_title": ps("pt", fontName=FB, fontSize=13, textColor=DARK, leading=18),
    "exp_title": ps("et", fontSize=12, textColor=DARK, leading=17),
    "fb": ps("fb", fontName=FB, fontSize=11, textColor=DARK, leading=16),
    "motto": ps("motto", fontSize=10, textColor=LGRAY, leading=14),
    "motiv": ps("motiv", fontSize=11, textColor=HexColor("#444"), leading=16),
}

def bul(text):
    return Paragraph(f"<bullet>&bull;</bullet> {text}", S["bullet"])

def link(url, text=None):
    return f'<a href="{url}" color="#0066cc">{text or url}</a>'


def build_pdf():
    out = "C:/vibe coding/Resume/郭子睿_履歷_final.pdf"
    doc = SimpleDocTemplate(out, pagesize=A4,
        topMargin=14*mm, bottomMargin=12*mm, leftMargin=18*mm, rightMargin=18*mm)
    story = []

    # ══════════════════════════════════════════════
    # PAGE 1: Hero + 為什麼是野球革命
    # ══════════════════════════════════════════════

    # ── Hero ──
    photo_path = "C:/vibe coding/Resume/public/profile.jpg"
    if os.path.exists(photo_path):
        photo = Image(photo_path, width=30*mm, height=30*mm)
        name_parts = [
            Paragraph("郭子睿  <font color='#999999'>Kaku</font>", S["name"]),
            Paragraph("應徵野球革命 後端工程師", S["pos"]),
            Spacer(1, 4),
            Paragraph(
                f'{link("https://mail.google.com/mail/?view=cm&to=kaku88life@gmail.com", "Email")}  |  '
                f'{link("https://kaku88life.com", "kaku88life.com")}  |  LINE: kaku850205',
                S["contact"]),
        ]
        header = Table([[photo, name_parts]], colWidths=[34*mm, CW-34*mm])
        header.setStyle(TableStyle([
            ("VALIGN", (0,0), (-1,-1), "MIDDLE"),
            ("LEFTPADDING", (0,0), (-1,-1), 0),
            ("RIGHTPADDING", (0,0), (-1,-1), 0),
        ]))
        story.append(header)
    story.append(Spacer(1, 14))

    story.append(Paragraph(
        "腦中永遠有下一個想做的東西——非本科出身，2026 年 1 月開始透過 Claude Code 自學開發，"
        "3 個月內嘗試了超過 8 個專案，從麻將遊戲到 SaaS CRM、實坪制實價登錄網站、Fantasy Baseball 網站、"
        "個人學習、資源管理、工作流優化等等，都從真實生活需求出發。"
        "我不擅長寫程式，但換位思考、從使用者的角度定義問題，透過工具快速驗證想法、不斷嘗試，是我正在努力的方向。",
        S["summary"]))
    story.append(Spacer(1, 10))

    story.append(Paragraph(
        "15 年球迷  |  10 年 Fantasy Baseball  |  高中校隊 + 大學乙組  |  "
        "富邦悍將 & 遊騎兵  |  熟悉 WAR / FIP / Barrel% / wRC+", S["tag"]))
    story.append(Spacer(1, 16))

    # Stats
    sw = CW/5 - 4
    stats = Table([[
        StatBox("8+", "專案數", sw, 62, PRIMARY),
        StatBox("18", "Commits/Day", sw, 62, PRIMARY),
        StatBox("200+", "API 端點", sw, 62, PRIMARY),
        StatBox("57+", "資料庫表", sw, 62, PRIMARY),
        StatBox("N1", "日文 JLPT", sw, 62, ACCENT),
    ]], colWidths=[sw+4]*5)
    stats.setStyle(TableStyle([
        ("ALIGN", (0,0), (-1,-1), "CENTER"),
        ("VALIGN", (0,0), (-1,-1), "MIDDLE"),
        ("LEFTPADDING", (0,0), (-1,-1), 2),
        ("RIGHTPADDING", (0,0), (-1,-1), 2),
    ]))
    story.append(stats)
    story.append(Spacer(1, 22))

    # ── 為什麼是野球革命 ──
    story.append(SectionBar("為什麼是野球革命"))
    story.append(Spacer(1, 6))
    story.append(Paragraph(
        "Work for life, work with passion——當工作來自真心在乎的事，投入程度不需要任何人督促。",
        S["motto"]))
    story.append(Spacer(1, 10))

    motivations = [
        "曾是野球革命的付費用戶——15 年球迷、10 年 Fantasy 玩家、打過棒球。身為一般球迷，我理解訂閱的門檻在哪裡，也對如何擴大用戶群有具體的想法。",
        "日文 N1 + 棒球知識——能直接閱讀日本棒球媒體原文與 NPB 數據來源。",
        "AI 開發效率——3 個月內從零完成 3 個生產級應用，證明快速交付能力。",
        "數據敏感度經商業驗證——在信義房屋自行建立客戶數據分析體系，用數據驅動決策。",
        "自律與持續投入——日本數位游牧一個月，平均每日 18 commits。方法到處都有，但想做到什麼才是關鍵；只要決定要做，就會找到方法做到。",
        "誠實的期待——希望磨練後端技術，用棒球知識和產品直覺為野球革命創造價值。如果有其他更合適的角色，也很樂意討論。",
    ]
    for i, m in enumerate(motivations):
        row = Table(
            [[Paragraph(f"<font color='#c4a265'><b>{i+1}</b></font>",
                ps(f"mn{i}", fontName=FB, fontSize=12, textColor=ACCENT, alignment=TA_CENTER)),
              Paragraph(m, S["motiv"])]],
            colWidths=[22, CW-22])
        row.setStyle(TableStyle([
            ("VALIGN", (0,0), (-1,-1), "TOP"),
            ("LEFTPADDING", (0,0), (-1,-1), 0),
            ("RIGHTPADDING", (0,0), (-1,-1), 0),
            ("TOPPADDING", (0,0), (-1,-1), 3),
            ("BOTTOMPADDING", (0,0), (-1,-1), 3),
        ]))
        story.append(row)

    # ══════════════════════════════════════════════
    # PAGE 2: FB articles + 經歷
    # ══════════════════════════════════════════════
    story.append(PageBreak())

    # FB Articles
    story.append(Paragraph("<b>棒球分析文章（引用 Rebas 數據）</b>", S["sub"]))
    story.append(Spacer(1, 8))

    fb_articles = [
        ("富邦悍將 25 人保護名單推測", "2025/12/12", "50 讚、6 留言、2 分享",
         "從攻守數據分析各位置保留策略、預測 FA 補償方向。",
         "https://www.facebook.com/share/p/1P5o6tyCg5/"),
        ("江少慶 FA 補償數據分析", "2025/12/19", None,
         "用 FIP、BABIP、K%、BB% 逐年分析江少慶生涯數據。",
         "https://www.facebook.com/share/p/14brDiFJY6n/"),
    ]
    fb_cells = []
    for title, date, eng, desc, url in fb_articles:
        cell = []
        cell.append(Paragraph(f'{link(url, title)}', S["fb"]))
        meta = f"Facebook | {date}"
        if eng: meta += f" | {eng}"
        cell.append(Paragraph(meta, S["small"]))
        cell.append(Spacer(1, 2))
        cell.append(Paragraph(desc + "  <font color='#003366'>Data source: Rebas</font>", S["body"]))
        fb_cells.append(cell)
    fb_table = Table([fb_cells], colWidths=[CW/2-4]*2)
    fb_table.setStyle(TableStyle([
        ("VALIGN", (0,0), (-1,-1), "TOP"),
        ("LEFTPADDING", (0,0), (-1,-1), 0),
        ("RIGHTPADDING", (0,0), (0,0), 10),
    ]))
    story.append(fb_table)
    story.append(Spacer(1, 24))

    # ── 經歷 ──
    story.append(SectionBar("經歷"))
    story.append(Spacer(1, 6))
    story.append(Paragraph("從業務到開發，每段經歷都在累積把需求變成產品的能力。",
        ps("exd", fontSize=10, textColor=LGRAY)))
    story.append(Spacer(1, 12))

    experiences = [
        {
            "period": "2026/01 - 現在", "title": "自學開發",
            "role": "Vibe Coding with Claude Code",
            "desc": "3 個月內獨立交付 3 個生產級 Web 應用，涵蓋棒球數據、不動產 AI、CRM 系統。",
            "tags": ["3 個生產級應用", "200+ REST API 端點", "57+ 資料庫表設計"],
        },
        {
            "period": "2022/11 - 2025/08", "title": "信義房屋 日本事業 台灣分處",
            "role": "跨國不動產業務",
            "desc": "管理 4,132 筆客戶，促成 92 件日本不動產成交。",
            "details": [
                "自行建立客戶數據分析體系（Excel 資料庫）",
                "使用 LINE 官方帳號進行客戶管理與行銷",
                "使用 Canva 製作行銷素材與視覺內容",
                "每年舉辦 100+ 場說明會",
                "專案規劃、執行與跨部門協調",
            ],
            "tags": ["4,132 筆跨六都客戶資料", "92 件成交（80 位客戶）", "每年 100+ 場說明會", "22.5% 再購率"],
        },
        {
            "period": "2019/11 - 2022/11", "title": "信義房屋 台灣",
            "role": "不動產業務",
            "desc": "台灣不動產買賣仲介，3 年業務經驗。",
            "details": ["客戶開發與關係維護", "市場資料收集、彙整與分析報告", "跨部門溝通協調"],
        },
    ]
    for exp in experiences:
        g = []
        g.append(Paragraph(
            f"<font color='#999' size='10'>{exp['period']}</font>   "
            f"<b>{exp['title']}</b>  "
            f"<font color='#c4a265'>{exp['role']}</font>",
            S["exp_title"]))
        g.append(Spacer(1, 3))
        g.append(Paragraph(exp["desc"], S["body"]))
        if "details" in exp:
            for d in exp["details"]:
                g.append(bul(d))
        if "tags" in exp:
            g.append(Spacer(1, 4))
            g.append(Paragraph(
                f"<font color='#003366'><b>{'  |  '.join(exp['tags'])}</b></font>",
                ps("etag", fontSize=9, textColor=PRIMARY, leading=13)))
        g.append(Spacer(1, 12))
        story.append(KeepTogether(g))

    # 學歷 + 語言
    story.append(Spacer(1, 6))
    edu_col = [Paragraph("<b>學歷</b>", S["sub"]), Spacer(1, 6)]
    edu_col.append(Paragraph("輔仁大學 日本語文學系", S["body"]))
    edu_col.append(Paragraph("台北市立松山高中", S["body"]))

    lang_col = [Paragraph("<b>語言能力</b>", S["sub"]), Spacer(1, 6)]
    for name, level, hl in [("中文", "母語", False), ("日文", "JLPT N1", True), ("英文", "基礎溝通", False)]:
        color = "003366" if hl else "555"
        lang_col.append(Paragraph(f"<b>{name}</b>  <font color='#{color}'>{level}</font>", S["body"]))

    el_table = Table([[edu_col, lang_col]], colWidths=[CW*0.5, CW*0.5])
    el_table.setStyle(TableStyle([
        ("VALIGN", (0,0), (-1,-1), "TOP"),
        ("LEFTPADDING", (0,0), (-1,-1), 0),
    ]))
    story.append(el_table)

    # ══════════════════════════════════════════════
    # PAGE 3: How I Think & Work
    # ══════════════════════════════════════════════
    story.append(PageBreak())

    story.append(SectionBar("How I Think & Work"))
    story.append(Spacer(1, 6))
    story.append(Paragraph("我的開發流程、誠實的能力區分、以及技術接觸經驗。",
        ps("skd", fontSize=10, textColor=LGRAY)))
    story.append(Spacer(1, 14))

    # Dev Flow
    story.append(Paragraph("<b>My Development Flow</b>", S["sub"]))
    story.append(Spacer(1, 8))
    steps = ["需求定義", "規格描述", "AI 實作", "視覺驗證", "迭代改進"]
    step_w = CW / 5
    flow_table = Table(
        [[FlowStep(i+1, s, step_w, i<4) for i,s in enumerate(steps)]],
        colWidths=[step_w]*5)
    flow_table.setStyle(TableStyle([
        ("ALIGN", (0,0), (-1,-1), "CENTER"),
        ("VALIGN", (0,0), (-1,-1), "MIDDLE"),
        ("LEFTPADDING", (0,0), (-1,-1), 0),
        ("RIGHTPADDING", (0,0), (-1,-1), 0),
    ]))
    story.append(flow_table)
    story.append(Spacer(1, 18))

    # I Do This / AI Assists
    left = [Paragraph("<b>I Do This</b>", S["sub"]), Spacer(1, 6)]
    for sk in ["產品需求定義與功能規劃", "商業邏輯規格描述", "第三方服務申請與帳號管理",
               "視覺 QA 與問題回報", "基礎 Git 操作", "數據分析與報表建立"]:
        left.append(bul(sk))

    right = [Paragraph("<b>AI Assists</b> <font color='#999'>(我理解概念)</font>", S["sub"]), Spacer(1, 6)]
    for sk in ["技術方案選型", "資料庫結構設計", "API 串接", "部署流程"]:
        right.append(bul(sk))

    sk_table = Table([[left, right]], colWidths=[CW*0.55, CW*0.45])
    sk_table.setStyle(TableStyle([
        ("VALIGN", (0,0), (-1,-1), "TOP"),
        ("LEFTPADDING", (0,0), (-1,-1), 0),
        ("RIGHTPADDING", (0,0), (-1,-1), 4),
    ]))
    story.append(sk_table)
    story.append(Spacer(1, 18))

    # Tech Stack
    story.append(Paragraph("<b>Tech Stack Experience</b>", S["sub"]))
    story.append(Spacer(1, 8))
    tech = [
        ["後端框架", "FastAPI (Python)、Next.js API Routes"],
        ["資料庫", "PostgreSQL、SQLite、Prisma ORM、SQLAlchemy ORM"],
        ["前端", "React、Next.js、TypeScript、Tailwind CSS"],
        ["API 串接", "Yahoo Fantasy、MLB Stats、LINE、OpenAI、NewebPay、Google OAuth"],
        ["部署", "Docker、Zeabur、GitHub"],
        ["版本控制", "Git (push/pull/status/log/commit/branch)"],
        ["AI 開發工具", "Claude Code (Vibe Coding)"],
    ]
    tt = Table(tech, colWidths=[CW*0.18, CW*0.82])
    tt.setStyle(TableStyle([
        ("FONTNAME", (0,0), (0,-1), FB), ("FONTNAME", (1,0), (1,-1), F),
        ("FONTSIZE", (0,0), (-1,-1), 10), ("LEADING", (0,0), (-1,-1), 16),
        ("TEXTCOLOR", (0,0), (0,-1), PRIMARY), ("TEXTCOLOR", (1,0), (1,-1), GRAY),
        ("LEFTPADDING", (0,0), (-1,-1), 6), ("RIGHTPADDING", (0,0), (-1,-1), 6),
        ("TOPPADDING", (0,0), (-1,-1), 5), ("BOTTOMPADDING", (0,0), (-1,-1), 5),
        ("ROWBACKGROUNDS", (0,0), (-1,-1), [SURFACE, WHITE]),
        ("BOX", (0,0), (-1,-1), 0.5, HexColor("#e0e0e0")),
        ("INNERGRID", (0,0), (-1,-1), 0.3, HexColor("#eee")),
    ]))
    story.append(tt)
    story.append(Spacer(1, 18))

    # Nomad stats
    story.append(Paragraph("<b>2026 年 3 月（日本數位游牧）</b>", S["sub"]))
    story.append(Spacer(1, 3))
    story.append(Paragraph("邊旅行邊開發——證明全遠端工作的自律與產出能力",
        ps("nd", fontSize=10, textColor=LGRAY)))
    story.append(Spacer(1, 8))
    nsw = CW/4 - 4
    nomad = Table([[
        StatBox("18", "Commits/Day", nsw, 62, PRIMARY),
        StatBox("539", "Total Commits", nsw, 62, PRIMARY),
        StatBox("4", "Projects", nsw, 62, PRIMARY),
        StatBox("30", "Days", nsw, 62, PRIMARY),
    ]], colWidths=[nsw+4]*4)
    nomad.setStyle(TableStyle([
        ("ALIGN", (0,0), (-1,-1), "CENTER"),
        ("LEFTPADDING", (0,0), (-1,-1), 2),
        ("RIGHTPADDING", (0,0), (-1,-1), 2),
    ]))
    story.append(nomad)

    # ══════════════════════════════════════════════
    # PAGE 4: Projects
    # ══════════════════════════════════════════════
    story.append(PageBreak())

    story.append(SectionBar("Projects"))
    story.append(Spacer(1, 6))
    story.append(Paragraph("每個專案都從真實生活需求出發，彼此之間有技術和經驗的傳承。",
        ps("pd", fontSize=10, textColor=LGRAY)))
    story.append(Spacer(1, 14))

    projects = [
        {
            "name": "5-Man Fantasy League",
            "tech": "FastAPI  |  Next.js 15  |  PostgreSQL  |  Docker  |  Zeabur",
            "url": "https://5man-keeperleague.zeabur.app/2026",
            "why": "身為 16 隊 Keeper League 的聯盟長，將繁瑣的合約計算、薪資驗算全面自動化，讓時間花在分析球員數據和制定戰略。",
            "my_work": [
                "以 Commissioner 身份定義聯盟所有規則（1+1+X 合約制度、薪資上限、FAAB 買斷計算）",
                "規劃功能優先順序：Keeper 選擇核心流程 → 陣容同步 → LINE 通知 → 數據分析",
                "提供 2014-2026 共 12 年歷史資料做合約重建",
            ],
            "result": "16 位成員使用中，選秀前準備作業從數天縮短到 1 小時。",
        },
        {
            "name": "實家 Jikka 實坪制不動產平台",
            "tech": "Next.js 14  |  Prisma  |  PostgreSQL  |  OpenAI API  |  NewebPay  |  Docker",
            "url": "https://real-estate-ai-adviser.kaku88life.com/",
            "why": "用「實坪單價」——（總價-車位價）/ 主建物面積，還原每坪真實使用空間的價值。這跟野球革命在做的事本質上相似：挖掘更深層的數據，讓使用者看到更貼近真實的面貌。",
            "my_work": [
                "基於 5 年業務經驗定義「實坪制」計算邏輯",
                "設計停車位價格推估演算法、AI 智能填表功能",
                "設計點數經濟與訂閱制商業模型",
            ],
            "result": "23 個資料模型、金流訂閱、AI 分析、互動式地圖（15 萬+ POI）。",
        },
        {
            "name": "多租戶 CRM 系統",
            "tech": "Next.js 14  |  FastAPI  |  SQLAlchemy  |  PostgreSQL",
            "why": "從太太的美甲預約需求出發，進化成支援 10+ 產業模板的通用型 SaaS CRM。",
            "my_work": ["SaaS 多租戶架構決策", "會員生命週期分級邏輯（潛在 → 新客 → 常客 → VIP → 流失）"],
            "result": "25 張資料表、158+ API 端點、完整預約/會員/分析功能。",
        },
    ]
    for p in projects:
        g = []
        url_link = f"  {link(p['url'], 'Demo')}" if "url" in p else ""
        g.append(Paragraph(f"<b>{p['name']}</b>{url_link}", S["proj_title"]))
        g.append(Paragraph(f"<font color='#003366'>{p['tech']}</font>", S["small"]))
        g.append(Spacer(1, 5))
        g.append(Paragraph(f"<font color='#c4a265'><b>WHY I BUILT THIS</b></font>  {p['why']}", S["body"]))
        g.append(Spacer(1, 3))
        for w in p["my_work"]:
            g.append(bul(w))
        g.append(Spacer(1, 4))
        g.append(Paragraph(f"<b>Result:</b> {p['result']}", S["hl"]))
        g.append(Spacer(1, 14))
        story.append(KeepTogether(g))

    # Other projects
    story.append(Paragraph("<b>Other Projects</b>", S["sub"]))
    story.append(Spacer(1, 6))
    for o in [
        "LINE 靈感助手 Bot (Python/Flask/OpenAI)",
        f"個人部落格 ({link('https://kaku88life.com', 'kaku88life.com')})",
        "GAS 美甲預約系統",
        "貸款試算器 (多幣別/多語言)",
        "程式規劃工具 (React/XYFlow)",
    ]:
        story.append(bul(o))

    # Footer
    story.append(Spacer(1, 20))
    story.append(HRFlowable(width="100%", thickness=0.5, color=LGRAY))
    story.append(Spacer(1, 6))
    story.append(Paragraph(
        f'Work for life, work with passion  |  {link("https://kaku88life.github.io/Resume/", "kaku88life.github.io/Resume")}',
        S["center"]))

    doc.build(story)
    print(f"PDF generated: {out}")

if __name__ == "__main__":
    build_pdf()
