import { FormEvent, lazy, Suspense, useEffect, useRef, useState } from "react";
import {
  LazyMotion,
  domAnimation,
  m,
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  type Variants,
} from "framer-motion";
import type { PointerEvent as ReactPointerEvent, ReactNode } from "react";
import {
  ArrowDown,
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  Code2,
  Layers3,
  Menu,
  MousePointer2,
  Sparkles,
  X,
} from "lucide-react";
import { ArtworkSlot } from "../components/ArtworkSlot";
import { BuilderNode } from "../components/BuilderNode";
import { SocialDock } from "../components/SocialDock";
import { faqs, plans, processSteps, services, siteDetails } from "../data/site";

const ConceptProjects = lazy(() =>
  import("../components/ConceptProjects").then(module => ({
    default: module.ConceptProjects,
  }))
);

type ServiceSymbol = "window" | "cursor" | "layers" | "spark";

const serviceIcons: Record<ServiceSymbol, typeof Code2> = {
  window: Code2,
  cursor: MousePointer2,
  layers: Layers3,
  spark: Sparkles,
};

const navigation = [
  { href: "#servicos", label: "Serviços" },
  { href: "#projetos", label: "Projetos" },
  { href: "#processo", label: "Processo" },
  { href: "#planos", label: "Planos" },
];

function BrandMark() {
  return (
    <span className="brand-mark" aria-hidden="true">
      <Layers3 size={18} strokeWidth={2.1} />
    </span>
  );
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuToggleRef = useRef<HTMLButtonElement>(null);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const updateScrollState = () => setScrolled(window.scrollY > 16);
    updateScrollState();
    window.addEventListener("scroll", updateScrollState, { passive: true });
    return () => window.removeEventListener("scroll", updateScrollState);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    const firstLink = navRef.current?.querySelector<HTMLElement>("a");
    firstLink?.focus();

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setMenuOpen(false);
      menuToggleRef.current?.focus();
    };
    const handlePointerDown = (event: PointerEvent) => {
      const target = event.target as Node;
      if (
        navRef.current?.contains(target) ||
        menuToggleRef.current?.contains(target)
      ) {
        return;
      }
      setMenuOpen(false);
    };

    document.addEventListener("keydown", handleEscape);
    document.addEventListener("pointerdown", handlePointerDown);
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.removeEventListener("pointerdown", handlePointerDown);
    };
  }, [menuOpen]);

  const closeMenu = () => {
    setMenuOpen(false);
    if (window.matchMedia("(max-width: 700px)").matches) {
      menuToggleRef.current?.focus();
    }
  };

  return (
    <header className={`site-header${scrolled ? " is-scrolled" : ""}`}>
      <div className="header-inner">
        <a
          className="brand"
          href="#inicio"
          aria-label={`${siteDetails.brandName} — início`}
        >
          <BrandMark />
          <span className="brand-copy">
            <strong>{siteDetails.brandName}</strong>
            <small>{siteDetails.brandDescriptor.toUpperCase()}</small>
          </span>
        </a>

        <button
          ref={menuToggleRef}
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
          onClick={() => setMenuOpen(open => !open)}
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>

        <nav
          id="main-navigation"
          ref={navRef}
          className={`main-nav${menuOpen ? " is-open" : ""}`}
          aria-label="Navegação principal"
        >
          {navigation.map(item => (
            <a key={item.href} href={item.href} onClick={closeMenu}>
              {item.label}
            </a>
          ))}
          <a className="nav-cta" href="#contato" onClick={closeMenu}>
            Vamos conversar <ArrowUpRight size={15} />
          </a>
        </nav>
      </div>
    </header>
  );
}

