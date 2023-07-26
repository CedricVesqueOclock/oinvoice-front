/* eslint-disable react/no-unescaped-entities */
// import React, { useState } from 'react';

import './Header.scss';

import { Menu, Person } from '@mui/icons-material';

import { NavLink } from 'react-router-dom';

function handleClickToggler() {
  const menu = document.getElementById('menu');
  if (menu) {
    if (menu.classList.contains('close')) {
      menu.classList.replace('close', 'open');
    } else {
      menu.classList.replace('open', 'close');
    }
  }
}

function Header() {
  // const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="menu-nav" id="header">
        <NavLink
          className="header-icons"
          onClick={handleClickToggler} to={''}        >
          <Menu fontSize="large" />
        </NavLink>

        <h1>O'Invoice</h1>

        <NavLink className="header-icons" to="/login">
          <Person fontSize="large" />
        </NavLink>
      </header>

      <aside id="menu" className="close">
      <NavLink className="header-icons menu-link" to="/">
            Accueil
        </NavLink>
        <NavLink className="header-icons menu-link" to="/documents">
            Page Factures
        </NavLink>
        <NavLink className="header-icons menu-link" to="/documents">
            Page devis
        </NavLink>
        <NavLink className="header-icons menu-link" to="/clients">
            Page clients
        </NavLink>
        <NavLink className="header-icons menu-link" to="/products">
            Page Produits
        </NavLink>
        <NavLink className="header-icons menu-link" to="/login">
          Informations
      </NavLink>
      <NavLink className="header-icons menu-link" to="/login">
          Mentions legales
      </NavLink>
      </aside>
    </>
  );
  // {/* <nav className="menu-nav">
  //   <NavLink className="header-icons menu-link" to="/">
  //     <Menu fontSize="large" />
  //   </NavLink>

  //   <h1>O'Invoice</h1>

  //   <NavLink className="header-icons menu-link" to="/login">
  //     <Person fontSize="large" />
  //   </NavLink>
  // </nav> */}
  // {/* <button className="header-icons" onClick={openMenu}>
  //     <Menu fontSize="large" />
  //   </button>
  //   {isOpen && (
  //     <div>
  //       dfregthtrehyjejyedtrvfsvtrtrehryherh
  //     </div>
  //   )} */}

  // function menu() {
  //   return <NavLink to="/login>">Se connecter</NavLink>;
  // }

  // function openMenu() {
  //   console.log('button clicked');
  //   setIsOpen(!isOpen);
  //   console.log(isOpen);

  // };
}

export default Header;
