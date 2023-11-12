import React from 'react';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

function Navbar() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-0">
      <div className="container-fluid p-0">
        <a className="navbar-brand" href="#">
          <h3 className="navbar-text text-white m-0 p-0">Plates&Pleasure</h3>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-between p-0" id="navbarNav">
        <ul className="navbar-nav">
            <li className="nav-item" onClick={() => scrollToSection('home')}>
              <a className="nav-link text-white" href="#">Home</a>
            </li>
            <li className="nav-item" onClick={() => scrollToSection('about')}>
              <a className="nav-link text-white" href="#">About</a>
            </li>
            <li className="nav-item" onClick={() => scrollToSection('menu')}>
              <a className="nav-link text-white" href="#">Menu</a>
            </li>
            <li className="nav-item" onClick={() => scrollToSection('gallery')}>
              <a className="nav-link text-white" href="#">Gallery</a>
            </li>
            <li className="nav-item" onClick={() => scrollToSection('chefs')}>
              <a className="nav-link text-white" href="#">Chefs</a>
            </li>
            <li className="nav-item" onClick={() => scrollToSection('contact')}>
              <a className="nav-link text-white" href="#">Contact</a>
            </li>
          </ul>
          <ul className="navbar-nav m-0 p-0">
            <li className="nav-item">
              <button className="btn btn-secondary m-0 p-0">Administrator</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