function TechnologiesStrip() {
  return (
    <div
      className="tech-strip"
      role="group"
      aria-label="Tecnologias que dominamos"
    >
      <span className="tech-strip-label">Tecnologias que dominamos:</span>
      <div className="tech-logos">
        <span className="tech-item">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <circle cx="12" cy="12" r="1.5" fill="currentColor" />
            <ellipse
              cx="12"
              cy="12"
              rx="10"
              ry="3.8"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.35"
            />
            <ellipse
              cx="12"
              cy="12"
              rx="10"
              ry="3.8"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.35"
              transform="rotate(60 12 12)"
            />
            <ellipse
              cx="12"
              cy="12"
              rx="10"
              ry="3.8"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.35"
              transform="rotate(120 12 12)"
            />
          </svg>
          <span>React</span>
        </span>
        <span className="tech-item">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path
              d="m12 2.5 9 5.2v8.6l-9 5.2-9-5.2V7.7l9-5.2Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinejoin="round"
            />
            <text
              x="12"
              y="13.8"
              textAnchor="middle"
              fill="currentColor"
              fontSize="5.6"
              fontFamily="Arial,sans-serif"
              fontWeight="700"
            >
              node
            </text>
          </svg>
          <span>Node.js</span>
        </span>
        <span className="tech-item">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path
              d="M3.5 4h17v16h-17z"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <text
              x="12"
              y="15"
              textAnchor="middle"
              fill="currentColor"
              fontSize="8"
              fontFamily="Arial,sans-serif"
              fontWeight="700"
            >
              TS
            </text>
          </svg>
          <span>TypeScript</span>
        </span>
        <span className="tech-item">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path
              d="M5.1 8.1c.8-2.6 2.5-3.9 5.2-3.9 2.1 0 3.2 1.1 4.3 2.2.8.8 1.6 1.6 3.1 1.6 1.2 0 2.2-.5 3-1.4-.7 2.6-2.4 3.9-5.1 3.9-2.1 0-3.2-1.1-4.3-2.2-.8-.8-1.6-1.6-3.1-1.6-1.2 0-2.2.5-3.1 1.4Zm-2 7.8c.8-2.6 2.5-3.9 5.2-3.9 2.1 0 3.2 1.1 4.3 2.2.8.8 1.6 1.6 3.1 1.6 1.2 0 2.2-.5 3-1.4-.7 2.6-2.4 3.9-5.1 3.9-2.1 0-3.2-1.1-4.3-2.2-.8-.8-1.6-1.6-3.1-1.6-1.2 0-2.2.5-3.1 1.4Z"
              fill="currentColor"
            />
          </svg>
          <span>Tailwind</span>
        </span>
      </div>
    </div>
  );
}

function ValuesArtwork() {
  const photoRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion() === true;
  const { scrollYProgress } = useScroll({
    target: photoRef,
    offset: ["start end", "end start"],
  });
  const artworkY = useTransform(
    scrollYProgress,
    [0, 1],
    reduceMotion ? [0, 0] : [9, -9]
  );

  return (
    <div className="values-artwork-viewport" ref={photoRef}>
      <LazyMotion features={domAnimation} strict>
        <m.div className="values-artwork-parallax" style={{ y: artworkY }}>
          <ArtworkSlot slot="values" className="values-art-slot" />
        </m.div>
      </LazyMotion>
    </div>
  );
}

const servicesGridVariants: Variants = {
  hidden: {},
  visible: {
    transition: { delayChildren: 0.08, staggerChildren: 0.1 },
  },
};

const serviceCardVariants: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 520, damping: 32, mass: 0.55 },
  },
};

