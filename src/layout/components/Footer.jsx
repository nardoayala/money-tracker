import React from 'react';
import icons8Logo from 'Images/icons8.png';
import './Footer.scss';

const Footer = () => (
  <footer className="footer">
    <div className="footer__container">
      <div className="footer__copyright">
        <span>Built with 🤍 by </span>
        <a href="https://twitter.com/nardoyala">nardoyala</a>
      </div>
      <ul className="footer__linking">
        <li>
          <a href="https://icons8.com/" title="Icons by Icons8">
            <img src={icons8Logo} alt="Icons8 logo" />
          </a>
        </li>
      </ul>
    </div>
  </footer>
);

export default Footer;
