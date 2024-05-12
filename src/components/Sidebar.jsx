import React from "react";
import { FaUserPlus, FaBook, FaShoppingCart } from "react-icons/fa";
import "./Sidebar.css"; // Import CSS file for Sidebar styling
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-item">
        <FaUserPlus className="sidebar-icon" />
        <NavLink to="Register">Register</NavLink>
      </div>
      <div className="sidebar-item">
        <FaBook className="sidebar-icon" />
        <NavLink to="/Learn">Learn a Skill</NavLink>
      </div>
      <div className="sidebar-item">
        <FaShoppingCart className="sidebar-icon" />
        <NavLink to="/Tools">Barbing Tools Purchase</NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
