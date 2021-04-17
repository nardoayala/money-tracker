import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import Footer from './Footer';
import '../styles/components/Layout.scss';

const Layout = (props) => {
  const { children } = props;

  return (
    <>
      <Header />
      <main className="main__container">{children}</main>
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
