import { personalInfo } from "@/data/portfolio";
import { Mail, Github, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-16">
          Contact
        </h2>
        
        <div className="max-w-2xl mx-auto">
          <p className="text-xl text-gray-300 mb-12">
            Have a project in mind? Let's talk.
          </p>
          
          <div className="flex justify-center gap-8 mb-12">
            <a 
              href={`mailto:${personalInfo.email}`}
              className="flex flex-col items-center gap-3 p-6 rounded-lg border border-white/10 hover:border-white/30 transition-all hover:bg-white/5"
            >
              <Mail className="w-8 h-8 text-white" />
              <span className="text-white">Email</span>
              <span className="text-gray-400 text-sm">{personalInfo.email}</span>
            </a>
            
            <a 
              href={personalInfo.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-3 p-6 rounded-lg border border-white/10 hover:border-white/30 transition-all hover:bg-white/5"
            >
              <Github className="w-8 h-8 text-white" />
              <span className="text-white">GitHub</span>
              <span className="text-gray-400 text-sm">@emiliozavala</span>
            </a>
            
            <a 
              href={personalInfo.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-3 p-6 rounded-lg border border-white/10 hover:border-white/30 transition-all hover:bg-white/5"
            >
              <Linkedin className="w-8 h-8 text-white" />
              <span className="text-white">LinkedIn</span>
              <span className="text-gray-400 text-sm">emiliozavala</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;