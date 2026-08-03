import { useLanguage, Lang } from "@/lib/i18n";

const LANGS: Lang[] = ["en", "es"];

// Muestra los dos idiomas con el activo resaltado, en vez de un solo botón que
// alterna: así se ve de inmediato en qué idioma estás y cuál es la otra opción.
// Vive dentro del Header; antes flotaba fijo en la esquina.
const LanguageToggle = () => {
  const { lang, setLang, t } = useLanguage();

  return (
    <div
      role="group"
      aria-label={t("switchLanguage")}
      className="flex items-center gap-0.5 rounded-full border border-ink/15 p-0.5"
    >
      {LANGS.map((code) => (
        <button
          key={code}
          type="button"
          onClick={() => setLang(code)}
          aria-pressed={lang === code}
          className={`rounded-full px-3 py-1 text-xs font-semibold transition-colors ${
            lang === code
              ? "bg-ink text-paper"
              : "text-ink/50 hover:text-ink"
          }`}
        >
          {code.toUpperCase()}
        </button>
      ))}
    </div>
  );
};

export default LanguageToggle;
