import modernLekkiVilla from '../assets/images/properties/modern-lekki-villa.webp';
import cityApartment from '../assets/images/properties/city-apartment.webp';
import luxuryGardenResidence from '../assets/images/properties/luxury-garden-residence.webp';

import apartmentImage from '../assets/images/properties/apartment.webp';
import pexelsAhmetcotur from '../assets/images/properties/pexels-ahmetcotur-29702282.webp';
import pexelsAlleksana10727 from '../assets/images/properties/pexels-alleksana-10610727.webp';
import pexelsAlleksana10733 from '../assets/images/properties/pexels-alleksana-10610733.webp';
import pexelsRealtorTurkiye from '../assets/images/properties/pexels-realtor-turkiye-575431660-16959792.webp';
import pexelsVangelDimo from '../assets/images/properties/pexels-vangel-dimo-956042302-20129771.webp';

/* ========================================
PROPERTY 1
======================================== */

import property1Bathroom1 from '../assets/property1/property1 bathroom/bath room 1.webp';
import property1Bathroom2 from '../assets/property1/property1 bathroom/bath room 2.webp';
import property1Bathroom3 from '../assets/property1/property1 bathroom/bathroom 3.webp';
import property1Bathroom4 from '../assets/property1/property1 bathroom/bathroom 4.webp';

import property1Bedroom1 from '../assets/property1/property1 bedroom/bedroom1.webp';
import property1Bedroom2 from '../assets/property1/property1 bedroom/bedroom 2.webp';
import property1Bedroom3 from '../assets/property1/property1 bedroom/bedroom 3.webp';
import property1Bedroom4 from '../assets/property1/property1 bedroom/bedroom 4.webp';

import property1Exterior1 from '../assets/property1/property1 exterior/exterior 1.webp';
import property1Exterior2 from '../assets/property1/property1 exterior/exterior 2.webp';
import property1Exterior3 from '../assets/property1/property1 exterior/exterior 3.webp';
import property1Exterior4 from '../assets/property1/property1 exterior/exterior 4.webp';

import property1Kitchen1 from '../assets/property1/property1 kichine/Kichine 1.webp';
import property1Kitchen2 from '../assets/property1/property1 kichine/Kichine 2.webp';
import property1Kitchen3 from '../assets/property1/property1 kichine/Kichine 3.webp';

import property1LivingRoom1 from '../assets/property1/property1 livivng room/Living room 1.webp';
import property1LivingRoom2 from '../assets/property1/property1 livivng room/Living room 2.webp';
import property1LivingRoom3 from '../assets/property1/property1 livivng room/Living room 3.webp';

