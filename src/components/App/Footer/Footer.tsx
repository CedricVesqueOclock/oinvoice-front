import React from 'react';

import './Footer.scss';

import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedinIcon from '@mui/icons-material/LinkedIn';

// interface FooterProps {
//   likes: number;
//   setLikes: React.Dispatch<React.SetStateAction<number>>;
// }

function Footer() {
  console.log('FOOTER > render');

  return (
    <footer>
      <div className="footer-icons">
        <FacebookIcon />
        <TwitterIcon />
        <LinkedinIcon />
      </div>
      <p className="footer-text">O'Invoice - © 2023</p>
    </footer>
  );
}

export default Footer;
