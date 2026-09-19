

import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import properties from '../../data/properties.js';
import './propertyDetails.css';

function PropertyDetails() {
  const { slug } = useParams();

  const property = properties.find(
    (item) => item.slug === slug,
  );

  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [lightboxImage, setLightboxImage] = useState(null);

  if (!property) {
    return (
      <main className="property-details">
        <div className="container property-details__not-found">
          <p className="property-details__eyebrow">
            Property Not Found
          </p>

          <h1>We couldn't find that property.</h1>

          <p>
            The property may have been removed or the link may
            be incorrect.
          </p>

          <Link to="/properties">
            Back to Properties
          </Link>
        </div>
      </main>
    );
  }

  /*
   * =========================================
   * GALLERY SECTIONS
   * =========================================
   */

  const gallerySections = [
    {
      title: 'Exterior',
      description:
        'A refined exterior that introduces the property with a strong architectural presence, welcoming entrance, and carefully considered surroundings.',
      highlights: [
        'Contemporary exterior design',
        'Welcoming entrance',
        'Well-maintained surroundings',
      ],
      images: property.gallery?.exterior || [],
      layout: 'cards',
      number: '01',
    },
    {
      title: 'Living Room',
      description:
        'A bright and comfortable living space designed for everyday relaxation, entertaining guests, and creating a natural connection throughout the home.',
      highlights: [
        'Spacious living area',
        'Comfortable layout',
        'Contemporary finishes',
      ],
      images: property.gallery?.livingRoom || [],
      layout: 'living-room',
      number: '02',
    },
    {
      title: 'Kitchen',
      description:
        'A practical modern kitchen designed to combine functionality with clean finishes and an inviting environment for everyday cooking.',
      highlights: [
        'Modern kitchen design',
        'Functional workspace',
        'Clean contemporary finishes',
      ],
      images: property.gallery?.kitchen || [],
      layout: 'kitchen',
      number: '03',
    },
    {
      title: 'Bedrooms',
      description:
        'Private bedroom spaces designed to provide comfort, natural light, and a calm environment for rest and everyday living.',
      highlights: [
        'Comfortable private spaces',
        'Natural light',
        'Relaxed atmosphere',
      ],
      images: property.gallery?.bedrooms || [],
      layout: 'bedrooms',
      number: '04',
    },
    {
      title: 'Bathrooms',
      description:
        'Well-appointed bathrooms designed around convenience, clean finishes, and a comfortable everyday experience.',
      highlights: [
        'Modern bathroom finishes',
        'Practical layout',
        'Contemporary fixtures',
      ],
      images: property.gallery?.bathrooms || [],
      layout: 'bathrooms',
      number: '05',
    },
    {
      title: 'Additional Views',
      description:
        'Additional views that provide a closer look at the property and help you understand the character of the spaces beyond the primary rooms.',
      highlights: [
        'Additional property views',
        'Interior details',
        'Exterior details',
      ],
      images: property.gallery?.additional || [],
      layout: 'cards',
      number: '06',
    },
  ];

  /*
   * =========================================
   * MASTER GALLERY
   * =========================================
   *
   * Every image becomes an object containing:
   * - image
   * - section
   * - sectionIndex
   * - title
   * - alt
   *
   * This prevents duplicate image URLs from
   * causing incorrect lightbox indexes.
   */

  const galleryImages = gallerySections.flatMap(
    (section) =>
      section.images.map((image, imageIndex) => ({
        image,
        section: section.title,
        sectionIndex: imageIndex,
        title: `${section.title} View ${imageIndex + 1}`,
        alt: `${property.title} ${section.title.toLowerCase()} view ${imageIndex + 1}`,
      })),
  );

  /*
   * =========================================
   * HERO IMAGE
   * =========================================
   */

  const selectedImage =
    galleryImages[selectedImageIndex] || galleryImages[0];

  const visiblePreviewImages = galleryImages.slice(1, 5);

  const remainingImageCount = Math.max(
    galleryImages.length - 5,
    0,
  );

  /*
   * =========================================
   * LIGHTBOX CONTROLS
   * =========================================
   */

  const openLightbox = (imageIndex) => {
    const image = galleryImages[imageIndex];

    if (!image) return;

    setLightboxImage({
      ...image,
      index: imageIndex,
    });
  };

  const closeLightbox = () => {
    setLightboxImage(null);
  };

  const showPreviousImage = () => {
    if (!lightboxImage || galleryImages.length === 0) {
      return;
    }

    const previousIndex =
      lightboxImage.index === 0
        ? galleryImages.length - 1
        : lightboxImage.index - 1;

    setLightboxImage({
      ...galleryImages[previousIndex],
      index: previousIndex,
    });
  };

  const showNextImage = () => {
    if (!lightboxImage || galleryImages.length === 0) {
      return;
    }

    const nextIndex =
      lightboxImage.index === galleryImages.length - 1
        ? 0
        : lightboxImage.index + 1;

    setLightboxImage({
      ...galleryImages[nextIndex],
      index: nextIndex,
    });
  };

  /*
   * =========================================
   * HERO IMAGE SELECTION
   * =========================================
   *
   * Hero synchronization is intentionally
   * preserved.
   */

  const handleHeroImageSelect = (index) => {
    setSelectedImageIndex(index);
  };

  /*
   * =========================================
   * IMAGE INDEX HELPER
   * =========================================
   */

  const getGalleryImageIndex = (
    sectionTitle,
    sectionImageIndex,
  ) => {
    let index = 0;

    for (const section of gallerySections) {
      if (section.title === sectionTitle) {
        return index + sectionImageIndex;
      }

      index += section.images.length;
    }

    return -1;
  };

  /*
   * =========================================
   * PROPERTY HERO
   * =========================================
   */

  return (
    <main className="property-details">

      {/* =========================================
          PROPERTY HERO
      ========================================= */}

      <section className="property-details__hero">
        <div className="container">

          <Link
            to="/properties"
            className="property-details__back"
          >
            ← Back to Properties
          </Link>

          <div className="property-details__gallery-hero">

            {/* MAIN HERO IMAGE */}

            <button
              type="button"
              className="property-details__gallery-main"
              onClick={() =>
                openLightbox(selectedImageIndex)
              }
              aria-label={`View ${property.title} image`}
            >
              {selectedImage && (
                <img
                  src={selectedImage.image}
                  alt={selectedImage.alt}
                />
              )}

              <span className="property-details__type">
                {property.type}
              </span>

              <span className="property-details__gallery-count">
                {galleryImages.length} Photos
              </span>

              <span className="property-details__gallery-main-action">
                View gallery
                <span aria-hidden="true">↗</span>
              </span>
            </button>

            {/* HERO THUMBNAILS */}

            <div className="property-details__gallery-side">

              {visiblePreviewImages.map(
                (galleryImage, index) => {
                  const actualIndex = index + 1;

                  const isSelected =
                    selectedImageIndex === actualIndex;

                  const isLastPreview =
                    index ===
                    visiblePreviewImages.length - 1;

                  const showMore =
                    isLastPreview &&
                    remainingImageCount > 0;

                  return (
                    <button
                      type="button"
                      className={`property-details__gallery-side-image ${
                        isSelected
                          ? 'property-details__gallery-side-image--active'
                          : ''
                      }`}
                      key={`hero-gallery-${actualIndex}`}
                      onClick={() => {
                        handleHeroImageSelect(actualIndex);
                        openLightbox(actualIndex);
                      }}
                      aria-label={
                        showMore
                          ? `View more photos of ${property.title}`
                          : `View ${property.title} photo ${actualIndex + 1}`
                      }
                    >
                      <img
                        src={galleryImage.image}
                        alt={galleryImage.alt}
                      />

                      {showMore && (
                        <span className="property-details__gallery-more">
                          +{remainingImageCount} more
                        </span>
                      )}
                    </button>
                  );
                },
              )}

            </div>

          </div>

          <div className="property-details__hero-content">

            <div>
              <p className="property-details__eyebrow">
                {property.category}
              </p>

              <h1>{property.title}</h1>

              <p className="property-details__location">
                {property.location}
              </p>
            </div>

            <strong className="property-details__hero-price">
              {property.price}
            </strong>

          </div>

          <div className="property-details__specs">

            <div>
              <strong>{property.bedrooms}</strong>
              <span>Bedrooms</span>
            </div>

            <div>
              <strong>{property.bathrooms}</strong>
              <span>Bathrooms</span>
            </div>

            <div>
              <strong>{property.area}</strong>
              <span>Floor Area</span>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================
          PROPERTY CONTENT
      ========================================= */}

      <section className="property-details__content section">

        <div className="container">

          <div className="property-details__grid">

            <div className="property-details__main">

              {/* =========================================
                  PROPERTY OVERVIEW
              ========================================= */}

              <section className="property-details__section">

                <p className="property-details__eyebrow">
                  Property Overview
                </p>

                <h2>
                  Designed for comfortable living.
                </h2>

                <p className="property-details__description">
                  {property.description}
                </p>

              </section>

              {/* =========================================
                  PROPERTY GALLERY
              ========================================= */}

              <section className="property-details__section">

                <p className="property-details__eyebrow">
                  Explore the Property
                </p>

                <h2>
                  Every space tells the story.
                </h2>

                <div className="property-details__gallery">

                  {gallerySections.map(
                    (section) => {

                      /*
                       * Skip empty optional sections.
                       */

                      if (!section.images.length) {
                        return null;
                      }

                      /*
                       * =====================================
                       * EXTERIOR / ADDITIONAL VIEWS
                       * =====================================
                       *
                       * Keep this section visually intact.
                       */

                      if (section.layout === 'cards') {
                        return (
                          <div
                            className="property-details__gallery-section property-details__gallery-section--cards"
                            key={section.title}
                          >

                            <div className="property-details__gallery-heading">

                              <div>
                                <span className="property-details__gallery-number">
                                  {section.number}
                                </span>

                                <h3>
                                  {section.title}
                                </h3>

                                <p>
                                  Explore the{' '}
                                  {section.title.toLowerCase()}.
                                </p>
                              </div>

                              <span>
                                {section.images.length}{' '}
                                {section.images.length === 1
                                  ? 'image'
                                  : 'images'}
                              </span>

                            </div>

                            <div className="property-details__gallery-cards">

                              {section.images.map(
                                (image, index) => {
                                  const imageIndex =
                                    getGalleryImageIndex(
                                      section.title,
                                      index,
                                    );

                                  return (
                                    <button
                                      type="button"
                                      className="property-details__gallery-card"
                                      key={`${section.title}-${index}`}
                                      onClick={() =>
                                        openLightbox(
                                          imageIndex,
                                        )
                                      }
                                      aria-label={`View ${section.title.toLowerCase()} image ${index + 1}`}
                                    >

                                      <figure className="property-details__gallery-card-image">

                                        <img
                                          src={image}
                                          alt={`${property.title} ${section.title.toLowerCase()} view ${index + 1}`}
                                        />

                                        <span className="property-details__gallery-card-overlay">
                                          <span>
                                            View image
                                          </span>

                                          <span aria-hidden="true">
                                            ↗
                                          </span>
                                        </span>

                                      </figure>

                                      <div className="property-details__gallery-card-content">

                                        <span>
                                          {section.title}{' '}
                                          View {index + 1}
                                        </span>

                                        <h4>
                                          {section.title ===
                                          'Exterior'
                                            ? index === 0
                                              ? 'A welcoming first impression.'
                                              : 'Designed to stand out.'
                                            : 'A closer look at the property.'}
                                        </h4>

                                        <p>
                                          {section.title ===
                                          'Exterior'
                                            ? index === 0
                                              ? 'The exterior introduces the property with a refined architectural presence and carefully considered surroundings.'
                                              : 'A second perspective highlights the property’s character, proportions, and surrounding details.'
                                            : 'This view gives you another perspective of the property’s design and surroundings.'}
                                        </p>

                                      </div>

                                    </button>
                                  );
                                },
                              )}

                            </div>

                          </div>
                        );
                      }

                      /*
                       * =====================================
                       * LIVING ROOM
                       * PREMIUM CINEMATIC SHOWCASE
                       * =====================================
                       */

                      if (section.layout === 'living-room') {
                        const heroImage =
                          section.images[0];

                        const supportingImages =
                          section.images.slice(1);

                        const heroIndex =
                          getGalleryImageIndex(
                            section.title,
                            0,
                          );

                        return (
                          <div
                            className="property-details__space"
                            key={section.title}
                          >

                            <div className="property-details__gallery-heading">

                              <div>
                                <span className="property-details__gallery-number">
                                  {section.number}
                                </span>

                                <h3>
                                  Living Room
                                </h3>

                                <p>
                                  A closer look at the heart
                                  of the home.
                                </p>
                              </div>

                              <span>
                                {section.images.length}{' '}
                                {section.images.length === 1
                                  ? 'image'
                                  : 'images'}
                              </span>

                            </div>

                            <div className="property-details__living-feature">

                              {/* LARGE FEATURE IMAGE */}

                              <button
                                type="button"
                                className="property-details__space-image property-details__space-image--feature"
                                onClick={() =>
                                  openLightbox(heroIndex)
                                }
                                aria-label="View living room main image"
                              >
                                <img
                                  src={heroImage}
                                  alt={`${property.title} living room main view`}
                                />

                                <span className="property-details__space-image-overlay">
                                  <span>
                                    Explore living room
                                  </span>

                                  <span aria-hidden="true">
                                    ↗
                                  </span>
                                </span>

                                <span className="property-details__space-label">
                                  01 / {section.images.length}
                                </span>
                              </button>

                              {/* STORY COPY */}

                              <div className="property-details__space-story-copy">

                                <span className="property-details__gallery-story-label">
                                  The Living Space
                                </span>

                                <h4>
                                  Designed around the way
                                  you live.
                                </h4>

                                <p>
                                  {section.description}
                                </p>

                                <ul className="property-details__space-highlights">
                                  {section.highlights.map(
                                    (highlight) => (
                                      <li
                                        key={highlight}
                                      >
                                        <span aria-hidden="true">
                                          ✓
                                        </span>

                                        {highlight}
                                      </li>
                                    ),
                                  )}
                                </ul>

                                <div className="property-details__space-meta">

                                  <div>
                                    <strong>
                                      {section.images.length}
                                    </strong>

                                    <span>
                                      Living room views
                                    </span>
                                  </div>

                                  <div>
                                    <strong>
                                      {property.type}
                                    </strong>

                                    <span>
                                      Property type
                                    </span>
                                  </div>

                                </div>

                              </div>

                            </div>

                            {/* SUPPORTING IMAGES */}

                            {supportingImages.length > 0 && (
                              <div className="property-details__living-support">

                                {supportingImages.map(
                                  (image, index) => {
                                    const imageIndex =
                                      getGalleryImageIndex(
                                        section.title,
                                        index + 1,
                                      );

                                    return (
                                      <button
                                        type="button"
                                        className="property-details__space-image property-details__space-image--support"
                                        key={`${section.title}-support-${index}`}
                                        onClick={() =>
                                          openLightbox(
                                            imageIndex,
                                          )
                                        }
                                        aria-label={`View living room image ${index + 2}`}
                                      >
                                        <img
                                          src={image}
                                          alt={`${property.title} living room supporting view ${index + 2}`}
                                        />

                                        <span className="property-details__space-image-overlay">
                                          <span>
                                            View image
                                          </span>

                                          <span aria-hidden="true">
                                            ↗
                                          </span>
                                        </span>

                                        <span className="property-details__space-label">
                                          0{index + 2}
                                        </span>
                                      </button>
                                    );
                                  },
                                )}

                              </div>
                            )}

                          </div>
                        );
                      }

                      /*
                       * =====================================
                       * KITCHEN
                       * EDITORIAL SPLIT
                       * =====================================
                       */

                      if (section.layout === 'kitchen') {
                        const mainImage =
                          section.images[0];

                        const secondaryImages =
                          section.images.slice(1);

                        const mainImageIndex =
                          getGalleryImageIndex(
                            section.title,
                            0,
                          );

                        return (
                          <div
                            className="property-details__space"
                            key={section.title}
                          >

                            <div className="property-details__gallery-heading">

                              <div>
                                <span className="property-details__gallery-number">
                                  {section.number}
                                </span>

                                <h3>
                                  Kitchen
                                </h3>

                                <p>
                                  Practical design with a
                                  refined finish.
                                </p>
                              </div>

                              <span>
                                {section.images.length}{' '}
                                {section.images.length === 1
                                  ? 'image'
                                  : 'images'}
                              </span>

                            </div>

                            <div className="property-details__kitchen-layout">

                              {/* MAIN KITCHEN IMAGE */}

                              <button
                                type="button"
                                className="property-details__space-image property-details__space-image--kitchen-main"
                                onClick={() =>
                                  openLightbox(
                                    mainImageIndex,
                                  )
                                }
                                aria-label="View kitchen main image"
                              >
                                <img
                                  src={mainImage}
                                  alt={`${property.title} kitchen main view`}
                                />

                                <span className="property-details__space-image-overlay">
                                  <span>
                                    View kitchen
                                  </span>

                                  <span aria-hidden="true">
                                    ↗
                                  </span>
                                </span>

                                <span className="property-details__space-label">
                                  01 / {section.images.length}
                                </span>
                              </button>

                              {/* EDITORIAL COPY */}

                              <div className="property-details__editorial">

                                <span className="property-details__gallery-story-label">
                                  The Kitchen
                                </span>

                                <h4>
                                  Function meets modern
                                  simplicity.
                                </h4>

                                <p>
                                  {section.description}
                                </p>

                                <ul className="property-details__space-highlights">
                                  {section.highlights.map(
                                    (highlight) => (
                                      <li
                                        key={highlight}
                                      >
                                        <span aria-hidden="true">
                                          ✓
                                        </span>

                                        {highlight}
                                      </li>
                                    ),
                                  )}
                                </ul>

                              </div>

                              {/* SECONDARY KITCHEN IMAGES */}

                              {secondaryImages.length > 0 && (
                                <div className="property-details__kitchen-side">

                                  {secondaryImages.map(
                                    (image, index) => {
                                      const actualIndex =
                                        index + 1;

                                      const imageIndex =
                                        getGalleryImageIndex(
                                          section.title,
                                          actualIndex,
                                        );

                                      return (
                                        <button
                                          type="button"
                                          className="property-details__space-image property-details__space-image--support"
                                          key={`${section.title}-secondary-${index}`}
                                          onClick={() =>
                                            openLightbox(
                                              imageIndex,
                                            )
                                          }
                                          aria-label={`View kitchen image ${actualIndex + 1}`}
                                        >
                                          <img
                                            src={image}
                                            alt={`${property.title} kitchen view ${actualIndex + 1}`}
                                          />

                                          <span className="property-details__space-image-overlay">
                                            <span>
                                              View image
                                            </span>

                                            <span aria-hidden="true">
                                              ↗
                                            </span>
                                          </span>

                                          <span className="property-details__space-label">
                                            0{actualIndex + 1}
                                          </span>
                                        </button>
                                      );
                                    },
                                  )}

                                </div>
                              )}

                            </div>

                          </div>
                        );
                      }

                      /*
                       * =====================================
                       * BEDROOMS
                       * PREMIUM MOOD GALLERY
                       * =====================================
                       */

                      if (section.layout === 'bedrooms') {
                        return (
                          <div
                            className="property-details__space"
                            key={section.title}
                          >

                            <div className="property-details__gallery-heading">

                              <div>
                                <span className="property-details__gallery-number">
                                  {section.number}
                                </span>

                                <h3>
                                  Bedrooms
                                </h3>

                                <p>
                                  Calm private spaces
                                  designed for rest.
                                </p>
                              </div>

                              <span>
                                {section.images.length}{' '}
                                {section.images.length === 1
                                  ? 'image'
                                  : 'images'}
                              </span>

                            </div>

                            <div className="property-details__bedroom-intro">

                              <div>
                                <span className="property-details__gallery-story-label">
                                  Private Spaces
                                </span>

                                <h4>
                                  A quieter side of the
                                  home.
                                </h4>
                              </div>

                              <p>
                                {section.description}
                              </p>

                            </div>

                            <div className="property-details__bedroom-grid">

                              {section.images.map(
                                (image, index) => {
                                  const imageIndex =
                                    getGalleryImageIndex(
                                      section.title,
                                      index,
                                    );

                                  return (
                                    <button
                                      type="button"
                                      className="property-details__bedroom-card"
                                      key={`${section.title}-${index}`}
                                      onClick={() =>
                                        openLightbox(
                                          imageIndex,
                                        )
                                      }
                                      aria-label={`View bedroom image ${index + 1}`}
                                    >

                                      <figure className="property-details__space-image">

                                        <img
                                          src={image}
                                          alt={`${property.title} bedroom view ${index + 1}`}
                                        />

                                        <span className="property-details__space-image-overlay">
                                          <span>
                                            View image
                                          </span>

                                          <span aria-hidden="true">
                                            ↗
                                          </span>
                                        </span>

                                        <span className="property-details__space-label">
                                          0{index + 1}
                                        </span>

                                      </figure>

                                      <div>
                                        <span>
                                          Bedroom{' '}
                                          {index + 1}
                                        </span>

                                        <strong>
                                          A private space
                                          to unwind.
                                        </strong>
                                      </div>

                                    </button>
                                  );
                                },
                              )}

                            </div>

                          </div>
                        );
                      }

                      /*
                       * =====================================
                       * BATHROOMS
                       * DETAIL-FOCUSED GALLERY
                       * =====================================
                       */

                      if (section.layout === 'bathrooms') {
                        return (
                          <div
                            className="property-details__space"
                            key={section.title}
                          >

                            <div className="property-details__gallery-heading">

                              <div>
                                <span className="property-details__gallery-number">
                                  {section.number}
                                </span>

                                <h3>
                                  Bathrooms
                                </h3>

                                <p>
                                  Refined details in every
                                  space.
                                </p>
                              </div>

                              <span>
                                {section.images.length}{' '}
                                {section.images.length === 1
                                  ? 'image'
                                  : 'images'}
                              </span>

                            </div>

                            <div className="property-details__bathroom-heading">

                              <div>
                                <span className="property-details__gallery-story-label">
                                  Bathroom Details
                                </span>

                                <h4>
                                  Clean, contemporary and
                                  considered.
                                </h4>
                              </div>

                              <p>
                                {section.description}
                              </p>

                            </div>

                            <div className="property-details__bathroom-grid">

                              {section.images.map(
                                (image, index) => {
                                  const imageIndex =
                                    getGalleryImageIndex(
                                      section.title,
                                      index,
                                    );

                                  return (
                                    <button
                                      type="button"
                                      className="property-details__bathroom-card"
                                      key={`${section.title}-${index}`}
                                      onClick={() =>
                                        openLightbox(
                                          imageIndex,
                                        )
                                      }
                                      aria-label={`View bathroom image ${index + 1}`}
                                    >

                                      <figure className="property-details__space-image">

                                        <img
                                          src={image}
                                          alt={`${property.title} bathroom view ${index + 1}`}
                                        />

                                        <span className="property-details__space-image-overlay">
                                          <span>
                                            View image
                                          </span>

                                          <span aria-hidden="true">
                                            ↗
                                          </span>
                                        </span>

                                        <span className="property-details__space-label">
                                          0{index + 1}
                                        </span>

                                      </figure>

                                      <div>
                                        <span>
                                          Bathroom{' '}
                                          {index + 1}
                                        </span>

                                        <strong>
                                          Detail view
                                        </strong>
                                      </div>

                                    </button>
                                  );
                                },
                              )}

                            </div>

                          </div>
                        );
                      }

                      return null;
                    },
                  )}

                </div>

              </section>

              {/* =========================================
                  FEATURES
              ========================================= */}

              <section className="property-details__section">

                <p className="property-details__eyebrow">
                  Features & Amenities
                </p>

                <h2>
                  Everything you need.
                </h2>

                <ul className="property-details__features">

                  {property.features?.map(
                    (feature) => (
                      <li key={feature}>

                        <span aria-hidden="true">
                          ✓
                        </span>

                        {feature}

                      </li>
                    ),
                  )}

                </ul>

              </section>

            </div>

            {/* =========================================
                STICKY PROPERTY SIDEBAR

                KEEP THIS SECTION INTACT
            ========================================= */}

            <aside className="property-details__sidebar">

              <div className="property-details__sidebar-card">

                <span className="property-details__price-label">
                  Property Price
                </span>

                <strong className="property-details__price">
                  {property.price}
                </strong>

                <p>
                  Interested in this property? Speak with our
                  team to arrange a private viewing.
                </p>

                <Link
                  to="/contact"
                  className="property-details__contact"
                >
                  Schedule a Viewing
                </Link>

                <Link
                  to="/contact"
                  className="property-details__browse"
                >
                  Contact an Agent
                </Link>

              </div>

            </aside>

          </div>

        </div>

      </section>

      {/* =========================================
          PROPERTY IMAGE LIGHTBOX
      ========================================= */}

      {lightboxImage && (
        <div
          className="property-details__lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Property image preview"
          onClick={(event) => {
            if (
              event.target === event.currentTarget
            ) {
              closeLightbox();
            }
          }}
        >

          <div className="property-details__lightbox-inner">

            <button
              type="button"
              className="property-details__lightbox-close"
              onClick={closeLightbox}
              aria-label="Close image preview"
            >
              ×
            </button>

            <button
              type="button"
              className="property-details__lightbox-control property-details__lightbox-control--previous"
              onClick={showPreviousImage}
              aria-label="Previous image"
            >
              ‹
            </button>

            <figure className="property-details__lightbox-image">

              <img
                src={lightboxImage.image}
                alt={lightboxImage.alt}
              />

            </figure>

            <button
              type="button"
              className="property-details__lightbox-control property-details__lightbox-control--next"
              onClick={showNextImage}
              aria-label="Next image"
            >
              ›
            </button>

            <div className="property-details__lightbox-footer">

              <div>

                <span>
                  {lightboxImage.section}
                  {' — '}
                  {lightboxImage.title}
                </span>

                <strong>
                  {lightboxImage.index + 1} /{' '}
                  {galleryImages.length}
                </strong>

              </div>

            </div>

          </div>

        </div>
      )}

    </main>
  );
}

export default PropertyDetails;