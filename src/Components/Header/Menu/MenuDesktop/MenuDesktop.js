import React from 'react';
import './MenuDesktop.css';
import { Link } from 'react-scroll';

const MenuDesktop = () => {
  return (
    <nav className="menu__desktop">
      <ul>
        <li>
          <Link to="section1" smooth={true} duration={1000}>
            Home
          </Link>
        </li>
        <li>
          <Link to="section2" smooth={true} duration={1000}>
            About
          </Link>
        </li>
        <li>
          <Link to="section3" smooth={true} duration={1000}>
            Extra
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default MenuDesktop;
