import { Link } from 'react-router-dom';
import properties from '../../data/properties.js';
import PropertyCard from '../property/propertyCard.jsx';
import './featuredProperties.css';

function FeaturedProperties() {
  const featuredProperties = properties.slice(0, 3);

  return (
    <section className="featured-properties section">
      <div className="container">
        <div className="featured-properties__header">
          <div>
            <p className="featured-properties__eyebrow">
              Featured Collection
            </p>

            <h2>Properties worth discovering.</h2>
          </div>

          <p className="featured-properties__description">
            Explore a selection of thoughtfully chosen properties
            in some of the most desirable locations.
          </p>
        </div>

        <div className="featured-properties__grid">
          {featuredProperties.map((property) => (
            <PropertyCard
              key={property.id}
              property={property}
            />
          ))}
        </div>

        <div className="featured-properties__action">
          <Link to="/properties">
            View All Properties
          </Link>
        </div>
      </div>
    </section>
  );
}

export default FeaturedProperties;