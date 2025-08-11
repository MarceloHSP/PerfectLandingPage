import React, { useState } from 'react';
import './FAQ.css';

// =======================================================================
// O sub-componente FAQItem não precisa de nenhuma alteração.
// Ele já está pronto para receber os dados de cada item.
// =======================================================================
const FAQItem = ({ item, isOpen, onClick }) => {
  return (
    <div className="faq-item" onClick={onClick}>
      <div className="faq-question">
        <span>{item.question}</span>
        <span className={`faq-arrow ${isOpen ? 'open' : ''}`}>▼</span>
      </div>
      {isOpen && <div className="faq-answer">{item.answer}</div>}
    </div>
  );
};


// =======================================================================
// O componente principal FAQ é o que vamos atualizar.
// =======================================================================
const FAQ = ({ data }) => {
  const [openIndex, setOpenIndex] = useState(null); // A lógica de estado continua aqui, intacta!

  if (!data || !data.items) {
    return null;
  }

  const handleItemClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="faq-header">
        {/* 1. Título e subtítulo agora são dinâmicos */}
        <h2>{data.title}</h2>
        <p>{data.subtitle}</p>
      </div>
      <div className="faq-list">
        {/* 2. Mapeamos o array 'items' dos nossos dados em vez da constante interna */}
        {data.items.map((item, index) => (
          <FAQItem
            key={index}
            item={item}
            isOpen={openIndex === index}
            onClick={() => handleItemClick(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default FAQ;