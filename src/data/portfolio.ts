import interactiveStreamlitCover from "@/assets/interactive-web-soccer.jpg";
import interactiveStreamlitVideo from "@/assets/web ligamx_mls video.mp4";
import winnerWayCover from "@/assets/winner-way.png";
import reservacionesCover from "@/assets/projects/reservaciones/portada_reservaciones.png";
import reservacionesVideo from "@/assets/projects/reservaciones/reservaciones.mp4";
import cv2026 from "@/assets/documents/cv2026.pdf";
import xgModelReport from "@/assets/documents/xG model report.pdf";
import dashboardReport from "@/assets/documents/Match Report Analysis Project.pdf";
import clubLeonLogo from "@/assets/experience/club-leon.webp";
import mitacsLogo from "@/assets/experience/mitacs-inrs.png";
import piqueroLogo from "@/assets/experience/piquero.png";
import riansaLogo from "@/assets/experience/riansa.png";

// Los campos de texto visible van como { en, es }. Los que no dependen del idioma
// (nombres, URLs, tecnologías) se quedan como string plano: `tr()` los devuelve tal cual.
export const personalInfo = {
  name: "Emilio Zavala Miceli",
  title: {
    en: "Computer Systems Engineering Student",
    es: "Estudiante de Ingeniería en Sistemas Computacionales"
  },
  description: {
    en: "Data Analyst focused on sports analytics with Python, SQL, and Power BI expertise.",
    es: "Analista de datos enfocado en analítica deportiva, con experiencia en Python, SQL y Power BI."
  },
  about: {
    en: "Computer Systems Engineering student with hands-on experience building sports analytics tools and data pipelines. Developed an AI-powered tennis coaching platform and a soccer xG prediction model trained on real World Cup data (StatsBomb).",
    es: "Estudiante de Ingeniería en Sistemas Computacionales con experiencia práctica construyendo herramientas de analítica deportiva y pipelines de datos. Desarrollé una plataforma de coaching de tenis con IA y un modelo de predicción de xG en fútbol entrenado con datos reales del Mundial (StatsBomb)."
  },
  // Nota al pie de la bio, en "Sobre mí". Los títulos no se traducen: van como
  // se publicaron.
  favoriteBooks: [
    { title: "Runnin' Down a Dream", author: "Bill Gurley" },
    {
      title:
        "Goal: The Ball Doesn't Go In By Chance: Management Ideas from the World of Football",
      author: "Ferran Soriano"
    },
    { title: "Excellent Advice for Living", author: "Kevin Kelly" }
  ],
  email: "3zavalam.tech@gmail.com",
  github: "https://github.com/3zavalam",
  linkedin: "https://www.linkedin.com/in/emilio-zavala-miceli-86595927b/",
  substack: "https://laocho.substack.com/",
  location: "México",
  cv: cv2026
};

export const skills = [
  {
    category: "Languages",
    items: ["Python", "SQL"]
  },
  {
    category: "Data & AI",
    items: ["Pandas", "NumPy", "Scikit-learn", "OpenCV"]
  },
  {
    category: "Visualization",
    items: ["Power BI", "Matplotlib", "Seaborn"]
  },
  {
    category: "Development",
    items: ["React", "Flask", "Streamlit", "Git", "GitHub"]
  },
  {
    category: "Databases",
    items: ["SQL", "Relational Databases"]
  }
];

