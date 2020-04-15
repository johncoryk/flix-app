import React from 'react';

import './styles/header.scss';

const Header = () => {
  const handleReload = () => {
    window.location.reload();
  };

  return (
    <header>
      <h1 onClick={handleReload} className="headerTitle">
        FLIX
      </h1>
      <div className="headerRule"></div>
    </header>
  );
};

export default Header;
