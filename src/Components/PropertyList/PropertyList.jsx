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
  <>
    <h4 className="ms-3 mt-3">Property List</h4>

    <div className="property-list mb-3">
      {properties.map((property, index) => (
        <div key={index} className="property-card text-start border-0">
          <img className="rounded-4" src={image} alt={property.name} />
          <div className="d-flex justify-content-between align-items-center">
            <div>
              {" "}
              <h5 className="mt-2 ms-2">{property.name}</h5>
              <p className="m-0 ms-2">{property.location}</p>
            </div>
            <div>
              <p className="m-0 ms-2 bg-primary text-white bg-opacity-75 p-2 rounded-3 py-1">${property.price}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </>
);

export default PropertyList;
