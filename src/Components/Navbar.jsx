import React from 'react';
import '../styles/Navbar.css';

const Navbar = ({ getUsers }) => {
  return (
    <nav className="navbar">
      <div className="navbar__brand">AirData</div>
      <button className="navbar__button" onClick={getUsers}>
        Get Users
      </button>
    </nav>
  );
};

export default Navbar;
