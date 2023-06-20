import React from 'react';
import Navbar from '../src/Components/Navbar';
import UserGrid from '../src/Components/UserGrid';
import '../src/App.css'

const App = () => {
  const getUsers = () => {
    // Function to handle the button click and fetch users
    console.log('Fetching users...');
    // Call the API or perform any necessary actions
  };

  return (
    <div className="App">
      <Navbar getUsers={getUsers} />
      <UserGrid />
    </div>
  );
};

export default App;
