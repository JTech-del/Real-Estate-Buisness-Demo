# Real Estate Business Demo

A polished, responsive real-estate business website built with React and Vite.

This project was developed as a portfolio-quality business demo focused on modern UI, reusable components, property presentation, responsive design, accessibility, and production-oriented frontend architecture.

---

## Live Demo

**Status:** Deployment pending final production verification.

The production URL will be added here after deployment.

---

## Project Overview

The Real Estate Business Demo is a modern frontend experience for a fictional real-estate business.

The website allows visitors to:

- Explore featured properties
- Browse the property catalogue
- Open individual property pages
- Explore detailed property information
- Browse categorized property photography
- Open images in a full-screen lightbox
- Switch between light and dark themes
- Learn about the business and its services
- Submit a contact enquiry through the frontend demo form

The project is intentionally frontend-only at the current MVP stage.

---

## Features

### Property Discovery

- Featured property section
- Property catalogue
- Reusable property cards
- Property metadata
- Property pricing
- Location information
- Property feature lists

### Property Details

- Dynamic slug-based property URLs
- Property hero gallery
- Property description
- Property features
- Sticky/floating property price card
- Categorized property images
- Responsive property layout

### Gallery

Property images are organized into:

- Exterior
- Living Room
- Kitchen
- Bedrooms
- Bathrooms
- Additional Views

The gallery also includes an interactive lightbox with:

- Previous image
- Next image
- Close control
- Image context
- Responsive presentation

### Theme

The application supports:

- Light mode
- Dark mode
- Theme persistence through LocalStorage
- Theme-aware components
- Theme-aware forms
- Theme-aware buttons
- Theme-aware navigation

### Responsive Design

The interface is designed for:

- Mobile
- Tablet
- Desktop
- Large desktop screens

Responsive behavior covers:

- Navigation
- Hero sections
- Property cards
- Property galleries
- Property details
- Contact forms
- Footer
- Mobile navigation

### Contact Experience

The Contact page includes:

- Contact information
- Enquiry form
- Form interaction
- Success state
- Location section
- Business CTA

The current form is a frontend demonstration and does not send messages to a real backend or CRM.

---

## Technology Stack

| Technology | Purpose |
|---|---|
| React | UI development |
| React DOM | React rendering |
| React Router DOM | Client-side routing |
| Vite | Development and production tooling |
| JavaScript | Application logic |
| CSS | Styling and responsive layouts |
| LocalStorage | Theme persistence |
| WebP | Optimized image assets |

---

## Project Structure

```text
frontend/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── common/
│   │   ├── home/
│   │   ├── layout/
│   │   └── property/
│   ├── data/
│   ├── pages/
│   │   ├── About/
│   │   ├── Contact/
│   │   ├── Home/
│   │   ├── Properties/
│   │   ├── PropertyDetails/
│   │   └── Services/
│   ├── routes/
│   └── styles/
├── .gitignore
├── ARCHITECTURE.md
├── DEVELOPMENT_JOURNAL.md
├── PROJECT_ROADMAP.md
├── README.md
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
└── vite.config.js