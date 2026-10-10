import { ArrowRight, ArrowUpRight, Check, X } from "lucide-react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { conceptProjects } from "../data/site";

const studies = {
  studio: {
    objective:
      "Apresentar um negócio de serviços com posicionamento claro e um caminho simples até o contato.",
    decisions: [
      "Tipografia editorial e espaço negativo para valorizar a mensagem.",
      "Serviços agrupados por necessidade, com chamadas diretas.",
      "Navegação curta e hierarquia que se adapta ao celular.",
    ],
    scope: [
      "Página inicial",
      "Apresentação dos serviços",
      "Sobre o negócio",
      "Contato",
    ],
    format: "Site institucional",
    note: "Estudo autoral de direção visual. A marca e o conteúdo da prévia são demonstrativos; não correspondem a um cliente.",
  },
  dashboard: {
    objective:
      "Reduzir o esforço para encontrar tarefas, acompanhar prioridades e entender a rotina de uma operação.",
    decisions: [
      "Navegação lateral com a visão geral como ponto de partida.",
      "Indicadores e status separados para facilitar a leitura.",
      "Lista de tarefas com prioridade visual, sem competir com o conteúdo.",
    ],
    scope: [
      "Visão geral",
      "Lista de tarefas",
      "Filtros por status",
      "Estados de interface",
    ],
    format: "Interface de sistema web",
    note: "Estudo de UI com dados fictícios apenas para demonstrar a organização. Não é um sistema conectado nem um resultado de cliente.",
  },
  launch: {
    objective:
      "Apresentar uma oferta de forma objetiva, conectando a proposta de valor a uma única ação principal.",
    decisions: [
      "Headline curta e uma chamada principal sem distrações.",
      "Contraste violeta e azul para dar foco à oferta.",
      "Sequência de conteúdo: proposta, benefícios, dúvidas e contato.",
    ],
    scope: [
      "Hero da campanha",
      "Benefícios da oferta",
      "FAQ",
      "CTA de contato",
    ],
    format: "Landing page",
    note: "Estudo autoral de uma campanha fictícia. Não há lançamento real, inscrição ativa ou taxa de conversão associada.",
  },
};

type ConceptVariant = keyof typeof studies;

function ConceptPreview({ variant }: { variant: ConceptVariant }) {
  if (variant === "dashboard") {
    return (
      <span
        className="concept-preview concept-preview--dashboard"
        aria-hidden="true"
      >
        <span className="concept-dashboard-nav">
          <span className="concept-mini-logo">O.</span>
          <span className="is-current">Visão geral</span>
          <span>Projetos</span>
          <span>Tarefas</span>
          <span>Equipe</span>
          <small>UI demonstrativa</small>
        </span>
        <span className="concept-dashboard-main">
          <span className="concept-dashboard-heading">
            <strong>Sua operação, clara.</strong>
            <span>FI</span>
          </span>
          <span className="concept-dashboard-kicker">
            EXEMPLO SEM MÉTRICA REAL
          </span>
          <span className="concept-stat-row">
            <span>
              <small>Projetos</small>
              <strong>Em execução</strong>
            </span>
            <span>
              <small>Prioridades</small>
              <strong>Esta semana</strong>
            </span>
            <span>
              <small>Entregas</small>
              <strong>Em revisão</strong>
            </span>
          </span>
          <span className="concept-task-list">
            <span>
              <strong>Próximas tarefas</strong>
              <small>STATUS</small>
            </span>
            <span>
              <span>Revisar interface</span>
              <em>Em revisão</em>
            </span>
            <span>
              <span>Organizar conteúdo</span>
              <em className="status-blue">Em curso</em>
            </span>
            <span>
              <span>Validar navegação</span>
              <em className="status-green">Concluído</em>
            </span>
          </span>
        </span>
      </span>
    );
  }

  if (variant === "launch") {
    return (
      <span
        className="concept-preview concept-preview--launch"
        aria-hidden="true"
      >
        <span className="concept-launch-nav">
          <strong>
            IMPULSO<span> / ESTUDO</span>
          </strong>
          <small>Uma ideia. Um próximo passo.</small>
        </span>
        <span className="concept-launch-copy">
          <small>CONCEITO DE CAMPANHA</small>
          <strong>
            Seu próximo
            <br />
            passo começa
            <br />
            <em>com uma ideia.</em>
          </strong>
          <span>
            Uma oferta clara.
            <br />
            Uma experiência sem ruído.
          </span>
          <span className="concept-mini-cta">
            Conhecer a proposta <ArrowUpRight size={12} />
          </span>
        </span>
        <span className="concept-launch-orb">
          <span />
          <span />
          <span />
        </span>
      </span>
    );
  }

  return (
    <span
      className="concept-preview concept-preview--studio"
      aria-hidden="true"
    >
      <span className="concept-studio-nav">
        <strong>
          ATELIÊ<span> / ESTUDO</span>
        </strong>
        <small>Estratégia · Design</small>
      </span>
      <span className="concept-studio-copy">
        <small>CLAREZA PARA SUA MARCA</small>
        <strong>
          Sua próxima
          <br />
          ideia, em foco<span>.</span>
        </strong>
        <span>
          Uma presença digital com intenção,
          <br />
          do primeiro olhar à próxima conversa.
        </span>
      </span>
      <span className="concept-studio-footer">
        <span className="concept-mini-cta">
          Conheça o estúdio <ArrowUpRight size={12} />
        </span>
        <span className="concept-studio-symbol">✳</span>
      </span>
    </span>
  );
}

