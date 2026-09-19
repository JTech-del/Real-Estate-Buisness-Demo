
import { useState } from 'react';
import { Link } from 'react-router-dom';
import contactImage from '../../assets/About us images/about us CTA/about CTA.webp';
import './contact.css';

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="contact-page">
      {/* Hero */}
      <section className="contact-hero">
        <div className="contact-container contact-hero__inner">
          <div className="contact-hero__eyebrow">
            <span>06</span>
            <span>Get in touch</span>
          </div>

          <div className="contact-hero__content">
            <p className="contact-kicker">Let’s talk property.</p>

            <h1>
              Tell us what
              <span> you’re looking for.</span>
            </h1>

            <p className="contact-hero__intro">
              Whether you’re buying, selling, or simply exploring your next
              move, we’re here to make the process clearer, more considered,
              and easier to navigate.
            </p>
          </div>
        </div>
      </section>

      {/* Contact information */}
      <section className="contact-intro">
        <div className="contact-container contact-intro__grid">
          <div className="contact-intro__heading">
            <span className="section-index">01</span>
            <h2>
              Start with a
              <em> conversation.</em>
            </h2>
          </div>

          <div className="contact-intro__content">
            <p className="contact-lead">
              Good property decisions begin with understanding what matters
              to you. Tell us where you are, where you want to go, and what
              you need from us.
            </p>

            <div className="contact-details">
              <div className="contact-detail">
                <span>Email</span>
                <a href="mailto:hello@example.com">
                  hello@example.com
                </a>
              </div>

              <div className="contact-detail">
                <span>Phone</span>
                <a href="tel:+2340000000000">
                  +234 000 000 0000
                </a>
              </div>

              <div className="contact-detail">
                <span>Location</span>
                <p>Lagos, Nigeria</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Inquiry form */}
      <section className="contact-form-section">
        <div className="contact-container contact-form__layout">
          <div className="contact-form__heading">
            <span className="section-index">02</span>

            <p className="contact-kicker">Your enquiry</p>

            <h2>
              Let’s make the
              <em> next move.</em>
            </h2>

            <p>
              Share a few details and give us a sense of what you need. The
              more we understand, the better we can guide you.
            </p>
          </div>

          <div className="contact-form__wrapper">
            {submitted ? (
              <div className="contact-success">
                <span className="contact-success__number">✓</span>

                <p className="contact-kicker">Thank you</p>

                <h3>Your enquiry has been captured for this demo.</h3>

                <p>
                  In a production version, this form can be connected to your
                  email service, CRM, or backend so enquiries can be received
                  and managed properly.
                </p>

                <button
                  type="button"
                  className="contact-button contact-button--secondary"
                  onClick={() => setSubmitted(false)}
                >
                  Send another enquiry
                </button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="contact-form__row">
                  <div className="form-field">
                    <label htmlFor="name">Your name</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Full name"
                      required
                    />
                  </div>

                  <div className="form-field">
                    <label htmlFor="email">Email address</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="you@example.com"
                      required
                    />
                  </div>
                </div>

                <div className="contact-form__row">
                  <div className="form-field">
                    <label htmlFor="phone">Phone number</label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+234"
                    />
                  </div>

                  <div className="form-field">
                    <label htmlFor="interest">I’m interested in</label>
                    <select id="interest" name="interest" defaultValue="">
                      <option value="" disabled>
                        Select an option
                      </option>
                      <option value="buy">Buying a property</option>
                      <option value="sell">Selling a property</option>
                      <option value="advisory">Property advisory</option>
                      <option value="general">General enquiry</option>
                    </select>
                  </div>
                </div>

                <div className="form-field">
                  <label htmlFor="budget">Budget / price range</label>
                  <input
                    id="budget"
                    name="budget"
                    type="text"
                    placeholder="e.g. ₦50m – ₦100m"
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="message">Tell us more</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    placeholder="Tell us what you're looking for..."
                    required
                  />
                </div>

                <div className="contact-form__footer">
                  <p>
                    By submitting this form, you’re starting a conversation
                    with our team.
                  </p>

                  <button type="submit" className="contact-button">
                    Send enquiry
                    <span>↗</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* What we help with */}
      <section className="contact-help">
        <div className="contact-container">
          <div className="contact-section-heading">
            <div>
              <span className="section-index">03</span>
              <p className="contact-kicker">How we can help</p>
            </div>

            <h2>
              One conversation.
              <em> Many possibilities.</em>
            </h2>
          </div>

          <div className="contact-help__list">
            <div className="contact-help__item">
              <span>01</span>

              <div>
                <h3>Buy a property</h3>
                <p>
                  Explore carefully selected homes and investment
                  opportunities that match your goals.
                </p>
              </div>

              <Link to="/properties" aria-label="Explore properties">
                ↗
              </Link>
            </div>

            <div className="contact-help__item">
              <span>02</span>

              <div>
                <h3>Sell or list</h3>
                <p>
                  Present your property properly and reach the right audience
                  with a considered digital experience.
                </p>
              </div>

              <span className="contact-help__arrow">↗</span>
            </div>

            <div className="contact-help__item">
              <span>03</span>

              <div>
                <h3>Property advisory</h3>
                <p>
                  Get thoughtful guidance when evaluating a property,
                  opportunity, or your next move.
                </p>
              </div>

              <span className="contact-help__arrow">↗</span>
            </div>

            <div className="contact-help__item">
              <span>04</span>

              <div>
                <h3>Something else</h3>
                <p>
                  Have a question that does not fit neatly into a category?
                  Start the conversation anyway.
                </p>
              </div>

              <span className="contact-help__arrow">↗</span>
            </div>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="contact-location">
        <div className="contact-container contact-location__grid">
          <div className="contact-location__image">
            <img
              src={contactImage}
              alt="Architectural property exterior"
            />
          </div>

          <div className="contact-location__content">
            <span className="section-index">04</span>

            <p className="contact-kicker">Where we are</p>

            <h2>
              Rooted in
              <em> Lagos.</em>
            </h2>

            <p>
              Our perspective is shaped by the places we work in and the
              people we work with. From established neighbourhoods to emerging
              opportunities, we approach every property with local context
              and a wider view.
            </p>

            <div className="contact-location__details">
              <div>
                <span>Office</span>
                <strong>Lagos, Nigeria</strong>
              </div>

              <div>
                <span>Availability</span>
                <strong>Mon — Sat</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="contact-cta">
        <div className="contact-container contact-cta__inner">
          <p className="contact-kicker">Your next move starts here.</p>

          <h2>
            Ready to find
            <span> the right property?</span>
          </h2>

          <div className="contact-cta__actions">
            <a href="mailto:hello@example.com" className="contact-button">
              Email us
              <span>↗</span>
            </a>

            <Link
              to="/properties"
              className="contact-button contact-button--outline"
            >
              Explore properties
              <span>↗</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Contact;

