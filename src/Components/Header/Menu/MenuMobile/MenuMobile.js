import React from 'react';
import './MenuMobile.css';
import { OpenMenu } from '../IconHamburguer/Icon';

const MenuMobile = () => {
  return (
    <nav className="menu__mobile">
      <ul onClick={OpenMenu}>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#sobre">About</a>
        </li>
        <li>
          <a href="#extra">Extra</a>
        </li>
      </ul>
    </nav>
  );
};

export default MenuMobile;
