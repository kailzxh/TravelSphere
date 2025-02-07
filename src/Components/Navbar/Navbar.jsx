import React, { useState } from "react";
import "./navbar.css";
import { MdOutlineTravelExplore } from "react-icons/md";
import { AiFillCloseCircle } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNavbar = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <section className="navbarSection">
      <header className="header flex">
        <div className="logoDiv">
          <a href="#" className="logo flex">
            <h1>
              <MdOutlineTravelExplore className="icon" />
              Travel.
            </h1>
          </a>
        </div>

        {/* Navbar List */}
        <div className={`navBar ${isNavOpen ? "activeNavbar" : ""}`}>
          <ul className="navLists flex">
            <li className="navItem"><a href="#" className="navLink">Home</a></li>
            <li className="navItem"><a href="#" className="navLink">Packages</a></li>
            <li className="navItem"><a href="#" className="navLink">Shop</a></li>
            <li className="navItem"><a href="#" className="navLink">About</a></li>
            <li className="navItem"><a href="#" className="navLink">Pages</a></li>
            <li className="navItem"><a href="#" className="navLink">News</a></li>
            <li className="navItem"><a href="#" className="navLink">Contact</a></li>
            <li className="navItem">
              <button className="btn">
                <a href="#" className="btnLink">BOOK NOW</a>
              </button>
            </li>
          </ul>

          {/* Close Button */}
          <div onClick={toggleNavbar} className="closeNavbar">
            <AiFillCloseCircle className="icon" />
          </div>
        </div>

        {/* Toggle Button (Outside of Navbar) */}
        <div onClick={toggleNavbar} className="toggleNavbar">
          <TbGridDots className="icon" />
        </div>
      </header>
    </section>
  );
};

export default Navbar;
