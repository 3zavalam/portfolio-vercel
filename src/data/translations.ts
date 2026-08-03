// Etiquetas de UI. El contenido (proyectos, bio) vive en portfolio.ts como { en, es }.
// Para agregar una etiqueta: ponla en `en` y TypeScript te obliga a ponerla en `es`.
export const ui = {
  en: {
    // Header
    viewProjects: "View Projects",
    downloadCV: "Download CV",
    cv: "CV",
    openInTab: "Open in new tab",
    substackLabel: "laOcho on Substack",

    // Contact block
    contactIntro: "",

    // About & Tools
    about: "About",
    toolsAndTech: "Tools & Technologies",
    favoriteBooks: "Favorite books",

    // Projects
    projects: "Projects",
    code: "Code",
    frontend: "Frontend",
    backend: "Backend",
    viewProject: "View project",
    prevProject: "Previous project",
    nextProject: "Next project",
    goToProject: "Go to project",

    // Contact
    contact: "Contact",

    // Project detail
    projectNotFound: "Project Not Found",
    backToHome: "Back to Home",
    viewCode: "View Code",
    frontendCode: "Frontend Code",
    backendCode: "Backend Code",
    projectMedia: "Project Media",
    projectReport: "Project Report",
    aboutThisProject: "About This Project",
    keyFeatures: "Key Features",
    technicalChallenges: "Technical Challenges",
    otherProjects: "Other Projects",

    // 404
    pageNotFound: "Oops! Page not found",
    returnHome: "Return to Home",

    // Toggle
    switchLanguage: "Cambiar a español"
  },

  es: {
    // Header
    viewProjects: "Ver proyectos",
    downloadCV: "Descargar CV",
    cv: "CV",
    openInTab: "Abrir en pestaña",
    substackLabel: "laOcho en Substack",

    // Contact block
    contactIntro: "",

    // About & Tools
    about: "Sobre mí",
    toolsAndTech: "Herramientas y tecnologías",
    favoriteBooks: "Libros favoritos",

    // Projects
    projects: "Proyectos",
    code: "Código",
    frontend: "Frontend",
    backend: "Backend",
    viewProject: "Ver proyecto",
    prevProject: "Proyecto anterior",
    nextProject: "Proyecto siguiente",
    goToProject: "Ir al proyecto",

    // Contact
    contact: "Contacto",

    // Project detail
    projectNotFound: "Proyecto no encontrado",
    backToHome: "Volver al inicio",
    viewCode: "Ver código",
    frontendCode: "Código frontend",
    backendCode: "Código backend",
    projectMedia: "Material del proyecto",
    projectReport: "Reporte del proyecto",
    aboutThisProject: "Sobre este proyecto",
    keyFeatures: "Características principales",
    technicalChallenges: "Retos técnicos",
    otherProjects: "Otros proyectos",

    // 404
    pageNotFound: "¡Ups! Página no encontrada",
    returnHome: "Volver al inicio",

    // Toggle
    switchLanguage: "Switch to English"
  }
} as const;

export type UIKey = keyof typeof ui.en;
