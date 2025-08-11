# 🚀 Landing Page Perfeita - Template com React

Este é um template de landing page totalmente responsivo e customizável, construído do zero com React. O projeto foi desenvolvido para ser uma base sólida e facilmente editável para diferentes produtos ou serviços.

<img width="2842" height="1468" alt="image" src="https://github.com/user-attachments/assets/263b7b0a-38ce-44eb-b93c-93d9ae6bf37c" />


## 🎯 Sobre o Projeto

O objetivo deste projeto foi criar uma landing page moderna seguindo um design profissional do Figma, e então refatorá-la para ser um template verdadeiramente reutilizável. A estrutura separa completamente a **Apresentação (Componentes React)**, o **Conteúdo (Arquivo de Dados)** e o **Estilo (Variáveis CSS)**.

-----

## ✨ Funcionalidades Principais

  * **Arquitetura Baseada em Componentes:** O site é dividido em seções de componentes lógicos e reutilizáveis (Navbar, Hero, Features, FAQ, etc.).
  * **Conteúdo Dinâmico:** Todo o texto e dados da página são centralizados em um único arquivo (`src/contentData.js`), permitindo edições rápidas sem tocar no código dos componentes.
  * **Sistema de Tema com Variáveis CSS:** As cores do site são controladas por Variáveis CSS (`Custom Properties`) em um arquivo global (`src/index.css`). Mudar a paleta de cores inteira do site é tão simples quanto editar algumas linhas de código.
  * **Design Moderno:** Layout limpo e profissional baseado em um template do Figma.
  * **FAQ Interativo:** Seção de Perguntas Frequentes com funcionalidade de acordeão (expandir/recolher) gerenciada pelo estado do React.

-----

## 🛠️ Tecnologias Utilizadas

  * **[React](https://react.dev/)**: Biblioteca principal para a construção da interface.
  * **[CSS3](https://developer.mozilla.org/en-US/docs/Web/CSS)**: Estilização customizada, utilizando Flexbox, Grid e Variáveis CSS.
  * **[Git](https://git-scm.com/) & [GitHub](https://github.com/)**: Para versionamento de código e hospedagem do repositório.

-----

## ▶️ Como Rodar o Projeto Localmente

Para clonar e rodar esta aplicação na sua máquina, você precisará do [Node.js](https://nodejs.org/en) (que vem com o npm) e do [Git](https://git-scm.com/) instalados.

```bash
# 1. Clone o repositório
git clone https://github.com/MarceloHSP/PerfectLandingPage.git

# 2. Navegue até a pasta do projeto
cd PerfectLandingPage

# 3. Instale as dependências do projeto
npm install

# 4. Inicie o servidor de desenvolvimento
npm start
```

Abra [http://localhost:3000](https://www.google.com/search?q=http://localhost:3000) no seu navegador para ver o resultado.

-----

## 🎨 Como Customizar o Template

A principal vantagem deste projeto é a facilidade de customização.

### 1\. Para Alterar os Textos e Conteúdos:

  * Abra o arquivo `src/contentData.js`.
  * Edite os valores das chaves para alterar títulos, descrições, links, perguntas, etc.

### 2\. Para Alterar as Cores do Tema:

  * Abra o arquivo `src/index.css`.
  * Modifique os valores das Variáveis CSS dentro do bloco `:root`. Por exemplo, para mudar a cor principal do site para um tom de azul:

<!-- end list -->

```css
:root {
  --cor-primaria: #0d6efd; /* Azul, em vez do roxo antigo */
  /* ...outras cores... */
}
```
