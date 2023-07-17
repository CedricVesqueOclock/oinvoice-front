import React from "react";

import './Header.scss';

import { Menu, Person } from '@mui/icons-material';

function Header() {
  return (
    <header>
      <div className="header-icons">
        <Menu fontSize="large" />
      </div>
      <h1>O'Invoice</h1>
      <div className="header-icons">
        <Person fontSize="large" />
      </div>
    </header>
  );
}

export default Header;