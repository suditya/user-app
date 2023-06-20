import React from 'react';
import '../styles/Navbar.css'
const Navbar = ({ getUsers }) => {
  return (
    <nav>
      <div className="brand">AirData</div>
      <button onClick={getUsers}>Get users</button>
    </nav>
  );
};

export default Navbar;
