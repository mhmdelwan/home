import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import './Profile.css'


const UserProfileForm = () => {
  const [formData, setFormData] = useState({
    firstName: 'Mehrab',
    lastName: 'Bozorgi',
    userName: 'Hayli Donin',
    phoneNumber: '58077.79',
    country: 'Mehrab',
    state: 'Bozorgi',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = () => {
    // Handle save action
    console.log('Saved data:', formData);
  };

  const handleCancel = () => {
    // Handle cancel action
    console.log('Cancelled');
  };

  const handleDelete = () => {
    // Handle delete action
    console.log('Deleted user');
  };

  return (
    <div className="addUser">
      <Navbar />
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          padding: "20px",
          fontFamily: "Arial, sans-serif",
        }}
      >
         
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h2>Edit Chloe_AE</h2>
          <button
            onClick={handleDelete}
            style={{
              backgroundColor: "#FF5C5C",
              color: "#fff",
              border: "none",
              padding: "10px 20px",
              cursor: "pointer",
            }}
          >
            Delete Chloe_AE
          </button>
        </div>

        <form>
          <div className="d-flex">
            <div>
              <div style={{ marginBottom: "20px" }}>
                <label>First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  style={{
                    width: "100%",
                    padding: "10px",
                    boxSizing: "border-box",
                  }}
                />
              </div>
              <div style={{ marginBottom: "20px" }}>
                <label>Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  style={{
                    width: "100%",
                    padding: "10px",
                    boxSizing: "border-box",
                  }}
                />
              </div>
            </div>
            <div style={{ textAlign: "center", marginBottom: "20px" }}>
              <img
              className='imag1'
                src="https://via.placeholder.com/100"
                alt="User Avatar"
                style={{ borderRadius: "50%" }}
              />
            </div>
          </div>
          <div style={{ marginBottom: "20px" }}>
            <label>User Name</label>
            <input
              type="text"
              name="userName"
              value={formData.userName}
              onChange={handleChange}
              style={{
                width: "100%",
                padding: "10px",
                boxSizing: "border-box",
              }}
            />
          </div>
          <div style={{ marginBottom: "20px" }}>
            <label>Phone Number</label>
            <input
              type="text"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              style={{
                width: "100%",
                padding: "10px",
                boxSizing: "border-box",
              }}
            />
          </div>
          <div
            style={{
              marginBottom: "20px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div style={{ width: "48%" }}>
              <label>Country</label>
              <select
                name="country"
                value={formData.country}
                onChange={handleChange}
                style={{
                  width: "100%",
                  padding: "10px",
                  boxSizing: "border-box",
                }}
              >
                <option value="Mehrab">Mehrab</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div style={{ width: "48%" }}>
              <label>State</label>
              <select
                name="state"
                value={formData.state}
                onChange={handleChange}
                style={{
                  width: "100%",
                  padding: "10px",
                  boxSizing: "border-box",
                }}
              >
                <option value="Bozorgi">Bozorgi</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <button
              type="button"
              onClick={handleSave}
              style={{
                backgroundColor: "#6A74F7",
                color: "#fff",
                border: "none",
                padding: "10px 20px",
                cursor: "pointer",
              }}
            >
              Save
            </button>
            <button
              type="button"
              onClick={handleCancel}
              style={{
                backgroundColor: "#e0e0e0",
                border: "none",
                padding: "10px 20px",
                cursor: "pointer",
              }}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserProfileForm;
