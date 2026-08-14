import { experience } from "@/data/portfolio";
import { useLanguage } from "@/lib/i18n";

const Experience = () => {
  const { t, tr } = useLanguage();

  return (
    // scroll-mt-20: el header fijo taparía el título al llegar desde la navegación.
    <section id="experience" className="scroll-mt-16 pt-10 md:pt-14 pb-16 md:pb-24">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl mb-8">{t("experience")}</h2>

        <div className="space-y-4">
          {experience.map((item) => (
            <div
              key={item.id}
              className="bg-paper-raised border border-ink/10 rounded-2xl p-6 md:p-8 flex flex-col sm:flex-row gap-5"
            >
              <div
                className={`w-14 h-14 shrink-0 rounded-xl border border-ink/10 flex items-center justify-center overflow-hidden ${
                  item.logoBg === "dark" ? "bg-ink" : "bg-paper"
                }`}
              >
                <img
                  src={item.logo}
                  alt={item.company}
                  className="w-10 h-10 object-contain"
                />
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1">
                  <div>
                    <h3 className="font-serif text-xl">{item.company}</h3>
                    <p className="text-ink/60 text-sm">
                      {tr(item.role)}
                      {item.location && <> · {tr(item.location)}</>}
                    </p>
                  </div>

                  <span className="meta-label">{tr(item.period)}</span>
                </div>

                <p className="text-ink/70 leading-relaxed mt-3">
                  {tr(item.description)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
