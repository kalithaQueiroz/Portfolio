import { Mail } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import HomeEnterLink from "@/components/home/home-enter-link";
import HomeGateway from "@/components/home/home-gateway";

export default function Home() {
  return (
    <main className="home-page">
      <HomeGateway>
        <svg
          className="hero-orbit"
          viewBox="0 0 1000 620"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="orbit-gradient" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#ee1bab" />
              <stop offset=".52" stopColor="#643bc9" />
              <stop offset="1" stopColor="#05040a" />
            </linearGradient>
            <linearGradient id="orbit-gradient-alt" x1="1" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#05040a" />
              <stop offset=".48" stopColor="#a826d2" />
              <stop offset=".82" stopColor="#e91aa2" />
              <stop offset="1" stopColor="#05040a" />
            </linearGradient>
          </defs>
          <path d="M78 356C134 116 348 26 610 50c239 21 363 171 306 353-61 194-294 231-523 177C172 528 37 470 78 356Z" />
          <path d="M49 388C91 184 307 5 588 42c254 33 390 187 327 377-67 201-315 219-540 153C169 511 24 473 49 388Z" />
          <path d="M103 329C179 91 383 23 640 68c226 40 330 195 253 363-86 187-309 194-519 124C180 490 66 443 103 329Z" />
        </svg>
        <div className="hero-copy">
          <p className="kicker">Olá, eu sou</p>
          <h1>
            Kálitha
            <br />
            <em>Queiroz</em>
          </h1>
          <div className="home-socials" aria-label="Redes sociais">
            <a
              href="https://github.com/kalithaQueiroz"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/kalitha-queiroz/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>
            <a href="mailto:kalitaqueiroz@gmail.com" aria-label="E-mail">
              <Mail />
            </a>
          </div>
          <p className="role">
            Desenvolvimento Web <span>•</span> Análise de Dados
          </p>
          <HomeEnterLink />
        </div>
      </HomeGateway>
    </main>
  );
}
