import { useState } from "react";
import { skills, projects, personalInfo } from "@/data/portfolio";

// Build skill → project titles map from existing project tech arrays
const skillToProjects: Record<string, string[]> = {};
projects.forEach((project) => {
  project.tech.forEach((tech) => {
    const key = tech.toLowerCase();
    if (!skillToProjects[key]) skillToProjects[key] = [];
    skillToProjects[key].push(project.title);
  });
});

const getProjects = (skill: string): string[] =>
  skillToProjects[skill.toLowerCase()] ?? [];

// Tooltip state type
type TooltipState = {
  skill: string;
  usedIn: string[];
  x: number;
  y: number;
} | null;

const AboutTools = () => {
  const [tooltip, setTooltip] = useState<TooltipState>(null);

  const handleMouseEnter = (
    e: React.MouseEvent<HTMLDivElement>,
    skill: string
  ) => {
    const usedIn = getProjects(skill);
    if (usedIn.length === 0) return;
    const rect = (e.currentTarget as HTMLDivElement).getBoundingClientRect();
    setTooltip({
      skill,
      usedIn,
      x: rect.left + rect.width / 2,
      y: rect.top - 8,
    });
  };

  const handleMouseLeave = () => setTooltip(null);

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* About Section */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              About
            </h2>
            <div className="bg-white/5 border border-white/10 rounded-lg p-6 hover:border-white/20 transition-all">
              <p className="text-gray-300 leading-relaxed">
                {personalInfo.about}
              </p>
            </div>
          </div>

          {/* Tools Section */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              Tools &amp; Technologies
            </h2>
            <div className="bg-white/5 border border-white/10 rounded-lg p-6 hover:border-white/20 transition-all">
              <div className="flex flex-wrap gap-3">
                {skills.flatMap((group) => group.items).map((skill, index) => {
                  const hasProjects = getProjects(skill).length > 0;
                  return (
                    <div
                      key={index}
                      onMouseEnter={(e) => handleMouseEnter(e, skill)}
                      onMouseLeave={handleMouseLeave}
                      className={`bg-white/10 border border-white/20 rounded-md px-3 py-1 transition-all ${
                        hasProjects
                          ? "hover:border-white/60 hover:bg-white/20 cursor-default"
                          : "hover:border-white/40 hover:bg-white/15"
                      }`}
                    >
                      <span className="text-white text-sm">{skill}</span>
                      {hasProjects && (
                        <span className="ml-1 text-white/30 text-xs">›</span>
                      )}
                    </div>
                  );
                })}
              </div>
              <p className="text-white/30 text-xs mt-4">
                Hover over a skill to see where I used it
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Fixed tooltip — renders outside any overflow container */}
      {tooltip && (
        <div
          className="fixed z-[9999] pointer-events-none"
          style={{
            left: tooltip.x,
            top: tooltip.y,
            transform: "translate(-50%, -100%)",
          }}
        >
          <div className="bg-zinc-900 border border-white/20 text-white text-xs rounded-lg shadow-2xl px-3 py-2 min-w-[140px]">
            <p className="font-semibold text-white/60 mb-1 uppercase tracking-wide text-[10px]">
              Used in:
            </p>
            <ul className="space-y-0.5">
              {tooltip.usedIn.map((p) => (
                <li key={p} className="flex items-start gap-1">
                  <span className="text-white/50 mt-0.5">•</span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
            {/* Arrow */}
            <div className="absolute left-1/2 -translate-x-1/2 top-full border-4 border-transparent border-t-zinc-900" />
          </div>
        </div>
      )}
    </section>
  );
};

export default AboutTools;