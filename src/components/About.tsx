import { personalInfo } from "@/data/portfolio";

const About = () => {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">Sobre mí</span>
          </h2>
        </div>
        
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed animate-fade-in">
            {personalInfo.about}
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;