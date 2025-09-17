import interactiveStreamlitCover from "@/assets/interactive-web-soccer.jpg";
import interactiveStreamlitVideo from "@/assets/web ligamx_mls video.mp4";
import previousPortfolioCover from "@/assets/portfolio-streamlit.jpg";
import previousPortfolioVideo from "@/assets/prueba portfolio web.mp4";
import winnerWayCover from "@/assets/winner-way.png";

export const personalInfo = {
  name: "Emilio Zavala Miceli",
  title: "Computer Systems Engineering Student",
  description: "Data Analyst focused on sports analytics with Python, SQL, and Power BI expertise.",
  about: "Hi! I'm Emilio Zavala, a Computer Systems Engineering student passionate about data analytics and sports. I love analyzing data, finding patterns, and turning numbers into actionable insights. Sports analytics is where my passion really shines - combining my love for athletics with data science to uncover performance trends and strategic opportunities. I work with Python, SQL, and Power BI to build meaningful visualizations and solve real-world problems. Whether it's predicting game outcomes or optimizing player performance, I'm always excited to dive into new datasets and discover what stories the data can tell.",
  email: "3zavalam.tech@gmail.com",
  github: "https://github.com/3zavalam",
  linkedin: "https://www.linkedin.com/in/emilio-zavala-miceli-86595927b/",
  location: "México",
  phone: "+52 123 456 7890"
};

export const skills = [
  "Python", "Pandas", "NumPy", "Scikit-learn", "SQL", "Power BI",
  "Matplotlib", "Streamlit", "Web Scraping", "BeautifulSoup",
  "Machine Learning", "Logistic Regression", "Data Visualization",
  "Sports Analytics", "Statistical Analysis", "Data Processing",
  "TypeScript", "React", "Next.js", "Tailwind CSS"
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
    title: "Previous Portfolio Web",
    description: "Previous portfolio built with Streamlit showcasing data visualization projects and web scraping capabilities.",
    tech: ["Streamlit", "Python", "Data Viz", "Web Scraping"],
    github: "https://github.com/3zavalam/Portfolio-Web",
    image: previousPortfolioCover,
    videos: [
      {
        src: previousPortfolioVideo,
        type: "video/mp4",
        title: "Streamlit Portfolio Overview",
        description: "Walkthrough of the previous Streamlit portfolio, exploring sections and projects."
      }
    ],
    longDescription: "My previous portfolio website built entirely with Streamlit, showcasing various data visualization projects and web scraping capabilities. This project demonstrates the versatility of Python for both data analysis and web application development.",
    features: ["Interactive data visualizations", "Web scraping demonstrations", "Multiple project showcases", "Streamlit-powered interface", "Data analysis workflows"],
    challenges: "Creating an engaging portfolio experience using Streamlit's limitations while effectively showcasing technical capabilities and project diversity."
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
