// Projects configuration
const baseUrl = import.meta.env.BASE_URL;

function withBase(assetPath: string): string {
  const normalizedPath = assetPath
    .replace(/^\/+/, "")
    .replace(/^public\//, "");
  return `${baseUrl}${normalizedPath}`;
}

export const projectsConfig = {
  projects: [
    {
      title: "E-Commerce Platform",
      coverImage: withBase("svg/project1.svg"),
      galleryImages: [withBase("svg/project1.svg"), withBase("svg/project2.svg"), withBase("svg/project3.svg")],
      description:
        "A full-stack e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, product management, shopping cart, and payment integration.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      liveLink: "#",
      githubLink: "#",
    },
    {
      title: "Task Management App",
      coverImage: withBase("svg/project2.svg"),
      galleryImages: [withBase("svg/project2.svg"), withBase("svg/project3.svg"), withBase("svg/project4.svg")],
      description:
        "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features for enhanced productivity.",
      technologies: ["Vue.js", "Firebase", "Vuex", "Vuetify"],
      liveLink: "#",
      githubLink: "#",
    },
    {
      title: "Portfolio Website",
      coverImage: withBase("svg/project3.svg"),
      galleryImages: [withBase("svg/project3.svg"), withBase("svg/project4.svg"), withBase("svg/project5.svg")],
      description:
        "A modern, responsive portfolio website built with Astro and styled-components. Features smooth animations and SEO optimization for better visibility.",
      technologies: ["Astro", "Styled-components", "TypeScript", "Netlify"],
      liveLink: "#",
      githubLink: "#",
    },
    {
      title: "Social Media Dashboard",
      coverImage: withBase("svg/project4.svg"),
      galleryImages: [withBase("svg/project4.svg"), withBase("svg/project5.svg"), withBase("svg/project6.svg")],
      description:
        "A comprehensive social media analytics dashboard with real-time data visualization, engagement metrics, and content scheduling features for businesses.",
      technologies: ["React", "TypeScript", "Chart.js", "REST API"],
      liveLink: "#",
      githubLink: "#",
    },
    {
      title: "Fitness Tracking App",
      coverImage: withBase("svg/project5.svg"),
      galleryImages: [withBase("svg/project5.svg"), withBase("svg/project6.svg"), withBase("svg/project7.svg")],
      description:
        "A mobile-first fitness tracking application with workout plans, progress tracking, and social sharing capabilities to help users stay motivated.",
      technologies: ["React Native", "Firebase", "Redux", "Expo"],
      liveLink: "#",
      githubLink: "#",
    },
    {
      title: "Recipe Sharing Platform",
      coverImage: withBase("svg/project6.svg"),
      galleryImages: [withBase("svg/project6.svg"), withBase("svg/project7.svg"), withBase("svg/project8.svg")],
      description:
        "An interactive recipe sharing platform where users can discover, create, and share their favorite recipes with the community worldwide.",
      technologies: ["Next.js", "PostgreSQL", "Prisma", "AWS"],
      liveLink: "#",
      githubLink: "#",
    },
    {
      title: "E-Learning Platform",
      coverImage: withBase("svg/project7.svg"),
      galleryImages: [withBase("svg/project7.svg"), withBase("svg/project8.svg"), withBase("svg/project9.svg")],
      description:
        "A comprehensive e-learning platform with video courses, interactive quizzes, progress tracking, and certificate generation for online education.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      liveLink: "#",
      githubLink: "#",
    },
    {
      title: "Weather Forecast App",
      coverImage: withBase("svg/project8.svg"),
      galleryImages: [withBase("svg/project8.svg"), withBase("svg/project9.svg"), withBase("svg/project10.svg")],
      description:
        "A beautiful weather forecast application with location-based forecasts, detailed weather maps, and customizable widgets for accurate weather information.",
      technologies: ["Vue.js", "OpenWeather API", "Chart.js", "PWA"],
      liveLink: "#",
      githubLink: "#",
    },
    {
      title: "Music Streaming Service",
      coverImage: withBase("svg/project9.svg"),
      galleryImages: [withBase("svg/project9.svg"), withBase("svg/project10.svg"), withBase("svg/project1.svg")],
      description:
        "A modern music streaming platform with personalized playlists, social features, and high-quality audio streaming for music enthusiasts worldwide.",
      technologies: ["React", "Node.js", "PostgreSQL", "AWS S3"],
      liveLink: "#",
      githubLink: "#",
    },
    {
      title: "Project Management Tool",
      coverImage: withBase("svg/project10.svg"),
      galleryImages: [withBase("svg/project10.svg"), withBase("svg/project1.svg"), withBase("svg/project2.svg")],
      description:
        "An advanced project management tool with Gantt charts, team collaboration, time tracking, and comprehensive reporting for efficient project delivery.",
      technologies: ["Angular", "NestJS", "PostgreSQL", "Docker"],
      liveLink: "#",
      githubLink: "#",
    },
  ],
};

