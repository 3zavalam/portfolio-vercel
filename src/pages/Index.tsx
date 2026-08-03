import AboutTools from "@/components/AboutTools";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

// El nombre y los links viven en el Header (montado en App.tsx), así que aquí
// va solo el contenido: trabajo, quién soy, y el cierre en terracota.
const Index = () => {
  return (
    <div className="min-h-screen">
      <Projects />
      <AboutTools />
      <Contact />
    </div>
  );
};

export default Index;
