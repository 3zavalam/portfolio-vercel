export const personalInfo = {
  name: "Emilio Zavala",
  title: "Ing. en Sistemas Computacionales",
  description: "Construyo productos web y apps de analítica deportiva.",
  about: "Estudiante apasionado por el desarrollo de productos data-driven con un enfoque especial en el análisis deportivo. Combino tecnologías web modernas con ciencia de datos para crear soluciones innovadoras.",
  email: "emilio.zavala@email.com",
  github: "https://github.com/emiliozavala",
  linkedin: "https://linkedin.com/in/emiliozavala",
  location: "México",
  phone: "+52 123 456 7890"
};

export const skills = [
  "TypeScript", "React", "Next.js", "Tailwind CSS", "shadcn/ui",
  "Python", "Flask", "Streamlit", "Supabase", "SQL", 
  "Docker", "NGINX", "Web Scraping", "Matplotlib", "Jupyter",
  "Machine Learning", "Logistic Regression", "xG Models"
];

export const projects = [
  {
    id: 1,
    title: "Winner Way – Frontend",
    description: "Plataforma web para análisis de tenis con interfaz moderna y dashboard interactivo para visualización de datos deportivos.",
    tech: ["React", "TypeScript", "Vite", "shadcn/ui", "Tailwind", "Supabase"],
    github: "https://github.com/emiliozavala/winner-way-frontend",
    demo: "https://winner-way.vercel.app",
    image: "/projects/winner-way-frontend.jpg",
    featured: true
  },
  {
    id: 2,
    title: "Winner Way – Backend (Tennis AI)",
    description: "Sistema de IA para análisis de tenis con detección de keypoints, DTW, detección de frames de impacto y overlay de datos.",
    tech: ["Python", "Flask", "OpenCV", "DTW", "ML"],
    github: "https://github.com/emiliozavala/winner-way-backend",
    demo: "https://github.com/emiliozavala/winner-way-backend#demo",
    image: "/projects/winner-way-backend.jpg",
    featured: true
  },
  {
    id: 3,
    title: "Interactive-Web (Soccer)",
    description: "Dashboard interactivo de fútbol con scraping de SofaScore/Fotmob y visualizaciones de tiros, radar y recap de partidos.",
    tech: ["Streamlit", "Python", "Web Scraping", "Pandas", "Plotly"],
    github: "https://github.com/emiliozavala/interactive-web-soccer",
    demo: "https://interactive-web-soccer.streamlit.app",
    image: "/projects/interactive-web-soccer.jpg",
    featured: true
  },
  {
    id: 4,
    title: "xG-Model (World Cup 2022)",
    description: "Modelo de Expected Goals usando datos de StatsBomb y mpsoccer con regresión logística y app Streamlit.",
    tech: ["Python", "Jupyter", "Logistic Regression", "StatsBomb", "mpsoccer", "Streamlit"],
    github: "https://github.com/emiliozavala/xg-model-worldcup",
    demo: "https://xg-model-worldcup.streamlit.app",
    image: "/projects/xg-model.jpg",
    featured: false
  },
  {
    id: 5,
    title: "Match-Report-Analysis",
    description: "Dashboards de análisis de partidos con scraping, shotmaps, heatmaps, análisis de momentum y 'Player of the Match'.",
    tech: ["Python", "Streamlit", "Web Scraping", "Matplotlib", "Seaborn"],
    github: "https://github.com/emiliozavala/match-report-analysis",
    demo: "https://match-report-analysis.streamlit.app",
    image: "/projects/match-report.jpg",
    featured: false
  },
  {
    id: 6,
    title: "Portfolio-Web (Previo)",
    description: "Portafolio anterior desarrollado en Streamlit para mostrar proyectos de visualización de datos y web scraping.",
    tech: ["Streamlit", "Python", "Data Viz", "Web Scraping"],
    github: "https://github.com/emiliozavala/portfolio-streamlit",
    demo: "https://emilio-zavala-portfolio.streamlit.app",
    image: "/projects/portfolio-streamlit.jpg",
    featured: false
  },
  {
    id: 7,
    title: "Datathon Coppel",
    description: "Análisis descriptivo y exploratorio de datos (EDA) para competencia Datathon Coppel con insights de negocio.",
    tech: ["Python", "Pandas", "Matplotlib", "Seaborn", "Jupyter"],
    github: "https://github.com/emiliozavala/datathon-coppel",
    demo: "https://github.com/emiliozavala/datathon-coppel/blob/main/analysis.ipynb",
    image: "/projects/datathon-coppel.jpg",
    featured: false
  }
];

export const education = {
  degree: "Ingeniería en Sistemas Computacionales",
  institution: "Tecnológico Nacional de México",
  period: "2021 - 2025",
  status: "En curso"
};

export const certifications = [
  {
    name: "React Developer Certificate",
    issuer: "Meta",
    year: "2023"
  },
  {
    name: "Python for Data Science",
    issuer: "IBM",
    year: "2023"
  }
];