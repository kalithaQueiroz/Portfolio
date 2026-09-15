# Portfólio — Kálitha Queiroz

Este é o meu portfólio profissional. Criei este espaço para reunir minha trajetória, minhas qualificações e os projetos que desenvolvo nas áreas de desenvolvimento web e análise de dados.

## Sobre o projeto

O portfólio foi construído com uma identidade visual própria e pensado para funcionar bem em computadores, tablets e celulares. Ele inclui:

- uma tela inicial interativa;
- apresentação profissional e resumo da minha trajetória;
- linha do tempo responsiva com experiências e formações;
- habilidades organizadas por área;
- formações, capacitações, experiências e certificados;
- projetos separados entre Análise de Dados, Front-end e Back-end;
- páginas individuais para documentar cada projeto;
- canais de contato e links profissionais.

## Tecnologias

- Next.js
- React
- TypeScript
- CSS
- Tailwind CSS
- Radix UI
- Lucide React
- React Icons

## Como executar o projeto

É necessário ter o [Node.js](https://nodejs.org/) 20.9 ou superior instalado.

Depois de baixar e extrair o projeto, abra a pasta no VS Code e execute no terminal:

```bash
npm install
npm run dev
```

Em seguida, abra no navegador o endereço exibido no terminal, normalmente:

```text
http://localhost:3000
```

Como o projeto utiliza Next.js, não é necessário usar a extensão Live Server.

## Comandos disponíveis

| Comando         | Finalidade                                       |
| --------------- | ------------------------------------------------ |
| `npm run dev`   | Inicia o ambiente de desenvolvimento.            |
| `npm run build` | Cria e valida a versão de produção.              |
| `npm run lint`  | Verifica a qualidade e a consistência do código. |

## Estrutura principal

```text
app/
├── page.tsx
├── portfolio/
│   └── page.tsx
└── projetos/
    ├── page.tsx
    └── [slug]/
        ├── page.tsx
        └── [project]/
            └── page.tsx

components/
├── home/
├── layout/
├── portfolio/
└── ui/

data/
└── portfolio-projects.ts

public/
├── certificados/
├── favicon.svg
└── imagens do portfólio

styles/
└── portfolio/
    ├── foundation.css
    ├── navigation.css
    ├── home.css
    ├── about.css
    ├── trajectory.css
    ├── skills.css
    ├── projects.css
    ├── qualifications.css
    └── contact.css
```

### Onde estão as principais informações

| Arquivo                                   | Conteúdo                                                      |
| ----------------------------------------- | ------------------------------------------------------------- |
| `app/page.tsx`                            | Tela inicial do site.                                         |
| `components/home/`                        | Entrada interativa da Home.                                   |
| `components/layout/global-loader.tsx`     | Controla a tela de carregamento em toda a navegação.          |
| `components/portfolio/portfolio-home.tsx` | Organiza as seções da página principal.                       |
| `components/portfolio/`                   | Mantém cada seção do portfólio em um componente próprio.      |
| `data/portfolio-projects.ts`              | Centraliza habilidades, trajetória, qualificações e projetos. |
| `app/projetos/[slug]/page.tsx`            | Listagem dos projetos de cada área.                           |
| `app/projetos/[slug]/[project]/page.tsx`  | Página individual de cada projeto.                            |
| `styles/portfolio/`                       | Estilos e ajustes de responsividade.                          |
| `public/`                                 | Avatares, certificados, favicon e imagens usadas no site.     |

Os arquivos CSS do diretório `styles/portfolio/` são importados por `app/globals.css` e separados de acordo com a área que estilizam.

## Como atualizar o conteúdo

### Textos, habilidades e qualificações

As informações da página principal estão centralizadas em `data/portfolio-projects.ts`. Os componentes de cada seção ficam em `components/portfolio/`.

### Projetos

As categorias, os cards e os detalhes das páginas individuais estão em `data/portfolio-projects.ts`. Para cadastrar um projeto, utilizo um `slug` único, com letras minúsculas e hífens no lugar de espaços.

### Certificados e imagens

Os certificados ficam em `public/certificados/`. No código, o caminho começa por `/certificados/`, por exemplo:

```ts
link: "/certificados/meu-certificado.jpg",
```

Para substituir outras imagens, basta colocar o novo arquivo em `public/` e atualizar o caminho correspondente. Prefiro usar nomes de arquivos sem espaços e sem acentos.

### Cores, espaçamentos e responsividade

Cada seção possui seu próprio arquivo em `styles/portfolio/`. Regras globais ficam em `foundation.css`, enquanto cabeçalho, navegação e rodapés ficam em `navigation.css`.

O botão **Fale comigo** é estilizado em `styles/portfolio/about.css`. A estrutura da linha do tempo está em `components/portfolio/trajectory-section.tsx`, seus textos ficam em `data/portfolio-projects.ts` e o visual responsivo é controlado por `styles/portfolio/trajectory.css`.

## Publicação no GitHub Pages

O projeto está configurado para gerar arquivos estáticos e inclui o fluxo `.github/workflows/deploy-pages.yml`.

Depois de enviar o projeto para um repositório no GitHub:

1. abra **Settings > Pages**;
2. em **Build and deployment**, selecione **GitHub Actions**;
3. confirme que a branch principal do repositório se chama `main`;
4. envie uma alteração para a branch `main` ou execute o fluxo manualmente na aba **Actions**.

O fluxo identifica automaticamente o nome do repositório e configura o caminho necessário para que imagens, certificados e arquivos do Next.js funcionem no GitHub Pages.

## Validação antes da publicação

Antes de publicar uma nova versão, executo:

```bash
npm run lint
npm run build
```

Os dois comandos devem terminar sem erros.

## Autoria

Projeto e identidade visual desenvolvidos por Kálitha Queiroz.
