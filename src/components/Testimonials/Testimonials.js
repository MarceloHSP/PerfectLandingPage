import React from 'react';
import './Testimonials.css';

// =======================================================================
// ATUALIZAÇÃO NO TestimonialCard:
// Agora ele pode receber uma URL de foto (authorPhotoUrl).
// Se receber, mostra a imagem. Se não, mostra o placeholder cinza.
// =======================================================================
const TestimonialCard = ({ stars, text, authorName, authorInfo, authorPhotoUrl }) => {
  return (
    <div className="testimonial-card">
      <div className="star-rating">{'★'.repeat(stars)}{'☆'.repeat(5 - stars)}</div>
      <p className="testimonial-text">"{text}"</p>
      <div className="author-info">
        {authorPhotoUrl ? (
          <img src={authorPhotoUrl} alt={authorName} className="author-photo" />
        ) : (
          <div className="author-photo-placeholder" />
        )}
        <div className="author-details">
          <span className="author-name">{authorName}</span>
          <span className="author-title">{authorInfo}</span>
        </div>
      </div>
    </div>
  );
};


// =======================================================================
// O componente principal Testimonials agora usa os dados dinâmicos.
// =======================================================================
const Testimonials = ({ data }) => {
  if (!data || !data.cards) {
    return null;
  }

  return (
    <section className="testimonials-section">
      <div className="testimonials-header">
        <h2>{data.title}</h2>
        <p>{data.subtitle}</p>
      </div>
      <div className="testimonials-grid">
        {/* Mapeamos o array de 'cards' para criar cada testemunho */}
        {data.cards.map((card, index) => (
          <TestimonialCard
            key={index}
            stars={card.stars}
            text={card.text}
            authorName={card.authorName}
            authorInfo={card.authorInfo}
            authorPhotoUrl={card.authorPhotoUrl} // Passamos a URL da foto
          />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;