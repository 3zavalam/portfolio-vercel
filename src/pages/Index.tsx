import AboutTools from "@/components/AboutTools";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

// El nombre y los links viven en el Header (montado en App.tsx), así que aquí
// va solo el contenido: trabajo, experiencia, quién soy, y el cierre en terracota.
const Index = () => {
  return (
    <div className="min-h-screen">
      <Experience />
      <Projects />
      <AboutTools />
      <Contact />
    </div>
  );
};

export default Index;