export const projects = [
  {
    id: 1,
    title: {
      en: "Post-Match Dashboard",
      es: "Dashboard Post-Partido"
    },
    description: {
      en: "Dashboard for analyzing soccer match statistics by scraping data from SofaScore and FotMob with detailed visualizations.",
      es: "Dashboard para analizar estadísticas de partidos de fútbol, con datos extraídos de SofaScore y FotMob y visualizaciones detalladas."
    },
    tech: ["Python", "Matplotlib", "Web Scraping", "BeautifulSoup", "Data Analysis"],
    github: "https://github.com/3zavalam/Match-Report-Analysis",
    image: "/projects/dashboard/dashboard.png",
    images: ["/projects/dashboard/dashboard.png"],
    report: dashboardReport,
    longDescription: {
      en: "This project features two comprehensive dashboards created by scraping data from SofaScore and Fotmob. The Match Recap Dashboard presents key stats, shot data, and team performance, while the Shot Maps Dashboard provides detailed shot maps and Player of the Match analysis. The aim is to present the most relevant match information in a concise and user-friendly way, including key statistics that provide insights into the match's dynamics.",
      es: "Este proyecto incluye dos dashboards construidos con datos extraídos de SofaScore y FotMob. El Match Recap Dashboard presenta estadísticas clave, datos de tiros y rendimiento por equipo, mientras que el Shot Maps Dashboard ofrece mapas de tiro detallados y el análisis del Jugador del Partido. El objetivo es presentar la información más relevante del partido de forma concisa y fácil de leer, incluyendo las estadísticas que explican su dinámica."
    },
    features: {
      en: [
        "Best Player Stats with detailed statistics",
        "Shot Maps showing location and accuracy",
        "Match Momentum graphs highlighting key moments",
        "Comprehensive match overview with possession and expected goals",
        "Player and team shot map comparisons"
      ],
      es: [
        "Estadísticas detalladas del mejor jugador del partido",
        "Mapas de tiro con ubicación y precisión",
        "Gráficas de momentum que resaltan los momentos clave",
        "Resumen completo del partido con posesión y goles esperados",
        "Comparación de mapas de tiro entre jugadores y equipos"
      ]
    },
    challenges: {
      en: "Creating accurate data extraction from multiple sources while maintaining data consistency and developing meaningful visualizations that provide actionable match insights.",
      es: "Lograr una extracción precisa de datos desde varias fuentes manteniendo la consistencia, y desarrollar visualizaciones que realmente aporten conclusiones accionables sobre el partido."
    }
  },
  {
    id: 2,
    title: {
      en: "xG Prediction Model",
      es: "Modelo de Predicción de xG"
    },
    description: {
      en: "Machine learning model to predict Expected Goals (xG) using 2022 FIFA World Cup data with logistic regression.",
      es: "Modelo de machine learning para predecir Goles Esperados (xG) con datos del Mundial 2022 usando regresión logística."
    },
    tech: ["Python", "Scikit-learn", "Pandas", "mplsoccer", "StatsBomb", "Logistic Regression"],
    github: "https://github.com/3zavalam/xG-Model",
    image: "/projects/xg-model/allShots.png",
    longDescription: {
      en: "A machine learning model developed to predict Expected Goals (xG) in football using 2022 FIFA World Cup data from StatsBomb. The xG metric quantifies the likelihood of a goal being scored from a particular shot based on various factors such as shot location, angle, and body part. Two models were tested: Linear Regression and Logistic Regression, with the latter chosen as the final model due to its ability to avoid negative xG values.",
      es: "Un modelo de machine learning desarrollado para predecir Goles Esperados (xG) en fútbol usando datos del Mundial FIFA 2022 de StatsBomb. La métrica xG cuantifica la probabilidad de que un tiro termine en gol según factores como la ubicación, el ángulo y la parte del cuerpo con la que se remata. Se probaron dos modelos, Regresión Lineal y Regresión Logística, y se eligió el segundo por su capacidad de evitar valores de xG negativos."
    },
    features: {
      en: [
        "StatsBomb data integration with 64 matches and 1453 shots",
        "Logistic regression model achieving R² score of 0.187",
        "Comprehensive shot analysis including location, angle, and body part",
        "Model performance comparison with StatsBomb's official xG",
        "Interactive visualizations of all World Cup shots"
      ],
      es: [
        "Integración de datos de StatsBomb: 64 partidos y 1,453 tiros",
        "Modelo de regresión logística con un R² de 0.187",
        "Análisis completo del tiro: ubicación, ángulo y parte del cuerpo",
        "Comparación del rendimiento contra el xG oficial de StatsBomb",
        "Visualizaciones interactivas de todos los tiros del Mundial"
      ]
    },
    report: xgModelReport,
    challenges: {
      en: "Processing large datasets efficiently while creating an accurate model that accounts for various factors affecting shot quality, and achieving performance comparable to industry-standard models.",
      es: "Procesar grandes volúmenes de datos de forma eficiente y construir un modelo preciso que considere los múltiples factores que afectan la calidad de un tiro, alcanzando un rendimiento comparable al de modelos estándar de la industria."
    }
  },
  {
    id: 3,
    title: {
      en: "Interactive Streamlit Web",
      es: "Web Interactiva con Streamlit"
    },
    description: {
      en: "Interactive web application for generating radar charts, shot maps, and team statistics for soccer matches.",
      es: "Aplicación web interactiva para generar gráficas de radar, mapas de tiro y estadísticas de equipo de partidos de fútbol."
    },
    tech: ["Python", "Streamlit", "BeautifulSoup", "Matplotlib", "Web Scraping"],
    github: "https://github.com/3zavalam/Interactive-Web",
    image: interactiveStreamlitCover,
    videos: [
      {
        src: interactiveStreamlitVideo,
        type: "video/mp4",
        title: {
          en: "Web Liga MX / MLS Data Workflow",
          es: "Flujo de datos Liga MX / MLS"
        },
        description: {
          en: "Interactive capture showing how visualizations are generated with data from Liga MX and MLS.",
          es: "Captura interactiva que muestra cómo se generan las visualizaciones con datos de la Liga MX y la MLS."
        }
      }
    ],
    longDescription: {
      en: "An interactive web application built using Streamlit to create a dynamic and engaging user experience. It allows users to generate radar charts, shot maps for players, and team statistics for specific matches. The project includes three main sections: Radar charts updated weekly with player stats from FBref, individual player shot maps from FotMob, and team shot maps for specific matches.",
      es: "Una aplicación web interactiva construida con Streamlit para ofrecer una experiencia dinámica. Permite generar gráficas de radar, mapas de tiro por jugador y estadísticas de equipo para partidos específicos. El proyecto tiene tres secciones principales: radares actualizados semanalmente con estadísticas de FBref, mapas de tiro individuales desde FotMob, y mapas de tiro por equipo para partidos concretos."
    },
    features: {
      en: [
        "Automated weekly data updates for player statistics",
        "Interactive radar charts for player comparison",
        "Individual player shot maps with top scorers",
        "Team shot maps for specific matches",
        "Data integration from multiple sources (FBref, FotMob)"
      ],
      es: [
        "Actualización semanal automática de estadísticas de jugadores",
        "Gráficas de radar interactivas para comparar jugadores",
        "Mapas de tiro individuales con los máximos goleadores",
        "Mapas de tiro por equipo para partidos específicos",
        "Integración de datos de varias fuentes (FBref, FotMob)"
      ]
    },
    challenges: {
      en: "Handling different data formats from multiple sources, maintaining data accuracy across weekly updates, and creating meaningful visualizations while dealing with website structure changes that affect scraping functionality.",
      es: "Manejar formatos de datos distintos según la fuente, mantener la precisión con actualizaciones semanales y crear visualizaciones útiles pese a los cambios en la estructura de los sitios que afectan el scraping."
    }
  },
  {
    id: 4,
    title: {
      en: "Winner Way (Full-stack)",
      es: "Winner Way (Full-stack)"
    },
    description: {
      en: "Complete platform for tennis analysis with AI. Modern frontend and backend with keypoint detection, DTW and impact analysis.",
      es: "Plataforma completa de análisis de tenis con IA. Frontend y backend modernos con detección de keypoints, DTW y análisis de impacto."
    },
    tech: ["React", "TypeScript", "FastAPI", "Python", "Supabase", "OpenCV"],
    github: "https://github.com/3zavalam/frontend",
    githubBackend: "https://github.com/3zavalam/ww-backend",
    image: winnerWayCover,
    videos: [
      {
        type: "video/quicktime",
        sources: [
          { src: "/winnerway-detect-strokes.mov", type: "video/quicktime" },
          { src: "/winnerway-detect-strokes.mov", type: "video/mp4" }
        ],
        title: {
          en: "Stroke Detection",
          es: "Detección de golpes"
        },
        description: {
          en: "AI-assisted recognition that detects strokes during a rally.",
          es: "Reconocimiento asistido por IA que detecta los golpes durante un peloteo."
        }
      },
      {
        type: "video/quicktime",
        sources: [
          { src: "/winnerway-ai-coach.mov", type: "video/quicktime" },
          { src: "/winnerway-ai-coach.mov", type: "video/mp4" }
        ],
        title: {
          en: "AI Coach Demo",
          es: "Demo del AI Coach"
        },
        description: {
          en: "Platform walkthrough highlighting tactical tennis analysis.",
          es: "Recorrido por la plataforma mostrando el análisis táctico de tenis."
        }
      }
    ],
    longDescription: {
      en: "A comprehensive tennis analysis platform that combines computer vision with modern web technologies. The system uses AI to detect tennis court keypoints, analyze player movements using Dynamic Time Warping (DTW) algorithms, and track ball impacts. Built with a React/TypeScript frontend for smooth user experience and a Python/FastAPI backend for heavy computational tasks.",
      es: "Una plataforma integral de análisis de tenis que combina visión por computadora con tecnologías web modernas. El sistema usa IA para detectar los keypoints de la cancha, analizar el movimiento del jugador con algoritmos de Dynamic Time Warping (DTW) y rastrear los impactos de la pelota. Construida con un frontend en React/TypeScript para una experiencia fluida y un backend en Python/FastAPI para las tareas de cómputo pesado."
    },
    features: {
      en: [
        "Real-time tennis court keypoint detection",
        "Player movement analysis with DTW",
        "Ball impact tracking and statistics",
        "Modern responsive web interface",
        "Real-time data processing"
      ],
      es: [
        "Detección de keypoints de la cancha en tiempo real",
        "Análisis del movimiento del jugador con DTW",
        "Seguimiento y estadísticas del impacto de la pelota",
        "Interfaz web moderna y responsive",
        "Procesamiento de datos en tiempo real"
      ]
    },
    challenges: {
      en: "Implementing accurate computer vision algorithms for real-time tennis analysis while maintaining good performance across different video qualities and court conditions.",
      es: "Implementar algoritmos de visión por computadora precisos para el análisis en tiempo real, manteniendo buen rendimiento con distintas calidades de video y condiciones de cancha."
    }
  },
  {
    id: 5,
    title: {
      en: "Night Club Reservation System",
      es: "Reservaciones para Night Clubs"
    },
    description: {
      en: "Reservation system for night clubs and venues, with an admin dashboard, a customer app, and a door staff view.",
      es: "Sistema de reservaciones para antros y venues nocturnos con panel de administrador, app para clientes y vista para el cadenero."
    },
    tech: ["FastAPI", "Python", "React", "TypeScript", "Vite", "Tailwind CSS", "Supabase", "PostgreSQL"],
    github: "https://github.com/3zavalam/reservaciones",
    image: reservacionesCover,
    videos: [
      {
        src: reservacionesVideo,
        type: "video/mp4",
        title: {
          en: "Reservations Demo",
          es: "Demo Reservaciones"
        },
        description: {
          en: "Walkthrough of the three interfaces: customer app, admin dashboard, and door staff view.",
          es: "Recorrido por las tres interfaces: app de clientes, panel de administrador y vista del cadenero."
        }
      }
    ],
    longDescription: {
      en: "A complete reservation platform for night venues. It includes three interfaces: a public app where customers pick a table, see the venue floor plan, and get a confirmation code; an admin dashboard with login, daily stats, table management, and link generation for door staff; and a simplified door staff view with temporary token access that lets them mark arrivals and no-shows in real time. The backend exposes a REST API with role-based authentication and handles booking concurrency through Postgres transactions.",
      es: "Plataforma completa de reservaciones para venues nocturnos. Incluye tres interfaces: una app pública donde los clientes eligen mesa, ven el plano del lugar y reciben un código de confirmación; un panel de administrador con login, estadísticas del día, gestión de mesas y generación de links para el cadenero; y una vista simplificada para el cadenero (RP) con acceso por token temporal que le permite marcar llegadas y no-shows en tiempo real. El backend expone una API REST con autenticación diferenciada por rol y manejo de concurrencia en reservaciones mediante transacciones en Postgres."
    },
    features: {
      en: [
        "Table selection on the venue's real floor plan with coordinate-based positioning",
        "Unique confirmation code generated automatically (e.g. G-342)",
        "Admin dashboard with daily stats: bookings, guests, and total minimum spend",
        "Temporary door staff link (expires at 6am), no login required",
        "Minimum spend configurable per table and per day of the week",
        "Booking concurrency handled with PostgreSQL transactions",
        "Row Level Security (RLS) in Supabase — each admin only sees their venue",
        "Monorepo architecture with shared TypeScript type workspaces"
      ],
      es: [
        "Selección de mesa sobre el plano real del venue con posicionamiento por coordenadas",
        "Código de confirmación único generado automáticamente (ej. G-342)",
        "Dashboard admin con stats del día: reservas, personas y consumo mínimo total",
        "Link temporal para cadenero (expira a las 6am), sin necesidad de login",
        "Configuración de consumo mínimo por mesa y por día de la semana",
        "Manejo de concurrencia en reservaciones con transacciones en PostgreSQL",
        "RLS (Row Level Security) en Supabase — cada admin solo ve su venue",
        "Arquitectura monorepo con workspaces compartidos de tipos TypeScript"
      ]
    },
    challenges: {
      en: "Handling booking concurrency to avoid double-booking, implementing authentication across three distinct roles, and syncing table state in real time between the admin and the door staff.",
      es: "Manejar concurrencia en reservaciones para evitar doble-booking, implementar autenticación diferenciada por tres roles distintos y sincronizar el estado de mesas en tiempo real entre el admin y el cadenero."
    }
  },
];

