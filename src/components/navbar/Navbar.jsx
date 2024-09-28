import React, { useState } from 'react';
import './navbar.css';

import logo from '../../assets/logo.png';
import { RiCloseLine, RiMenu3Line } from "react-icons/ri";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const closeMenu = () => {
    setToggleMenu(false)
  }

  const Menu = () => (
    <>
      <p><a href="#home" onClick={closeMenu}>Kezdőlap</a></p>
      <p><a href="#features" onClick={closeMenu}>Kezelések</a></p>
      <p><a href="#contact" onClick={closeMenu}>Kapcsolat</a></p>
    </>
  )

  return (
    <div className="bars__navbar">
      <div className="bars__navbar-links">
        <div className="bars__navbar-links_logo">
          <a href="/"><img src={logo} alt="logo" /></a>
        </div>
        <div className="bars__navbar-links-container">
          <Menu />
        </div>
        <div className="bars__navbar-menu">
          {toggleMenu
            ? <RiCloseLine color="#9e876f" size={27} onClick={() => setToggleMenu(false)} />
            : <RiMenu3Line color="#9e876f" size={27} onClick={() => setToggleMenu(true)} />
          }
          {toggleMenu && (
            <div className="bars__navbar-menu_container scale-up-center">
              <div className="bars__navbar-menu_container-links">
                <Menu />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
