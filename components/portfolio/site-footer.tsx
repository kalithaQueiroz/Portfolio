import Brand from "./brand";

export default function SiteFooter() {
  return (
    <footer>
      <Brand />
      <p className="footer-credit">
        © Copyright 2026 <i>|</i> Design por Kálitha Queiroz <i>|</i>{" "}
        Hospedagem GitHub Pages
      </p>
      <a href="#sobre">Voltar ao topo ↑</a>
    </footer>
  );
}
