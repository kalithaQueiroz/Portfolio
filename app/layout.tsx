import type { Metadata } from "next";
import GlobalLoader from "@/components/layout/global-loader";
import { publicPath } from "@/lib/paths";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kálitha Queiroz | Desenvolvimento e Análise de Dados",
  description:
    "Portfólio profissional de Kálitha Queiroz: projetos de desenvolvimento web e análise de dados.",
  icons: { icon: publicPath("/favicon.svg") },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <GlobalLoader />
        {children}
      </body>
    </html>
  );
}
