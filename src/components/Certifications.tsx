import { certifications } from "@/data/portfolio";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

const Certifications = () => {
  return (
    <section id="certifications" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">Cursos y Certificaciones</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Formación continua en tecnologías modernas y ciencia de datos
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {certifications.map((cert, index) => (
            <div 
              key={cert.id} 
              className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-6 hover:shadow-lg transition-all duration-300 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4">
                <h3 className="text-lg font-semibold mb-2">{cert.name}</h3>
                <p className="text-muted-foreground text-sm">
                  {cert.provider} · {cert.year}
                </p>
              </div>
              
              <div className="flex flex-wrap gap-1.5 mb-4">
                {cert.skills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="text-xs px-2 py-0.5">
                    {skill}
                  </Badge>
                ))}
              </div>
              
              {cert.credential && (
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="flex items-center gap-1.5"
                  asChild
                >
                  <a href={cert.credential} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-3.5 h-3.5" />
                    Ver Credencial
                  </a>
                </Button>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;