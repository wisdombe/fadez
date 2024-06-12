// HomePage.js

import React, { useEffect } from "react";
import barber1Image from "./images/barber1.jpg";
import barber2Image from "./images/barber2.webp";
import barber3Image from "./images/barber3.webp";
import "./HomePage.css"; // Import CSS file for HomePage styling
import Sidebar from "./Sidebar";
import BookingSection from "./BookingSection";

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
      artisans: ["daniel", "samuel", "samson", "blessing"],
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
      artisans: ["joshua", "victor", "grace", "wilson"],
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
      artisans: ["kunle", "john", "biodun", "steven", "temi"],
    },
  ];

  const handleSelectBarberShop = (barberShop) => {
    setSelectedBarberShop(barberShop);
    openModal();
  };

  const book = document.getElementById("book");
  const bookingmodal = document.getElementById("booking-modal");

  const openModal = () => {
    const bookingmodal = document.getElementById("booking-modal");
    if (bookingmodal) {
      bookingmodal.style.display = "block";
    }
  };

  const closeModal = (e) => {
    const bookingmodal = document.getElementById("booking-modal");
    if (bookingmodal && e.target === bookingmodal) {
      bookingmodal.style.display = "none";
    }
  };

  useEffect(() => {
    const buttons = document.querySelectorAll(".book-session-button");
    buttons.forEach((button) => {
      button.addEventListener("click", openModal);

      const bookingmodal = document.getElementById("booking-modal");
      bookingmodal.addEventListener("click", closeModal);

      return () => {
        button.forEach((button) => {
          button.removeEventListener("click", openModal);
        });
        bookingmodal.removeEventListener("click", closeModal);
      };
    });
  }, []);
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
                  <div className="image-container">
                  <img src={barberShop.image} alt={barberShop.name} />
                  </div>
         
                  <h2>{barberShop.name}</h2>
                  <p>{barberShop.address}</p>
                  <div className="rating">
                    {barberShop.rating} ★ ({barberShop.rating} reviews)
                  </div>
                  <button
                    className="book-session-button"
                    id="book"
                    onClick={() => handleSelectBarberShop(barberShop)}
                  >
                    Book a Session
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <p>No popular barber shops available.</p>
          )}
        </div>
      </div>
      <div className="bookings-container" id="booking-modal">
        <BookingSection selectedBarberShop={selectedBarberShop} />
      </div>
    </div>
  );
};

export default HomePage;
