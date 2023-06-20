import React, { useState, useEffect } from 'react';
import '../styles/UserGrid.css'
import imageProcessing from '../images/image_processing.gif'

const UserGrid = () => {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      try {
        const response = await fetch('https://reqres.in/api/users?page=1');
        const data = await response.json();
        setUsers(data.data);
        setTimeout(()=>
        {
          setLoading(false);
        },900)
        
        
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="user-grid">
      {loading ? (
        <div className="loader">
        
         <img src={imageProcessing} alt='loader'/>
         {/* <img src='../images/x.jpeg' alt='loaderX'/> */}
        </div>
      ) : (
        <div className="grid-container">
          {users.map((user) => (
            <div key={user.id} className="user-card">
              <img src={user.avatar} alt={user.first_name} />
              <h3>{`${user.first_name} ${user.last_name}`}</h3>
              <p>{user.email}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default UserGrid;

