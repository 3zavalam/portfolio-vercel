import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import { projects } from "@/data/portfolio";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Github } from "lucide-react";
import { useLanguage, Localized } from "@/lib/i18n";

type ProjectVideoSource = {
  src: string;
  type?: string;
};

type ProjectVideo = {
  src?: string;
  type?: string;
  sources?: ProjectVideoSource[];
  title?: Localized;
  description?: Localized;
  poster?: string;
};

const ProjectDetail = () => {
  const { t, tr } = useLanguage();
  useEffect(() => { window.scrollTo(0, 0); }, []);
  const { id } = useParams();
  const project = projects.find(p => p.id === parseInt(id || '0'));
  const projectVideos = Array.isArray((project as { videos?: ProjectVideo[] } | undefined)?.videos)
    ? ((project as { videos?: ProjectVideo[] }).videos as ProjectVideo[])
    : [];
  const hasMultipleVideos = projectVideos.length > 1;
  const projectVideosWrapperClass = hasMultipleVideos
    ? "grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-5xl mx-auto"
    : "grid grid-cols-1 gap-6 max-w-3xl mx-auto justify-items-center";

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl mb-4">{t("projectNotFound")}</h1>
          <Link to="/">
            <Button className="bg-ink text-paper hover:bg-ink/85 rounded-full">
              <ArrowLeft className="w-4 h-4 mr-2" />
              {t("backToHome")}
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
            <Button variant="outline" className="border-ink/20 text-ink hover:bg-ink/5 rounded-full">
              <ArrowLeft className="w-4 h-4 mr-2" />
              {t("backToHome")}
            </Button>
          </Link>
        </div>

        {/* Project Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-6xl mb-6 leading-tight">
            {tr(project.title)}
          </h1>
          
          <p className="text-xl text-ink/65 mb-8 leading-relaxed">
            {tr(project.description)}
          </p>

          <div className="flex gap-4 mb-8">
            <a 
              href={project.github} 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button className="bg-ink text-paper hover:bg-ink/85 rounded-full">
                <Github className="w-4 h-4 mr-2" />
                {(project as any).githubBackend ? t("frontendCode") : t("viewCode")}
              </Button>
            </a>
            {(project as any).githubBackend && (
              <a 
                href={(project as any).githubBackend} 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button variant="outline" className="border-ink/20 text-ink hover:bg-ink/5 rounded-full">
                  <Github className="w-4 h-4 mr-2" />
                  {t("backendCode")}
                </Button>
              </a>
            )}
          </div>

          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech, index) => (
              <div 
                key={index}
                className="border border-ink/15 rounded-full px-3 py-1"
              >
                <span className="text-sm">{tech}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Project Images (if available) */}
        {(project as any).images?.length > 0 && (
          <div className="mb-12">
            <h2 className="text-3xl mb-6 text-center">{t("projectMedia")}</h2>
            <div className="flex justify-center">
              {(project as any).images.map((src: string, index: number) => (
                <img
                  key={index}
                  src={src}
                  alt={`${tr(project.title)} preview ${index + 1}`}
                  className="rounded-2xl max-h-96 object-contain border border-ink/10"
                />
              ))}
            </div>
          </div>
        )}

        {/* Project Videos (if available) */}
        {projectVideos.length > 0 && (
          <div className="mb-12">
            <h2 className="text-3xl mb-6 text-center">{t("projectMedia")}</h2>
            <div className={projectVideosWrapperClass}>
              {projectVideos.map((video, index) => (
                <div
                  key={`${project.id}-video-${index}`}
                  className={`bg-paper-raised border border-ink/10 rounded-2xl p-4 w-full ${hasMultipleVideos ? "" : "max-w-3xl"}`}
                >
                  <video
                    controls
                    className="w-full rounded-lg"
                    style={{ maxHeight: "300px" }}
                    poster={video.poster}
                  >
                    {(video.sources && video.sources.length > 0)
                      ? video.sources.map((source, sourceIndex) => (
                          <source
                            key={`${project.id}-video-${index}-source-${sourceIndex}`}
                            src={source.src}
                            type={source.type || video.type || "video/mp4"}
                          />
                        ))
                      : video.src && (
                          <source
                            src={video.src}
                            type={video.type || "video/mp4"}
                          />
                        )
                    }
                  </video>
                  {(video.title || video.description) && (
                    <div className="mt-3">
                      {video.title && (
                        <h3 className="font-medium">{tr(video.title)}</h3>
                      )}
                      {video.description && (
                        <p className="text-ink/55 text-sm">{tr(video.description)}</p>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Project Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Description */}
          <div className="bg-paper-raised border border-ink/10 rounded-2xl p-8">
            <h2 className="text-3xl mb-6">
              {(project as any).report ? t("projectReport") : t("aboutThisProject")}
            </h2>
            {!(project as any).report && (
              <p className="text-ink/70 leading-relaxed">
                {tr(project.longDescription)}
              </p>
            )}
            {(project as any).report && (
              <iframe
                src={(project as any).report}
                className="w-full rounded-2xl border border-ink/10"
                style={{ height: "500px" }}
                title={t("projectReport")}
              />
            )}
          </div>

          {/* Features & Challenges */}
          <div className="space-y-8">
            {/* Features */}
            <div className="bg-paper-raised border border-ink/10 rounded-2xl p-8">
              <h2 className="text-3xl mb-6">{t("keyFeatures")}</h2>
              <ul className="space-y-3">
                {tr(project.features).map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-clay rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-ink/70">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Challenges */}
            <div className="bg-paper-raised border border-ink/10 rounded-2xl p-8">
              <h2 className="text-3xl mb-6">{t("technicalChallenges")}</h2>
              <p className="text-ink/70 leading-relaxed">
                {tr(project.challenges)}
              </p>
            </div>
          </div>
        </div>

        {/* Navigation to other projects */}
        <div className="mt-20 text-center">
          <h3 className="text-3xl mb-8">{t("otherProjects")}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {projects.filter(p => p.id !== project.id).map((otherProject) => {
              const otherImageSrc = otherProject.image.startsWith("/")
                ? otherProject.image
                : `/${otherProject.image}`;

              return (
                <Link key={otherProject.id} to={`/project/${otherProject.id}`}>
                  <div className="bg-paper-raised border border-ink/10 rounded-2xl p-4 h-full transition-all hover:border-clay">
                    <img 
                      src={otherImageSrc}
                      alt={tr(otherProject.title)}
                      className="w-full aspect-video object-cover rounded mb-3"
                    />
                    <h4 className="font-medium text-sm">{tr(otherProject.title)}</h4>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
