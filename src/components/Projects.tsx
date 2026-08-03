import { useCallback, useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { projects } from "@/data/portfolio";
import { useLanguage } from "@/lib/i18n";

// Las imágenes viven en /public; algunas rutas del data vienen sin la barra inicial.
const imageSrc = (image: string) =>
  image.startsWith("/") ? image : `/${image}`;

const pad = (n: number) => String(n).padStart(2, "0");

const Projects = () => {
  const { t, tr } = useLanguage();

  // align: "center" + slides que no llenan el ancho = las vecinas asoman cortadas
  // por el borde de la pantalla, que es el efecto de foco que pidió el wireframe.
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "center",
    loop: true,
  });
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelected(emblaApi.selectedScrollSnap());
    onSelect();
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback(
    (i: number) => emblaApi?.scrollTo(i),
    [emblaApi],
  );

  // Gesto de dos dedos en trackpad. Embla no lo trae, así que se lee el `wheel`
  // horizontal a mano. Dos detalles que importan:
  //  - `passive: false` + preventDefault: en Mac el swipe horizontal en el navegador
  //    dispara "atrás/adelante" en el historial. Sin esto te sacaría de la página.
  //  - Un gesto = un salto. El trackpad manda decenas de eventos por gesto y sigue
  //    mandando los de inercia después de que levantas los dedos. Por eso, al saltar
  //    se bloquea el carrusel y el bloqueo NO se libera por tiempo fijo, sino 140ms
  //    después del ÚLTIMO evento: mientras haya inercia, sigue bloqueado.
  const wheelAreaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = wheelAreaRef.current;
    if (!node || !emblaApi) return;

    let accumulated = 0;
    let locked = false;
    let idleTimer: ReturnType<typeof setTimeout>;

    const onWheel = (e: WheelEvent) => {
      // Gesto vertical: es scroll normal de la página, no lo tocamos.
      if (Math.abs(e.deltaX) <= Math.abs(e.deltaY)) return;
      e.preventDefault();

      // El gesto se da por terminado cuando dejan de llegar eventos.
      clearTimeout(idleTimer);
      idleTimer = setTimeout(() => {
        locked = false;
        accumulated = 0;
      }, 140);

      if (locked) return;

      accumulated += e.deltaX;
      if (Math.abs(accumulated) < 40) return;

      if (accumulated > 0) emblaApi.scrollNext();
      else emblaApi.scrollPrev();

      accumulated = 0;
      locked = true;
    };

    node.addEventListener("wheel", onWheel, { passive: false });
    return () => {
      node.removeEventListener("wheel", onWheel);
      clearTimeout(idleTimer);
    };
  }, [emblaApi]);

  // Las flechas del teclado solo mueven el carrusel cuando está enfocado, para no
  // robarle el scroll de la página al resto del sitio.
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      scrollPrev();
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      scrollNext();
    }
  };

  return (
    <section id="projects" className="scroll-mt-16 pt-10 md:pt-14 pb-16 md:pb-20">
      {/* El contador va pegado al título, no al otro extremo de la pantalla:
          se lee junto a lo que cuenta. */}
      <div className="container mx-auto px-4 mb-10 md:mb-14 flex items-end gap-4">
        <h2 className="text-5xl md:text-7xl leading-none">{t("projects")}</h2>
        <span className="meta-label pb-2 shrink-0">
          {pad(selected + 1)} / {pad(projects.length)}
        </span>
      </div>

      {/* Fuera del container a propósito: el carrusel va a sangre para que las
          tarjetas de los lados queden cortadas por el borde. */}
      <div ref={wheelAreaRef} className="relative">
        <button
          type="button"
          onClick={scrollPrev}
          aria-label={t("prevProject")}
          className="absolute left-1 md:left-6 top-1/2 z-10 -translate-y-1/2 text-ink/25 transition-colors hover:text-clay"
        >
          <ChevronLeft className="w-8 h-8 md:w-10 md:h-10" strokeWidth={1.25} />
        </button>
        <button
          type="button"
          onClick={scrollNext}
          aria-label={t("nextProject")}
          className="absolute right-1 md:right-6 top-1/2 z-10 -translate-y-1/2 text-ink/25 transition-colors hover:text-clay"
        >
          <ChevronRight
            className="w-8 h-8 md:w-10 md:h-10"
            strokeWidth={1.25}
          />
        </button>

        <div
          ref={emblaRef}
          tabIndex={0}
          role="region"
          aria-roledescription="carousel"
          aria-label={t("projects")}
          onKeyDown={handleKeyDown}
          className="overflow-hidden outline-none focus-visible:ring-2 focus-visible:ring-ink/30 rounded-3xl"
        >
          <div className="flex items-stretch py-6">
            {projects.map((project, i) => {
              const isSelected = i === selected;

              return (
                <div
                  key={project.id}
                  className="flex-[0_0_86%] sm:flex-[0_0_66%] lg:flex-[0_0_52%] xl:flex-[0_0_46%] px-3 md:px-5"
                  aria-hidden={!isSelected}
                >
                  <article
                    onClick={() => !isSelected && scrollTo(i)}
                    className={`project-card h-full transition-all duration-500 ease-out ${
                      isSelected
                        ? "opacity-100 scale-100 shadow-[0_30px_70px_-40px_hsl(var(--ink)/0.55)]"
                        : "opacity-40 scale-[0.9] cursor-pointer hover:opacity-60"
                    }`}
                  >
                    <Link
                      to={`/project/${project.id}`}
                      tabIndex={isSelected ? 0 : -1}
                      className={`flex h-full flex-col ${isSelected ? "" : "pointer-events-none"}`}
                    >
                      <img
                        src={imageSrc(project.image)}
                        alt={tr(project.title)}
                        className="w-full aspect-[16/10] object-cover"
                        onError={(e) => {
                          e.currentTarget.style.display = "none";
                        }}
                      />

                      <div className="flex flex-1 flex-col p-6 md:p-8">
                        <p className="meta-label mb-3">
                          {project.tech.slice(0, 3).join(" · ")}
                        </p>

                        <h3 className="text-3xl md:text-4xl leading-tight mb-3">
                          {tr(project.title)}
                        </h3>

                        <p className="text-ink/60 leading-relaxed">
                          {tr(project.description)}
                        </p>

                        <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-clay">
                          {t("viewProject")}
                          <ArrowRight className="w-4 h-4" />
                        </span>
                      </div>
                    </Link>
                  </article>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Puntos. Las flechas viven pegadas a los bordes del carrusel, arriba. */}
      <div className="container mx-auto px-4 mt-8 flex items-center justify-center">
        <div className="flex items-center gap-2">
          {projects.map((project, i) => (
            <button
              key={project.id}
              type="button"
              onClick={() => scrollTo(i)}
              aria-label={`${t("goToProject")} ${i + 1}`}
              aria-current={i === selected}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === selected ? "w-8 bg-clay" : "w-2 bg-ink/20 hover:bg-ink/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
