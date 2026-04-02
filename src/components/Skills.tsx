import { skills, projects } from "@/data/portfolio";
import { Badge } from "@/components/ui/badge";

// Build a map: normalized skill name → project titles that used it
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

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">Technical Skills</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hover over a skill to see which projects I used it in
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((group, groupIndex) => (
            <div
              key={group.category}
              className="bg-muted/30 border border-border rounded-xl p-5 hover:border-muted-foreground/30 transition-all duration-300"
              style={{ animationDelay: `${groupIndex * 0.1}s` }}
            >
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-widest mb-3">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill) => {
                  const usedIn = getProjects(skill);
                  return (
                    <div key={skill} className="relative group">
                      <Badge
                        variant="secondary"
                        className="px-3 py-1 text-sm font-medium bg-muted/60 hover:bg-muted transition-all duration-200 hover:scale-105 cursor-default"
                      >
                        {skill}
                      </Badge>

                      {/* Tooltip */}
                      {usedIn.length > 0 && (
                        <div className="
                          absolute bottom-full left-1/2 -translate-x-1/2 mb-2 z-50
                          w-max max-w-[200px]
                          bg-popover border border-border text-popover-foreground
                          text-xs rounded-lg shadow-lg px-3 py-2
                          opacity-0 scale-95 pointer-events-none
                          group-hover:opacity-100 group-hover:scale-100
                          transition-all duration-200 origin-bottom
                        ">
                          <p className="font-semibold text-muted-foreground mb-1">Used in:</p>
                          <ul className="space-y-0.5">
                            {usedIn.map((p) => (
                              <li key={p} className="flex items-start gap-1">
                                <span className="text-primary mt-0.5">•</span>
                                <span>{p}</span>
                              </li>
                            ))}
                          </ul>
                          {/* Arrow */}
                          <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-border" />
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;