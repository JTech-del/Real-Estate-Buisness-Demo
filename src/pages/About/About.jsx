
import { Link } from 'react-router-dom';
import aboutHero from '../../assets/About us images/about hero exterior/about hero.webp';
import aboutStory from '../../assets/About us images/about us story/about us story.webp';
import aboutApproach from '../../assets/About us images/about approach/about us approach.webp';
import aboutValues from '../../assets/About us images/about us values/about us values.webp';
import aboutExpertise from '../../assets/About us images/about us experties/about us experties.webp';
import aboutCta from '../../assets/About us images/about us CTA/about CTA.webp';
import './about.css';

function About() {
  return (
    <main className="about-page">
      {/* Hero */}
      <section className="about-hero">
        <div className="about-hero__top">
          <span>ABOUT RE REAL ESTATE</span>
          <span>01 / 06</span>
        </div>

        <div className="about-hero__content">
          <div className="about-hero__copy">
            <p className="about-eyebrow">PROPERTY / PEOPLE / PLACE</p>

            <h1>
              We make
              <span>property</span>
              feel personal.
            </h1>

            <div className="about-hero__bottom">
              <p>
                Finding the right property is not simply about what looks
                good on paper. It is about discovering a space that fits
                the way you want to live, work and grow.
              </p>

              <Link to="/properties" className="about-text-link">
                Explore properties
                <span>↗</span>
              </Link>
            </div>
          </div>

          <div className="about-hero__visual">
            <img
              src={aboutHero}
              alt="Contemporary property exterior"
            />

            <div className="about-hero__label">
              <span>EST.</span>
              <strong>2026</strong>
              <span>REAL ESTATE</span>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Statement */}
      <section className="about-statement">
        <div className="about-section-index">
          <span>02</span>
          <span>OUR PERSPECTIVE</span>
        </div>

        <div className="about-statement__content">
          <p className="about-statement__lead">
            A property is an address.
            <br />
            <em>A home is a feeling.</em>
          </p>

          <div className="about-statement__body">
            <p>
              We believe the difference is in the details — the light
              through a window, the relationship between rooms, the
              character of a neighbourhood and the possibilities a
              space creates.
            </p>

            <p>
              Our role is to make those details easier to see, understand
              and ultimately choose.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="about-story">
        <div className="about-section-index">
          <span>03</span>
          <span>OUR STORY</span>
        </div>

        <div className="about-story__layout">
          <div className="about-story__image">
            <img
              src={aboutStory}
              alt="Thoughtfully designed residential interior"
            />

            <span>CONSIDERED IN EVERY DETAIL</span>
          </div>

          <div className="about-story__content">
            <p className="about-eyebrow">A DIFFERENT WAY TO LOOK AT PROPERTY</p>

            <h2>
              Property should be
              <span>experienced,</span>
              not simply listed.
            </h2>

            <div className="about-story__text">
              <p>
                RE Real Estate was built around a simple idea: property
                deserves more thought.
              </p>

              <p>
                Instead of treating every listing as another transaction,
                we look at the complete picture — the architecture, the
                setting, the experience and the long-term potential.
              </p>

              <p>
                That perspective shapes everything we present and every
                conversation we have with the people looking for their
                next place.
              </p>
            </div>

            <Link to="/properties" className="about-outline-link">
              See our properties
              <span>↗</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="about-approach">
        <div className="about-section-index about-section-index--light">
          <span>04</span>
          <span>OUR APPROACH</span>
        </div>

        <div className="about-approach__heading">
          <p className="about-eyebrow about-eyebrow--light">
            LESS NOISE / MORE CLARITY
          </p>

          <h2>
            A considered process
            <span>from first look to final decision.</span>
          </h2>
        </div>

        <div className="about-approach__image">
          <img
            src={aboutApproach}
            alt="Modern property architecture"
          />
        </div>

        <div className="about-process">
          <article className="about-process__item">
            <div className="about-process__number">01</div>

            <div>
              <h3>Discover</h3>
              <p>
                We begin by understanding what matters to you — your
                priorities, your lifestyle and what you want your next
                property to achieve.
              </p>
            </div>
          </article>

          <article className="about-process__item">
            <div className="about-process__number">02</div>

            <div>
              <h3>Present</h3>
              <p>
                We bring the important details forward, presenting each
                property with clarity so you can understand its character,
                potential and place.
              </p>
            </div>
          </article>

          <article className="about-process__item">
            <div className="about-process__number">03</div>

            <div>
              <h3>Guide</h3>
              <p>
                We stay involved beyond the first impression, helping you
                move from interest to a confident decision.
              </p>
            </div>
          </article>
        </div>
      </section>

      {/* Values */}
      <section className="about-values">
        <div className="about-section-index">
          <span>05</span>
          <span>WHAT MATTERS TO US</span>
        </div>

        <div className="about-values__layout">
          <div className="about-values__visual">
            <img
              src={aboutValues}
              alt="Elegant contemporary living space"
            />

            <div className="about-values__caption">
              <span>THE STANDARD</span>
              <span>IS IN THE DETAIL.</span>
            </div>
          </div>

          <div className="about-values__content">
            <h2>
              The standards behind
              <span>every property we present.</span>
            </h2>

            <div className="about-values__list">
              <article>
                <span>01</span>
                <div>
                  <h3>Clarity</h3>
                  <p>
                    Straightforward information, thoughtful presentation
                    and no unnecessary noise.
                  </p>
                </div>
              </article>

              <article>
                <span>02</span>
                <div>
                  <h3>Quality</h3>
                  <p>
                    We pay attention to the details that make a property
                    worth experiencing.
                  </p>
                </div>
              </article>

              <article>
                <span>03</span>
                <div>
                  <h3>Integrity</h3>
                  <p>
                    Honest communication and decisions built around
                    long-term trust.
                  </p>
                </div>
              </article>

              <article>
                <span>04</span>
                <div>
                  <h3>People</h3>
                  <p>
                    Because the right property ultimately has to work for
                    the person choosing it.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="about-expertise">
        <div className="about-section-index">
          <span>06</span>
          <span>OUR EXPERTISE</span>
        </div>

        <div className="about-expertise__top">
          <div>
            <p className="about-eyebrow">PROPERTY × DESIGN × DIGITAL</p>

            <h2>
              A sharper eye for
              <span>property and presentation.</span>
            </h2>
          </div>

          <p className="about-expertise__intro">
            Great property deserves great communication. We combine
            property insight with visual storytelling and digital
            experience to make every space easier to discover and
            understand.
          </p>
        </div>

        <div className="about-expertise__visual">
          <img
            src={aboutExpertise}
            alt="Modern architectural property"
          />

          <div className="about-expertise__label">
            <span>WHAT WE BRING</span>
          </div>
        </div>

        <div className="about-expertise__capabilities">
          <div>
            <span>01</span>
            <strong>Property insight</strong>
            <p>
              Understanding the details that give a property its value,
              character and potential.
            </p>
          </div>

          <div>
            <span>02</span>
            <strong>Visual storytelling</strong>
            <p>
              Presenting spaces through imagery and content that create
              a genuine sense of place.
            </p>
          </div>

          <div>
            <span>03</span>
            <strong>Digital experience</strong>
            <p>
              Building a clear and modern experience that makes finding
              the right property feel effortless.
            </p>
          </div>
        </div>

        <Link to="/properties" className="about-large-link">
          Discover our properties
          <span>↗</span>
        </Link>
      </section>

      {/* CTA */}
      <section className="about-cta">
        <img
          src={aboutCta}
          alt="Beautiful contemporary property"
        />

        <div className="about-cta__overlay" />

        <div className="about-cta__content">
          <p className="about-eyebrow about-eyebrow--light">
            THE NEXT STEP
          </p>

          <h2>
            Find a place
            <span>that feels right.</span>
          </h2>

          <p>
            Tell us what you are looking for and let us help you discover
            what comes next.
          </p>

          <div className="about-cta__actions">
            <Link to="/properties" className="about-cta__primary">
              View properties
              <span>↗</span>
            </Link>

            <Link to="/contact" className="about-cta__secondary">
              Get in touch
              <span>↗</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default About;

