import React from 'react';
import './Icon.css';

export function OpenMenu() {
  document.querySelector('.hamburger').classList.toggle('is-active');
  document.querySelector('.menu__mobile').classList.toggle('menu__actived');
}

const Icon = () => {
  return (
    <>
      <button
        onClick={OpenMenu}
        className="hamburger hamburger--emphatic"
        type="button"
      >
        <span className="hamburger-box">
          <span className="hamburger-inner"></span>
        </span>
      </button>
    </>
  );
};

export default Icon;
