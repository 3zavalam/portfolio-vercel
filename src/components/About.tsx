const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
          About
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/5 border border-white/10 rounded-lg p-8 hover:border-white/20 transition-all">
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              I'm passionate about turning raw data into meaningful insights, especially in the world of sports. 
              There's something exciting about finding patterns in numbers that can help teams perform better 
              or uncover hidden trends that change how we understand the game.
            </p>
            
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              My love for data analytics started with sports - watching games and wondering what the numbers 
              behind the performance could tell us. Now I combine Python, SQL, and visualization tools to 
              build projects that bridge the gap between complex data and actionable insights.
            </p>
            
            <p className="text-gray-300 text-lg leading-relaxed">
              Whether it's predicting match outcomes, analyzing player performance, or creating interactive 
              dashboards, I'm always looking for new ways to make data more accessible and impactful. 
              Each project is an opportunity to learn something new and solve real-world problems.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;