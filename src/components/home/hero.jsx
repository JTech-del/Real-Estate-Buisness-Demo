
import { Link } from 'react-router-dom';
import './hero.css';
import heroProperty from '../../assets/images/hero-property.webp';

function Hero() {
  return (
    <section className="hero">
      <div className="container hero__container">
        <div className="hero__content">
          <div className="hero__intro">
            <span className="hero__line"></span>

            <p className="hero__eyebrow">
              Exceptional spaces. Thoughtfully selected.
            </p>
          </div>

          <h1>
            Find a place
            <span>worth calling home.</span>
          </h1>

          <p className="hero__description">
            Discover carefully selected homes and investment properties in
            exceptional locations, supported by a service built around
            your goals.
          </p>

          <div className="hero__actions">
            <Link
              to="/properties"
              className="hero__primary-action"
            >
              <span>Explore Properties</span>
              <span aria-hidden="true">↗</span>
            </Link>

            <Link
              to="/contact"
              className="hero__secondary-action"
            >
              Talk to Us
            </Link>
          </div>

          <div className="hero__meta">
            <div className="hero__meta-item">
              <span className="hero__meta-label">Based in</span>
              <span className="hero__meta-value">Lagos, Nigeria</span>
            </div>

            <div className="hero__meta-divider"></div>

            <div className="hero__meta-item">
              <span className="hero__meta-label">Collection</span>
              <span className="hero__meta-value">Curated Properties</span>
            </div>
          </div>
        </div>

        <div className="hero__visual">
          <div className="hero__image-frame">
            <img
              src={heroProperty}
              alt="Modern luxury home with glass facade and pool"
              className="hero__image"
            />

            <div className="hero__image-overlay">
              <span>01</span>
              <span>Featured Residence</span>
            </div>
          </div>

          <div className="hero__caption">
            <span>Architecture</span>
            <span>Modern Residence</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

