import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import images from "../../constants/images";
import "./Navbar.css";

const Navbar = () => {
  const [toggleMenu, seToggleMenu] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <img src={images.flavorfiesta} alt="flavorfiesta logo" />
      </div>

      <ul className="navbar__links">
        <li className="p__opensans">
          <a href="#home">Home</a>
        </li>
        <li className="p__opensans">
          <a href="#about">About</a>
        </li>
        <li className="p__opensans">
          <a href="#menu">Menu</a>
        </li>
        <li className="p__opensans">
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="navbar__login">
        <a href="#login" className="p__opensans">
          Login / Register
        </a>
        <div />
        <a href="/" className="p__opensans">
          Book Table
        </a>
      </div>

      <div className="navbar__smallscreen">
        <GiHamburgerMenu
          color="#fff"
          fontSize={27}
          onClick={() => seToggleMenu(true)}
        />

        {toggleMenu && (
          <div className="navbar__smallscreen-overlay flex__center slide__bottom">
            <MdOutlineRestaurantMenu
              fontSize={27}
              color="#fff"
              className="overlay__close"
              onClick={() => seToggleMenu(false)}
            />

            <ul className="navbar__smallscreen-links">
              <li className="p__opensans">
                <a href="#home">Home</a>
              </li>
              <li className="p__opensans">
                <a href="#about">About</a>
              </li>
              <li className="p__opensans">
                <a href="#menu">Menu</a>
              </li>
              <li className="p__opensans">
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
