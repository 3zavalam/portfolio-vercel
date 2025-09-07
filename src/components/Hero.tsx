import { personalInfo } from "@/data/portfolio";
import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center hero-bg relative overflow-hidden">
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            <span className="text-gradient">{personalInfo.name}</span>
          </h1>
          
          <h2 className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            {personalInfo.title}
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            {personalInfo.description}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary-hover transition-all duration-300 px-8 py-3"
              onClick={() => scrollToSection('projects')}
            >
              Ver Proyectos
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="px-8 py-3"
              onClick={() => scrollToSection('contact')}
            >
              Contactar
            </Button>
          </div>
          
          <div className="flex justify-center gap-6 mb-16">
            <a 
              href={personalInfo.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-muted/50 hover:bg-muted transition-all duration-300 hover:scale-110"
            >
              <Github className="w-6 h-6" />
            </a>
            <a 
              href={personalInfo.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-muted/50 hover:bg-muted transition-all duration-300 hover:scale-110"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a 
              href={`mailto:${personalInfo.email}`}
              className="p-3 rounded-full bg-muted/50 hover:bg-muted transition-all duration-300 hover:scale-110"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
          
          <button 
            onClick={() => scrollToSection('skills')}
            className="animate-bounce p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors duration-300"
          >
            <ArrowDown className="w-6 h-6 text-primary" />
          </button>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -right-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-1/2 -left-1/2 w-96 h-96 bg-violet-500/5 rounded-full blur-3xl" />
      </div>
    </section>
  );
};

export default Hero;