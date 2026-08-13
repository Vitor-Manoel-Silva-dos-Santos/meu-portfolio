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
      galleryImages: [withBase("images/posts/azul_genipapo/Azulgenipapo.jpg"), withBase("images/posts/azul_genipapo/Azulgenipapo2.jpg"), withBase("images/posts/azul_genipapo/Azulgenipapo3.jpg")],
      description:
        "Uma obra que explora a beleza e a complexidade do genipapo azul, capturando suas cores vibrantes e texturas únicas.",
      // technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      // liveLink: "#",
      // githubLink: "#",
    },
    {
      title: "Menino em harmonia com a natureza",
      coverImage: withBase("images/posts/menino_peixe/Meninopeixe.jpg"),
      galleryImages: [withBase("images/posts/menino_peixe/Meninopeixe.jpg"), withBase("images/posts/menino_peixe/Meninopeixe2.jpg"), withBase("images/posts/menino_peixe/Meninopeixe3.jpg")],
      description:
        "Uma obra que retrata a conexão harmoniosa entre o menino e a natureza, explorando a relação simbiótica e o respeito pelo meio ambiente.",
      // technologies: ["Vue.js", "Firebase", "Vuex", "Vuetify"],
      // liveLink: "#",
      // githubLink: "#",
    },
    {
      title: "Mulher onça",
      coverImage: withBase("images/posts/mulher_onca/Mulheronca.jpg"),
      galleryImages: [withBase("images/posts/mulher_onca/Mulheronca.jpg"), withBase("images/posts/mulher_onca/Mulheronca2.jpg"), withBase("images/posts/mulher_onca/Mulheronca3.jpg")],
      description:
        "Uma mulher onça, representando a força e a beleza da natureza, capturada em uma obra de arte visualmente impactante.",
      // technologies: ["Astro", "Styled-components", "TypeScript", "Netlify"],
      // liveLink: "#",
      // githubLink: "#",
    },
    {
      title: "Artesão genipapo",
      coverImage: withBase("images/posts/mulher_facao/Mulherfacao.jpg"),
      galleryImages: [withBase("images/posts/mulher_facao/Mulherfacao.jpg"), withBase("images/posts/mulher_facao/Mulherfacao2.jpg"), withBase("images/posts/mulher_facao/Mulherfacao3.jpg")],
      description:
        "Uma obra que retrata um artesão trabalhando com genipapo, destacando a habilidade artesanal e a tradição cultural.",
      // technologies: ["React", "TypeScript", "Chart.js", "REST API"],
      // liveLink: "#",
      // githubLink: "#",
    },
    
  ],
};

