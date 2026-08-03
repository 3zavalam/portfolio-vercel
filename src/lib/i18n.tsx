import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { ui, UIKey } from "@/data/translations";

export type Lang = "en" | "es";

// Un campo de contenido puede estar traducido o no. Los que no (nombres propios,
// nombres de tecnologías) se dejan como string plano y `tr` los devuelve tal cual.
export type Localized<T = string> = T | { en: T; es: T };

const STORAGE_KEY = "lang";

// Preferencia guardada > idioma del navegador > inglés.
const detectLang = (): Lang => {
  if (typeof window === "undefined") return "en";
  const saved = window.localStorage.getItem(STORAGE_KEY);
  if (saved === "en" || saved === "es") return saved;
  return navigator.language?.toLowerCase().startsWith("es") ? "es" : "en";
};

type LanguageContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  /** Etiquetas de UI: t("viewProjects") */
  t: (key: UIKey) => string;
  /** Contenido de portfolio.ts: tr(project.description) */
  tr: <T>(value: Localized<T>) => T;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLangState] = useState<Lang>(detectLang);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, lang);
    // Para lectores de pantalla y para que el navegador ofrezca traducir bien.
    document.documentElement.lang = lang;
  }, [lang]);

  const value: LanguageContextValue = {
    lang,
    setLang: setLangState,
    t: (key) => ui[lang][key] ?? ui.en[key] ?? key,
    tr: <T,>(value: Localized<T>): T =>
      value && typeof value === "object" && "en" in value
        ? (value as { en: T; es: T })[lang]
        : (value as T)
  };

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage debe usarse dentro de <LanguageProvider>");
  return context;
};
