import { skills } from "@/data/portfolio";

const Tools = () => {
  return (
    <section id="tools" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
          Tools & Technologies
        </h2>
        
        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <div 
              key={index}
              className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 hover:border-white/30 hover:bg-white/10 transition-all"
            >
              <span className="text-white text-sm">{skill}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tools;