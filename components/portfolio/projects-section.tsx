import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { portfolio } from "@/data/portfolio-projects";

export default function ProjectsSection() {
  return (
    <section id="portfolio" className="portfolio-section section-shell">
      <div className="section-heading">
        <p className="eyebrow">Trabalhos selecionados</p>
        <h2>Portfólio</h2>
        <p>
          Explore os projetos por área e acompanhe o processo por trás de cada
          resultado.
        </p>
      </div>
      <div className="portfolio-grid">
        {portfolio.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              className="portfolio-card"
              href={`/projetos/${item.slug}`}
              aria-label={`Ver projetos de ${item.title}`}
              key={item.slug}
            >
              <span className="card-index">{item.number}</span>
              <Icon />
              <p>{item.eyebrow}</p>
              <h3>{item.title}</h3>
              <span>{item.copy}</span>
              <div className="card-techs">
                {item.techs.map((tech) => (
                  <small key={tech}>{tech}</small>
                ))}
              </div>
              <strong className="card-cta">
                Ver projetos <ArrowRight />
              </strong>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
