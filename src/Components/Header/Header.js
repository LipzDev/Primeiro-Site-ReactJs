import React from 'react';
import Logomarca from './Logo/Logo';
import MenuMobile from './Menu/MenuMobile/MenuMobile';
import MenuDesktop from './Menu/MenuDesktop/MenuDesktop';
import IconHamburguer from './Menu/IconHamburguer/Icon';

import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__item">
          <Logomarca />
          <MenuDesktop />
          <IconHamburguer />
          <MenuMobile />
        </div>
      </div>
    </header>
  );
};

export default Header;
