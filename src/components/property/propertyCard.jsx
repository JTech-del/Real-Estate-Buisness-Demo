import { Link } from 'react-router-dom';
import './propertyCard.css';

function PropertyCard({ property, featured = false }) {
return (
<article
className={`property-card ${
        featured ? 'property-card--featured' : ''
      }`}
>
<Link
to={`/properties/${property.slug}`}
className="property-card__image-link"
aria-label={`View ${property.title}`}
> <div className="property-card__image">
{property.image ? ( <img
           src={property.image}
           alt={property.title}
         />
) : ( <span>Property Image</span>
)}

```
      <div className="property-card__image-top">
        <span className="property-card__type">
          {property.type}
        </span>

        {featured && (
          <span className="property-card__featured">
            Featured
          </span>
        )}
      </div>

      <span className="property-card__image-arrow" aria-hidden="true">
        ↗
      </span>
    </div>
  </Link>

  <div className="property-card__content">
    <div className="property-card__heading">
      <div>
        <p className="property-card__category">
          {property.category}
        </p>

        <h3>
          <Link to={`/properties/${property.slug}`}>
            {property.title}
          </Link>
        </h3>
      </div>
    </div>

    <p className="property-card__location">
      <span aria-hidden="true">⌖</span>
      {property.location}
    </p>

    <div className="property-card__details">
      <span>
        <strong>{property.bedrooms}</strong>
        Beds
      </span>

      <span>
        <strong>{property.bathrooms}</strong>
        Baths
      </span>

      <span>
        <strong>{property.area}</strong>
      </span>
    </div>

    <div className="property-card__footer">
      <div className="property-card__price">
        <span>Price</span>
        <strong>{property.price}</strong>
      </div>

      <Link
        to={`/properties/${property.slug}`}
        className="property-card__cta"
        aria-label={`View details for ${property.title}`}
        data-property-id={property.id}
      >
        View Property
        <span aria-hidden="true">→</span>
      </Link>
    </div>
  </div>
</article>


);
}

export default PropertyCard;
