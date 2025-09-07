export const personalInfo = {
  name: "Emilio Zavala",
  title: "Estudiante de Ing. en Sistemas Computacionales",
  description: "Desarrollador Full Stack apasionado por crear soluciones tecnológicas innovadoras y eficientes.",
  email: "emilio.zavala@email.com",
  github: "https://github.com/emiliozavala",
  linkedin: "https://linkedin.com/in/emiliozavala",
  location: "México",
  phone: "+52 123 456 7890"
};

export const skills = [
  {
    category: "Frontend",
    items: [
      { name: "TypeScript", level: 90 },
      { name: "React", level: 85 },
      { name: "Next.js", level: 80 },
      { name: "Tailwind CSS", level: 88 }
    ]
  },
  {
    category: "Backend",
    items: [
      { name: "Python", level: 85 },
      { name: "Flask", level: 80 },
      { name: "Node.js", level: 75 }
    ]
  },
  {
    category: "Database",
    items: [
      { name: "SQL", level: 85 },
      { name: "Supabase", level: 82 },
      { name: "PostgreSQL", level: 80 }
    ]
  },
  {
    category: "DevOps",
    items: [
      { name: "Docker", level: 78 },
      { name: "Git", level: 90 },
      { name: "Linux", level: 75 }
    ]
  }
];

export const projects = [
  {
    id: 1,
    title: "E-commerce Dashboard",
    description: "Dashboard administrativo para e-commerce con análisis de ventas, gestión de productos y reportes en tiempo real.",
    tech: ["React", "TypeScript", "Supabase", "Tailwind"],
    github: "https://github.com/emiliozavala/ecommerce-dashboard",
    demo: "https://ecommerce-dashboard-demo.vercel.app",
    image: "/projects/ecommerce-dashboard.jpg",
    featured: true
  },
  {
    id: 2,
    title: "Task Management API",
    description: "API RESTful para gestión de tareas con autenticación JWT, filtros avanzados y documentación Swagger.",
    tech: ["Python", "Flask", "PostgreSQL", "Docker"],
    github: "https://github.com/emiliozavala/task-api",
    demo: "https://task-api-docs.herokuapp.com",
    image: "/projects/task-api.jpg",
    featured: true
  },
  {
    id: 3,
    title: "Weather App",
    description: "Aplicación del clima con pronósticos de 7 días, geolocalización y diseño responsive.",
    tech: ["React", "TypeScript", "OpenWeather API"],
    github: "https://github.com/emiliozavala/weather-app",
    demo: "https://weather-app-ez.netlify.app",
    image: "/projects/weather-app.jpg",
    featured: false
  },
  {
    id: 4,
    title: "Portfolio Website",
    description: "Portafolio personal desarrollado con React, TypeScript y animaciones fluidas.",
    tech: ["React", "TypeScript", "Tailwind", "Framer Motion"],
    github: "https://github.com/emiliozavala/portfolio",
    demo: "https://emiliozavala.dev",
    image: "/projects/portfolio.jpg",
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