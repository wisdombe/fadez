import React, { useEffect, useState } from "react";
import "./bookings.css";
const Confirmation = () => {
  const [appointment, setApointment] = useState(true);

  const handleAppointment = () => {
    setApointment(false);
  };

  useEffect(() => {
    const cardPage = document.querySelector(".confirmation-page");
    const homeLink = document.querySelector(".home-link");
    if (cardPage) {
      cardPage.style.display = appointment ? "block" : "none";
    }
    if (homeLink) {
      homeLink.style.display = appointment ? "none" : "block";
    }
  }, [appointment]);

  const bookingDetails = JSON.parse(localStorage.getItem("bookingDetails"));
  if (!bookingDetails) {
    return <p>no booking details provided</p>;
  }
  return (
    <div>
      <p className="info-text">
        show this to the receptionist at whichever saloon you book a session at!{" "}
      </p>
      <div className="confirmation-page">
        <h2>confirmation card</h2>
        <p>
          {" "}
          <strong>shop name:</strong>
          {bookingDetails.selectedBarberShop.name}
        </p>

        <p>
          {" "}
          <strong>artisan:</strong>
          {bookingDetails.selectedArtisan}
        </p>
        <p>
          <strong>services:</strong>

          {bookingDetails.selectedServices}
        </p>

        <p>
          <strong>date:</strong>
          {bookingDetails.appointmentDate}
        </p>

        <p>
          <strong>time:</strong>
          {bookingDetails.appointmentTime}
        </p>
      </div>

      <div className="button-container">
        <span onClick={handleAppointment} className="cancel-button">
          cancel appointment
        </span>
      </div>
      <span className="Home-link">
        <a href="/" className="home-link">
          back to homepage
        </a>
      </span>
    </div>
  );
};

export default Confirmation;
