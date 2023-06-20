import React from 'react';
import Navbar from '../src/Components/Navbar';
import UserGrid from '../src/Components/UserGrid';
import '../src/App.css'
import { useState } from 'react';
import imageProcessing from './images/image_processing.gif'



const App = () => {
  const [show, setShow] = useState(false);
  const [users, setUsers] = useState([]);

  return (
    <div className="App">
      <Navbar setShow={setShow} setUsers={setUsers} />
      {show == false ? (
        <div className="msg">
          <h2>Click the "Get Users" button in the navbar to fetch user details</h2>
        </div>

      ) : (
        <UserGrid users={users} />
      )}

    </div>
  );
};

export default App;
