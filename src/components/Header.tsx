import { Link, useLocation, useNavigate } from "react-router-dom";
import { Github, Linkedin, Mail } from "lucide-react";
import { personalInfo } from "@/data/portfolio";
import CvDialog from "@/components/CvDialog";
import LanguageToggle from "@/components/LanguageToggle";
import { useLanguage } from "@/lib/i18n";
import { UIKey } from "@/data/translations";

const SECTIONS: { id: string; label: UIKey }[] = [
  { id: "projects", label: "projects" },
  { id: "about", label: "about" },
  { id: "contact", label: "contact" },
];

const iconLink = "text-ink/50 transition-colors hover:text-clay";

const Header = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();

  const goToSection = (id: string) => {
    // Desde el detalle de un proyecto hay que volver al home primero, y la sección
    // no existe todavía en el frame en que se dispara el click. Por eso reintenta
    // unos frames en vez de asumir que ya se montó.
    const scroll = (attemptsLeft = 10) => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
      else if (attemptsLeft > 0) requestAnimationFrame(() => scroll(attemptsLeft - 1));
    };

    if (location.pathname !== "/") {
      navigate("/");
      requestAnimationFrame(() => scroll());
    } else {
      scroll();
    }
  };

  return (
    // Pegado arriba con blur: la navegación sigue disponible al bajar.
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-paper/80 backdrop-blur-md">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between gap-4">
        {/* Identidad y contacto directo, juntos: nombre, CV y las tres vías para
            escribirle. */}
        <div className="flex items-center gap-4 md:gap-6 min-w-0">
          <Link
            to="/"
            className="font-serif text-lg sm:text-xl md:text-2xl leading-none truncate"
          >
            {personalInfo.name}
          </Link>

          <div className="flex items-center gap-4 shrink-0">
            <CvDialog className="text-sm underline underline-offset-4 decoration-ink/25 transition-colors hover:text-clay hover:decoration-clay" />

            {/* Los iconos se van en pantallas chicas: el nombre completo ya se come
                el ancho. El CV se queda porque no hay otra forma de llegar a él. */}
            <div className="hidden sm:flex items-center gap-4">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className={iconLink}
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className={iconLink}
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                aria-label="Email"
                className={iconLink}
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-6 shrink-0">
          {/* En móvil no caben junto al nombre. La página son tres secciones
              seguidas, así que se llega scrolleando sin problema. */}
          <nav className="hidden md:flex items-center gap-6">
            {SECTIONS.map(({ id, label }) => (
              <button
                key={id}
                type="button"
                onClick={() => goToSection(id)}
                className="text-sm text-ink/60 transition-colors hover:text-clay"
              >
                {t(label)}
              </button>
            ))}
          </nav>

          <LanguageToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;
