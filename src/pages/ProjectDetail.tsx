import { useParams, Link } from "react-router-dom";
import { projects } from "@/data/portfolio";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Github } from "lucide-react";
import { useState } from "react";


const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find(p => p.id === parseInt(id || '0'));

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Project Not Found</h1>
          <Link to="/">
            <Button className="bg-white text-black hover:bg-gray-200">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Navigation */}
        <div className="mb-8">
          <Link to="/">
            <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
        </div>

        {/* Project Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            {project.title}
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            {project.description}
          </p>

          <div className="flex gap-4 mb-8">
            <a 
              href={project.github} 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button className="bg-white text-black hover:bg-gray-200">
                <Github className="w-4 h-4 mr-2" />
                {(project as any).githubBackend ? 'Frontend Code' : 'View Code'}
              </Button>
            </a>
            {(project as any).githubBackend && (
              <a 
                href={(project as any).githubBackend} 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
                  <Github className="w-4 h-4 mr-2" />
                  Backend Code
                </Button>
              </a>
            )}
          </div>

          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech, index) => (
              <div 
                key={index}
                className="bg-white/10 border border-white/20 rounded-md px-3 py-1"
              >
                <span className="text-white text-sm">{tech}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Project Videos (if available) */}
        {(project as any).videos && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">Project Examples</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
              
              {/* Video 1: Stroke Detection */}
              <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                <video 
                  controls
                  className="w-full rounded-lg"
                  style={{ maxHeight: '300px' }}
                >
                  <source src="/winnerway-detect-strokes.mov" type="video/quicktime" />
                  <source src="/winnerway-detect-strokes.mov" type="video/mp4" />
                </video>
                <div className="mt-3">
                  <h3 className="text-white font-semibold">Stroke Detection</h3>
                  <p className="text-gray-400 text-sm">AI-powered tennis stroke recognition and analysis</p>
                </div>
              </div>

              {/* Video 2: AI Coach */}
              <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                <video 
                  controls
                  className="w-full rounded-lg"
                  style={{ maxHeight: '300px' }}
                >
                  <source src="/winnerway-ai-coach.mov" type="video/quicktime" />
                  <source src="/winnerway-ai-coach.mov" type="video/mp4" />
                </video>
                <div className="mt-3">
                  <h3 className="text-white font-semibold">AI Coach Demo</h3>
                  <p className="text-gray-400 text-sm">Complete platform walkthrough showing AI coaching functionality</p>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* Project Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Description */}
          <div className="bg-white/5 border border-white/10 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-white mb-6">About This Project</h2>
            <p className="text-gray-300 leading-relaxed">
              {project.longDescription}
            </p>
          </div>

          {/* Features & Challenges */}
          <div className="space-y-8">
            {/* Features */}
            <div className="bg-white/5 border border-white/10 rounded-lg p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Key Features</h2>
              <ul className="space-y-3">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Challenges */}
            <div className="bg-white/5 border border-white/10 rounded-lg p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Technical Challenges</h2>
              <p className="text-gray-300 leading-relaxed">
                {project.challenges}
              </p>
            </div>
          </div>
        </div>

        {/* Navigation to other projects */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-bold text-white mb-8">Other Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {projects.filter(p => p.id !== project.id).map((otherProject) => (
              <Link key={otherProject.id} to={`/project/${otherProject.id}`}>
                <div className="bg-white/5 border border-white/10 rounded-lg p-4 hover:border-white/30 hover:bg-white/10 transition-all">
                  <img 
                    src={`/${otherProject.image}`} 
                    alt={otherProject.title}
                    className="w-full aspect-video object-cover rounded mb-3"
                  />
                  <h4 className="text-white font-semibold text-sm">{otherProject.title}</h4>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;