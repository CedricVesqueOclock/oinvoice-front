import React from 'react';

import './Footer.scss';

import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedinIcon from '@mui/icons-material/LinkedIn';

function Footer() {

  return (
    <footer>
      <div className="footer-icons">
        <FacebookIcon fontSize="large" />
        <TwitterIcon fontSize="large" />
        <LinkedinIcon fontSize="large" />
      </div>
      <p className="footer-text">O'Invoice - © 2023</p>
    </footer>
  );
}

export default Footer;
