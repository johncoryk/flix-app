import React from 'react';

import Header from './header';
import Footer from './footer';
import './styles/layout.scss';

const Layout = ({ children, backdrop }) => {
  const backgroundImg = {
    backgroundImage: `linear-gradient(184deg, rgba(9,0,73,0.8421743697478992) 0%, rgba(14,31,89,0.7777485994397759) 46%, rgba(0,0,0,1) 95%), url(https://image.tmdb.org/t/p/w500/${backdrop})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  };

  return (
    <div style={backdrop ? backgroundImg : null}>
      <div className="mainContainer">
        <Header />
        <main className="content">{children}</main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
