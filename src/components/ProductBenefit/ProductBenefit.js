import React from 'react';
import './ProductBenefit.css';

// 1. A função agora recebe 'data' como propriedade (props)
const ProductBenefit = ({ data }) => {
  // Verificação de segurança para os dados
  if (!data) {
    return null;
  }

  return (
    <section className="product-benefit-section">
      <div className="container">
        {/* Coluna da Esquerda: Todo o conteúdo de texto */}
        <div className="text-content">
          {/* 2. Todos os elementos de texto são preenchidos dinamicamente */}
          <span className="tagline">{data.tagline}</span>
          <h2 className="benefit-title">{data.title}</h2>
          <p className="benefit-description">{data.description}</p>

          <ul className="benefit-list">
            {/* 3. Mapeamos o array 'benefits' para criar a lista de itens (li) */}
            {data.benefits.map((benefit, index) => (
              <li key={index}>{benefit}</li>
            ))}
          </ul>

          <button className="secondary-cta-button">{data.ctaText}</button>
        </div>

        {/* Coluna da Direita: Imagem */}
        <div className="image-content">
          {/* 4. A imagem também é dinâmica, como no componente Hero */}
          {data.imageUrl && <img src={data.imageUrl} alt="Ilustração do benefício do produto" />}
        </div>
      </div>
    </section>
  );
};

export default ProductBenefit;