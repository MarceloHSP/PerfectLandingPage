import React from 'react';
import './Navbar.css';

// 1. A função agora recebe um objeto 'data' como propriedade (props)
const Navbar = ({ data }) => {
  // Uma verificação para evitar erros caso os dados não sejam passados
  if (!data) {
    return null;
  }

  return (
    <nav className="navbar">
      {/* 2. O logo é preenchido com o dado vindo do contentData.js */}
      <div className="navbar-logo">{data.logo}</div>

      <div className="navbar-right">
        <ul className="navbar-links">
          {/* 3. Aqui acontece a mágica: mapeamos o array de links e criamos um <li> para cada item */}
          {data.links.map((link) => (
            <li key={link.text}>
              <a href={link.href}>{link.text}</a>
            </li>
          ))}
        </ul>
        <div className="navbar-buttons">
          {/* 4. Os textos dos botões também vêm dos dados */}
          <button className="login-button">{data.loginText}</button>
          <button className="register-button">{data.registerText}</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;