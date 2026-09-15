"use client";

import { useState } from "react";
import {
  Award,
  BarChart3,
  Briefcase,
  Code2,
  Database,
  ExternalLink,
  GraduationCap,
  Table2,
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { qualifications, trainingGroups } from "@/data/portfolio-projects";

function QualificationIcon({ id, kind }: { id: string; kind: string }) {
  if (kind === "Formação") return <GraduationCap aria-hidden="true" />;
  if (kind === "Experiência") return <Briefcase aria-hidden="true" />;
  if (id === "power-bi") return <BarChart3 aria-hidden="true" />;
  if (id === "excel") return <Table2 aria-hidden="true" />;
  if (id === "python") return <Code2 aria-hidden="true" />;
  if (id === "dba") return <Database aria-hidden="true" />;
  return <Award aria-hidden="true" />;
}

export default function QualificationsSection() {
  const [qualificationTab, setQualificationTab] = useState("capacitacoes");
  const [qualification, setQualification] = useState(
    qualifications.find((item) => item.kind === "Capacitação")!,
  );

  return (
    <section id="qualificacoes" className="qualifications section-shell">
      <div className="section-heading">
        <p className="eyebrow">Trajetória</p>
        <h2>Qualificações</h2>
        <p>Selecione uma etapa para conhecer os detalhes.</p>
      </div>
      <Tabs
        defaultValue="capacitacoes"
        className="qualification-tabs"
        onValueChange={(value) => {
          setQualificationTab(value);
          const kind =
            value === "formacoes"
              ? "Formação"
              : value === "experiencias"
                ? "Experiência"
                : "Capacitação";
          setQualification(qualifications.find((item) => item.kind === kind)!);
        }}
      >
        <TabsList>
          <TabsTrigger value="formacoes">
            <GraduationCap />
            Formações
          </TabsTrigger>
          <TabsTrigger value="capacitacoes">
            <BarChart3 />
            Capacitações
          </TabsTrigger>
          <TabsTrigger value="experiencias">
            <Briefcase />
            Experiências
          </TabsTrigger>
        </TabsList>
        <TabsContent value="formacoes">
          <div className="qualification-selector formation-selector">
            {qualifications
              .filter((item) => item.kind === "Formação")
              .map((item) => (
                <button
                  type="button"
                  className={qualification.id === item.id ? "active" : ""}
                  onClick={() => setQualification(item)}
                  key={item.id}
                >
                  {item.title}
                </button>
              ))}
          </div>
        </TabsContent>
        <TabsContent value="capacitacoes">
          <div className="training-board">
            {trainingGroups.map((group) => (
              <section className="training-group" key={group.title}>
                <h3>{group.title}</h3>
                <ul>
                  {group.courses.map((course) => (
                    <li key={course.id}>
                      <a
                        href={course.link}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${course.title} — abrir certificado`}
                      >
                        <span>{course.title}</span>
                        <small>
                          {course.source} ·{" "}
                          {course.period.replace("Emitida em ", "")}
                        </small>
                        <ExternalLink aria-hidden="true" />
                      </a>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="experiencias">
          <div className="qualification-selector experience-selector">
            {qualifications
              .filter((item) => item.kind === "Experiência")
              .map((item) => (
                <button
                  type="button"
                  className={qualification.id === item.id ? "active" : ""}
                  onClick={() => setQualification(item)}
                  key={item.id}
                >
                  {item.title}
                </button>
              ))}
          </div>
        </TabsContent>
      </Tabs>
      {qualificationTab !== "capacitacoes" && (
        <article className="qualification-detail" key={qualification.id}>
          <div className="detail-mark">
            <QualificationIcon
              id={qualification.id}
              kind={qualification.kind}
            />
          </div>
          <div>
            <p>
              <b>{qualification.kind}</b>
              <i>·</i>
              {qualification.period}
            </p>
            <h3>{qualification.title}</h3>
            <strong>{qualification.source}</strong>
            <span>{qualification.text}</span>
            <a
              className="qualification-link"
              href={qualification.link}
              target="_blank"
              rel="noreferrer"
            >
              {qualification.linkLabel} <ExternalLink />
            </a>
          </div>
        </article>
      )}
    </section>
  );
}
