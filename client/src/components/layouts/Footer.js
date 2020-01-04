import React from 'react';

import './footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <span className="footer__copy">Copyright 2019 &copy;</span>
      <span className="footer__authors">
        Authors:
        <a href="mailto:piotr.grzymowicz1@gmail.com" className="footer__link">
          Piotr Grzymowicz
        </a>
        {/* <a href="mailto:jm.skrzypinska@gmail.com" className="footer__link">
          Joanna Skrzypińska
        </a> */}
        <a href="mailto:kontakt@michalswiatlowski.pl" className="footer__link">
          Michał Światłowski
        </a>
      </span>
    </footer>
  );
};

export default Footer;
