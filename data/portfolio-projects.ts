import { publicPath } from "@/lib/paths";
import { BarChart3, Code2, Database } from "lucide-react";

export const skills = {
  data: {
    title: "Análise de Dados",
    icon: BarChart3,
    hard: [
      "Python para Análise de Dados",
      "Pandas para tratamento e exploração de dados",
      "Limpeza e preparação de dados",
      "Análise exploratória de dados",
      "SQL para consultas e análises",
      "DuckDB",
      "Microsoft Power BI",
      "Modelagem de dados",
      "Criação de dashboards e relatórios",
      "DAX e Power Query",
      "Indicadores de desempenho e métricas de negócio",
      "Segmentação RFM e análise de coortes",
      "Fundamentos de estatística e Data Science",
    ],
    soft: [
      "Pensamento analítico",
      "Atenção aos detalhes",
      "Resolução de problemas",
      "Comunicação de resultados",
      "Curiosidade investigativa",
      "Aprendizado contínuo",
    ],
    tools: [
      { mark: "Py", name: "Python" },
      { mark: "PD", name: "Pandas" },
      { mark: "BI", name: "Power BI" },
      { mark: "SQL", name: "SQL" },
    ],
  },
  frontend: {
    title: "Front-end",
    icon: Code2,
    hard: [
      "HTML5",
      "CSS3",
      "Flexbox, Grid, Responsividade",
      "JavaScript",
      "Desenvolvimento responsivo",
      "UX/UI Design",
      "Wireframes e Prototipação",
      "Design Systems",
      "Figma",
      "Git e GitHub",
      "Acessibilidade e boas práticas para web",
    ],
    soft: [
      "Criatividade",
      "Atenção aos detalhes",
      "Organização",
      "Trabalho em equipe",
      "Comunicação visual",
      "Adaptabilidade",
    ],
    tools: [
      { mark: "H5", name: "HTML5" },
      { mark: "C3", name: "CSS3" },
      { mark: "JS", name: "JavaScript" },
      { mark: "Fi", name: "Figma" },
      { mark: "Git", name: "Git" },
    ],
  },
  backend: {
    title: "Back-end",
    icon: Database,
    hard: [
      "Lógica de Programação",
      "Algoritmos e Estruturas de Dados",
      "Python",
      "SQL",
      "Fundamentos de Banco de Dados",
      "Modelagem de dados",
    ],
    soft: [
      "Pensamento lógico",
      "Persistência",
      "Autonomia",
      "Organização",
      "Responsabilidade",
      "Aprendizado contínuo",
    ],
    tools: [
      { mark: "Py", name: "Python" },
      { mark: "SQL", name: "SQL" },
      { mark: "DB", name: "Banco de Dados" },
    ],
  },
} as const;

export const portfolio = [
  {
    slug: "analise-de-dados",
    number: "01",
    title: "Análise de Dados",
    eyebrow: "Dados que orientam",
    copy: "Análises completas, indicadores e recomendações para decisões de negócio.",
    techs: ["Python", "Power BI", "SQL"],
    icon: BarChart3,
  },
  {
    slug: "frontend",
    number: "02",
    title: "Front-end",
    eyebrow: "Interfaces digitais",
    copy: "Experiências web responsivas, acessíveis e pensadas nos detalhes.",
    techs: ["HTML", "CSS", "JavaScript"],
    icon: Code2,
  },
  {
    slug: "backend",
    number: "03",
    title: "Back-end",
    eyebrow: "Soluções e lógica",
    copy: "Projetos de programação, automação e construção de serviços.",
    techs: ["Python", "SQL", "APIs"],
    icon: Database,
  },
];

export const timeline = [
  {
    year: "2020–2021",
    title: "Analista de Dados",
    text: "Dashboards e análises para apoiar decisões administrativas e financeiras.",
  },
  {
    year: "2021–2026",
    title: "Desenvolvedora Web",
    text: "Interfaces, acessibilidade e evolução de experiências digitais no portal do MDS.",
  },
  {
    year: "2023–2025",
    title: "Graduação em ADS",
    text: "Formação em desenvolvimento de software, dados e tecnologia.",
  },
  {
    year: "2025–2026",
    title: "Pós em Data Science",
    text: "Aprofundamento em estatística, Big Data, nuvem e Machine Learning.",
  },
];

