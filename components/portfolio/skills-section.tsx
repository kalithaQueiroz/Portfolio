import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { skills } from "@/data/portfolio-projects";

export default function SkillsSection() {
  return (
    <section id="habilidades" className="skills-section section-shell">
      <div className="section-heading">
        <p className="eyebrow">Conhecimentos</p>
        <h2>Habilidades</h2>
        <p>Competências técnicas e comportamentais que aplico em cada área.</p>
      </div>
      <Accordion type="multiple" className="skill-accordion detailed-skills">
        {Object.entries(skills).map(([key, area]) => {
          const Icon = area.icon;
          return (
            <AccordionItem value={key} key={key}>
              <AccordionTrigger>
                <span className="accordion-title">
                  <Icon className="skill-icon" />
                  {area.title}
                </span>
              </AccordionTrigger>
              <AccordionContent>
                <div className="skill-columns">
                  <div>
                    <h3>Hard Skills:</h3>
                    <ul>
                      {area.hard.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3>Soft Skills:</h3>
                    <ul>
                      {area.soft.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div
                  className="tool-strip"
                  aria-label={`Ferramentas de ${area.title}`}
                >
                  {area.tools.map((tool) => (
                    <span
                      className="tool-mark"
                      title={tool.name}
                      aria-label={tool.name}
                      key={tool.name}
                    >
                      {tool.mark}
                    </span>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
    </section>
  );
}
