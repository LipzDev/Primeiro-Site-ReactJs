import React from 'react';
import './MenuDesktop.css';

const MenuDesktop = () => {
  return (
    <nav className="menu__desktop">
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default MenuDesktop;
