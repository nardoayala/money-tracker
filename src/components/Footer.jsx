import React from 'react';
import 'Styles/components/Footer.scss';

const Footer = () => (
  <footer className="footer">
    <div className="footer__container">
      <div className="footer__copyright">
        <span>
          Made with ♥ by
          {' '}
          <a href="https://bernardoayala.com" target="_blank" rel="noreferrer">nardoyala</a>
        </span>
      </div>
    </div>
  </footer>
);

export default Footer;
