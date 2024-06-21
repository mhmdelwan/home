import React, { useState } from 'react';
import './Edit.css'
import Navbar from '../Navbar/Navbar';

const PropertyForm = () => {
  const [formData, setFormData] = useState({
    propertyName: '',
    squareFootage: '',
    description: '',
    homeType: '',
    beds: 3,
    baths: 3,
    facilities: [],
    address: '',
    apartment: '',
    marketValue: '',
    photos: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      facilities: checked
        ? [...prevData.facilities, name]
        : prevData.facilities.filter((facility) => facility !== name),
    }));
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setFormData({ ...formData, photos: files });
  };

  const handleUpload = () => {
    // Handle upload action
    console.log('Form data:', formData);
  };

  return (
    <div className='edit'>
    <Navbar />
    <div className='app' style={{ maxWidth: '800px', margin: '0 auto', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h2>Add Property</h2>
      <form>
        <div style={{ marginBottom: '20px' }}>
          <label>The name of your home listing</label>
          <input
            type="text"
            name="propertyName"
            value={formData.propertyName}
            onChange={handleChange}
            style={{ width: '100%', padding: '10px', boxSizing: 'border-box' }}
          />
        </div>
        <div style={{ marginBottom: '20px' }}>
          <label>Approximate square footage</label>
          <input
            type="text"
            name="squareFootage"
            value={formData.squareFootage}
            onChange={handleChange}
            style={{ width: '100%', padding: '10px', boxSizing: 'border-box' }}
          />
        </div>
        <div style={{ marginBottom: '20px' }}>
          <label>Describe your home</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            style={{ width: '100%', padding: '10px', boxSizing: 'border-box' }}
          />
        </div>
        <div style={{ marginBottom: '20px' }}>
          <label>Home type</label>
          <input
            type="text"
            name="homeType"
            value={formData.homeType}
            onChange={handleChange}
            style={{ width: '100%', padding: '10px', boxSizing: 'border-box' }}
          />
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
          <div>
            <label>Beds</label>
            <input
              type="number"
              name="beds"
              value={formData.beds}
              onChange={handleChange}
              style={{ width: '100%', padding: '10px', boxSizing: 'border-box' }}
            />
          </div>
          <div>
            <label>Baths</label>
            <input
              type="number"
              name="baths"
              value={formData.baths}
              onChange={handleChange}
              style={{ width: '100%', padding: '10px', boxSizing: 'border-box' }}
            />
          </div>
        </div>
        <h3>Facilities</h3>
        <div style={{ marginBottom: '20px' }}>
          {['Pet Allowed', 'Parking Lot', 'Gym', 'Kid\'s Friendly', 'Park', 'Home Theatre'].map((facility) => (
            <label key={facility} style={{ display: 'block' }}>
              <input
                type="checkbox"
                name={facility}
                checked={formData.facilities.includes(facility)}
                onChange={handleCheckboxChange}
              />
              {facility}
            </label>
          ))}
        </div>
        <h3>Location</h3>
        <div style={{ marginBottom: '20px' }}>
          <label>Where is your home?</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            style={{ width: '100%', padding: '10px', boxSizing: 'border-box' }}
          />
        </div>
        <div style={{ marginBottom: '20px' }}>
          <label>Apartment, unit, building, flat no. etc (optional)</label>
          <input
            type="text"
            name="apartment"
            value={formData.apartment}
            onChange={handleChange}
            style={{ width: '100%', padding: '10px', boxSizing: 'border-box' }}
          />
        </div>
        <h3>Pricing</h3>
        <div style={{ marginBottom: '20px' }}>
          <label>Let us know the fair market value today</label>
          <input
            type="text"
            name="marketValue"
            value={formData.marketValue}
            onChange={handleChange}
            style={{ width: '100%', padding: '10px', boxSizing: 'border-box' }}
          />
        </div>
        <h3>Photos</h3>
        <div style={{ marginBottom: '20px' }}>
          <label>Add a few photos</label>
          <input
            type="file"
            name="photos"
            multiple
            onChange={handleFileChange}
            style={{ display: 'block', padding: '10px', boxSizing: 'border-box' }}
          />
        </div>
        <button
          type="button"
          onClick={handleUpload}
          style={{ backgroundColor: '#6A74F7', color: '#fff', border: 'none', padding: '10px 20px', cursor: 'pointer' }}
        >
          Upload
        </button>
      </form>
    </div>
    </div>
  );
};

export default PropertyForm;