export function ConceptProjects() {
  return (
    <div className="projects-grid">
      {conceptProjects.map((project, index) => {
        const variant = project.variant as ConceptVariant;
        const study = studies[variant];

        return (
          <Dialog key={project.title}>
            <article className={`project-card project-${variant}`}>
              <DialogTrigger asChild>
                <button
                  className="project-link concept-card-trigger"
                  type="button"
                  aria-label={`Explorar o conceito ${project.title}`}
                >
                  <span className="project-preview-wrap">
                    <ConceptPreview variant={variant} />
                    <span className="concept-badge">CONCEITUAL</span>
                    <span className="project-index">0{index + 1}</span>
                  </span>
                  <span className="project-info">
                    <span className="concept-card-copy">
                      <span className="concept-category">
                        {project.category}
                      </span>
                      <span
                        className="concept-title"
                        role="heading"
                        aria-level={3}
                      >
                        {project.title}
                      </span>
                      <span className="concept-summary">
                        {project.description}
                      </span>
                      <span className="concept-explore">
                        Explorar conceito <ArrowRight size={14} />
                      </span>
                    </span>
                    <ArrowUpRight className="project-arrow" size={19} />
                  </span>
                </button>
              </DialogTrigger>
            </article>

            <DialogContent
              className="concept-dialog"
              overlayClassName="concept-dialog-overlay"
              showCloseButton={false}
              aria-modal="true"
            >
              <DialogClose
                className="concept-dialog-close"
                aria-label="Fechar estudo"
              >
                <X size={20} />
              </DialogClose>
              <header className="concept-dialog-header">
                <span className="concept-dialog-label">
                  ESTUDO CONCEITUAL · {project.category}
                </span>
                <DialogTitle>{project.title}</DialogTitle>
                <DialogDescription>{study.note}</DialogDescription>
              </header>
              <div className="concept-dialog-preview">
                <ConceptPreview variant={variant} />
              </div>
              <div className="concept-study-grid">
                <section>
                  <h3>O objetivo</h3>
                  <p>{study.objective}</p>
                  <h3>Formato sugerido</h3>
                  <p>{study.format}</p>
                </section>
                <section>
                  <h3>Decisões de interface</h3>
                  <ul>
                    {study.decisions.map(decision => (
                      <li key={decision}>
                        <Check size={15} />
                        <span>{decision}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              </div>
              <section className="concept-study-scope">
                <h3>Escopo sugerido</h3>
                <div>
                  {study.scope.map(item => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </section>
              <footer className="concept-dialog-footer">
                <p>
                  O seu projeto começa por um contexto real.
                  <br />O escopo será definido na conversa.
                </p>
                <DialogClose asChild>
                  <a className="button button-primary" href="#contato">
                    Quero algo assim <ArrowUpRight size={16} />
                  </a>
                </DialogClose>
              </footer>
            </DialogContent>
          </Dialog>
        );
      })}
    </div>
  );
}
