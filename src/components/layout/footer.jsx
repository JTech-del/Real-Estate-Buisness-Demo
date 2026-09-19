
import { Link } from 'react-router-dom';
import ThemeToggle from '../common/themeToggle';
import './footer.css';

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer__main">
          {/* Brand */}
          <div className="footer__brand">
            <Link to="/" className="footer__brand-link">
              <span className="footer__brand-mark">RE</span>

              <span className="footer__brand-name">
                Real Estate
              </span>
            </Link>

            <p>
              Helping you find exceptional spaces to live,
              work, and invest.
            </p>
          </div>

          {/* Explore */}
          <div className="footer__column">
            <h3>Explore</h3>

            <Link to="/">Home</Link>
            <Link to="/properties">Properties</Link>
            <Link to="/about">About Us</Link>
          </div>

          {/* Services */}
          <div className="footer__column">
            <h3>Services</h3>

            <Link to="/services">Our Services</Link>
            <Link to="/contact">Contact Us</Link>
          </div>

          {/* Contact */}
          <div className="footer__column">
            <h3>Contact</h3>

            <a href="mailto:hello@example.com">
              hello@example.com
            </a>

            <a href="tel:+2340000000000">
              +234 000 000 0000
            </a>

            <span>Lagos, Nigeria</span>
          </div>

          {/* Appearance */}
          <div className="footer__appearance">
            <span className="footer__appearance-label">
              Appearance
            </span>

            <div className="footer__appearance-control">
              <span>
                Switch theme
              </span>

              <ThemeToggle />
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <p>
            © {new Date().getFullYear()} Real Estate Business Demo.
            All rights reserved.
          </p>

          <p>Built with React.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
