import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { publicPath } from "@/lib/paths";

export default function AboutSection() {
  return (
    <section id="sobre" className="intro-about full-screen section-shell">
      <div className="about-lead">
        <p className="eyebrow">Sobre mim</p>
        <h2>
          <span className="headline-lock">Curiosidade que</span>
          <br />
          <span className="headline-lock">
            vira <em>solução.</em>
          </span>
        </h2>
        <p>
          Sou uma profissional detalhista, movida por aprendizado e pela vontade
          de transformar ideias e dados em experiências úteis.
        </p>
        <a className="outline-button" href="#contato">
          <span>Fale comigo</span>
          <ArrowRight />
        </a>
      </div>
      <div className="portrait-orbit">
        <div className="portrait-card">
          <Image
            src={publicPath("/kalitha-avatar.png")}
            alt="Avatar de Kálitha Queiroz"
            width={520}
            height={520}
            priority
          />
        </div>
      </div>
    </section>
  );
}
