import React, { useState } from "react";
import "./bookings.css";
import { useNavigate } from "react-router-dom";

const BookingSection = ({ selectedBarberShop }) => {
  const [selectedServices, setSelectedServices] = useState("");
  const [appointmentTime, setAppointmentTime] = useState("");
  const [appointmentDate, setAppointmentDate] = useState("");
  const [selectedArtisan, setSelectedArtisan] = useState("");
  const navigate = useNavigate();

  console.log(selectedBarberShop);

  const handleSelectedServices = (e) => {
    setSelectedServices(e.target.value);
  };

  const handleSelectedArtisan = (e) => {
    setSelectedArtisan(e.target.value);
  };

  const handleAppointmentTime = (e) => {
    setAppointmentTime(e.target.value);
  };

  const handleAppointmentDate = (e) => {
    setAppointmentDate(e.target.value);
  };

  const selectedShop = selectedBarberShop || {
    name: "Sharp Cuts",
    address: "123 Main St, City, State",
    rating: 4.5,
    services: [
      { name: "Haircut", price: 20 },
      { name: "Shave", price: 15 },
      { name: "Beard Trim", price: 10 },
    ],
    artisans: ["John Doe", "Jane Smith"],
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const bookingDetails = {
      selectedBarberShop: selectedShop,
      selectedArtisan,
      selectedServices,
      appointmentDate,
      appointmentTime,
    };
    localStorage.setItem("bookingDetails", JSON.stringify(bookingDetails));
    navigate("/confirmation");
  };

  return (
    <div className="position-div" id="booking-modal-content">
      <div className="bookings">
        <h1>fill in your details</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>time of appointment</label>
            <input
              type="time"
              name="time"
              value={appointmentTime}
              onChange={handleAppointmentTime}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="artisan">artisans avialiable</label>
            <select
              name="artisans"
              id="artisans"
              value={selectedArtisan}
              onChange={handleSelectedArtisan}
            >
              <option value="">select an artisan </option>

              {selectedShop.artisans.map((artisan) => {
                return (
                  <option key={artisan} value={artisan} required>
                    {artisan}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="services">services we render</label>
            <select
              name="services"
              id="services"
              value={selectedServices}
              onChange={handleSelectedServices}
            >
              <option> what service would you like</option>
              {selectedShop.services.map((service) => {
                return (
                  <option key={service.name} value={service.name} required>
                    {service.name}-{service.price}
                  </option>
                );
              })}
            </select>
          </div>

          <div className="form-group">
            <label>time of appointment</label>
            <input
              type="Date"
              name="date"
              value={appointmentDate}
              onChange={handleAppointmentDate}
              required
            />
          </div>
          <div className="service-link-container">
            <button className="service-card-link" type="submit">
              create service card
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookingSection;
