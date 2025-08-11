import React from 'react';
import './Features.css';

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="feature-card">
      <div className="feature-icon">{icon}</div>
      <h3 className="feature-title">{title}</h3>
      <p className="feature-description">{description}</p>
    </div>
  );
};

const Features = ({ data }) => {
  // Verificação de segurança
  if (!data || !data.cards) {
    return null;
  }

  return (
    <section className="features-section">
      <div className="container">
        <h2 className="features-main-title">{data.title}</h2>
        <div className="features-grid">
          {data.cards.map((card) => (
            <FeatureCard
              key={card.title} 
              icon={card.icon}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;