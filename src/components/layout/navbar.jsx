

import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import ThemeToggle from '../common/themeToggle';
import './navbar.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const toggleMenu = () => {
    setMenuOpen((previous) => !previous);
  };

  return (
    <header className="site-header">
      <nav className="navbar container" aria-label="Main navigation">
        <Link
          to="/"
          className="navbar__brand"
          onClick={closeMenu}
          aria-label="RE Real Estate home"
        >
          <span className="navbar__brand-mark">RE</span>
          <span className="navbar__brand-name">Real Estate</span>
        </Link>

        <div className="navbar__links">
          <NavLink to="/" end>
            Home
          </NavLink>

          <NavLink to="/properties">
            Properties
          </NavLink>

          <NavLink to="/about">
            About
          </NavLink>

          <NavLink to="/services">
            Services
          </NavLink>

          <NavLink to="/contact">
            Contact
          </NavLink>
        </div>

        <div className="navbar__actions">
          <ThemeToggle />

          <Link
            to="/contact"
            className="navbar__cta"
          >
            Get in Touch
            <span aria-hidden="true">↗</span>
          </Link>

          <button
            type="button"
            className={`navbar__menu-button ${
              menuOpen ? 'is-open' : ''
            }`}
            onClick={toggleMenu}
            aria-label={
              menuOpen
                ? 'Close navigation menu'
                : 'Open navigation menu'
            }
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
          >
            <span></span>
            <span></span>
          </button>
        </div>

        <div
          id="mobile-navigation"
          className={`navbar__mobile-menu ${
            menuOpen ? 'is-open' : ''
          }`}
        >
          <div className="navbar__mobile-tools">
            <span>Appearance</span>
            <ThemeToggle />
          </div>

          <div className="navbar__mobile-links">
            <NavLink to="/" end onClick={closeMenu}>
              <span>01</span>
              Home
            </NavLink>

            <NavLink to="/properties" onClick={closeMenu}>
              <span>02</span>
              Properties
            </NavLink>

            <NavLink to="/about" onClick={closeMenu}>
              <span>03</span>
              About
            </NavLink>

            <NavLink to="/services" onClick={closeMenu}>
              <span>04</span>
              Services
            </NavLink>

            <NavLink to="/contact" onClick={closeMenu}>
              <span>05</span>
              Contact
            </NavLink>
          </div>

          <Link
            to="/contact"
            className="navbar__mobile-cta"
            onClick={closeMenu}
          >
            Get in Touch
            <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
