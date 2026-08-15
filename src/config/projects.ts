// Projects configuration
const baseUrl = import.meta.env.BASE_URL;
const normalizedBaseUrl = baseUrl.endsWith("/") ? baseUrl : `${baseUrl}/`;

function withBase(assetPath: string): string {
  const normalizedPath = assetPath
    .replace(/^\/+/, "")
    .replace(/^public\//, "");
  return `${normalizedBaseUrl}${normalizedPath}`;
}

export const projectsConfig = {
  projects: [
    {
      title: "Azul genipapo",
      coverImage: withBase("images/posts/azul_genipapo/Azulgenipapo.jpg"),
      galleryImages: [
        withBase("images/posts/azul_genipapo/Azulgenipapo.jpg"), 
        withBase("images/posts/azul_genipapo/modelothibranca.jpg"), 
        withBase("images/posts/azul_genipapo/bolsa.jpg"), 
        withBase("images/posts/azul_genipapo/modelothipreta.jpg")
      ],
      galleryTexts: [
        "Pintura principal da série Azul Genipapo.",
        "Aplicação da arte em camiseta branca.",
        "Detalhe da arte aplicada na bolsa.",
        "Aplicação da arte em camiseta preta.",
      ],
      technique: "Ilustração digital e aplicação têxtil",
      description:
        "Série sobre o genipapo azul e suas texturas, criada para pintura e aplicações têxteis.",
      // technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      // liveLink: "#",
      // githubLink: "#",
    },
    {
      title: "Menino em harmonia com a natureza",
      coverImage: withBase("images/posts/menino_peixe/Meninopeixe.jpg"),
      galleryImages: [
        withBase("images/posts/menino_peixe/Meninopeixe.jpg"), 
        withBase("images/posts/menino_peixe/capalivro.png"),
        withBase("images/posts/menino_peixe/Capacaderno.jpeg") 
      ],
      technique: "Ilustração digital",
      description:
        "Uma cena sobre infância, natureza e a relação de cuidado entre diferentes seres.",
      // technologies: ["Vue.js", "Firebase", "Vuex", "Vuetify"],
      // liveLink: "#",
      // githubLink: "#",
    },
    {
      title: "Mulher onça",
      coverImage: withBase("images/posts/mulher_onca/Mulheronca.jpg"),
      galleryImages: [withBase("images/posts/mulher_onca/Mulheronca.jpg"), withBase("images/posts/mulher_onca/Mulheronca2.jpg"), withBase("images/posts/mulher_onca/Mulheronca3.jpg")],
      technique: "Ilustração digital",
      description:
        "Figura que relaciona força, identidade e natureza em uma mesma presença.",
      // technologies: ["Astro", "Styled-components", "TypeScript", "Netlify"],
      // liveLink: "#",
      // githubLink: "#",
    },
    {
      title: "Artesão genipapo",
      coverImage: withBase("images/posts/mulher_facao/Mulherfacao.jpg"),
      galleryImages: [withBase("images/posts/mulher_facao/Mulherfacao.jpg"), withBase("images/posts/mulher_facao/Mulherfacao2.jpg"), withBase("images/posts/mulher_facao/Mulherfacao3.jpg")],
      technique: "Ilustração digital",
      description:
        "Retrato de um fazer artesanal ligado à memória e à tradição do genipapo.",
      // technologies: ["React", "TypeScript", "Chart.js", "REST API"],
      // liveLink: "#",
      // githubLink: "#",
    },
    {
      title: "Quem é daqui sabe",
      coverImage: withBase("images/posts/quem_e_sabe/Quemesabe.jpg"),
      galleryImages: [withBase("images/posts/quem_e_sabe/Quemesabe.jpg"), withBase("images/posts/quem_e_sabe/Quemesabe2.jpg"), withBase("images/posts/quem_e_sabe/Quemesabe3.jpg")],
      technique: "Ilustração digital",
      description:
        "Uma obra sobre pertencimento, identidade local e memória coletiva.",
      // technologies: ["React", "TypeScript", "Chart.js", "REST API"],
      // liveLink: "#",
      // githubLink: "#",
    },
    
  ],
};

