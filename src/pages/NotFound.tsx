import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useLanguage } from "@/lib/i18n";

const NotFound = () => {
  const { t } = useLanguage();
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="text-center">
        <h1 className="mb-4 text-7xl md:text-8xl">404</h1>
        <p className="mb-6 text-xl text-ink/60">{t("pageNotFound")}</p>
        <a href="/" className="text-clay underline underline-offset-4 hover:opacity-70">
          {t("returnHome")}
        </a>
      </div>
    </div>
  );
};

export default NotFound;
