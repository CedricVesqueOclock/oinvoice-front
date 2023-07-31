import React, { useState } from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import { Menu, Person, Close } from '@mui/icons-material';
import LogoutIcon from '@mui/icons-material/Logout';
import { logout } from '../../utils/api';

import './Header.scss';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  let isConnected = false;

  if (localStorage.token) {
    isConnected = true;
  }
  const handleClickToggler = () => {
    setIsMenuOpen((prevState) => !prevState);

    // Mettre à jour la classe du menu en fonction de l'état
    const menu = document.getElementById('menu');
    if (menu) {
      menu.classList.toggle('open');
      menu.classList.toggle('close');
    }
  };

  const logoutAccount = function () {
    logout();
    navigate('/login');
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
          {isConnected ? (
            <LogoutIcon fontSize="large" onClick={logoutAccount} />
          ) : (
            <Person fontSize="large" />
          )}
        </NavLink>
      </header>

      <aside id="menu" className={isMenuOpen ? 'open' : 'close'}>
        <NavLink
          className="header-icons menu-link"
          to={!isConnected ? '/' : '/dashboard'}
        >
          Accueil
        </NavLink>
        <NavLink
          className={isConnected ? 'header-icons menu-link' : 'close'}
          to="/account"
        >
          Mon compte
        </NavLink>
        <NavLink
          className={isConnected ? 'header-icons menu-link' : 'close'}
          to="/invoice"
        >
          Page factures
        </NavLink>
        <NavLink
          className={isConnected ? 'header-icons menu-link' : 'close'}
          to="/quotation"
        >
          Page devis
        </NavLink>
        <NavLink
          className={isConnected ? 'header-icons menu-link' : 'close'}
          to="/client"
        >
          Page clients
        </NavLink>
        <NavLink
          className={isConnected ? 'header-icons menu-link' : 'close'}
          to="/product"
        >
          Page produits
        </NavLink>
        <NavLink className="header-icons menu-link" to="/infos">
          Informations
        </NavLink>
        <NavLink className="header-icons menu-link" to="/legal">
          Mentions légales
        </NavLink>
      </aside>
    </>
  );
}

export default Header;
