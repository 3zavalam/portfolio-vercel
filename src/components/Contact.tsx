import { personalInfo } from "@/data/portfolio";
import { Github, Linkedin } from "lucide-react";
import { useLanguage } from "@/lib/i18n";

const Contact = () => {
  const { t } = useLanguage();

  const sideLink =
    "inline-flex items-center gap-2 text-sm text-paper/80 transition-colors hover:text-paper";

  return (
    // El único bloque de color del sitio, y va al cierre: la página termina en
    // terracota justo donde está el correo.
    // Sobre este fondo el texto va en crema sólida o casi: bajarle la opacidad lo
    // volvería ilegible (el contraste crema/terracota ya es de 5.25:1, no sobra).
    <section id="contact" className="scroll-mt-16 bg-clay text-paper py-20 md:py-28">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-5xl md:text-7xl leading-none mb-6">{t("contact")}</h2>

        {/* Condicional: si la intro se deja vacía en un idioma, el <p> igual
            ocupaba su margen y abría un hueco. */}
        {t("contactIntro") && (
          <p className="text-paper/85 max-w-xl mx-auto mb-10">
            {t("contactIntro")}
          </p>
        )}

        <a
          href={`mailto:${personalInfo.email}`}
          className="font-serif text-2xl sm:text-4xl md:text-5xl break-words underline underline-offset-[6px] decoration-paper/35 transition-colors hover:decoration-paper"
        >
          {personalInfo.email}
        </a>

        <div className="flex items-center justify-center gap-8 mt-12">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className={sideLink}
          >
            <Github className="w-5 h-5" />
            GitHub
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className={sideLink}
          >
            <Linkedin className="w-5 h-5" />
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