function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[number];
  index: number;
}) {
  const Icon = serviceIcons[service.symbol as ServiceSymbol];
  const reduceMotion = useReducedMotion();
  const lift = useMotionValue(reduceMotion ? 0 : 22);
  const springLift = useSpring(lift, { stiffness: 520, damping: 32, mass: 0.22 });

  useEffect(() => {
    if (reduceMotion) return;
    const timer = window.setTimeout(() => lift.set(0), 120 + index * 100);
    return () => window.clearTimeout(timer);
  }, [index, lift, reduceMotion]);

  return (
    <motion.article
      className="service-card"
      custom={index}
      variants={serviceCardVariants}
      style={reduceMotion ? undefined : { y: springLift }}
      whileHover={reduceMotion ? undefined : { y: -4, transition: { type: "spring", stiffness: 620, damping: 28 } }}
    >
      <Icon
        className="service-card-watermark"
        size={96}
        strokeWidth={1.1}
        aria-hidden="true"
      />
      <div className="node-grip-label" aria-hidden="true">
        <span>NODE / {service.number}</span>
        <span>READY</span>
      </div>
      <div className="service-card-top">
        <span>{service.number}</span>
        <Icon size={20} strokeWidth={1.7} />
      </div>
      <h3>{service.title}</h3>
      <p>{service.description}</p>
      <div className="tag-list">
        {service.tags.map(tag => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
      <a
        className="card-arrow"
        href="#contato"
        aria-label={`Conversar sobre ${service.title}`}
      >
        <ArrowDownRight size={17} />
      </a>
    </motion.article>
  );
}

function MagneticLink({
  children,
  className,
  href,
}: {
  children: ReactNode;
  className: string;
  href: string;
}) {
  const reduceMotion = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 520, damping: 32, mass: 0.22 });
  const springY = useSpring(y, { stiffness: 520, damping: 32, mass: 0.22 });

  function reset() {
    x.set(0);
    y.set(0);
  }

  function move(event: ReactPointerEvent<HTMLAnchorElement>) {
    if (reduceMotion) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    x.set((event.clientX - bounds.left - bounds.width / 2) * 0.12);
    y.set((event.clientY - bounds.top - bounds.height / 2) * 0.12);
  }

  return (
    <m.a
      className={className}
      href={href}
      onPointerMove={move}
      onPointerLeave={reset}
      style={reduceMotion ? undefined : { x: springX, y: springY }}
    >
      {children}
    </m.a>
  );
}

function ContactForm() {
  const [feedback, setFeedback] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const email = siteDetails.email.trim();

    if (siteDetails.contactIsExample || !email) {
      setFeedback(
        "O e-mail e o telefone exibidos são demonstrativos. Confirme seus canais reais antes de ativar o envio."
      );
      return;
    }

    const subject = `Novo projeto web — ${String(data.get("name") ?? "")}`;
    const body = [
      `Nome: ${String(data.get("name") ?? "")}`,
      `E-mail: ${String(data.get("email") ?? "")}`,
      `Tipo de projeto: ${String(data.get("project") ?? "Não informado")}`,
      "",
      "Sobre o projeto:",
      String(data.get("message") ?? ""),
    ].join("\n");
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setFeedback(
      "Seu aplicativo de e-mail deve abrir com a mensagem preparada. Confira e envie por lá."
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <label>
          Nome para contato
          <input
            name="name"
            autoComplete="name"
            placeholder="Como podemos chamar você?"
            required
          />
        </label>
        <label>
          Seu e-mail
          <input
            name="email"
            type="email"
            autoComplete="email"
            placeholder="voce@empresa.com"
            required
          />
        </label>
      </div>
      <label>
        O que você quer construir?
        <select name="project" defaultValue="" required>
          <option value="" disabled>
            Selecione uma opção
          </option>
          <option>Site institucional</option>
          <option>Landing page</option>
          <option>Sistema ou produto web</option>
          <option>E-commerce & inventário</option>
          <option>Manutenção e evolução</option>
          <option>Ainda estou definindo</option>
        </select>
      </label>
      <label>
        Um pouco sobre o projeto
        <textarea
          name="message"
          rows={4}
          placeholder="Objetivo, contexto, prazo ou qualquer ideia que já tenha."
          required
        />
      </label>
      <div className="form-bottom">
        <p>
          Sem compromisso. Esta primeira mensagem serve para entendermos o
          escopo.
        </p>
        <button className="button button-primary" type="submit">
          Preparar mensagem <ArrowRight size={16} />
        </button>
      </div>
      <p className="form-feedback" role="status" aria-live="polite">
        {feedback}
      </p>
    </form>
  );
}

