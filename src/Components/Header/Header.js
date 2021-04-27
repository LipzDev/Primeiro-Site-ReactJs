import React from 'react';
import Logomarca from './Logo/Logo';
import MenuMobile from './Menu/MenuMobile/MenuMobile';
import MenuDesktop from './Menu/MenuDesktop/MenuDesktop';
import IconHamburguer from './Menu/IconHamburguer/Icon';

import './Header.css';

const Header = () => {
  function headerModular() {
    if (window.scrollY > 200) {
      document
        .querySelector('.header')
        .classList.add('header__modular-actived');
    } else {
      document
        .querySelector('.header')
        .classList.remove('header__modular-actived');
    }
  }

  window.addEventListener('scroll', headerModular);

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
