import interactiveStreamlitCover from "@/assets/interactive-web-soccer.jpg";
import interactiveStreamlitVideo from "@/assets/web ligamx_mls video.mp4";
import winnerWayCover from "@/assets/winner-way.png";
import reservacionesCover from "@/assets/projects/reservaciones/portada_reservaciones.png";
import reservacionesVideo from "@/assets/projects/reservaciones/reservaciones.mp4";
import cv2026 from "@/assets/documents/cv2026.pdf";

export const personalInfo = {
  name: "Emilio Zavala Miceli",
  title: "Computer Systems Engineering Student",
  description: "Data Analyst focused on sports analytics with Python, SQL, and Power BI expertise.",
  about: "Computer Systems Engineering student with hands-on experience building sports analytics tools and data pipelines. Developed an AI-powered tennis coaching platform and a soccer xG prediction model trained on real World Cup data (StatsBomb).",
  email: "3zavalam.tech@gmail.com",
  github: "https://github.com/3zavalam",
  linkedin: "https://www.linkedin.com/in/emilio-zavala-miceli-86595927b/",
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
    title: "Post-Match Dashboard",
    description: "Dashboard for analyzing soccer match statistics by scraping data from SofaScore and FotMob with detailed visualizations.",
    tech: ["Python", "Matplotlib", "Web Scraping", "BeautifulSoup", "Data Analysis"],
    github: "https://github.com/3zavalam/Match-Report-Analysis",
    image: "/projects/dashboard/dashboard.png",
    longDescription: "This project features two comprehensive dashboards created by scraping data from SofaScore and Fotmob. The Match Recap Dashboard presents key stats, shot data, and team performance, while the Shot Maps Dashboard provides detailed shot maps and Player of the Match analysis. The aim is to present the most relevant match information in a concise and user-friendly way, including key statistics that provide insights into the match's dynamics.",
    features: ["Best Player Stats with detailed statistics", "Shot Maps showing location and accuracy", "Match Momentum graphs highlighting key moments", "Comprehensive match overview with possession and expected goals", "Player and team shot map comparisons"],
    challenges: "Creating accurate data extraction from multiple sources while maintaining data consistency and developing meaningful visualizations that provide actionable match insights."
  },
  {
    id: 2,
    title: "xG Prediction Model",
    description: "Machine learning model to predict Expected Goals (xG) using 2022 FIFA World Cup data with logistic regression.",
    tech: ["Python", "Scikit-learn", "Pandas", "mplsoccer", "StatsBomb", "Logistic Regression"],
    github: "https://github.com/3zavalam/xG-Model",
    image: "/projects/xg-model/allShots.png",
    longDescription: "A machine learning model developed to predict Expected Goals (xG) in football using 2022 FIFA World Cup data from StatsBomb. The xG metric quantifies the likelihood of a goal being scored from a particular shot based on various factors such as shot location, angle, and body part. Two models were tested: Linear Regression and Logistic Regression, with the latter chosen as the final model due to its ability to avoid negative xG values.",
    features: ["StatsBomb data integration with 64 matches and 1453 shots", "Logistic regression model achieving R² score of 0.187", "Comprehensive shot analysis including location, angle, and body part", "Model performance comparison with StatsBomb's official xG", "Interactive visualizations of all World Cup shots"],
    challenges: "Processing large datasets efficiently while creating an accurate model that accounts for various factors affecting shot quality, and achieving performance comparable to industry-standard models."
  },
  {
    id: 3,
    title: "Interactive Streamlit Web",
    description: "Interactive web application for generating radar charts, shot maps, and team statistics for soccer matches.",
    tech: ["Python", "Streamlit", "BeautifulSoup", "Matplotlib", "Web Scraping"],
    github: "https://github.com/3zavalam/Interactive-Web",
    image: interactiveStreamlitCover,
    videos: [
      {
        src: interactiveStreamlitVideo,
        type: "video/mp4",
        title: "Web Liga MX / MLS Data Workflow",
        description: "Interactive capture showing how visualizations are generated with data from Liga MX and MLS."
      }
    ],
    longDescription: "An interactive web application built using Streamlit to create a dynamic and engaging user experience. It allows users to generate radar charts, shot maps for players, and team statistics for specific matches. The project includes three main sections: Radar charts updated weekly with player stats from FBref, individual player shot maps from FotMob, and team shot maps for specific matches.",
    features: ["Automated weekly data updates for player statistics", "Interactive radar charts for player comparison", "Individual player shot maps with top scorers", "Team shot maps for specific matches", "Data integration from multiple sources (FBref, FotMob)"],
    challenges: "Handling different data formats from multiple sources, maintaining data accuracy across weekly updates, and creating meaningful visualizations while dealing with website structure changes that affect scraping functionality."
  },
  {
    id: 4,
    title: "Winner Way (Full-stack)",
    description: "Complete platform for tennis analysis with AI. Modern frontend and backend with keypoint detection, DTW and impact analysis.",
    tech: ["React", "TypeScript", "Flask", "Python", "Supabase", "OpenCV"],
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
        title: "Stroke Detection",
        description: "AI-assisted recognition that detects strokes during a rally."
      },
      {
        type: "video/quicktime",
        sources: [
          { src: "/winnerway-ai-coach.mov", type: "video/quicktime" },
          { src: "/winnerway-ai-coach.mov", type: "video/mp4" }
        ],
        title: "AI Coach Demo",
        description: "Platform walkthrough highlighting tactical tennis analysis."
      }
    ],
    longDescription: "A comprehensive tennis analysis platform that combines computer vision with modern web technologies. The system uses AI to detect tennis court keypoints, analyze player movements using Dynamic Time Warping (DTW) algorithms, and track ball impacts. Built with a React/TypeScript frontend for smooth user experience and a Python/Flask backend for heavy computational tasks.",
    features: ["Real-time tennis court keypoint detection", "Player movement analysis with DTW", "Ball impact tracking and statistics", "Modern responsive web interface", "Real-time data processing"],
    challenges: "Implementing accurate computer vision algorithms for real-time tennis analysis while maintaining good performance across different video qualities and court conditions."
  },
  {
    id: 5,
    title: "Reservaciones para Night Clubs",
    description: "Sistema de reservaciones para antros y venues nocturnos con panel de administrador, app para clientes y vista para el cadenero.",
    tech: ["FastAPI", "Python", "React", "TypeScript", "Vite", "Tailwind CSS", "Supabase", "PostgreSQL"],
    github: "https://github.com/3zavalam/reservaciones",
    image: reservacionesCover,
    videos: [
      {
        src: reservacionesVideo,
        type: "video/mp4",
        title: "Demo Reservaciones",
        description: "Recorrido por las tres interfaces: app de clientes, panel de administrador y vista del cadenero."
      }
    ],
    longDescription: "Plataforma completa de reservaciones para venues nocturnos. Incluye tres interfaces: una app pública donde los clientes eligen mesa, ven el plano del lugar y reciben un código de confirmación; un panel de administrador con login, estadísticas del día, gestión de mesas y generación de links para el cadenero; y una vista simplificada para el cadenero (RP) con acceso por token temporal que le permite marcar llegadas y no-shows en tiempo real. El backend expone una API REST con autenticación diferenciada por rol y manejo de concurrencia en reservaciones mediante transacciones en Postgres.",
    features: [
      "Selección de mesa sobre el plano real del venue con posicionamiento por coordenadas",
      "Código de confirmación único generado automáticamente (ej. G-342)",
      "Dashboard admin con stats del día: reservas, personas y consumo mínimo total",
      "Link temporal para cadenero (expira a las 6am), sin necesidad de login",
      "Configuración de consumo mínimo por mesa y por día de la semana",
      "Manejo de concurrencia en reservaciones con transacciones en PostgreSQL",
      "RLS (Row Level Security) en Supabase — cada admin solo ve su venue",
      "Arquitectura monorepo con workspaces compartidos de tipos TypeScript"
    ],
    challenges: "Manejar concurrencia en reservaciones para evitar doble-booking, implementar autenticación diferenciada por tres roles distintos y sincronizar el estado de mesas en tiempo real entre el admin y el cadenero."
  },
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
