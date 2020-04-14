import React from 'react';

import './styles/footer.scss';

const Footer = () => {
  return (
    <footer className="footerStyles">
      <p>
        This site was built with React and loads of coffee by{' '}
        <a href="github.com/johncoryk">Cory Kelley.</a>
      </p>
    </footer>
  );
};

export default Footer;
