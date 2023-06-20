import React, { useState , useEffect} from 'react';
import '../styles/UserGrid.css';
import imageProcessing from '../images/image_processing.gif'


const UserGrid = ({ users }) => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 900)
  }, [])

  return (
    <>
      {!show ? (<div className="loader">
        <img src={imageProcessing} alt='loader' />
      </div>) : <div className="user-grid">
        <div className="grid-container">
          {users.map((user) => (
            <div key={user.id} className="user-card">
              <img src={user.avatar} alt={user.first_name} />
              <h3>{`${user.first_name} ${user.last_name}`}</h3>
              <p>{user.email}</p>
            </div>
          ))}
        </div>
      </div>}

    </>
  );
};

export default UserGrid;

