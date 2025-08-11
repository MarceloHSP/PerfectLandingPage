import React from 'react';
import './Hero.css';

// 1. A função agora recebe 'data' como propriedade (props)
const Hero = ({ data }) => {
  // Verificação para garantir que os dados existem antes de tentar renderizar
  if (!data) {
    return null;
  }

  return (
    <section className="hero">
      {/* Coluna da Esquerda: Textos e CTA */}
      <div className="hero-text">
        {/* 2. Todo o conteúdo de texto agora é dinâmico, vindo do objeto 'data' */}
        <h1>{data.title}</h1>
        <p className="hero-subtitle">{data.subtitle}</p>
        <div className="hero-actions">
          <button className="cta-button">{data.ctaText}</button>
          <p className="social-proof">{data.socialProof}</p>
        </div>
      </div>

      {/* Coluna da Direita: Imagem */}
      <div className="hero-image">
        {/* 3. A imagem agora é dinâmica! 
             - Se você definir um 'imageUrl' no contentData.js, a imagem será exibida.
             - Se não, nada é renderizado aqui e o CSS aplicará o placeholder cinza.
        */}
        {data.imageUrl && <img src={data.imageUrl} alt="Demonstração do produto" />}
      </div>
    </section>
  );
};

export default Hero;