import { personalInfo } from "@/data/portfolio";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-6xl md:text-8xl font-bold mb-8 text-white">
          {personalInfo.name}
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto">
          Building web products and sports analytics apps
        </p>
        
        <div className="flex justify-center gap-6 mb-12">
          <a 
            href={personalInfo.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-4 rounded-full border border-white/20 hover:border-white/40 transition-all duration-300 hover:bg-white/5"
          >
            <Github className="w-6 h-6 text-white" />
          </a>
          <a 
            href={personalInfo.linkedin} 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-4 rounded-full border border-white/20 hover:border-white/40 transition-all duration-300 hover:bg-white/5"
          >
            <Linkedin className="w-6 h-6 text-white" />
          </a>
          <a 
            href={`mailto:${personalInfo.email}`}
            className="p-4 rounded-full border border-white/20 hover:border-white/40 transition-all duration-300 hover:bg-white/5"
          >
            <Mail className="w-6 h-6 text-white" />
          </a>
        </div>
        
        <Button 
          size="lg" 
          className="bg-white text-black hover:bg-gray-200 px-8 py-3 text-lg"
          onClick={() => scrollToSection('projects')}
        >
          View Projects
        </Button>
      </div>
    </section>
  );
};

export default Hero;