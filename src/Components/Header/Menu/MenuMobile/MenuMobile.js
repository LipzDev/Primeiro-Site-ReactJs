import React from 'react';
import './MenuMobile.css';
import { OpenMenu } from '../IconHamburguer/Icon';
import { Link } from 'react-scroll';

const MenuMobile = () => {
  return (
    <nav className="menu__mobile">
      <ul>
        <li>
          <Link onClick={OpenMenu} to="section1" smooth={true} duration={1000}>
            Home
          </Link>
        </li>
        <li>
          <Link onClick={OpenMenu} to="section2" smooth={true} duration={1000}>
            About
          </Link>
        </li>
        <li>
          <Link onClick={OpenMenu} to="section3" smooth={true} duration={1000}>
            Extra
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default MenuMobile;
