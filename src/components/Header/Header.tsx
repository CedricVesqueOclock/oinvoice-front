import './Header.scss';

import React, { useState } from 'react';
import { Menu, Person, Close } from '@mui/icons-material';
import { NavLink } from 'react-router-dom';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isConnected, setIsConnected] = useState(false);

  const handleClickToggler = () => {
    setIsMenuOpen((prevState) => !prevState);

    // Mettre à jour la classe du menu en fonction de l'état
    const menu = document.getElementById('menu');
    if (menu) {
      menu.classList.toggle('open');
      menu.classList.toggle('close');
    }
  };

  return (
    <>
      <header
        className={isMenuOpen ? 'menu-nav menu-open' : 'menu-nav'}
        id="header"
      >
        <div className="header-icons" onClick={handleClickToggler}>
          {isMenuOpen ? <Close fontSize="large" /> : <Menu fontSize="large" />}
        </div>

        <h1>O'Invoice</h1>

        <NavLink className="header-icons" to="/login">
          <Person fontSize="large" />
        </NavLink>
      </header>

      <aside id="menu" className={isMenuOpen ? 'open' : 'close'}>
        <NavLink className="header-icons menu-link" to="/">
          Accueil
        </NavLink>
        <NavLink className="header-icons menu-link" to="/document">
          Page Factures
        </NavLink>
        <NavLink className="header-icons menu-link" to="/document">
          Page devis
        </NavLink>
        <NavLink className="header-icons menu-link" to="/client">
          Page clients
        </NavLink>
        <NavLink className="header-icons menu-link" to="/product">
          Page Produits
        </NavLink>
        <NavLink className="header-icons menu-link" to="/login">
          Informations
        </NavLink>
        <NavLink className="header-icons menu-link" to="/login">
          Mentions légales
        </NavLink>
      </aside>
    </>
  );
}

export default Header;
