import { projects } from "@/data/portfolio";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink } from "lucide-react";
import winnerWayFrontendImg from "@/assets/winner-way-frontend.jpg";
import winnerWayBackendImg from "@/assets/winner-way-backend.jpg";
import interactiveSoccerImg from "@/assets/interactive-web-soccer.jpg";
import xgModelImg from "@/assets/xg-model.jpg";
import matchReportImg from "@/assets/match-report.jpg";
import portfolioStreamlitImg from "@/assets/portfolio-streamlit.jpg";
import datathonCoppelImg from "@/assets/datathon-coppel.jpg";

const projectImages = {
  1: winnerWayFrontendImg,
  2: interactiveSoccerImg,
  3: xgModelImg,
  4: matchReportImg,
  5: portfolioStreamlitImg,
  6: datathonCoppelImg
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
            Desarrollo web moderno y análisis de datos deportivos
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className="project-card animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4">
                <img 
                  src={projectImages[project.id as keyof typeof projectImages]} 
                  alt={`Vista previa de ${project.title}`}
                  className="w-full aspect-video object-cover rounded-lg"
                />
              </div>
              
              <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
              <p className="text-muted-foreground mb-4 text-sm leading-relaxed line-clamp-2">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.tech.map((tech) => (
                  <Badge key={tech} variant="secondary" className="text-xs px-2 py-0.5">
                    {tech}
                  </Badge>
                ))}
              </div>
              
              <div className="flex gap-2 pt-3 border-t border-border">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="flex items-center gap-1.5 flex-1"
                  asChild
                >
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="w-3.5 h-3.5" />
                    Código
                  </a>
                </Button>
                <Button 
                  size="sm" 
                  className="flex items-center gap-1.5 flex-1"
                  asChild
                >
                  <a href={project.demo} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-3.5 h-3.5" />
                    Demo
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