export const qualifications = [
  {
    id: "ads",
    kind: "Formação",
    title: "Análise e Desenvolvimento de Sistemas",
    period: "Jan 2023 – Jun 2025",
    source: "Centro Universitário União das Américas Descomplica",
    text: "Programação e Desenvolvimento de Software, Banco e Gestão de Dados, Inteligência Artificial e Análise de Dados.",
    link: publicPath("/certificados/Analise_e_Desenvolvimento_de_Sistemas.png"),
    linkLabel: "Abrir certificado",
  },
  {
    id: "data-science",
    kind: "Formação",
    title: "Pós-graduação em Data Science",
    period: "Jul 2025 – Jun 2026",
    source: "Centro Universitário União das Américas Descomplica",
    text: "Big Data, Cloud Computing, Machine Learning, Manipulação de Dados, Estatística e Probabilidade.",
    link: publicPath("/certificados/Pos-Graduacao_em_Data_Science.png"),
    linkLabel: "Abrir certificado",
  },
  {
    id: "web",
    kind: "Experiência",
    title: "Desenvolvedora Web",
    period: "Dez 2021 – Abr 2026",
    source: "Ministério do Desenvolvimento Social",
    text: "Manutenção e otimização do portal mds.gov.br, implementação de novas funcionalidades, melhoria de usabilidade, acessibilidade e aprimoramento da experiência do usuário. Colaboração com equipes multidisciplinares para desenvolver soluções alinhadas às necessidades do Ministério, garantindo conformidade com padrões web governamentais. Tecnologias: HTML, SCSS e TypeScript.",
    link: "https://www.gov.br/mds/pt-br",
    linkLabel: "Acessar site da empresa",
  },
  {
    id: "analista",
    kind: "Experiência",
    title: "Analista de Dados",
    period: "Jan 2020 – Nov 2021",
    source: "Egaplast Artefatos e Comércio de Plásticos",
    text: "Desenvolvimento de dashboards em Power BI para acompanhamento administrativo e financeiro, consolidando dados de múltiplas fontes e reduzindo o tempo de geração de relatórios. Tecnologias: Power BI, Excel, SQL Server e Python (Pandas).",
    link: "https://egaplast.com.br/",
    linkLabel: "Acessar site da empresa",
  },
  {
    id: "semana-ciencia-dados",
    kind: "Capacitação",
    title: "Semana Ciência de Dados",
    period: "Emitida em set de 2025",
    source: "PoD Academy",
    text: "Imersão em conceitos, práticas e aplicações da Ciência de Dados.",
    link: publicPath("/certificados/Semana_Ciencia_de_Dados.jpg"),
    linkLabel: "Abrir certificado",
  },
  {
    id: "fundamentos-python-dados",
    kind: "Capacitação",
    title:
      "Fundamentos de Linguagem Python para Análise de Dados e Data Science",
    period: "Emitida em ago de 2025",
    source: "Data Science Academy",
    text: "Fundamentos da linguagem Python aplicados à análise de dados e Data Science.",
    link: publicPath(
      "/certificados/Fundamentos_de_Linguagem_Python_para_Analise_de_Dados_e_Data_Science.jpg",
    ),
    linkLabel: "Abrir certificado",
  },
  {
    id: "formacao-ux-designer",
    kind: "Capacitação",
    title: "UX Designer",
    period: "Emitida em jul de 2024",
    source: "DIO",
    text: "Formação em experiência do usuário, pesquisa, prototipação e criação de interfaces centradas nas pessoas.",
    link: publicPath("/certificados/UX_Designer.jpg"),
    linkLabel: "Abrir certificado",
  },
  {
    id: "javascript-zero-trybe",
    kind: "Capacitação",
    title: "JavaScript do Zero",
    period: "Emitida em abr de 2024",
    source: "Trybe",
    text: "Introdução prática à linguagem JavaScript e aos fundamentos da programação para web.",
    link: publicPath("/certificados/JavaScript_do_Zero.jpg"),
    linkLabel: "Abrir certificado",
  },
  {
    id: "logica-programacao-trybe",
    kind: "Capacitação",
    title: "Lógica de Programação",
    period: "Emitida em abr de 2024",
    source: "Trybe",
    text: "Desenvolvimento do raciocínio lógico por meio de algoritmos e resolução estruturada de problemas.",
    link: publicPath("/certificados/Logica_de_Programacao-TRYBE.jpg"),
    linkLabel: "Abrir certificado",
  },
  {
    id: "formacao-javascript-developer",
    kind: "Capacitação",
    title: "JavaScript Developer",
    period: "Emitida em abr de 2024",
    source: "DIO",
    text: "Formação em desenvolvimento com JavaScript, fundamentos da linguagem e construção de aplicações web.",
    link: publicPath("/certificados/JavaScript_Developer.jpg"),
    linkLabel: "Abrir certificado",
  },
  {
    id: "css-web-developer",
    kind: "Capacitação",
    title: "CSS Web Developer",
    period: "Emitida em jan de 2024",
    source: "DIO",
    text: "Desenvolvimento de layouts web com CSS, responsividade e boas práticas de estilização.",
    link: publicPath("/certificados/CSS_Web_Developer.jpg"),
    linkLabel: "Abrir certificado",
  },
  {
    id: "logica-programacao-dio",
    kind: "Capacitação",
    title: "Lógica de Programação",
    period: "Emitida em jan de 2024",
    source: "DIO",
    text: "Fundamentos de lógica, algoritmos e resolução de problemas computacionais.",
    link: publicPath("/certificados/Logica_de_Programacao-DIO.jpg"),
    linkLabel: "Abrir certificado",
  },
  {
    id: "html-web-developer",
    kind: "Capacitação",
    title: "HTML Web Developer",
    period: "Emitida em set de 2023",
    source: "DIO",
    text: "Estruturação semântica de páginas web com HTML e fundamentos do desenvolvimento front-end.",
    link: publicPath("/certificados/HTML_Web_Developer.jpg"),
    linkLabel: "Abrir certificado",
  },
  {
    id: "power-bi-business-intelligence",
    kind: "Capacitação",
    title: "Microsoft Power BI para Data Science",
    period: "Emitida em dez de 2022",
    source: "Data Science Academy",
    text: "Modelagem, análise e visualização de dados com Power BI para Business Intelligence e Data Science.",
    link: publicPath("/certificados/Microsoft_Power_BI_para_Data_Science.jpg"),
    linkLabel: "Abrir certificado",
  },
  {
    id: "tic-senai",
    kind: "Capacitação",
    title: "Tecnologia da Informação e Comunicação",
    period: "Emitida em jun de 2022",
    source: "SENAI",
    text: "Fundamentos de Tecnologia da Informação e Comunicação aplicados ao ambiente profissional.",
    link: publicPath("/certificados/Tecnologia_da_Informacao_e_Comunicacao.png"),
    linkLabel: "Abrir certificado",
  },
  {
    id: "logica-programacao-senai",
    kind: "Capacitação",
    title: "Lógica de Programação",
    period: "Emitida em jun de 2022",
    source: "SENAI",
    text: "Princípios de lógica de programação, algoritmos e desenvolvimento de soluções computacionais.",
    link: publicPath("/certificados/Logica_de_Programacao-SENAI.png"),
    linkLabel: "Abrir certificado",
  },
];

