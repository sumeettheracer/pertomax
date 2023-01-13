import React, { useState, useEffect } from "react";
import "./Navbar.scss";
import { FiMenu } from "react-icons/fi";
import { GrClose } from "react-icons/gr";

const Navbar = () => {
  const [click, setClicked] = useState(false);
  const [showNav, setShowNav] = useState(false);
  const handleClick = () => {
    setClicked(!click);
  };

  const handleCloseMobileMenu = () => {
    setShowNav(false);
  };

  useEffect(() => {
    document.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setShowNav(true);
      } else {
        setShowNav(false);
      }
    });
  }, []);

  return (
    <nav className={showNav ? "navbar-container" : "navbar-container active"}>
      <a href="/" className="navbar-logo">
        <p>PetroMax</p>
      </a>
      <div className="menu-icon" onClick={handleClick}>
        {click ? <GrClose /> : <FiMenu/>}
      </div>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li className="nav-link-items" onClick={handleCloseMobileMenu}>
          <a href="/" className="nav-link">
            Home
          </a>
        </li>
        <li className="nav-link-items" onClick={handleCloseMobileMenu}>
          <a href="/" className="nav-link">
            About
          </a>
        </li>
        <li className="nav-link-items" onClick={handleCloseMobileMenu}>
          <a href="/" className="nav-link">
            Services
          </a>
        </li>
        <li className="nav-link-items" onClick={handleCloseMobileMenu}>
          <a href="/" className="nav-link">
            Working
          </a>
        </li>
        <li className="nav-link-items" onClick={handleCloseMobileMenu}>
          <a href="/" className="nav-link">
            Blog
          </a>
        </li>
        <li className="nav-link-items" onClick={handleCloseMobileMenu}>
          <a href="/" className="nav-link">
            Contact
          </a>
        </li>
        <li className="nav-link-items lastchild" onClick={handleCloseMobileMenu}>
          <a href="/" className="nav-link">
            Free Consultation
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
