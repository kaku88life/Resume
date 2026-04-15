import { hero } from "../data/resume-data";

const baseUrl = import.meta.env.BASE_URL;

export function HeroSection() {
  return (
    <section id="about">
      <div className="bg-gradient-to-br from-primary-dark via-primary to-primary-light text-white">
        <div className="mx-auto max-w-5xl px-6 pt-28 pb-16 md:pt-36 md:pb-20">
          <div className="flex flex-col md:flex-row md:items-center gap-8">
            {/* Profile Photo */}
            <div className="shrink-0">
              <img
                src={`${baseUrl}profile.jpg`}
                alt={hero.name}
                className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover object-top border-4 border-white/20 shadow-lg"
              />
            </div>

            {/* Name & Info */}
            <div className="flex-1">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                {hero.name}
                <span className="ml-3 text-2xl md:text-3xl font-medium text-white/60">
                  {hero.nameEn}
                </span>
              </h1>
              <p className="mt-3 text-lg text-white/70">{hero.position}</p>

              {/* Contact */}
              <div className="mt-5 flex flex-wrap gap-3">
                <a
                  href={`https://mail.google.com/mail/?view=cm&to=${hero.contact.email}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-white/15 hover:bg-white/25 rounded-lg text-sm transition-colors"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><path d="m22 6-10 7L2 6"/></svg>
                  Email
                </a>
                <a
                  href={hero.contact.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-white/15 hover:bg-white/25 rounded-lg text-sm transition-colors"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
                  kaku88life.com
                </a>
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/15 rounded-lg text-sm">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"/></svg>
                  LINE: {hero.contact.line}
                </span>
              </div>
            </div>
          </div>

          {/* Summary */}
          <p className="mt-8 text-base md:text-lg text-white/85 max-w-3xl leading-relaxed">
            {hero.summary}
          </p>

          {/* Identity Tags */}
          <div className="mt-8 flex flex-wrap gap-2">
            {hero.identityTags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1.5 text-xs font-medium bg-white/10 text-white/80 rounded-full border border-white/15"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