function HeroCopy() {
  const reduceMotion = useReducedMotion();
  const heroContainer: Variants = {
    hidden: {},
    visible: {
      transition: {
        delayChildren: 0.08,
        staggerChildren: 0.065,
      },
    },
  };
  const heroItem: Variants = {
    hidden: { opacity: 0, y: 22, filter: "blur(8px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        stiffness: 420,
        damping: 30,
        mass: 0.42,
      },
    },
  };

  return (
    <LazyMotion features={domAnimation} strict>
        <motion.div
        className="hero-copy"
        variants={heroContainer}
        initial={reduceMotion ? false : "hidden"}
        animate="visible"
      >
        <motion.div className="eyebrow" variants={heroItem}>
          <span className="eyebrow-line" /> ENGENHARIA B2B · DESIGN DE CONVERSÃO
        </motion.div>
        <motion.h1
          variants={heroItem}
          aria-label="Arquitetura digital para marcas que lideram seus mercados."
        >
          {"Arquitetura digital para marcas que lideram seus mercados.".split(" ").map((word, index) => (
            <motion.span
              className={word === "mercados." ? "headline-word headline-accent text-gradient" : "headline-word"}
              key={`${word}-${index}`}
              variants={heroItem}
              aria-hidden="true"
            >
              {word}{index < 7 ? " " : ""}
            </motion.span>
          ))}
        </motion.h1>
        <motion.p className="hero-lede" variants={heroItem}>
          Esqueça os templates genéricos. O estúdio de Felipe Inácio constrói sistemas exclusivos, 
          interfaces de alta conversão e infraestruturas escaláveis projetadas para impulsionar a operação e o faturamento da sua empresa.
        </motion.p>
        <motion.div className="hero-actions" variants={heroItem}>
          <MagneticLink className="button button-primary" href="#contato">
            Conversar sobre meu projeto <ArrowUpRight size={17} />
          </MagneticLink>
          <a className="text-link" href="#servicos">
            Conheça os serviços <ArrowDown size={15} />
          </a>
        </motion.div>
        <motion.div className="hero-meta" variants={heroItem}>
          <span className="meta-check">
            <Check size={13} />
          </span>
          <span>Atendimento próximo</span>
          <i />
          <span>Escopo transparente</span>
        </motion.div>
      </motion.div>
    </LazyMotion>
  );
}

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const reduceMotion = useReducedMotion();

  return (
    <div className="site-shell" id="inicio">
      <Header />
      <main>
        <section className="hero section-wrap">
          <HeroCopy />
          <div className="hero-scene-space" aria-hidden="true" />
          <TechnologiesStrip />
          <a className="scroll-cue" href="#servicos">
            <span>ROLE PARA DESCOBRIR</span>
            <ArrowDown size={14} />
          </a>
        </section>

        <section className="intro-strip" aria-label="Resumo da proposta">
          <div className="intro-inner">
            <p>
              TECNOLOGIA COM <strong>INTENÇÃO.</strong>
            </p>
            <span className="intro-divider" />
            <p>
              DESIGN COM <strong>CLAREZA.</strong>
            </p>
            <span className="intro-divider" />
            <p>
              RESULTADOS COM <strong>RESPONSABILIDADE.</strong>
            </p>
          </div>
        </section>

        <section className="section-wrap services-section" id="servicos">
          <div className="section-heading heading-split">
            <div>
              <span className="section-index">01 / O QUE FAÇO</span>
              <h2>
                Presença digital que começa pelo <em>essencial.</em>
              </h2>
            </div>
            <div className="heading-aside">
              <p>
                Da primeira página a uma solução sob medida, cada escolha tem um
                motivo e cada detalhe ajuda a contar a história certa.
              </p>
              <a className="inline-link" href="#planos">
                Encontrar o melhor formato <ArrowRight size={15} />
              </a>
            </div>
          </div>
          <motion.div
            className="services-grid"
            variants={servicesGridVariants}
            initial={reduceMotion ? false : "hidden"}
            whileInView="visible"
            viewport={{ once: true, margin: "-12% 0px" }}
          >
            {services.map((service, index) => (
              <ServiceCard key={service.number} service={service} index={index} />
            ))}
          </motion.div>
        </section>

        <section className="work-section" id="projetos">
          <div className="section-wrap work-inner">
            <div className="section-heading heading-split">
              <div>
                <span className="section-index">02 / EXPLORAÇÕES VISUAIS</span>
                <h2>
                  Ideias que ganham forma, <em>antes do código.</em>
                </h2>
              </div>
              <div className="heading-aside">
                <p>
                  Uma amostra conceitual de como estratégia, conteúdo e
                  interface se encontram. São demonstrações visuais — não
                  representam clientes ou projetos já entregues.
                </p>
              </div>
            </div>
            <ArtworkSlot slot="portfolio" className="portfolio-art-slot" />
            <Suspense
              fallback={<p role="status">Carregando estudos visuais…</p>}
            >
              <ConceptProjects />
            </Suspense>
          </div>
        </section>

        <section className="process-section section-wrap" id="processo">
          <div className="process-intro">
            <span className="section-index">03 / COMO TRABALHAMOS</span>
            <h2>
              Clareza no caminho.
              <br />
              <em>Cuidado em cada etapa.</em>
            </h2>
            <p>
              Você sabe o que acontece, o que precisa decidir e qual é o próximo
              passo.
            </p>
            <a className="button button-dark" href="#contato">
              Conversar sobre meu projeto <ArrowUpRight size={16} />
            </a>
          </div>
          <div className="process-content">
            <div className="process-list">
              {processSteps.map(step => (
                <article className="process-step" key={step.number}>
                  <span className="process-number">{step.number}</span>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </div>
                  <ArrowUpRight size={16} className="process-arrow" />
                </article>
              ))}
            </div>
            <ArtworkSlot slot="process" className="process-art-slot" />
          </div>
        </section>

        <section className="plans-section" id="planos">
          <div className="section-wrap plans-inner">
            <div className="section-heading heading-split plans-heading">
              <div>
                <span className="section-index">04 / FORMATOS DE PROJETO</span>
                <h2>
                  Um ponto de partida para cada <em>desafio.</em>
                </h2>
              </div>
              <div className="heading-aside">
                <p>
                  Os formatos orientam a conversa. O escopo final e o
                  investimento são definidos depois de entender seu contexto.
                </p>
                <span className="budget-note">
                  <span /> VALORES SOB ORÇAMENTO
                </span>
              </div>
              <ArtworkSlot slot="plans" className="plans-art-slot" />
            </div>
            <div className="plans-grid">
              {plans.map((plan, index) => (
                <BuilderNode
                  key={plan.name}
                  label={plan.name}
                  index={plan.label}
                  status={plan.featured ? "active" : "ready"}
                  className="plan-node"
                  staggerIndex={index}
                >
                  <article className={`plan-card${plan.featured ? " plan-featured" : ""}`}>
                  {plan.featured && (
                    <span className="plan-ribbon">FORMATO EM DESTAQUE</span>
                  )}
                  <div className="plan-head">
                    <span className="plan-label">{plan.label}</span>
                    <span className="plan-name">{plan.name}</span>
                    <p>{plan.description}</p>
                  </div>
                  <div className="plan-price">
                    <strong>Sob orçamento</strong>
                    <span>proposta personalizada</span>
                  </div>
                  <ul>
                    {plan.features.map(feature => (
                      <li key={feature}>
                        <Check size={15} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                    <a
                      className={`plan-cta${plan.featured ? " plan-cta-featured" : ""}`}
                      href="#contato"
                    >
                      Conversar sobre este formato <ArrowRight size={15} />
                    </a>
                  </article>
                </BuilderNode>
              ))}
            </div>
            <p className="plans-footnote">
              Prazos, entregas e condições são detalhados na proposta. Recursos
              e integrações são confirmados no escopo.
            </p>
          </div>
        </section>

        <section className="principles-section section-wrap">
          <div className="principles-content">
            <span className="section-index">05 / O QUE GUIA O TRABALHO</span>
            <h2>
              Bom digital é menos ruído.
              <br />
              <em>Mais propósito.</em>
            </h2>
            <div className="principles-grid">
              <article>
                <span>01</span>
                <h3>Escopo claro</h3>
                <p>
                  O que entra, o que não entra e como avançamos ficam combinados
                  desde o começo.
                </p>
              </article>
              <article>
                <span>02</span>
                <h3>Experiência pensada</h3>
                <p>
                  Conteúdo, interface e tecnologia trabalham juntos — em telas
                  pequenas e grandes.
                </p>
              </article>
              <article>
                <span>03</span>
                <h3>Relação que continua</h3>
                <p>
                  Entrega não precisa ser despedida. Evolução e manutenção podem
                  fazer parte do plano.
                </p>
              </article>
            </div>
          </div>
          <ValuesArtwork />
        </section>

        <section className="faq-section" id="faq">
          <div className="section-wrap faq-inner">
            <div className="faq-intro">
              <span className="section-index">06 / DÚVIDAS COMUNS</span>
              <ArtworkSlot slot="faq" className="faq-art-slot" />
              <h2>
                O que você quer saber <em>antes de começar?</em>
              </h2>
              <p>Se algo ficou de fora, a gente conversa.</p>
              <a className="inline-link" href="#contato">
                Fale comigo <ArrowRight size={15} />
              </a>
            </div>
            <div className="faq-list">
              {faqs.map((faq, index) => (
                <article
                  className={`faq-item${openFaq === index ? " is-open" : ""}`}
                  key={faq.question}
                >
                  <h3>
                    <button
                      type="button"
                      aria-expanded={openFaq === index}
                      onClick={() =>
                        setOpenFaq(current =>
                          current === index ? null : index
                        )
                      }
                    >
                      {faq.question}
                      <ChevronDown size={18} />
                    </button>
                  </h3>
                  {openFaq === index && <p>{faq.answer}</p>}
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="contact-section section-wrap" id="contato">
          <div className="contact-copy">
            <span className="section-index">07 / PRÓXIMO PASSO</span>
            <h2>
              Tem uma ideia?
              <br />
              <em>Vamos conversar.</em>
            </h2>
            <p>
              Conte o que você está planejando. A primeira conversa ajuda a
              entender o desafio e avaliar um caminho possível.
            </p>
            <ArtworkSlot slot="contact" className="contact-art-slot" />
            <div className="contact-detail">
              <span className="contact-detail-icon">
                <ArrowUpRight size={17} />
              </span>
              <div>
                <small>E-MAIL</small>
                {siteDetails.contactIsExample ? (
                  <span>{siteDetails.email}</span>
                ) : (
                  <a href={`mailto:${siteDetails.email}`}>
                    {siteDetails.email}
                  </a>
                )}
              </div>
            </div>
            <div className="contact-detail">
              <span className="contact-detail-icon">
                <ArrowUpRight size={17} />
              </span>
              <div>
                <small>WHATSAPP</small>
                {siteDetails.contactIsExample ? (
                  <span>{siteDetails.whatsapp}</span>
                ) : siteDetails.whatsapp.replace(/\D/g, "").length >= 12 ? (
                  <a
                    href={`https://wa.me/${siteDetails.whatsapp.replace(/\D/g, "")}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {siteDetails.whatsapp}
                  </a>
                ) : (
                  <span>Contato a confirmar</span>
                )}
              </div>
            </div>
            <div className="contact-detail">
              <span className="contact-detail-icon">
                <ArrowUpRight size={17} />
              </span>
              <div>
                <small>ATENDIMENTO</small>
                <span>{siteDetails.serviceArea}</span>
              </div>
            </div>
            <p className="placeholder-note" role="note">
              Os contatos exibidos são demonstrativos. Confirme seu e-mail e
              telefone reais antes de divulgar o site.
            </p>
          </div>
          <div className="contact-form-card">
            <div className="form-card-heading">
              <span>VAMOS COMEÇAR</span>
              <span className="form-status-dot" />{" "}
              <small>Uma conversa, sem compromisso</small>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>

      <SocialDock />
      <footer className="site-footer">
        <div className="footer-main">
          <a className="brand footer-brand" href="#inicio">
            <BrandMark />
            <span className="brand-copy">
              <strong>{siteDetails.brandName}</strong>
              <small>{siteDetails.brandDescriptor.toUpperCase()}</small>
            </span>
          </a>
          <p>
            Digital com intenção.
            <br />
            Feito para evoluir.
          </p>
          <a className="back-top" href="#inicio">
            VOLTAR AO TOPO <ArrowUpRight size={14} />
          </a>
        </div>
        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} {siteDetails.brandName}. Todos os
            direitos reservados.
          </span>
          <span>{siteDetails.serviceArea}</span>
          <span>Desenhado para fazer sentido.</span>
        </div>
      </footer>
    </div>
  );
}





