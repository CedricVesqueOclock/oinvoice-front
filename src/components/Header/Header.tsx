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
          className="header-icons menu-link"
          to="/"
          onClick={handleClickToggler}
        >
          <Menu fontSize="large" />
        </NavLink>

        <h1>O'Invoice</h1>

        <NavLink className="header-icons menu-link" to="/login">
          <Person fontSize="large" />
        </NavLink>
      </header>

      <aside id="menu" className="close">
        <p>menu</p>
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
