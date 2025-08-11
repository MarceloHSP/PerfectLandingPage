import React from 'react';
import './Footer.css';

// 1. A função agora recebe 'data' como propriedade (props)
const Footer = ({ data }) => {
  // Verificação de segurança para os dados
  if (!data) {
    return null;
  }

  return (
    <footer className="footer-section">
      <div className="footer-top">
        <div className="footer-logo-column">
          {/* 2. Logo dinâmico */}
          <h3 className="footer-logo">{data.logo}</h3>
        </div>

        {/* 3. Mapeamos o array de 'columns' para criar cada coluna de links */}
        {data.columns.map((column) => (
          <div key={column.title} className="footer-links-column">
            <h4>{column.title}</h4>
            <ul>
              {/* 4. Para cada coluna, mapeamos seu array de 'links' */}
              {column.links.map((link, index) => (
                <li key={index}><a href="#link">{link}</a></li>
              ))}
            </ul>
          </div>
        ))}

        <div className="footer-newsletter-column">
          {/* 5. Dados da newsletter são dinâmicos */}
          <h4>{data.newsletter.title}</h4>
          <p>{data.newsletter.subtitle}</p>
          <form className="newsletter-form">
            <input type="email" placeholder={data.newsletter.placeholder} />
            <button type="submit">{data.newsletter.buttonText}</button>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        {/* 6. Dados do rodapé inferior são dinâmicos */}
        <p className="copyright">{data.bottom.copyright}</p>
        <div className="footer-legal-links">
          {/* 7. Mapeamos os links legais */}
          {data.bottom.legalLinks.map((link) => (
            <a key={link.text} href={link.href}>{link.text}</a>
          ))}
        </div>
        <div className="footer-social-icons">
          {/* 8. Mapeamos os ícones de redes sociais */}
          {data.bottom.socials.map((social) => (
            <a key={social.label} href={social.href} aria-label={social.label}>
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;