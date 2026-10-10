export type VisualAssetSlot =
  | "hero"
  | "services"
  | "portfolio"
  | "process"
  | "plans"
  | "values"
  | "faq"
  | "contact";

export type VisualTheme = "light" | "dark";

/** One encoded width of the same artwork, used to build `srcset`. */
export type VisualAssetSource = {
  width: number;
  url: string;
};

export type VisualAssetSpec = {
  pdfSection: string;
  siteSection: string;
  caption: string;
  objective: string;
  alt: string;
  theme: VisualTheme;
  aspectRatio: string;
  aspectLabel: string;
  imageUrl: string | null;
  /** Responsive WebP widths; the browser picks the smallest sharp file for each screen density. */
  sources?: VisualAssetSource[];
  /** Rendered CSS width of the slot per breakpoint (object-fit: cover included). */
  sizes?: string;
};

/**
 * `null` keeps a prepared placeholder for slots still awaiting their own art.
 * Setting a slot's URL swaps its preparation artwork for the final image.
 */
export const visualAssets: Record<VisualAssetSlot, VisualAssetSpec> = {
  hero: {
    pdfSection: "ARTE 01 · HERO",
    siteSection: "Primeira impressão",
    caption: "Interface web flutuante em glassmorphism 3D",
    objective:
      "Impactar na abertura do site com luz violeta e azul em fundo branco.",
    alt: "Interface web conceitual tridimensional com painéis de vidro fosco e luzes violeta e azul sobre fundo branco.",
    theme: "light",
    aspectRatio: "4 / 5",
    aspectLabel: "4:5",
    imageUrl: "/hero-custom.jpg",
  },
  services: {
    pdfSection: "ARTE 02 · SERVIÇOS",
    siteSection: "01 / O que faço",
    caption: "Arquitetura de cloud e servidores",
    objective: "Comunicar código estruturado, seguro e performático.",
    alt: "Arquitetura abstrata de cloud e servidores com cubos translúcidos e fluxos de luz violeta e azul em fundo branco.",
    theme: "light",
    aspectRatio: "16 / 9",
    aspectLabel: "16:9",
    imageUrl: "/services-custom.jpg",
  },
  portfolio: {
    pdfSection: "ARTE 03 · PORTFÓLIO",
    siteSection: "02 / Explorações visuais",
    caption: "Estudo visual de interfaces em glassmorphism",
    objective:
      "Apresentar uma linguagem visual conceitual sem sugerir cases ou clientes reais.",
    alt: "Telas holográficas conceituais de landing page, dashboard e loja editorial flutuando em ambiente obsidiana com reflexos violeta e azul.",
    theme: "dark",
    aspectRatio: "21 / 9",
    aspectLabel: "21:9",
    imageUrl: "/portfolio-custom.jpg",
  },
  process: {
    pdfSection: "ARTE 04 · PROCESSO",
    siteSection: "03 / Como trabalhamos",
    caption: "Ondas suaves e nós de um fluxo conectado",
    objective:
      "Representar visualmente as etapas que conduzem da ideia à entrega.",
    alt: "Ondas de vidro translúcido conectando nós luminosos violeta e azuis sobre fundo branco.",
    theme: "light",
    aspectRatio: "4 / 5",
    aspectLabel: "4:5",
    imageUrl: "/process-custom.png",
  },
  plans: {
    pdfSection: "PROMPT EXTRA · PLANOS",
    siteSection: "04 / Formatos de projeto",
    caption: "Escadaria de crescimento em glassmorphism",
    objective:
      "Sinalizar a progressão dos formatos Starter, Professional, Business e Enterprise.",
    alt: "Escadaria 3D ascendente em materiais brancos com bordas violetas translúcidas, simbolizando o crescimento dos negócios.",
    theme: "light",
    aspectRatio: "1 / 1",
    aspectLabel: "1:1",
    imageUrl: "/plans-custom.png",
  },
  values: {
    pdfSection: "ARTE 05 · VALORES",
    siteSection: "05 / O que guia o trabalho",
    caption: "Jardim zen tecnológico",
    objective:
      "Expressar “Menos ruído. Mais propósito.” com uma esfera de energia violeta.",
    alt: "Esfera de vidro flutuante com núcleo violeta suave sobre areia preta ondulada, em ambiente sereno e minimalista.",
    theme: "dark",
    aspectRatio: "5 / 4",
    aspectLabel: "5:4",
    imageUrl: "/values-custom.png",
  },
  faq: {
    pdfSection: "ARTE 06 · FAQ",
    siteSection: "06 / Dúvidas comuns",
    caption: "Orb de energia abstrato",
    objective:
      "Humanizar a área de dúvidas com luz interna lilás e azul-claro.",
    alt: "Orb tridimensional de energia elétrica com brilho violeta e azul-claro em fundo escuro.",
    theme: "dark",
    aspectRatio: "1 / 1",
    aspectLabel: "1:1",
    imageUrl: "/faq-custom.png",
  },
  contact: {
    pdfSection: "ARTE 07 · CONTATO",
    siteSection: "07 / Próximo passo",
    caption: "Cápsula de vidro ascendente",
    objective:
      "Simbolizar crescimento e incentivar o próximo passo do negócio.",
    alt: "Cápsula abstrata de vidro escuro com bordas violeta luminosas subindo suavemente sobre fundo obsidiana.",
    theme: "dark",
    aspectRatio: "4 / 3",
    aspectLabel: "4:3",
    imageUrl: "/contact-custom.png",
  },
};
