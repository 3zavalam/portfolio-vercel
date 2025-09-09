import { projects } from "@/data/portfolio";
import { Github } from "lucide-react";
import { Link } from "react-router-dom";

const projectImages = {
  1: "/projects/dashboard/dashboard.png",
  2: "/projects/xg-model/allShots.png", 
  3: "/projects/interactive-web/interactive-web-soccer.jpg",
  4: "/winner-way-frontend.jpg",
  5: "/portfolio-streamlit.jpg"
};

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
          Projects
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="project-card group">
              <Link to={`/project/${project.id}`}>
                <div className="mb-4">
                  <img 
                    src={projectImages[project.id as keyof typeof projectImages]} 
                    alt={project.title}
                    className="w-full aspect-video object-cover rounded-lg group-hover:opacity-80 transition-opacity"
                    onError={(e) => {
                      console.error(`Failed to load image for project ${project.id}:`, e);
                      e.currentTarget.style.display = 'none';
                    }}
                    onLoad={() => {
                      console.log(`Successfully loaded image for project ${project.id}`);
                    }}
                  />
                </div>
                
                <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-gray-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 text-sm">
                  {project.description}
                </p>
              </Link>
              
              <div className="flex gap-3 mt-auto">
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white hover:text-gray-300 transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Github className="w-4 h-4" />
                  {(project as any).githubBackend ? 'Frontend' : 'Code'}
                </a>
                {(project as any).githubBackend && (
                  <a 
                    href={(project as any).githubBackend} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-white hover:text-gray-300 transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Github className="w-4 h-4" />
                    Backend
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;