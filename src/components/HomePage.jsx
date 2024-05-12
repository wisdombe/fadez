// HomePage.js

import React from "react";
import { NavLink } from "react-router-dom";
import barber1Image from "./images/barber1.jpg";
import barber2Image from "./images/barber2.webp";
import barber3Image from "./images/barber3.webp";
import "./HomePage.css"; // Import CSS file for HomePage styling
import Sidebar from "./Sidebar";

const HomePage = ({ selectedBarberShop, setSelectedBarberShop }) => {
  const popularBarberShops = [
    {
      name: "Sharp Cuts",
      address: "123 Main St, City, State",
      rating: 4.5,
      image: barber1Image,
      services: [
        { name: "Haircut", price: 20 },
        { name: "Shave", price: 15 },
        { name: "Beard Trim", price: 10 },
      ],
    },
    {
      name: "Style Master",
      address: "456 Elm St, City, State",
      rating: 4.2,
      image: barber2Image,
      services: [
        { name: "Haircut", price: 20 },
        { name: "Shave", price: 15 },
        { name: "Beard Trim", price: 10 },
      ],
    },
    {
      name: "Classic Cuts",
      address: "789 Oak St, City, State",
      rating: 4.0,
      image: barber3Image,
      services: [
        { name: "Haircut", price: 20 },
        { name: "Shave", price: 15 },
        { name: "Beard Trim", price: 10 },
      ],
    },
  ];

  const handleSelectBarberShop = (barberShop) => {
    setSelectedBarberShop(barberShop);
    localStorage.setItem("selectedBarberShop", JSON.stringify(barberShop));
  };

  return (
    <div className="homepage">
      <div className="sidebar-container">
        <Sidebar />
      </div>
      <div className="content">
        <div className="container">
          <h1 className="text-3xl font-bold mb-4">
            Popular Barber Shops Near You
          </h1>
          {popularBarberShops.length > 0 ? (
            <div className="grid">
              {popularBarberShops.map((barberShop) => (
                <div key={barberShop.name} className="barber-shop-card">
                  <img src={barberShop.image} alt={barberShop.name} />
                  <h2>{barberShop.name}</h2>
                  <p>{barberShop.address}</p>
                  <div className="rating">
                    {barberShop.rating} ★ ({barberShop.rating} reviews)
                  </div>
                  <NavLink
                    to={`/book/${encodeURIComponent(barberShop.name)}`}
                    className="book-session-button"
                    onClick={() => handleSelectBarberShop(barberShop)}
                  >
                    Book a Session
                  </NavLink>
                </div>
              ))}
            </div>
          ) : (
            <p>No popular barber shops available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
