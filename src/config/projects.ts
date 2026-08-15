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
      title: "Azul Jenipapo",
      coverImage: withBase("images/posts/azul_genipapo/Azulgenipapo.jpg"),
      galleryImages: [
        withBase("images/posts/azul_genipapo/Azulgenipapo.jpg"), 
        withBase("images/posts/azul_genipapo/modelothibranca.jpg"), 
        withBase("images/posts/azul_genipapo/bolsa.jpg"), 
        withBase("images/posts/azul_genipapo/Quadro.jpg"), 
        withBase("images/posts/azul_genipapo/modelothipreta.jpg")
      ],
      galleryTexts: [
        "Ilustração Principal da série Azul Jenipapo.",
        "Aplicação da arte em camiseta branca.",
        "Aplicação da arte em bolsa ecológica.",
        "Quadro da obra.",
        "Aplicação da arte em camiseta preta.",
      ],
      technique: "Pintura à mão e Ilustração digital",
      description:
        "Série sobre o genipapo azul e suas texturas, criada para pintura e aplicações têxteis.",
    },
    {
      title: "Curumin pescador de sonhos",
      coverImage: withBase("images/posts/menino_peixe/Meninopeixe.jpg"),
      galleryImages: [
        withBase("images/posts/menino_peixe/Meninopeixe.jpg"), 
        withBase("images/posts/menino_peixe/capalivro.png"),
        withBase("images/posts/menino_peixe/Quadro.jpg"),
        withBase("images/posts/menino_peixe/Capacaderno.jpeg") 
      ],
      galleryTexts: [
        "Ilustração Principal da série Curumin pescador de sonhos.",
        "Aplicação da arte na capa de livro.",
        "Quadro da obra.",
        "Aplicação da arte na capa de caderno."
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
      galleryImages: [
        withBase("images/posts/mulher_onca/Mulheronca.jpg"), 
        withBase("images/posts/mulher_onca/bolsa.jpg"), 
        withBase("images/posts/mulher_onca/Quadro.jpg")
      ],
      technique: "Ilustração digital",
      galleryTexts: [
        "Ilustração Principal da série Mulher onça.",
        "Aplicação da arte na bolsa ecológica.",
        "Quadro da obra.",
      ],
      description:
        "Figura que relaciona força, identidade e natureza em uma mesma presença.",
    },
    {
      title: "Artesão Jenipapo",
      coverImage: withBase("images/posts/mulher_facao/Mulherfacao.jpg"),
      galleryImages: [
        withBase("images/posts/mulher_facao/Mulherfacao.jpg"), 
        withBase("images/posts/mulher_facao/Bolsa.jpg"), 
        withBase("images/posts/mulher_facao/Quadro.jpg")
      ],
      galleryTexts: [
        "Ilustração Principal da série Artesão Jenipapo.",
        "Aplicação da arte na bolsa ecológica.",
        "Quadro da obra.",
      ],
      technique: "Ilustração digital",
      description:
        "Retrato de um fazer artesanal ligado à memória e à tradição do jenipapo.",
    },
    {
      title: "Quem é daqui sabe",
      coverImage: withBase("images/posts/quem_e_sabe/Quemesabe.jpg"),
      galleryImages: [
        withBase("images/posts/quem_e_sabe/Quemesabe.jpg"), 
        withBase("images/posts/quem_e_sabe/CamisetaBranca.jpg"),
        withBase("images/posts/quem_e_sabe/Bolsa2.jpg"), 
        withBase("images/posts/quem_e_sabe/CamisetaPreta.jpg"),
        withBase("images/posts/quem_e_sabe/Quadro.jpg"),
      ],
       galleryTexts: [
        "Ilustração Principal da série Quem é daqui sabe.",
        "Aplicação da arte na camiseta branca.",
        "Aplicação da arte na bolsa ecológica.",
        "Aplicação da arte na camiseta preta.",
        "Quadro da obra.",
      ],
      technique: "Ilustração digital",
      description:
        "Uma obra sobre pertencimento, identidade local e memória coletiva.",
     
    },
    {
      title: "Exposição artistica em evento musical",
      coverImage: withBase("images/posts/caraguatrance/capa_expo.jpg"),
      galleryImages: [
        withBase("images/posts/caraguatrance/capa_expo.jpg"), 
        withBase("images/posts/caraguatrance/1.jpg"),
        withBase("images/posts/caraguatrance/2.jpg"), 
        withBase("images/posts/caraguatrance/3.jpg"),
        withBase("images/posts/caraguatrance/4.jpg"),
        withBase("images/posts/caraguatrance/5.jpg"),
      ],
       galleryTexts: [
        "Ilustração Principal da série Quem é daqui sabe.",
        "Aplicação da arte na camiseta branca.",
        "Aplicação da arte na bolsa ecológica.",
        "Aplicação da arte na camiseta preta.",
        "Quadro da obra.",
      ],
      technique: "Ilustração digital",
      description:
        "Tive a oportunidade de expor minhas obras em um evento de música, criando uma conexão entre arte, cultura e as experiências vividas pelo público naquele momento. Ver meu trabalho inserido nesse ambiente tão intenso e cheio de energia foi uma experiência marcante, que ampliou minha visão sobre o alcance da arte e o impacto que ela pode gerar nas pessoas.",
     
    },
    {
      title: "Sticker Art",
      coverImage: withBase("images/posts/Stickers/Sticker.jpg"),
      galleryImages: [
        withBase("images/posts/Stickers/Sticker.jpg"), 
        withBase("images/posts/Stickers/DuplaArt.png"), 
        withBase("images/posts/Stickers/RosaArt.png"), 
      ],
       galleryTexts: [
        "Stickers autorais com representação da cultura indigena.",
      ],
      technique: "Ilustração digital",
      description:
        "Stickers autorais com representação da cultura indigena.",
    },
    
    
  ],
};

