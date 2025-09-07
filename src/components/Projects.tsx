import { projects } from "@/data/portfolio";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Star } from "lucide-react";
import ecommerceImg from "@/assets/project-ecommerce.jpg";
import apiImg from "@/assets/project-api.jpg";
import weatherImg from "@/assets/project-weather.jpg";
import portfolioImg from "@/assets/project-portfolio.jpg";

const projectImages = {
  1: ecommerceImg,
  2: apiImg,
  3: weatherImg,
  4: portfolioImg
};

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">Proyectos</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Una selección de mis trabajos más recientes y destacados
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className={`project-card animate-scale-in ${project.featured ? 'md:col-span-2 lg:col-span-1' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {project.featured && (
                <div className="flex items-center gap-2 mb-4">
                  <Star className="w-4 h-4 text-yellow-500 fill-current" />
                  <span className="text-sm font-medium text-yellow-600 dark:text-yellow-400">
                    Proyecto Destacado
                  </span>
                </div>
              )}
              
              <div className="mb-6">
                <img 
                  src={projectImages[project.id as keyof typeof projectImages]} 
                  alt={`Vista previa de ${project.title}`}
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
              
              <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech) => (
                  <Badge key={tech} variant="secondary" className="text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>
              
              <div className="flex gap-3 pt-4 border-t border-border">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="flex items-center gap-2"
                  asChild
                >
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4" />
                    Código
                  </a>
                </Button>
                <Button 
                  size="sm" 
                  className="flex items-center gap-2"
                  asChild
                >
                  <a href={project.demo} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4" />
                    Ver Demo
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;