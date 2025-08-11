// ============================================================================
// PAINEL DE CONTROLE DE CONTEÚDO DA LANDING PAGE
// Altere os textos, links e dados aqui para atualizar o site inteiro.
// ============================================================================

export const contentData = {
  // --- Dados da Barra de Navegação ---
  navbar: {
    logo: "SuaLogo",
    links: [
      { text: "Home", href: "#home" },
      { text: "Sobre", href: "#sobre" },
      { text: "Serviços", href: "#servicos" },
      { text: "Contatos", href: "#contatos" },
    ],
    loginText: "Login",
    registerText: "Registar",
  },

  // --- Dados da Seção Hero ---
  hero: {
    title: "Título focado no problema que você resolve",
    subtitle: "Descreva de forma breve e direta o que é o seu produto, pra quem ele é e o que torna ele tão especial.",
    ctaText: "CTA",
    socialProof: "+5,000 pessoas como tu já compraram este produto.",
    // imageUrl: "/images/hero-image.svg" // Exemplo de como você adicionaria a imagem
  },

  // --- Dados da Seção de Benefícios/Features ---
  features: {
    title: "Por que a sua solução é melhor do que a atual",
    cards: [
      {
        icon: "📦",
        title: "Benefício 1",
        description: "Qual problema ela resolve? Descreva aqui e tente provar o seu ponto.",
      },
      {
        icon: "📦",
        title: "Benefício 2",
        description: "Qual problema ela resolve? Descreva aqui e tente provar o seu ponto.",
      },
      {
        icon: "📦",
        title: "Benefício 3",
        description: "Qual problema ela resolve? Descreva aqui e tente provar o seu ponto.",
      },
    ],
  },

  // --- Dados da Seção de Benefício do Produto ---
  productBenefit: {
    tagline: "Tagline",
    title: "Um título breve sobre o benefício do seu produto/serviço",
    description: "Se necessário, destaque mais detalhes sobre o problema que você resolve ou os benefícios do seu produto/serviço.",
    benefits: [
      "Destaque os benefícios ou as dores que você resolve",
      "Destaque os benefícios",
      "Destaque os benefícios",
      "Destaque os benefícios",
    ],
    ctaText: "CTA",
    // imageUrl: "/images/benefit-image.svg"
  },

  // --- Dados da Seção de Testemunhos ---
  testimonials: {
    title: "Testemunhos",
    subtitle: "Mais social proof com testemunhos de clientes ou reviews do produto/serviços prestados",
    cards: [
      {
        stars: 5,
        text: "Depoimento que alguém escreveu destacando os benefícios ou ganhos que teve ao usar o seu produto/serviço.",
        authorName: "Nome Sobrenome",
        authorInfo: "Profissão, Empresa",
        // authorPhotoUrl: "/images/author1.png"
      },
      {
        stars: 5,
        text: "Depoimento que alguém escreveu destacando os benefícios ou ganhos que teve ao usar o seu produto/serviço.",
        authorName: "Nome Sobrenome",
        authorInfo: "Profissão, Empresa",
      },
      {
        stars: 5,
        text: "Depoimento que alguém escreveu destacando os benefícios ou ganhos que teve ao usar o seu produto/serviço.",
        authorName: "Nome Sobrenome",
        authorInfo: "Profissão, Empresa",
      },
    ],
  },
  
  // --- Dados da Seção de Perguntas Frequentes (FAQ) ---
  faq: {
    title: "Perguntas Frequentes (FAQs)",
    subtitle: "FAQ's (Frequently Asked Questions) bem escritas podem entregar valor. Se você conhece seu público, sabe as perguntas frequentes - utilize aquelas que mais geram mais contato com o suporte. Não invente perguntas.",
    items: [
      {
        question: 'Pergunta número um',
        answer: 'A resposta para a pergunta número um vai aqui. Tente ser breve e direto, respondendo a dúvida do seu cliente da melhor forma possível.',
      },
      {
        question: 'Pergunta número dois',
        answer: 'A resposta para a pergunta número dois vai aqui. Detalhes adicionais podem ser incluídos para dar mais clareza.',
      },
      {
        question: 'Pergunta número três',
        answer: 'A resposta para a pergunta número três vai aqui. Você pode usar este espaço para quebrar objeções comuns.',
      },
      {
        question: 'Pergunta número quatro',
        answer: 'A resposta para a pergunta número quatro vai aqui. Mantenha o tom de voz da sua marca.',
      },
      {
        question: 'Pergunta número cinco',
        answer: 'A resposta para a pergunta número cinco vai aqui. Facilite a vida do seu cliente com respostas claras.',
      },
    ]
  },

  // --- Dados da Seção de Chamada para Ação (CTA) ---
  cta: {
    title: "Porque que a pessoa deve clicar",
    subtitle: "Uma breve explicação das vantagens de clicar e o como vai afetar o utilizador",
    ctaText: "CTA",
  },

  // --- Dados do Rodapé (Footer) ---
  footer: {
    logo: "SuaLogo",
    columns: [
      {
        title: "Coluna Um",
        links: ["Link Um", "Link Dois", "Link Três", "Link Quatro", "Link Cinco"],
      },
      {
        title: "Coluna Dois",
        links: ["Link Seis", "Link Sete", "Link Oito", "Link Nove", "Link Dez"],
      },
      {
        title: "Coluna Três",
        links: ["Link Onze", "Link Doze", "Link Treze", "Link Catorze", "Link Quinze"],
      },
    ],
    newsletter: {
      title: "Subscreva a nossa Newsletter",
      subtitle: "Inscreva-se na nossa newsletter e fique a par dos nossos lançamentos.",
      placeholder: "O seu email",
      buttonText: "Subscrever",
    },
    bottom: {
      copyright: `© ${new Date().getFullYear()}. Todos os direitos reservados.`,
      legalLinks: [
        { text: "Política de Privacidade", href: "#privacy" },
        { text: "Termos e Condições", href: "#terms" },
        { text: "Política de Cookies", href: "#cookies" },
      ],
      socials: [
        { label: "Facebook", href: "#facebook", icon: "F" },
        { label: "Instagram", href: "#instagram", icon: "I" },
        { label: "Twitter", href: "#twitter", icon: "T" },
        { label: "LinkedIn", href: "#linkedin", icon: "L" },
      ]
    }
  }
};