import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  BarChart3,
  Braces,
  Code2,
  Database,
  ExternalLink,
  Layers3,
} from "lucide-react";
import {
  projectCategories,
  projectCategoryOrder,
  projectDetails,
  type CategorySlug,
} from "@/data/portfolio-projects";

export const dynamicParams = false;

const categoryIcons = {
  backend: Braces,
  frontend: Code2,
  "analise-de-dados": BarChart3,
} as const;

const projectIcons = {
  backend: Database,
  frontend: Layers3,
  "analise-de-dados": BarChart3,
} as const;

export function generateStaticParams() {
  return Object.keys(projectCategories).map((slug) => ({ slug }));
}

export default async function ProjectCategory({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (!(slug in projectCategories)) notFound();

  const currentSlug = slug as CategorySlug;
  const data = projectCategories[currentSlug];
  const CategoryIcon = categoryIcons[currentSlug];
  const ProjectIcon = projectIcons[currentSlug];

  return (
    <main className="project-page">
      <nav className="project-nav" aria-label="Navegação dos projetos">
        <Link href="/portfolio#portfolio">
          <ArrowLeft /> Voltar ao portfólio
        </Link>
        <Link
          className="project-brand"
          href="/"
          aria-label="Ir para a página inicial"
        >
          &lt;/&gt;
        </Link>
      </nav>

      <header className="project-catalog-hero">
        <div className="catalog-intro">
          <p className="eyebrow">Trabalhos selecionados</p>
          <h1>
            Projetos de <em>{data.title}.</em>
          </h1>
          <p>{data.description}</p>
        </div>
        <div className="project-filter-column">
          <nav className="project-filters" aria-label="Categorias do portfólio">
            {projectCategoryOrder.map((categorySlug) => (
              <Link
                className={currentSlug === categorySlug ? "active" : ""}
                href={`/projetos/${categorySlug}`}
                key={categorySlug}
              >
                {projectCategories[categorySlug].title}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      <section
        className="project-list"
        aria-label={`Projetos de ${data.title}`}
      >
        {data.projects.map((project, index) => {
          const detail = projectDetails[project.slug];
          return (
            <article className="project-entry" key={project.slug}>
              <div className="project-copy">
                <div className="project-meta">
                  <span className="project-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="project-status">{project.status}</span>
                </div>
                <h2>{project.name}</h2>
                <p className="project-description">{project.text}</p>
                <div className="project-techs">
                  {detail.technologies.slice(0, 4).map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>
                <a
                  className="project-repository"
                  href={project.repository}
                  target="_blank"
                  rel="noreferrer"
                >
                  Ver repositório <ArrowRight />
                </a>
              </div>
              <Link
                className="project-visual"
                href={`/projetos/${currentSlug}/${project.slug}`}
                aria-label={`Abrir detalhes do projeto ${project.name}`}
              >
                <div className="visual-glow" />
                <ProjectIcon />
                <span>{project.tag}</span>
                <ExternalLink className="visual-link-icon" />
              </Link>
            </article>
          );
        })}
      </section>

      <section className="project-next">
        <CategoryIcon />
        <div>
          <p className="eyebrow">Em constante construção</p>
          <h2>
            Novos projetos
            <br />
            <em>em breve.</em>
          </h2>
        </div>
      </section>
      <footer className="project-footer">
        <Link className="project-brand" href="/">
          &lt;/&gt;
        </Link>
        <p>© 2026 Kálitha Queiroz</p>
        <Link href="/portfolio#portfolio">Voltar ao portfólio ↑</Link>
      </footer>
    </main>
  );
}
