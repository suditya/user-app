import React from 'react';
import '../styles/Navbar.css';

import axios from 'axios';


const Navbar = ({  setUsers, setShow }) => {
  const getUsers = async () => {
    try {
      const response = await axios.get('https://reqres.in/api/users?page=1');
      setUsers(response.data.data);
      setTimeout(() => {
        setShow(true);
      }, 900);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };
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
