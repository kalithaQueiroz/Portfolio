import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="not-found-page">
      <p className="eyebrow">Erro 404</p>
      <h1>Página não encontrada.</h1>
      <p>O endereço pode ter sido alterado ou o conteúdo ainda não existe.</p>
      <Link className="outline-button" href="/portfolio">
        <ArrowLeft /> Voltar ao portfólio
      </Link>
    </main>
  );
}
