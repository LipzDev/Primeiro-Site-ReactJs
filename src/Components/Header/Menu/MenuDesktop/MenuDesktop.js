import React from 'react';
import './MenuDesktop.css';

const MenuDesktop = () => {
  return (
    <nav className="menu__desktop">
      <ul>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#extra">Extra</a>
        </li>
      </ul>
    </nav>
  );
};

export default MenuDesktop;
