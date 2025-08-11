import React from 'react';
import './CTA.css';

// 1. A função agora recebe 'data' como propriedade (props)
const CTA = ({ data }) => {
  // Verificação de segurança
  if (!data) {
    return null;
  }

  return (
    <section className="cta-section">
      <div className="cta-content">
        {/* 2. Título, subtítulo e texto do botão são dinâmicos */}
        <h2 className="cta-title">{data.title}</h2>
        <p className="cta-subtitle">{data.subtitle}</p>
        <button className="cta-main-button">{data.ctaText}</button>
      </div>
    </section>
  );
};

export default CTA;