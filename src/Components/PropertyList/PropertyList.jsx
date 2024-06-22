// src/components/PropertyList.js
import React from 'react';
import image from '../../Images/home1.png'

const properties = [
  {
    name: 'Star Sun Hotel & Apartment',
    location: 'North Carolina, USA',
    price: 500,
    image: 'path-to-image1.jpg',
  },
  {
    name: 'Letdo Ji Hotel & Apartment',
    location: 'New York City, USA',
    price: 500,
    image: 'path-to-image2.jpg',
  },
  {
    name: 'Metro Jayakar Apartment',
    location: 'North Carolina, USA',
    price: 500,
    image: 'path-to-image3.jpg',
  },
];

const PropertyList = () => (
  <div className="property-list">
    {properties.map((property, index) => (
      <div key={index} className="property-card">
        <img src={image} alt={property.name} />
        <h3>{property.name}</h3>
        <p>{property.location}</p>
        <p>${property.price}</p>
      </div>
    ))}
  </div>
);

export default PropertyList;