const properties = [
/* ========================================
PROPERTY 1 — COMPLETE PROPERTY
======================================== */

{
id: 'lagos-modern-villa',
slug: 'modern-lekki-villa',
title: 'Modern Lekki Villa',
location: 'Lekki Phase 1, Lagos',
type: 'For Sale',
category: 'Villa',
price: '₦120,000,000',
bedrooms: 4,
bathrooms: 4,
area: '420 m²',
image: modernLekkiVilla,

description:
  'A sophisticated modern villa designed for comfortable family living in one of Lagos’s most desirable residential locations.',

features: [
  'Modern architectural design',
  'Spacious living areas',
  'Fitted kitchen',
  'All bedrooms ensuite',
  'Private parking',
  'Secure residential environment',
],

gallery: {
  exterior: [
    property1Exterior1,
    property1Exterior2,
    property1Exterior3,
    property1Exterior4,
  ],

  livingRoom: [
    property1LivingRoom1,
    property1LivingRoom2,
    property1LivingRoom3,
  ],

  kitchen: [
    property1Kitchen1,
    property1Kitchen2,
    property1Kitchen3,
  ],

  bedrooms: [
    property1Bedroom1,
    property1Bedroom2,
    property1Bedroom3,
    property1Bedroom4,
  ],

  bathrooms: [
    property1Bathroom1,
    property1Bathroom2,
    property1Bathroom3,
    property1Bathroom4,
  ],

  additional: [],
},


},

/* ========================================
PROPERTY 2
======================================== */

{
id: 'lagos-city-apartment',
slug: 'contemporary-city-apartment',
title: 'Contemporary City Apartment',
location: 'Victoria Island, Lagos',
type: 'For Rent',
category: 'Apartment',
price: '₦8,500,000 / year',
bedrooms: 3,
bathrooms: 3,
area: '210 m²',
image: cityApartment,


description:
  'A contemporary city apartment offering stylish interiors, practical living spaces, and convenient access to Victoria Island’s major destinations.',

features: [
  'Contemporary interior',
  'Open-plan living area',
  'Modern kitchen',
  'Three bedrooms',
  'Secure parking',
  'Prime city location',
],

gallery: {
  exterior: [cityApartment],
  livingRoom: [pexelsAhmetcotur],
  kitchen: [pexelsAlleksana10727],
  bedrooms: [pexelsAlleksana10733],
  bathrooms: [apartmentImage],
  additional: [
    pexelsRealtorTurkiye,
    pexelsVangelDimo,
  ],
},


},

/* ========================================
PROPERTY 3
======================================== */

{
id: 'abuja-luxury-residence',
slug: 'luxury-garden-residence',
title: 'Luxury Garden Residence',
location: 'Maitama, Abuja',
type: 'For Sale',
category: 'Residence',
price: '₦180,000,000',
bedrooms: 5,
bathrooms: 5,
area: '560 m²',
image: luxuryGardenResidence,


description:
  'An expansive luxury residence combining elegant architecture, generous living spaces, and a beautifully landscaped environment.',

features: [
  'Luxury architectural design',
  'Large living spaces',
  'Landscaped garden',
  'Modern kitchen',
  'Five bedrooms',
  'Private parking',
  'Secure environment',
],

gallery: {
  exterior: [
    luxuryGardenResidence,
    modernLekkiVilla,
  ],
  livingRoom: [pexelsAhmetcotur],
  kitchen: [pexelsAlleksana10727],
  bedrooms: [pexelsAlleksana10733],
  bathrooms: [apartmentImage],
  additional: [
    pexelsRealtorTurkiye,
    pexelsVangelDimo,
  ],
},


},

/* ========================================
PROPERTY 4
======================================== */

{
id: 'ikoyi-urban-residence',
slug: 'ikoyi-urban-residence',
title: 'Ikoyi Urban Residence',
location: 'Ikoyi, Lagos',
type: 'For Sale',
category: 'Residence',
price: '₦145,000,000',
bedrooms: 4,
bathrooms: 4,
area: '390 m²',
image: pexelsRealtorTurkiye,


description:
  'A refined urban residence designed around spacious interiors, contemporary comfort, and an excellent central Lagos location.',

features: [
  'Contemporary architecture',
  'Spacious living room',
  'Fitted kitchen',
  'Four bedrooms',
  'Private parking',
  'Secure estate',
],

gallery: {
  exterior: [pexelsRealtorTurkiye],
  livingRoom: [pexelsAhmetcotur],
  kitchen: [pexelsAlleksana10727],
  bedrooms: [pexelsAlleksana10733],
  bathrooms: [apartmentImage],
  additional: [],
},


},

/* ========================================
PROPERTY 5
======================================== */

{
id: 'lekki-family-home',
slug: 'lekki-family-home',
title: 'Lekki Family Home',
location: 'Lekki, Lagos',
type: 'For Sale',
category: 'Family Home',
price: '₦98,000,000',
bedrooms: 4,
bathrooms: 4,
area: '350 m²',
image: apartmentImage,


description:
  'A welcoming family home with generous proportions, comfortable living spaces, and a layout suited to modern everyday living.',

features: [
  'Family-friendly layout',
  'Bright living spaces',
  'Modern kitchen',
  'Four bedrooms',
  'Private parking',
  'Gated environment',
],

gallery: {
  exterior: [apartmentImage],
  livingRoom: [pexelsAhmetcotur],
  kitchen: [pexelsAlleksana10727],
  bedrooms: [pexelsAlleksana10733],
  bathrooms: [pexelsRealtorTurkiye],
  additional: [],
},


},

/* ========================================
PROPERTY 6
======================================== */

{
id: 'banana-island-modern-home',
slug: 'banana-island-modern-home',
title: 'Banana Island Modern Home',
location: 'Banana Island, Lagos',
type: 'For Sale',
category: 'Luxury Home',
price: '₦250,000,000',
bedrooms: 5,
bathrooms: 5,
area: '610 m²',
image: pexelsVangelDimo,


description:
  'A spacious modern home concept created for buyers seeking privacy, generous interiors, and a premium residential setting.',

features: [
  'Premium residential setting',
  'Large living spaces',
  'Modern kitchen',
  'Five bedrooms',
  'Multiple parking spaces',
  'Private outdoor space',
],

gallery: {
  exterior: [pexelsVangelDimo],
  livingRoom: [pexelsAhmetcotur],
  kitchen: [pexelsAlleksana10727],
  bedrooms: [pexelsAlleksana10733],
  bathrooms: [apartmentImage],
  additional: [],
},


},

/* ========================================
PROPERTY 7
======================================== */

{
id: 'abuja-modern-family-house',
slug: 'abuja-modern-family-house',
title: 'Abuja Modern Family House',
location: 'Gwarinpa, Abuja',
type: 'For Sale',
category: 'Family Home',
price: '₦85,000,000',
bedrooms: 4,
bathrooms: 4,
area: '380 m²',
image: modernLekkiVilla,


description:
  'A modern family-oriented home combining practical spaces, contemporary finishes, and a comfortable residential environment.',

features: [
  'Modern exterior',
  'Open-plan living area',
  'Fitted kitchen',
  'Four bedrooms',
  'Private parking',
  'Gated community',
],

gallery: {
  exterior: [modernLekkiVilla],
  livingRoom: [pexelsAhmetcotur],
  kitchen: [pexelsAlleksana10727],
  bedrooms: [pexelsAlleksana10733],
  bathrooms: [apartmentImage],
  additional: [],
},


},

/* ========================================
PROPERTY 8
======================================== */

{
id: 'vi-premium-apartment',
slug: 'vi-premium-apartment',
title: 'VI Premium Apartment',
location: 'Victoria Island, Lagos',
type: 'For Rent',
category: 'Apartment',
price: '₦12,000,000 / year',
bedrooms: 3,
bathrooms: 3,
area: '240 m²',
image: cityApartment,


description:
  'A polished city apartment designed for professionals and families who value location, convenience, and contemporary living.',

features: [
  'Premium apartment design',
  'Contemporary interiors',
  'Modern fitted kitchen',
  'Three bedrooms',
  'Secure parking',
  'Central location',
],

gallery: {
  exterior: [cityApartment],
  livingRoom: [pexelsAhmetcotur],
  kitchen: [pexelsAlleksana10727],
  bedrooms: [pexelsAlleksana10733],
  bathrooms: [apartmentImage],
  additional: [],
},


},
];

export default properties;

