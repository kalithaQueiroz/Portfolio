import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink } from "lucide-react";
import {
  projectCategories,
  projectDetails,
  type CategorySlug,
} from "@/data/portfolio-projects";
import { publicPath } from "@/lib/paths";

export function generateStaticParams() {
  return Object.entries(projectDetails).map(([project, detail]) => ({
    slug: detail.category,
    project,
  }));
}

export const dynamicParams = false;

export default async function ProjectDetail({
  params,
}: {
  params: Promise<{ slug: string; project: string }>;
}) {
  const { slug, project } = await params;
  if (!(project in projectDetails) || !(slug in projectCategories)) notFound();
  const detail = projectDetails[project as keyof typeof projectDetails];
  if (detail.category !== slug) notFound();
  const category = slug as CategorySlug;
  return (
    <main className="case-page">
      <nav className="project-nav">
        <Link href={`/projetos/${category}`}>
          <ArrowLeft /> Voltar aos projetos
        </Link>
        <Link href="/">&lt;/&gt;</Link>
      </nav>
      <header className="case-hero">
        <p className="eyebrow">{detail.label}</p>
        <h1>{detail.title}</h1>
        <p>{detail.summary}</p>
        <div className="tech-list">
          {detail.technologies.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
        <a
          className="case-repository"
          href={detail.repository}
          target="_blank"
          rel="noreferrer"
        >
          Ver repositório <ExternalLink />
        </a>
      </header>
      {"metrics" in detail && (
        <section className="metric-grid">
          {detail.metrics.map((metric) => (
            <strong key={metric}>{metric}</strong>
          ))}
        </section>
      )}
      <article className="case-content project-under-construction">
        <Image
          src={publicPath("/conteudo-em-construcao.gif")}
          alt="Conteúdo deste projeto em construção"
          width={900}
          height={700}
          unoptimized
          priority
        />
      </article>
      <footer>
        <Link href="/portfolio">Kálitha Queiroz</Link>
        <p>Projeto documentado do início às conclusões.</p>
      </footer>
    </main>
  );
}
