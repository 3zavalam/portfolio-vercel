import { skills } from "@/data/portfolio";

const AboutTools = () => {
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
              <p className="text-gray-300 leading-relaxed mb-4">
                I'm passionate about turning raw data into meaningful insights, especially in the world of sports. 
                There's something exciting about finding patterns in numbers that can help teams perform better 
                or uncover hidden trends that change how we understand the game.
              </p>
              
              <p className="text-gray-300 leading-relaxed mb-4">
                My love for data analytics started with sports - watching games and wondering what the numbers 
                behind the performance could tell us. Now I combine Python, SQL, and visualization tools to 
                build projects that bridge the gap between complex data and actionable insights.
              </p>
              
              <p className="text-gray-300 leading-relaxed">
                Whether it's predicting match outcomes, analyzing player performance, or creating interactive 
                dashboards, I'm always looking for new ways to make data more accessible and impactful.
              </p>
            </div>
          </div>

          {/* Tools Section */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              Tools & Technologies
            </h2>
            
            <div className="bg-white/5 border border-white/10 rounded-lg p-6 hover:border-white/20 transition-all">
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <div 
                    key={index}
                    className="bg-white/10 border border-white/20 rounded-md px-3 py-1 hover:border-white/40 hover:bg-white/15 transition-all"
                  >
                    <span className="text-white text-sm">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutTools;