import React, { useState } from "react";
import HomePage from "./components/HomePage";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Tools from "./components/services/Tools";
import Learn from "./components/services/Learn";
import Register from "./components/services/Register";
import Confirmation from "./components/Confirmation";

function App() {
  // State to manage selected barberShop data
  const [selectedBarberShop, setSelectedBarberShop] = useState(null);

  return (
    <>
      <div>
        <div className="sticky top-0 z-10">
          <NavBar />
        </div>

        <Routes>
          {/* Pass selectedBarberShop to HomePage */}
          <Route
            path="/"
            element={
              <HomePage
                selectedBarberShop={selectedBarberShop}
                setSelectedBarberShop={setSelectedBarberShop}
              />
            }
          />

          <Route path="/Tools" element={<Tools />} />
          <Route path="/Learn" element={<Learn />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/confirmation" element={<Confirmation />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
