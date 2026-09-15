import { Mail, MapPin, Phone } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";

function ContactWaves() {
  const lines = Array.from({ length: 34 }, (_, index) => index);
  const tonesA = [2, 0, 4, 1, 5, 3, 1, 4, 0, 3, 5, 2];
  const tonesB = [5, 1, 3, 0, 2, 4, 3, 5, 0, 4, 2, 1];
  const gradients = [
    ["#120720", "#101a3b", "#2d1044", "#0a1028"],
    ["#08132f", "#321247", "#15234c", "#130821"],
    ["#241039", "#0c1837", "#35134a", "#0b1633"],
    ["#101b3c", "#291040", "#36154c", "#1c0b31"],
    ["#180a2b", "#17234b", "#321247", "#111c3f"],
    ["#0b1735", "#2e1146", "#142047", "#270e3c"],
  ];

  return (
    <svg
      className="contact-waves"
      viewBox="0 0 1440 620"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <defs>
        {gradients.map((colors, index) => (
          <linearGradient
            id={`contact-wave-tone-${index}`}
            x1={index % 2 ? "1" : "0"}
            y1="0"
            x2={index % 2 ? "0" : "1"}
            y2="1"
            key={colors[0]}
          >
            {colors.map((color, colorIndex) => (
              <stop
                offset={`${colorIndex * 33}%`}
                stopColor={color}
                key={color}
              />
            ))}
          </linearGradient>
        ))}
      </defs>
      <g className="wave-family wave-family-a">
        {lines.map((index) => (
          <path
            className={`wave-tone-${tonesA[index % tonesA.length]}`}
            d={`M-90 ${185 + index * 7} C 190 ${-35 + index * 10}, 360 ${80 + index * 4}, 560 ${250 + index * 3} S 910 ${570 - index * 5}, 1110 ${310 - index * 2} S 1390 ${70 + index * 7}, 1530 ${170 + index * 5}`}
            key={`a-${index}`}
          />
        ))}
      </g>
      <g className="wave-family wave-family-b">
        {lines.map((index) => (
          <path
            className={`wave-tone-${tonesB[index % tonesB.length]}`}
            d={`M-100 ${370 - index * 6} C 145 ${535 - index * 8}, 340 ${500 - index * 4}, 555 ${315 - index * 2} S 900 ${55 + index * 7}, 1115 ${235 + index * 3} S 1390 ${530 - index * 5}, 1540 ${390 - index * 3}`}
            key={`b-${index}`}
          />
        ))}
      </g>
    </svg>
  );
}

export default function ContactSection() {
  return (
    <section id="contato" className="contact section-shell">
      <div className="contact-frame">
        <ContactWaves />
        <div className="contact-content">
          <p className="eyebrow">Contato</p>
          <h2>
            Vamos criar algo
            <br />
            <em>juntos?</em>
          </h2>
          <p>
            Estou aberta a conexões, projetos e oportunidades nas áreas de
            desenvolvimento e análise de dados.
          </p>
          <div className="contact-links" aria-label="Canais de contato">
            <a
              href="https://www.linkedin.com/in/kalitha-queiroz/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              data-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://github.com/kalithaQueiroz"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              data-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="tel:+5561996624472"
              aria-label="Telefone: 61 99662-4472"
              data-label="Telefone"
            >
              <Phone />
            </a>
            <a
              href="mailto:kalitaqueiroz@gmail.com"
              aria-label="E-mail: kalitaqueiroz@gmail.com"
              data-label="E-mail"
            >
              <Mail />
            </a>
            <a
              href="https://maps.app.goo.gl/janZ8JqW2aFputiEA"
              target="_blank"
              rel="noreferrer"
              aria-label="Localização"
              data-label="Localização"
            >
              <MapPin />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
