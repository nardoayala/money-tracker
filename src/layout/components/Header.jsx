import React from 'react';
import logo from 'Images/logo.png';
import './Header.scss';

const Header = () => (
  <header className="header">
    <div className="header__container">
      <div className="header__brand">
        <img src={logo} alt="Logo" />
        <span>Money tracker</span>
      </div>
      <nav className="header__nav">
        <ul>
          <li>About</li>
        </ul>
      </nav>
    </div>
  </header>
);

export default Header;
