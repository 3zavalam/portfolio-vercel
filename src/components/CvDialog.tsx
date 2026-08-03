import { Download, ExternalLink } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { personalInfo } from "@/data/portfolio";
import { useLanguage } from "@/lib/i18n";

// El CV se lee antes de descargarse: click abre un visor con el PDF embebido y
// desde ahí se descarga o se abre en pestaña. Antes el click bajaba el archivo
// directo, sin que pudieras verlo.
const CvDialog = ({ className }: { className?: string }) => {
  const { t } = useLanguage();

  const action =
    "inline-flex items-center gap-1.5 text-sm text-ink/60 transition-colors hover:text-clay";

  return (
    <Dialog>
      <DialogTrigger className={className}>{t("cv")}</DialogTrigger>

      <DialogContent className="max-w-4xl w-[95vw] h-[88vh] p-0 gap-0 grid-rows-[auto_1fr] rounded-2xl overflow-hidden">
        <div className="flex items-center justify-between gap-4 border-b border-ink/10 px-5 py-3 pr-14">
          <DialogTitle className="font-serif text-xl font-normal">
            {t("cv")}
          </DialogTitle>

          <div className="flex items-center gap-4">
            {/* En muchos navegadores móviles el iframe no renderiza PDFs, así que
                abrir en pestaña tiene que estar siempre a la vista. */}
            <a
              href={personalInfo.cv}
              target="_blank"
              rel="noopener noreferrer"
              className={action}
            >
              <ExternalLink className="w-4 h-4" />
              <span className="hidden sm:inline">{t("openInTab")}</span>
            </a>
            <a
              href={personalInfo.cv}
              download="Emilio_Zavala_CV_2026.pdf"
              className={action}
            >
              <Download className="w-4 h-4" />
              <span className="hidden sm:inline">{t("downloadCV")}</span>
            </a>
          </div>
        </div>

        <iframe
          src={personalInfo.cv}
          title={t("cv")}
          className="w-full h-full border-0 bg-muted"
        />
      </DialogContent>
    </Dialog>
  );
};

export default CvDialog;