export const trainingGroups = [
  {
    title: "Dados & Analytics",
    ids: [
      "semana-ciencia-dados",
      "fundamentos-python-dados",
      "power-bi-business-intelligence",
    ],
  },
  {
    title: "Desenvolvimento Web",
    ids: [
      "formacao-ux-designer",
      "javascript-zero-trybe",
      "formacao-javascript-developer",
      "css-web-developer",
      "html-web-developer",
    ],
  },
  {
    title: "Fundamentos & Tecnologia",
    ids: [
      "logica-programacao-trybe",
      "logica-programacao-dio",
      "tic-senai",
      "logica-programacao-senai",
    ],
  },
].map((group) => ({
  ...group,
  courses: group.ids.map(
    (id) => qualifications.find((item) => item.id === id)!,
  ),
}));

export const projectCategories = {
  backend: {
    title: "Back-end",
    description: "Projetos de lógica, serviços e automações.",
    projects: [
      {
        slug: "modelo-api-python",
        status: "Em desenvolvimento",
        name: "Modelo de API em Python",
        tag: "Python · API REST · SQL",
        text: "Estrutura-base documentada para apresentar futuros projetos de back-end, da definição do problema aos testes e à publicação.",
        repository: "https://github.com/kalithaQueiroz/Portfolio",
      },
    ],
  },
  frontend: {
    title: "Front-end",
    description: "Interfaces que unem clareza, estética e usabilidade.",
    projects: [
      {
        slug: "portfolio-pessoal",
        status: "Projeto recente",
        name: "Portfólio pessoal",
        tag: "Next.js · React · CSS · UX",
        text: "Construção deste portfólio responsivo, com navegação por áreas, páginas individuais de estudo e identidade visual própria.",
        repository: "https://github.com/kalithaQueiroz/Portfolio",
      },
    ],
  },
  "analise-de-dados": {
    title: "Análise de Dados",
    description: "Dados transformados em decisões compreensíveis.",
    projects: [
      {
        slug: "shopafrica-ecommerce",
        status: "Projeto em andamento",
        name: "E-commerce Analytics — ShopAfrica+",
        tag: "Python · Pandas · SQL · RFM · Power BI",
        text: "Análise de 19.207 pedidos, 3.000 clientes e 30 produtos, cobrindo receita, margem, canais, categorias, qualidade dos dados e segmentação.",
        repository: "https://github.com/kalithaQueiroz/Portfolio",
      },
    ],
  },
} as const;

