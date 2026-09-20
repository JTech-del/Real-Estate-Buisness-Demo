import modernLekkiVilla from '../assets/images/properties/modern-lekki-villa.webp';

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

import property2Bathroom from '../assets/property 2/bath room 2.webp';
import property2Bedroom from '../assets/property 2/bedroom 2.webp';
import property2Exterior from '../assets/property 2/Exterior 2.webp';
import property2Kitchen from '../assets/property 2/Kichine 2.webp';
import property2LivingRoom from '../assets/property 2/Living room 2.webp';

import property3Bedroom from '../assets/property 3/bedroom 3.webp';
import property3Bathroom from '../assets/property 3/bathroom 3.webp';
import property3Exterior from '../assets/property 3/Exterior 3.webp';
import property3Kitchen from '../assets/property 3/Kichine 3.webp';
import property3LivingRoom from '../assets/property 3/Living room 3.webp';

import property4Bathroom from '../assets/property 4/bathroom 4.webp';
import property4Bedroom from '../assets/property 4/bedroom 4.webp';
import property4Exterior from '../assets/property 4/Exterior 4.webp';
import property4Kitchen from '../assets/property 4/Kichine 4.webp';
import property4LivingRoom from '../assets/property 4/Living room 4.webp';

import property5Bathroom from '../assets/property 5/bathroom 5.webp';
import property5Bedroom from '../assets/property 5/bedroom 5.webp';
import property5Exterior from '../assets/property 5/Exterior 5.webp';
import property5Kitchen from '../assets/property 5/Kichine 5.webp';
import property5LivingRoom from '../assets/property 5/Living room 5.webp';

import property6Bathroom from '../assets/property 6/bathroom 6.webp';
import property6Bedroom from '../assets/property 6/bedroom 6.webp';
import property6Exterior from '../assets/property 6/Exterior 6.webp';
import property6Kitchen from '../assets/property 6/Kichine 6.webp';
import property6LivingRoom from '../assets/property 6/Living room 6.webp';

import property7Bathroom from '../assets/property 7/bathroom 7.webp';
import property7Bedroom from '../assets/property 7/bedroom 7.webp';
import property7Exterior from '../assets/property 7/Exterior 7.webp';
import property7Kitchen from '../assets/property 7/Kichine 7.webp';
import property7LivingRoom from '../assets/property 7/Living room 7.webp';

import property8Bathroom from '../assets/property 8/bathroom 8.webp';
import property8Bedroom from '../assets/property 8/bedroom 8.webp';
import property8Exterior from '../assets/property 8/Exterior 8.webp';
import property8Kitchen from '../assets/property 8/Kichine 8.webp';
import property8LivingRoom from '../assets/property 8/Living room 8.webp';

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
image: property2Exterior,


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
  exterior: [property2Exterior],
  livingRoom: [property2LivingRoom],
  kitchen: [property2Kitchen],
  bedrooms: [property2Bedroom],
  bathrooms: [property2Bathroom],
  additional: [],
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
image: property3Exterior,


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
  exterior: [property3Exterior],
  livingRoom: [property3LivingRoom],
  kitchen: [property3Kitchen],
  bedrooms: [property3Bedroom],
  bathrooms: [property3Bathroom],
  additional: [],
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
image: property4Exterior,


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
  exterior: [property4Exterior],
  livingRoom: [property4LivingRoom],
  kitchen: [property4Kitchen],
  bedrooms: [property4Bedroom],
  bathrooms: [property4Bathroom],
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
image: property5Exterior,


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
  exterior: [property5Exterior],
  livingRoom: [property5LivingRoom],
  kitchen: [property5Kitchen],
  bedrooms: [property5Bedroom],
  bathrooms: [property5Bathroom],
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
image: property6Exterior,


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
  exterior: [property6Exterior],
  livingRoom: [property6LivingRoom],
  kitchen: [property6Kitchen],
  bedrooms: [property6Bedroom],
  bathrooms: [property6Bathroom],
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
image: property7Exterior,


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
  exterior: [property7Exterior],
  livingRoom: [property7LivingRoom],
  kitchen: [property7Kitchen],
  bedrooms: [property7Bedroom],
  bathrooms: [property7Bathroom],
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
image: property8Exterior,


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
  exterior: [property8Exterior],
  livingRoom: [property8LivingRoom],
  kitchen: [property8Kitchen],
  bedrooms: [property8Bedroom],
  bathrooms: [property8Bathroom],
  additional: [],
},


},
];

export default properties;

