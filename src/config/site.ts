// Site-wide configuration
const baseUrl = import.meta.env.BASE_URL;

function withBase(assetPath: string): string {
  const normalizedPath = assetPath
    .replace(/^\/+/, "")
    .replace(/^public\//, "");
  return `${baseUrl}${normalizedPath}`;
}

export const siteConfig = {
  // Site metadata
  logo: withBase("image/arteazul_icone.png"),
  name: "Aukanaii",
  title: "Aukanaii",
  description: "Artista visual",
  
  // Navigation
  navigation: {
    home: "Home",
    posts: "Artes",
    contact: "Contato",
    comments: "Comments",
  },
  
  // Hero Section
  hero: {
    prefix: "Me chamo",
    name: "Aukanaii",
    intro: "Artista visual indigena do povo Atikum e Pankará.\nBem-vindo ao meu portfólio!",
    avatar: withBase("image/foto_avatar.jpg"),
    buttons: {
      viewPosts: "View Posts",
      contactMe: "Contact Me",
    },
    socialLinks: [
      { name: "instagram", icon: withBase("svg/instagram_original.svg"), url: "https://www.instagram.com/aukanaii_art" }
      ],
  },
  
  // About Section
  about: {
    title: "About Me",
    text: "Hi, I'm Someone, a passionate web developer and blogger. I love exploring new technologies and sharing knowledge with the community. On this blog, you'll find my thoughts on web development, tutorials, and project showcases. I hope my content can inspire others in their coding journey.",
  },
  
  // Contact Page
  contact: {
    title: "Get In Touch",
    subtitle: "I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.",
    info: {
      email: {
        label: "Email",
        value: "tom@example.com",
        link: "mailto:tom@example.com",
      },
      phone: {
        label: "Phone",
        value: "+1 (234) 567-890",
        link: "tel:+1 (234) 567-890",
      },
      location: {
        label: "Location",
        value: "San Francisco, CA",
      },
    },
    followMe: {
      title: "Follow Me",
      links: [
        { name: "Instagram", icon: withBase("svg/twitter.svg"), url: "https://x.com/astrodotbuild" },
      ],
    },
    footerText: [
      "I typically respond to messages within 24 hours during business days.",
      "Looking forward to hearing from you! 🚀",
    ],
    messageButton: "💬 Leave a Message",
  },
  
  // Footer
  footer: {
    copyright: "© 2025 Someone. All rights reserved.",
    links: [
      { text: "Privacy Policy", url: "#" },
      { text: "Terms of Service", url: "#" },
      { text: "Sitemap", url: "#" },
    ],
    github: {
      text: "Star this project on Github",
      url: "https://github.com/tomcomtang/astro-cartoon-portfolio",
    },
  },
  
  // Posts Page
  posts: {
    title: "Blog Posts",
    subtitle: "Explore our latest articles on web development, design, and technology",
    searchPlaceholder: "Search posts...",
  },
  
  // Comments Page
  comments: {
    title: "Comments & Discussion",
    subtitle: "Share your thoughts, questions, or suggestions here. Let's connect and discuss!",
    guidelines: {
      title: "Community Guidelines",
      items: [
        "Be respectful and constructive in your comments",
        "No spam, self-promotion, or advertising allowed",
        "No personal attacks, hate speech, or harassment",
        "Stay on topic and keep discussions relevant",
        "No inappropriate, offensive, or illegal content",
        "Use clear, friendly, and inclusive language",
      ],
    },
  },
};