// Orden: más reciente primero.
export const experience = [
  {
    id: 1,
    company: "Club León FC",
    role: {
      en: "Data & Automation Intern",
      es: "Practicante de Automatizaciones y Análisis de Datos"
    },
    location: { en: "Remote", es: "Remoto" },
    period: { en: "Aug 2026 – Present", es: "Ago 2026 – Presente" },
    logo: clubLeonLogo,
    description: {
      en: "Building automations and data analysis workflows to support football operations.",
      es: "Desarrollando automatizaciones y análisis de datos para apoyar las operaciones del club."
    }
  },
  {
    id: 2,
    company: "Mitacs Globalink Research Internship",
    role: { en: "Research Intern", es: "Investigador Becario" },
    location: { en: "Montreal, Canada", es: "Montreal, Canadá" },
    period: { en: "May – Aug 2026", es: "Mayo – Ago 2026" },
    logo: mitacsLogo,
    logoBg: "dark" as const,
    description: {
      en: "Applying AI and web scraping techniques to research problems under faculty supervision at a Canadian university.",
      es: "Aplicando técnicas de IA y web scraping a problemas de investigación bajo la supervisión de profesores en una universidad canadiense."
    }
  },
  {
    id: 3,
    company: "Piquero Technology and Sports",
    role: { en: "Software Developer Intern", es: "Practicante de Desarrollo de Software" },
    location: { en: "Puebla, Mexico", es: "Puebla, México" },
    period: { en: "Summer 2025", es: "Verano 2025" },
    logo: piqueroLogo,
    logoBg: "dark" as const,
    description: {
      en: "Built a Q&A chatbot for a national swimming event (500+ attendees), automating FAQ responses and reducing staff workload. Designed a Python algorithm for automated data conversion between Hy-Tek (.hy3) and Excel, eliminating manual data entry and improving accuracy.",
      es: "Construí un chatbot de preguntas y respuestas para un evento nacional de natación (500+ asistentes), automatizando respuestas frecuentes y reduciendo la carga del staff. Diseñé un algoritmo en Python para la conversión automática de datos entre Hy-Tek (.hy3) y Excel, eliminando la captura manual y mejorando la precisión."
    }
  },
  {
    id: 4,
    company: "RIANSA",
    role: { en: "Data Analyst Intern", es: "Practicante de Análisis de Datos" },
    location: { en: "Villahermosa, Mexico", es: "Villahermosa, México" },
    period: { en: "Summer 2024", es: "Verano 2024" },
    logo: riansaLogo,
    description: {
      en: "Created and managed Power BI dashboards to visualize nationwide sales data, enabling faster reporting for the commercial team. Identified top-performing products and highest-volume client locations, generating insights that directly informed sales strategy.",
      es: "Creé y administré dashboards en Power BI para visualizar datos de ventas a nivel nacional, agilizando los reportes del equipo comercial. Identifiqué los productos con mejor desempeño y las ubicaciones de clientes con mayor volumen, generando insights que informaron directamente la estrategia de ventas."
    }
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
    id: 1,
    name: "Machine Learning",
    provider: "Coursera",
    year: "2024",
    skills: ["Python", "Scikit-learn", "Pandas", "NumPy"],
    credential: "https://coursera.org/verify/example123"
  },
  {
    id: 2,
    name: "Docker & NGINX",
    provider: "Udemy",
    year: "2023",
    skills: ["Docker", "NGINX", "DevOps", "Containers"],
    credential: "https://udemy.com/certificate/example456"
  },
  {
    id: 3,
    name: "Streamlit Apps Development",
    provider: "DataCamp",
    year: "2023",
    skills: ["Streamlit", "Python", "Data Viz", "Web Apps"],
    credential: ""
  },
  {
    id: 4,
    name: "React Developer Certificate",
    provider: "Meta",
    year: "2023",
    skills: ["React", "JavaScript", "Frontend"],
    credential: "https://coursera.org/verify/meta-react"
  }
];
