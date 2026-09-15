import { BriefcaseBusiness, GraduationCap } from "lucide-react";
import { timeline } from "@/data/portfolio-projects";

function TimelineIcon({ title }: { title: string }) {
  if (title.includes("Graduação") || title.includes("Pós")) {
    return <GraduationCap aria-hidden="true" />;
  }
  return <BriefcaseBusiness aria-hidden="true" />;
}

export default function TrajectorySection() {
  return (
    <section
      className="manifesto section-shell"
      aria-labelledby="trajectory-title"
    >
      <div className="trajectory-heading">
        <p className="eyebrow">Minha trajetória</p>
        <h2 id="trajectory-title">
          Aprender. <em>Evoluir.</em>
        </h2>
        <p>
          Uma jornada que conecta análise, desenvolvimento e aprendizado
          contínuo.
        </p>
      </div>
      <ol className="trajectory-timeline">
        {timeline.map((item) => (
          <li key={item.year + item.title}>
            <h3 className="timeline-title">{item.title}</h3>
            <div className="timeline-track" aria-hidden="true">
              <span className="timeline-arrow" />
            </div>
            <div className="timeline-marker" aria-hidden="true">
              <TimelineIcon title={item.title} />
            </div>
            <div className="timeline-card">
              <span className="timeline-year">{item.year}</span>
              <p>{item.text}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
