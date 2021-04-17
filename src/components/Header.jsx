import React from 'react';
import { Link } from 'react-router-dom';
import logo from 'Images/logo.png';
import 'Styles/components/Header.scss';

const Header = () => (
  <header className="header">
    <div className="header__container">
      <Link to="/">
        <div className="header__brand">
          <img src={logo} alt="Logo" />
          <span>Money tracker</span>
        </div>
      </Link>
      <nav className="header__nav">
        <ul>
          <li>
            <Link to="about">About</Link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
);

export default Header;
