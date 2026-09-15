import { Menu, X } from "lucide-react";
import Brand from "./brand";

type SiteHeaderProps = {
  menuOpen: boolean;
  onToggleMenu: () => void;
  onCloseMenu: () => void;
};

const links = [
  ["sobre", "Sobre"],
  ["habilidades", "Habilidades"],
  ["portfolio", "Portfólio"],
  ["qualificacoes", "Qualificações"],
  ["contato", "Contato"],
] as const;

export default function SiteHeader({
  menuOpen,
  onToggleMenu,
  onCloseMenu,
}: SiteHeaderProps) {
  return (
    <header className="site-header">
      <Brand />
      <button
        className="menu-button"
        type="button"
        onClick={onToggleMenu}
        aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
        aria-expanded={menuOpen}
        aria-controls="main-navigation"
      >
        {menuOpen ? <X /> : <Menu />}
      </button>
      <nav
        id="main-navigation"
        className={menuOpen ? "nav open" : "nav"}
        aria-label="Navegação principal"
      >
        {links.map(([id, label]) => (
          <a href={`#${id}`} onClick={onCloseMenu} key={id}>
            {label}
          </a>
        ))}
      </nav>
    </header>
  );
}
