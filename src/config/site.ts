// Site-wide configuration
const baseUrl = import.meta.env.BASE_URL;
const normalizedBaseUrl = baseUrl.endsWith("/") ? baseUrl : `${baseUrl}/`;

function withBase(assetPath: string): string {
  const normalizedPath = assetPath
    .replace(/^\/+/, "")
    .replace(/^public\//, "");
  return `${normalizedBaseUrl}${normalizedPath}`;
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
    intro: "Artista visual indígena Atikum Umã,\ncriando imagens sobre ancestralidade, território, identidade e memória.",
    avatar: withBase("image/foto_avatar.jpg"),
    aboutme: withBase("image/sobre_mim.jpg"),
    buttons: {
      viewPosts: "Projetos",
      contactMe: "Sobre mim",
    },
    socialLinks: [
      {
        name: "instagram",
        icon: withBase("svg/instagram_original.svg"),
        url: "https://www.instagram.com/aukanaii_art",
        label: "@aukanaii_art",
      }
      ],
  },
  
  // About Section
  about: {
    title: "Sobre mim",
    text: "Sou Aukanaii, artista indígena do povo Atikum Umã. Nasci em Mirandiba (PE) e fui criada no litoral de São Paulo, carregando na minha trajetória a conexão profunda com as minhas raízes e a ancestralidade.\n Encontrei na arte, através da ilustração digital, da animação, do muralismo, da tatuagem e pintura em tela o meu caminho de pertencimento e expressão. Meu trabalho busca visibilizar e honrar os povos nativos latinos-americanos, retratando nossas diversas vivências, resistências e identidades através da arte.",
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
  
  // // Footer
  // footer: {
  //   copyright: "© 2025 Someone. All rights reserved.",
  //   links: [
  //     { text: "Privacy Policy", url: "#" },
  //     { text: "Terms of Service", url: "#" },
  //     { text: "Sitemap", url: "#" },
  //   ],
  //   github: {
  //     text: "Star this project on Github",
  //     url: "https://github.com/tomcomtang/astro-cartoon-portfolio",
  //   },
  // },
  
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

