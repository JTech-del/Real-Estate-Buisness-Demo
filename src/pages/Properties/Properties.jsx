import { Link } from 'react-router-dom';
import properties from '../../data/properties.js';
import PropertyCard from '../../components/property/propertyCard.jsx';
import './properties.css';

function Properties() {
return ( <main className="properties-page"> <section className="properties-page__intro"> <div className="container"> <div className="properties-page__eyebrow-row"> <p className="properties-page__eyebrow">
Our Collection </p>


        <span className="properties-page__eyebrow-line" />
      </div>

      <div className="properties-page__intro-content">
        <div className="properties-page__intro-copy">
          <p className="properties-page__kicker">
            Find a place to call home
          </p>

          <h1>
            Properties selected
            <span> for modern living.</span>
          </h1>
        </div>

        <div className="properties-page__intro-description">
          <p>
            Explore a carefully selected collection of homes,
            apartments, and residences across some of Nigeria's
            most desirable locations.
          </p>

          <Link
            to="/contact"
            className="properties-page__intro-link"
          >
            Speak with a property advisor
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>

      <div className="properties-page__stats">
        <div className="properties-page__stat">
          <strong>{properties.length}</strong>
          <span>Properties</span>
        </div>

        <div className="properties-page__stat">
          <strong>03</strong>
          <span>Property types</span>
        </div>

        <div className="properties-page__stat">
          <strong>02</strong>
          <span>Listing options</span>
        </div>
      </div>
    </div>
  </section>

  <section className="properties-page__list section">
    <div className="container">
      <div className="properties-page__toolbar">
        <div className="properties-page__toolbar-info">
          <p className="properties-page__toolbar-label">
            Property collection
          </p>

          <h2>
            {properties.length} properties available
          </h2>

          <p className="properties-page__toolbar-description">
            Browse our latest selection and explore each
            property in detail.
          </p>
        </div>

        <div className="properties-page__toolbar-actions">
          <div className="properties-page__sort">
            <span>Showing</span>

            <strong>All properties</strong>
          </div>

          <Link to="/contact" className="properties-page__help">
            Need help finding a property?
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>

      <div className="properties-page__grid">
        {properties.map((property, index) => (
          <PropertyCard
            key={property.id}
            property={property}
            featured={index === 0}
          />
        ))}
      </div>

      <div className="properties-page__bottom">
        <div>
          <span className="properties-page__bottom-line" />
          <p>
            More properties can be added to this collection
            as the portfolio grows.
          </p>
        </div>

        <Link to="/contact">
          Request a property
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </div>
  </section>
</main>


);
}

export default Properties;
