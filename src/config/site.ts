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
    home: "Início",
    posts: "Artes",
    contact: "Contato",
    comments: "Comentários",
  },
  
  // Hero Section
  hero: {
    prefix: "Me chamo",
    name: "Aukanaii",
    intro: "Artista ilustradora indígena Atikum Umã,\ncriando arte sobre ancestralidade, território, identidade e memória.",
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
    text: "Sou Aukanaii, artista indígena Atikum Umã. Nasci em Mirandiba (PE) e fui criada no litoral de São Paulo.\n\nEncontrei na arte, através da ilustração digital, animação, muralismo, tatuagem e pintura em tela o meu caminho de pertencimento e expressão. Meu trabalho busca visibilizar os povos originários, retratando diversas vivências, resistências e identidades através da arte.",
  },
  
  // Contact Page
  contact: {
    title: "Entre em contato",
    subtitle: "Estou sempre aberta para conversar sobre novos projetos, ideias criativas e oportunidades de colaborar.",
    info: {
      email: {
        label: "E-mail",
        value: "ingrideaukanaii16@gmail.com",
        link: "mailto:ingrideaukanaii16@gmail.com",
      },
      phone: {
        label: "Telefone",
        value: "+55 (XX) XXXXX-XXXX",
        link: "tel:+55XXXXXXXXXXXX",
      },
      location: {
        label: "Localização",
        value: "Brasil",
      },
    },
    followMe: {
      title: "Siga-me",
      links: [
        { name: "Instagram", icon: withBase("svg/twitter.svg"), url: "https://www.instagram.com/aukanaii_art" },
      ],
    },
    footerText: [
      "Normalmente respondo mensagens em até 24 horas durante os dias úteis.",
      "Ficarei feliz em ouvir sua ideia! ✨",
    ],
    messageButton: "💬 Enviar mensagem",
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
    title: "Artes",
    subtitle: "Explore meus trabalhos, projetos e criações artísticas.",
    searchPlaceholder: "Buscar artes...",
  },
  
  // Comments Page
  comments: {
    title: "Comentários e discussões",
    subtitle: "Compartilhe seus pensamentos, perguntas ou sugestões aqui. Vamos conversar e conectar!",
    guidelines: {
      title: "Diretrizes da comunidade",
      items: [
        "Seja respeitoso e construtivo nos comentários",
        "Não é permitido spam, autopromoção ou publicidade",
        "Sem ataques pessoais, discurso de ódio ou assédio",
        "Mantenha o foco no tema e nas discussões relevantes",
        "Sem conteúdo inadequado, ofensivo ou ilegal",
        "Use uma linguagem clara, amigável e inclusiva",
      ],
    },
  },
};

