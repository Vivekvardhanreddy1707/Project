import React, { useState } from 'react';

const Navbar = ({ scrollToSection, handleSignupClick }) => {
  return (
    <nav id="navbar" className="navbar navbar-expand-lg navbar-dark bg-dark p-0">
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
        <div className="collapse navbar-collapse justify-content-lg-between p-0" id="navbarNav">
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
              <button id="signin-button" onClick={handleSignupClick} className="btn btn-secondary m-0 p-0"> Sign in </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

const App = () => {
  const [showSignin, setShowSignin] = useState(false);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSignupClick = () => {
    setShowSignin(!showSignin);
  };

  return (
    <div>
      <Navbar scrollToSection={scrollToSection} handleSignupClick={handleSignupClick} />
      {showSignin && (
        <div id="signin-popup" className="popup signin-background">
          <div className="signin-form">
            <h2>Sign in</h2>
            <form>
              <label htmlFor="signin-name">Name</label>
              <input type="text" id="signin-name" placeholder="Name" required />
              <label htmlFor="signin-email">Email</label>
              <input type="email" id="signin-email" placeholder="Email" required />
              <label htmlFor="signin-phone">Phone Number</label>
              <input type="tel" id="signin-phone" placeholder="Phone Number" required />
              <div className="complete-signup-button">
                <button type="submit" className="chrome-yellow-button">
                  Sign In
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
