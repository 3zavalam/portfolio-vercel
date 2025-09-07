import { personalInfo } from "@/data/portfolio";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-xl font-bold text-gradient mb-2">
              {personalInfo.name}
            </h3>
            <p className="text-muted-foreground text-center md:text-left">
              {personalInfo.title}
            </p>
          </div>
          
          <div className="flex items-center gap-6">
            <a 
              href={personalInfo.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-muted transition-colors duration-300"
            >
              <Github className="w-5 h-5" />
            </a>
            <a 
              href={personalInfo.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-muted transition-colors duration-300"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href={`mailto:${personalInfo.email}`}
              className="p-2 rounded-full hover:bg-muted transition-colors duration-300"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground flex items-center justify-center gap-1">
            Hecho con <Heart className="w-4 h-4 text-red-500 fill-current" /> usando React + TypeScript
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            © {new Date().getFullYear()} {personalInfo.name}. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;