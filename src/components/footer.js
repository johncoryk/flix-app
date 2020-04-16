import React from 'react';

import './styles/footer.scss';

const Footer = () => {
  return (
    <footer className="footerStyles">
      <p>
        This site was built with React & lots of coffee by{' '}
        <a href="http://github.com/johncoryk">Cory Kelley</a>, © 2020
      </p>
    </footer>
  );
};

export default Footer;
