import React from 'react';

import './Footer.css';

const Footer = () => {
  return <footer>
  <p>&copy; {(new Date().getFullYear())}, David McGurrin, @david-mcgurrin</p>
</footer>
};

export default Footer;
