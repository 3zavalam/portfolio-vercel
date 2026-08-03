import { skills, personalInfo } from "@/data/portfolio";
import { useLanguage } from "@/lib/i18n";

// Las categorías de `skills` se aplanan en una sola lista. SQL estaba en dos
// grupos (Languages y Databases), así que se filtran repetidas sin importar
// mayúsculas, conservando el orden de aparición.
const uniqueSkills = Array.from(
  skills
    .flatMap((group) => group.items)
    .reduce((acc, skill) => {
      const key = skill.toLowerCase();
      if (!acc.has(key)) acc.set(key, skill);
      return acc;
    }, new Map<string, string>())
    .values()
);

const AboutTools = () => {
  const { t, tr } = useLanguage();

  return (
    // scroll-mt-20: el header fijo taparía el título al llegar desde la navegación.
    <section id="about" className="scroll-mt-20 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* About Section */}
          <div>
            <h2 className="text-4xl md:text-5xl mb-6">{t("about")}</h2>
            <div className="bg-paper-raised border border-ink/10 rounded-2xl p-6 md:p-8">
              <p className="text-ink/70 leading-relaxed text-lg">
                {tr(personalInfo.about)}
              </p>

              {/* Nota al pie: separada de la bio por una línea, en cuerpo chico.
                  Se lee si te interesa y no interrumpe si no. */}
              <div className="mt-6 pt-5 border-t border-ink/10">
                <p className="meta-label mb-2">{t("favoriteBooks")}</p>
                <ul className="space-y-1.5">
                  {personalInfo.favoriteBooks.map((book) => (
                    <li
                      key={book.title}
                      className="font-serif text-base leading-snug"
                    >
                      <em>{book.title}</em>
                      <span className="text-ink/50"> — {book.author}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Tools Section */}
          <div>
            <h2 className="text-4xl md:text-5xl mb-6">{t("toolsAndTech")}</h2>
            <div className="bg-paper-raised border border-ink/10 rounded-2xl p-6 md:p-8">
              <div className="flex flex-wrap gap-2">
                {uniqueSkills.map((skill) => (
                  <div
                    key={skill}
                    className="border border-ink/15 rounded-full px-3 py-1"
                  >
                    <span className="text-sm">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutTools;
