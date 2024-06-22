import React from 'react';
import './Analytics.css';
import analytic from '../../Images/home1.png'

const PropertyDetail = () => {
  const property = {
    title: 'Woodland Apartment',
    mainImage: 'https://via.placeholder.com/800x400',
    images: [
      'https://via.placeholder.com/200',
      'https://via.placeholder.com/200',
      'https://via.placeholder.com/200',
    ],
    type: 'a Flat',
    area: '224m²',
    location: 'Barcelona I.',
    mortgage: '807.57€/month',
    description: `
      REDORS GROUP offers an exclusive FOR SALE elegant large 5-room apartment on Vincent Holmsik Street in the Condominium Renaissance residential complex.
      Thanks to its unique location, the property has access to a large Japanese garden with an area of 35 m2, which can be accessed directly from the bedroom. The front of the apartment is at the height of the third floor, so the terrace is located just above the treetops, which gives the apartment a unique atmosphere. Overall, the apartment has a direct view of the Danube River and the surrounding forests.
      The apartment offers extraordinary comfort, has a first-class interior from the leading architectural office Culay Makaro and equipment from renowned world furniture manufacturers. The overall atmosphere of the apartment is completed.`,
    characteristics: {
      numberOfRooms: 5,
      apartmentArea: '223.92 m²',
      terraceArea: '27.09 m²',
      balconyArea: '6.63 m²',
      japaneseGardenArea: '35 m²',
      layoutSolution: `
        Kitchen, living room, study, 4 bedrooms, 2 bathrooms, wardrobe, fireplace
        two garage parking spaces in the underground garage.`,
      execution: `
        The apartment has intelligent control via a mobile application. Premium
        materials: microcement tiles, cast concrete - are found in many
        places in the living space.
        The kitchen of the LEICHT brand with SIEMENS appliances has been "made
        to measure, bathrooms and toilets are equipped with sanitary ware from
        the manufacturers DURAVIT and HANSGROHE. In the master
        bathroom you will find the application of the AXOR MASSAUD brand, the
        master bedroom is dominated by the "RUF BETTEN bed. The living room is
        equipped with KOBE BENZ brand products.`,
      location: `
        The property is located above Devinska cesta, there is an excellent
        civic infrastructure. The nearby housing estate provides complete civic
        amenities, including sports cafes, restaurants, schools, kindergartens and
        shops.`,
      opinion: `
        This beautiful apartment offers an incredible atmosphere. The above-
        standard equipment meets the needs of a family house, which is further
        enhanced by the peacefulness of the nearby Danube River and the forests in its basin. The individual interior elements are tastefully and mainly timelessly, from our
        point of view, the advantages of this apartment are the unique location,
        smart control and high standards of all used equipment and accessories
        designed to provide its owners with a new and luxurious
        standard of living.`,
      briefCharacteristics: {
        city: 'Barcelona I.',
        street: 'Vincent ots Cjarne',
        garages: '2 cars',
        type: '5 rooms',
        numberOfRooms: 6,
        usableArea: '234 m²',
        totalArea: '267 m²',
        insulatedObject: 'Yes',
        balcony: 'Yes',
        terrace: 'Yes',
        numberOfBathrooms: 2,
      },
      contact: {
        name: 'Haylie Donin',
        phone: '+4 555 781 731',
        email: 'haylie.donin@realestrate.es',
        profileImage: 'https://via.placeholder.com/100',
      },
    }
  };

  return (
    <div className="anal">
      <div className="property-detail ">
        <div className="main-image">
          <h3 className='mb-3'>{property.title}</h3>

          <img src={analytic} alt={property.title} />
          <button className="delete-button">🗑️</button>
        </div>
        <div className="image-gallery">
          <button className="prev-button">◀</button>
          {property.images.map((image, index) => (
            <img key={index} src={analytic} alt={`Gallery ${index}`} />
          ))}
          <button className="next-button">▶</button>
        </div>
        <div className="property-info">
          <div>
            {" "}
            <p>{property.type}</p>
          </div>
          <div>
            <p>{property.area}</p>
          </div>
          <div>
            {" "}
            <p>{property.location}</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-7">
            <div className="mortgage">
              <p className="m-0 fw-bold">
                Mortgage since:
                <br /> {property.mortgage}
              </p>
              <button className="book-button">Book Now</button>
            </div>
            <div className="description bgColored">
              <p>{property.description}</p>
            </div>
            <div className="basic-characteristics">
              <h2>Basic characteristics:</h2>
              <p>
                Number of rooms:{" "}
                <span className="bgColored py-1">
                  {property.characteristics.numberOfRooms}
                </span>{" "}
              </p>
              <p>
                Apartment area:
                <span className="bgColored py-1">
                  {" "}
                  {property.characteristics.apartmentArea}
                </span>
              </p>
              <p>
                Terrace area:{" "}
                <span className="bgColored py-1">
                  {property.characteristics.terraceArea}
                </span>
              </p>
              <p>
                Balcony area:{" "}
                <span className="bgColored py-1">
                  {property.characteristics.balconyArea}
                </span>
              </p>
              <p>
                Area of the Japanese garden:{" "}
                <span className="bgColored py-1">
                  {property.characteristics.japaneseGardenArea}
                </span>
              </p>
            </div>
            <div className="layout-solution">
              <h2>Layout solution:</h2>
              <div className="bgColored">
                {" "}
                <p>{property.characteristics.layoutSolution}</p>
              </div>
            </div>
            <div className="execution">
              <h2>Execution and furnishing of the apartment:</h2>
              <div className="bgColored">
                {" "}
                <p>{property.characteristics.execution}</p>
              </div>
            </div>
            <div className="location">
              <h2>Location:</h2>
              <div className="bgColored">
                {" "}
                <p>{property.characteristics.location}</p>
              </div>
            </div>
            <div className="opinion">
              <h2>Fedors group opinion:</h2>
              <div className="bgColored">
                {" "}
                <p>{property.characteristics.opinion}</p>
              </div>
            </div>
          </div>
          <div className="col-md-5">
            <div className="contact-info">
              <img src={analytic} alt="Profile" />
              <h5 className="mt-3">{property.characteristics.contact.name}</h5>
              <p>{property.characteristics.contact.phone}</p>
              <p>{property.characteristics.contact.email}</p>
              <button>View on site</button>
            </div>
            <div className="brief-characteristics">
              <h2>Brief characteristics</h2>
              <p>
                City:{" "}
                <span className="bgColored py-0">
                  {" "}
                  {property.characteristics.briefCharacteristics.city}
                </span>
              </p>
              <p>
                Street:{" "}
                <span className="bgColored py-0">
                  {" "}
                  {property.characteristics.briefCharacteristics.street}
                </span>
              </p>
              <p>
                Garages:{" "}
                <span className="bgColored py-0">
                  {" "}
                  {property.characteristics.briefCharacteristics.garages}
                </span>
              </p>
              <p>
                Type:{" "}
                <span className="bgColored py-0">
                  {" "}
                  {property.characteristics.briefCharacteristics.type}
                </span>
              </p>
              <p>
                Number of rooms:{" "}
                <span className="bgColored py-0">
                  {" "}
                  {property.characteristics.briefCharacteristics.numberOfRooms}
                </span>
              </p>
              <p>
                Usable area:{" "}
                <span className="bgColored py-0">
                  {" "}
                  {property.characteristics.briefCharacteristics.usableArea}
                </span>
              </p>
              <p>
                Total area:{" "}
                <span className="bgColored py-0">
                  {" "}
                  {property.characteristics.briefCharacteristics.totalArea}
                </span>
              </p>
              <p>
                Insulated object:{" "}
                <span className="bgColored py-0">
                  {" "}
                  {
                    property.characteristics.briefCharacteristics
                      .insulatedObject
                  }
                </span>
              </p>
              <p>
                Balcony:{" "}
                <span className="bgColored py-0">
                  {property.characteristics.briefCharacteristics.balcony}
                </span>
              </p>
              <p>
                Terrace:{" "}
                <span className="bgColored py-0">
                  {" "}
                  {property.characteristics.briefCharacteristics.terrace}
                </span>
              </p>
              <p>
                Number of bathrooms:{" "}
                <span className="bgColored py-0">
                  {
                    property.characteristics.briefCharacteristics
                      .numberOfBathrooms
                  }
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;
