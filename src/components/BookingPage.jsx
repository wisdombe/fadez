import React, { useState, useEffect } from "react";
import "./BookingPage.css";

const BookingPage = ({ selectedBarberShop, setSelectedBarberShop }) => {
  const [barberShop, setBarberShop] = useState(null);
  const [bookingDetails, setBookingDetails] = useState({
    date: "",
    time: "",
    customerName: "",
    phoneNumber: "",
    selectedServices: [],
  });

  const fetchData = async (barberShopId) => {
    try {
      const response = await fetch(`api/barber-shops/${barberShopId}`);
      if (!response.ok) {
        throw new Error("Failed to fetch barber shop data");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching barber shop data:", error);
      throw error; // Rethrow error to handle it in useEffect
    }
  };

  useEffect(() => {
    // Retrieve selected barber shop data from localStorage
    const storedBarberShop = localStorage.getItem("selectedBarberShop");
    if (storedBarberShop) {
      setSelectedBarberShop(JSON.parse(storedBarberShop));
    }
  }, []); // Empty dependency array to run once on component mount

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBookingDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleServiceSelection = (serviceName, isChecked) => {
    setBookingDetails((prevDetails) => {
      if (isChecked) {
        return {
          ...prevDetails,
          selectedServices: [...prevDetails.selectedServices, serviceName],
        };
      } else {
        return {
          ...prevDetails,
          selectedServices: prevDetails.selectedServices.filter(
            (service) => service !== serviceName
          ),
        };
      }
    });
  };

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    console.log("Booking Details:", bookingDetails);
    setBookingDetails({
      date: "",
      time: "",
      customerName: "",
      phoneNumber: "",
      selectedServices: [],
    });
  };

  if (!selectedBarberShop) {
    return (
      <div className="container mx-auto p-4">
        <p className="text-red-600">
          Barber shop information not found. Please go back and select a valid
          barber shop.
        </p>
      </div>
    );
  }

  return (
    <div className=" container  my-6 mx-auto p-4 booking-form-container">
      <h1 className="text-3xl font-bold mb-4">
        Book an Appointment at {selectedBarberShop.name}
      </h1>
      <div className="rounded-lg shadow-md p-4">
        <img
          src={selectedBarberShop.image}
          alt={selectedBarberShop.name}
          className="w-full h-40 object-cover rounded-md mb-2"
        />
        <p className="text-lg font-semibold mb-2">{selectedBarberShop.name}</p>
        <p className="text-sm mb-2">{selectedBarberShop.address}</p>
        <div className="flex items-center mb-4">
          <span className="text-yellow-500 font-semibold">
            {selectedBarberShop.rating} ★
          </span>
          <span className="ml-2">{selectedBarberShop.rating} reviews</span>
        </div>
        <p className="font-semibold mb-2">Services Offered:</p>
        {selectedBarberShop.services.map((service, index) => (
          <div key={index} className="mb-2">
            <label className="text-white">
              <input
                type="checkbox"
                value={service.name}
                checked={bookingDetails.selectedServices.includes(service.name)}
                onChange={(e) =>
                  handleServiceSelection(service.name, e.target.checked)
                }
              />{" "}
              {service.name} - ${service.price}
            </label>
          </div>
        ))}
        <form onSubmit={handleBookingSubmit}>
          <label htmlFor="date">Date:</label>
          <input
            type="date"
            id="date"
            name="date"
            value={bookingDetails.date}
            onChange={handleInputChange}
            required
          />

          <label htmlFor="time">Time:</label>
          <input
            type="time"
            id="time"
            name="time"
            value={bookingDetails.time}
            onChange={handleInputChange}
            required
          />

          <label htmlFor="customerName">Your Name:</label>
          <input
            type="text"
            id="customerName"
            name="customerName"
            value={bookingDetails.customerName}
            onChange={handleInputChange}
            required
          />

          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={bookingDetails.phoneNumber}
            onChange={handleInputChange}
            required
          />

          <button type="submit" className="btn-book">
            Book Appointment
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookingPage;