export type CategorySlug = keyof typeof projectCategories;

export const projectCategoryOrder: CategorySlug[] = [
  "analise-de-dados",
  "frontend",
  "backend",
];

export const projectDetails = {
  "modelo-api-python": {
    category: "backend" as CategorySlug,
    label: "Modelo reutilizável de Back-end",
    title: "API REST em Python",
    summary: "Uma página para documentar um serviço back-end.",
    repository: "https://github.com/kalithaQueiroz/Portfolio",
    technologies: ["Python", "FastAPI", "SQL", "Pytest", "Git"],
    sections: [
      {
        title: "1. Contexto e problema",
        body: "Comece explicando quem utiliza a solução, qual processo precisava ser melhorado e como o sucesso será medido. Evite iniciar diretamente pelas tecnologias.",
        code: "# Exemplo de objetivo\n# Criar uma API para cadastrar, consultar e atualizar tarefas.",
      },
      {
        title: "2. Planejamento da solução",
        body: "Descreva os recursos, regras de negócio, endpoints, estrutura de dados e decisões de arquitetura. Uma API simples pode separar rotas, serviços, modelos e acesso ao banco.",
        code: "GET    /tarefas\nPOST   /tarefas\nPATCH  /tarefas/{id}\nDELETE /tarefas/{id}",
      },
      {
        title: "3. Implementação",
        body: "Mostre apenas os trechos que ajudam o leitor a entender suas decisões. Explique entradas, validações, processamento e respostas.",
        code: "@app.get('/tarefas')\ndef listar_tarefas():\n    return repositorio.listar()",
      },
      {
        title: "4. Testes e resultados",
        body: "Registre testes de unidade e integração, cenários de erro e evidências do resultado. Termine com aprendizados e próximos passos.",
        code: "def test_listar_tarefas(client):\n    resposta = client.get('/tarefas')\n    assert resposta.status_code == 200",
      },
    ],
  },
  "portfolio-pessoal": {
    category: "frontend" as CategorySlug,
    label: "Projeto Front-end",
    title: "Portfólio pessoal",
    summary:
      "Uma experiência web criada para apresentar habilidades com clareza, personalidade e navegação responsiva.",
    repository: "https://github.com/kalithaQueiroz/Portfolio",
    technologies: ["Next.js", "React", "TypeScript", "CSS", "Lucide"],
    sections: [
      {
        title: "1. Objetivo",
        body: "O projeto nasceu da necessidade de reunir informações profissionais e projetos em um endereço único, facilitando a avaliação por recrutadores e a evolução do portfólio ao longo do tempo.",
      },
      {
        title: "2. Estrutura e experiência",
        body: "A Home funciona como uma apresentação independente. O portfólio organiza Sobre, Habilidades, Projetos, Qualificações e Contato; cada área de trabalho leva a uma listagem e cada card abre um estudo completo.",
      },
      {
        title: "3. Componentização",
        body: "Os elementos repetidos foram transformados em dados e componentes. Isso reduz duplicação e permite adicionar um projeto novo alterando uma estrutura central.",
        code: "const projeto = {\n  slug: 'novo-projeto',\n  nome: 'Novo projeto',\n  tecnologias: ['React', 'CSS']\n};",
      },
      {
        title: "4. Responsividade e acessibilidade",
        body: "O layout adapta grades, menus e tipografia para telas menores. Links possuem rótulos claros, elementos decorativos ficam ocultos de leitores de tela e o contraste foi preservado sobre o gradiente escuro.",
      },
      {
        title: "5. Resultado e próximos passos",
        body: "A base está pronta para receber novos estudos, imagens, certificados e links reais sem alterar a arquitetura. O próximo passo é substituir conteúdos genéricos e publicar novos projetos usando este padrão.",
      },
    ],
  },
  "shopafrica-ecommerce": {
    category: "analise-de-dados" as CategorySlug,
    label: "Projeto de Análise de Dados",
    title: "E-commerce Analytics — ShopAfrica+",
    summary:
      "Análise de comércio eletrônico para transformar dados de clientes, pedidos, produtos e comportamento digital em indicadores e recomendações de negócio.",
    repository: "https://github.com/kalithaQueiroz/Portfolio",
    technologies: ["Python", "Pandas", "SQL / DuckDB", "RFM", "Power BI"],
    metrics: [
      "R$ 25.670.698 de receita",
      "19.207 pedidos",
      "3.000 clientes",
      "45,98% de margem bruta",
      "83,44% entregues",
    ],
    sections: [
      {
        title: "1. Entendimento do negócio",
        body: "O primeiro passo foi traduzir as necessidades da ShopAfrica+ em perguntas acionáveis: desempenho de receita e margem, comportamento por canal e categoria, qualidade operacional e identificação dos clientes mais valiosos.",
      },
      {
        title: "2. Importação e estrutura dos dados",
        body: "Foram utilizados arquivos de clientes, produtos, pedidos, itens, avaliações, logs web e redes sociais. As datas foram convertidas na leitura e as chaves customer_id, order_id e product_id permitiram relacionar as tabelas.",
        code: "orders = pd.read_csv('orders.csv', parse_dates=['order_date'])\nitems = pd.read_csv('order_items.csv')\nproducts = pd.read_csv('products.csv')\n\ndf = items.merge(orders, on='order_id') \\\n          .merge(products, on='product_id')",
      },
      {
        title: "3. Auditoria de qualidade",
        body: "Antes dos indicadores, foram verificados tipos, duplicidades, valores ausentes, chaves sem correspondência e coerência dos campos. Essa etapa evita conclusões apoiadas em registros incompletos ou contagens duplicadas.",
        code: "df.info()\ndf.isna().sum()\ndf.duplicated().sum()\ndf['order_id'].nunique()",
      },
      {
        title: "4. Indicadores principais",
        body: "A receita foi calculada no nível de pedidos para não duplicar totais após o merge. O ticket médio ficou em R$ 1.336,53. A margem global corrigida foi de 45,98% e 83,44% dos pedidos estavam entregues.",
        code: "receita = orders['montant_total'].sum()\npedidos = orders['order_id'].nunique()\nticket_medio = receita / pedidos\n\ntaxa_entrega = (orders['order_status'] == 'Livree').mean() * 100",
      },
      {
        title: "5. Tendência, categorias e canais",
        body: "A receita mensal permitiu medir evolução e quedas com shift. Em quantidade, Audio liderou com 10.446 itens, seguido por Chaussures, Smartphones, Accessoires e Ordinateurs. Organic foi o canal com mais pedidos, seguido por Social Media e Paid Search.",
        code: "ca_mensal = orders.groupby(orders['order_date'].dt.to_period('M'))['montant_total'].sum()\nvariacao = ca_mensal.pct_change() * 100\ntop_categorias = df.groupby('categorie')['quantite'].sum().nlargest(5)",
      },
      {
        title: "6. Segmentação RFM",
        body: "A análise RFM organiza clientes por Recência, Frequência e Valor Monetário. Ela ajuda a diferenciar clientes recentes e valiosos daqueles que exigem ações de reativação, permitindo campanhas mais específicas.",
      },
      {
        title: "7. Conclusões e próximos passos",
        body: "O projeto mostra uma operação com bom volume e margem, mas que precisa ser acompanhada por categoria, canal e status do pedido. Os próximos passos são concluir a segmentação, aprofundar sentimento e conversão e transformar os achados em um dashboard executivo no Power BI.",
      },
    ],
  },
} as const;
