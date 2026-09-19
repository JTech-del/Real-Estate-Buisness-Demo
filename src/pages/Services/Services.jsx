
import { Link } from 'react-router-dom';
import aboutApproach from '../../assets/About us images/about approach/about us approach.webp';
import aboutExpertise from '../../assets/About us images/about us experties/about us experties.webp';
import './services.css';

function Services() {
  return (
    <main className="services-page">
      {/* Hero */}
      <section className="services-hero">
        <div className="services-hero__top">
          <span>RE REAL ESTATE / SERVICES</span>
          <span>01 / 05</span>
        </div>

        <div className="services-hero__content">
          <div className="services-hero__heading">
            <p className="services-eyebrow">
              PROPERTY / GUIDANCE / EXPERIENCE
            </p>

            <h1>
              More than
              <span>finding a property.</span>
            </h1>
          </div>

          <div className="services-hero__intro">
            <p>
              We help people discover, understand and move confidently
              toward properties that make sense for the way they want
              to live, work and grow.
            </p>

            <Link to="/contact" className="services-link">
              Start a conversation
              <span>↗</span>
            </Link>
          </div>
        </div>

        <div className="services-hero__visual">
          <img
            src={aboutExpertise}
            alt="Contemporary real estate property"
          />

          <div className="services-hero__visual-label">
            <span>OUR SERVICES</span>
            <strong>PROPERTY, CONSIDERED.</strong>
          </div>
        </div>
      </section>

      {/* Service Introduction */}
      <section className="services-introduction">
        <div className="services-section-index">
          <span>02</span>
          <span>WHAT WE DO</span>
        </div>

        <div className="services-introduction__content">
          <h2>
            Every property
            <span>deserves the right approach.</span>
          </h2>

          <div>
            <p>
              Whether you are searching for your next home, exploring an
              investment opportunity or preparing a property for market,
              our role is to bring clarity to the process.
            </p>

            <p>
              We combine property knowledge, thoughtful presentation and
              personal guidance to make every step easier to understand.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="services-list">
        <div className="services-list__header">
          <p className="services-eyebrow">OUR SERVICES</p>

          <h2>
            Built around
            <em>your next move.</em>
          </h2>
        </div>

        <div className="service-item">
          <div className="service-item__number">01</div>

          <div className="service-item__main">
            <h3>Property Sales</h3>

            <p>
              Discover carefully presented properties selected for their
              location, character, quality and potential.
            </p>
          </div>

          <div className="service-item__details">
            <span>FOR BUYERS</span>

            <p>
              From first viewing to final decision, we help you understand
              what makes a property worth considering.
            </p>
          </div>
        </div>

        <div className="service-item">
          <div className="service-item__number">02</div>

          <div className="service-item__main">
            <h3>Property Discovery</h3>

            <p>
              A more focused way to search for spaces that fit your
              lifestyle, priorities and long-term plans.
            </p>
          </div>

          <div className="service-item__details">
            <span>SEARCH / SELECT</span>

            <p>
              We narrow the noise and bring the details that matter into
              focus.
            </p>
          </div>
        </div>

        <div className="service-item">
          <div className="service-item__number">03</div>

          <div className="service-item__main">
            <h3>Property Advisory</h3>

            <p>
              Clear guidance when the decision involves more than simply
              choosing what looks good.
            </p>
          </div>

          <div className="service-item__details">
            <span>INSIGHT / GUIDANCE</span>

            <p>
              We help you evaluate the wider picture, from location and
              layout to potential and long-term value.
            </p>
          </div>
        </div>

        <div className="service-item">
          <div className="service-item__number">04</div>

          <div className="service-item__main">
            <h3>Property Presentation</h3>

            <p>
              Helping property owners present their spaces with the clarity
              and quality they deserve.
            </p>
          </div>

          <div className="service-item__details">
            <span>FOR OWNERS</span>

            <p>
              Strong presentation helps the right property reach the right
              people.
            </p>
          </div>
        </div>

        <div className="service-item">
          <div className="service-item__number">05</div>

          <div className="service-item__main">
            <h3>Digital Experience</h3>

            <p>
              Modern property presentation designed to make discovery
              simple, visual and engaging.
            </p>
          </div>

          <div className="service-item__details">
            <span>PROPERTY / DIGITAL</span>

            <p>
              From photography to digital presentation, every detail should
              make the property easier to understand.
            </p>
          </div>
        </div>
      </section>

      {/* Buyer / Owner Split */}
      <section className="services-clients">
        <div className="services-section-index">
          <span>03</span>
          <span>WHO WE HELP</span>
        </div>

        <div className="services-clients__heading">
          <p className="services-eyebrow">
            TWO SIDES OF THE PROPERTY JOURNEY
          </p>

          <h2>
            Whether you're
            <span>looking or listing.</span>
          </h2>
        </div>

        <div className="services-clients__grid">
          <article className="services-client">
            <span className="services-client__number">01</span>

            <div className="services-client__body">
              <p className="services-eyebrow">FOR BUYERS</p>

              <h3>Find the place that fits.</h3>

              <p>
                Tell us what matters to you. We help you explore properties
                with a clearer understanding of their spaces, surroundings
                and possibilities.
              </p>

              <Link to="/properties" className="services-client__link">
                Explore properties
                <span>↗</span>
              </Link>
            </div>
          </article>

          <article className="services-client">
            <span className="services-client__number">02</span>

            <div className="services-client__body">
              <p className="services-eyebrow">FOR OWNERS</p>

              <h3>Present the property properly.</h3>

              <p>
                A property has a story. We help bring its strongest qualities
                forward through thoughtful positioning, presentation and
                digital experience.
              </p>

              <Link to="/contact" className="services-client__link">
                Discuss your property
                <span>↗</span>
              </Link>
            </div>
          </article>
        </div>
      </section>

      {/* Process */}
      <section className="services-process">
        <div className="services-process__visual">
          <img
            src={aboutApproach}
            alt="Modern property architecture and interior"
          />

          <span>THE PROCESS</span>
        </div>

        <div className="services-process__content">
          <div className="services-section-index">
            <span>04</span>
            <span>HOW IT WORKS</span>
          </div>

          <h2>
            Clear from
            <span>the beginning.</span>
          </h2>

          <p className="services-process__intro">
            Good property decisions don't need unnecessary complexity.
            Our process is designed to keep the important things visible.
          </p>

          <div className="services-process__steps">
            <div>
              <span>01</span>
              <h3>Understand</h3>
              <p>
                We start with what you need, what matters and where you
                want to go.
              </p>
            </div>

            <div>
              <span>02</span>
              <h3>Explore</h3>
              <p>
                We bring relevant properties and information into one
                clearer picture.
              </p>
            </div>

            <div>
              <span>03</span>
              <h3>Decide</h3>
              <p>
                You move forward with the context and confidence needed
                to make the right choice.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Difference */}
      <section className="services-difference">
        <div className="services-section-index services-section-index--light">
          <span>05</span>
          <span>WHY RE REAL ESTATE</span>
        </div>

        <div className="services-difference__content">
          <p className="services-eyebrow services-eyebrow--light">
            OUR DIFFERENCE
          </p>

          <h2>
            Property is personal.
            <span>Our service should be too.</span>
          </h2>

          <div className="services-difference__list">
            <div>
              <span>01</span>
              <strong>Attention to detail</strong>
              <p>
                We look beyond the obvious to understand what gives a
                property its character.
              </p>
            </div>

            <div>
              <span>02</span>
              <strong>Thoughtful presentation</strong>
              <p>
                We believe how a property is presented shapes how it is
                understood.
              </p>
            </div>

            <div>
              <span>03</span>
              <strong>Clear communication</strong>
              <p>
                No unnecessary complexity. Just useful information and
                straightforward conversations.
              </p>
            </div>

            <div>
              <span>04</span>
              <strong>Personal guidance</strong>
              <p>
                Every property search and every property owner has a
                different story.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="services-cta">
        <div className="services-cta__content">
          <p className="services-eyebrow">READY WHEN YOU ARE</p>

          <h2>
            Let's find the
            <span>right next move.</span>
          </h2>

          <p>
            Whether you're searching for a property or preparing one for
            the market, let's start with a conversation.
          </p>

          <div className="services-cta__actions">
            <Link to="/properties" className="services-cta__primary">
              View properties
              <span>↗</span>
            </Link>

            <Link to="/contact" className="services-cta__secondary">
              Get in touch
              <span>↗</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Services;

