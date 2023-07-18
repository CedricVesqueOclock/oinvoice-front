import React from "react";
import { useState } from 'react';

import './Header.scss';

import { Menu, Person } from '@mui/icons-material';


function Header() {

  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <>
      <section className="menuOpen">
        <a href="#">Connexion</a>
      </section>
      <header>
        <button className="header-icons" onClick={openMenu}>
          <Menu fontSize="large" />
        </button>
        <h1>O'Invoice</h1>
        <div className="header-icons">
          <Person fontSize="large" />
        </div>
        {isOpen && (
          <div>
            dfregthtrehyjejyedtrvfsvtrtrehryherh
          </div>
        )}
      </header>
    </>
  );

  function openMenu() {
    console.log('button clicked');
    setIsOpen(!isOpen);
    console.log(isOpen);
    
  };
}

export default Header;