import React, { useState } from 'react';
import "../styles/Homepage.css"

function Homepage() {
  const [location, setLocation] = useState('');
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);

  const handleSearch = () => {
    // Here you would handle the search logic, e.g.,
    // send a request to your backend API with the search parameters
    console.log('Search parameters:', {
      location,
      checkInDate,
      checkOutDate,
      adults,
      children,
    });
  };

  return (
    <div className="homepage">
      <div className="search-container">
        <h2 className="search-title">Find places to stay on Airbnb</h2>
        <p className="search-subtitle">
          Discover entire homes and rooms perfect for any trip.
        </p>

        <div className="search-form">
          <div className="form-group">
            <label htmlFor="location">LOCATION</label>
            <input
              type="text"
              id="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Anywhere"
            />
          </div>

          <div className="form-group">
            <label htmlFor="check-in">CHECK IN</label>
            <input
              type="date"
              id="check-in"
              value={checkInDate}
              onChange={(e) => setCheckInDate(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="check-out">CHECK OUT</label>
            <input
              type="date"
              id="check-out"
              value={checkOutDate}
              onChange={(e) => setCheckOutDate(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="adults">ADULTS</label>
            <select
              id="adults"
              value={adults}
              onChange={(e) => setAdults(parseInt(e.target.value, 10))}
            >
              {/* Add options for adult count */}
              {Array.from({ length: 10 }, (_, i) => i + 1).map((num) => (
                <option key={num} value={num}>
                  {num}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="children">CHILDREN</label>
            <select
              id="children"
              value={children}
              onChange={(e) => setChildren(parseInt(e.target.value, 10))}
            >
              {/* Add options for children count */}
              {Array.from({ length: 10 }, (_, i) => i).map((num) => (
                <option key={num} value={num}>
                  {num}
                </option>
              ))}
            </select>
          </div>

          <button className="search-button" onClick={handleSearch}>
            Search
          </button>
        </div>
      </div>

      <div className="hero-image">
        {/* You'll need to add your hero image here */}
        <img
          src="your-hero-image.jpg" // Replace with your image URL
          alt="Hero background"
        />
      </div>
    </div>
  );
}

export default Homepage;