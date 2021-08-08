import React, { useState, useEffect, useCallback } from 'react';

const Users = () => {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
  
    const fetchUser = useCallback(async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch('https://compare-demo-api-default-rtdb.firebaseio.com/users.json');
        if (!response.ok) {
          throw new Error('Something went wrong!');
        }
  
        const data = await response.json();
  
        const loadedUsers = [];
  
        for (const key in data) {
          loadedUsers.push({
              username: data[key].username,
              mobileNumber: data[key].mobileNumber,
              email: data[key].email,
              password: data[key].password,
          });
        }
  
        setUsers(loadedUsers);
      } catch (error) {
        setError(error.message);
      }
      setIsLoading(false);
    }, []);

    useEffect(() => {
        fetchUser();
      }, [fetchUser]);

  return (
    <React.Fragment>
      <div className="container">
        <h3>These are the following users who logged in our website.</h3>
        <button onClick={fetchUser}>Fetch User</button>
      </div>
      <div className='container'>
          {error && <p> {error} </p>}
          {isLoading && <p>Loading... </p>}
          {users.length === 0 && <p>No user Found</p>}
          {users.map(user => (
              <ul key={user.username} >
                  <li>{user.username}</li>
                  <li>{user.mobileNumber}</li>
                  <li>{user.email}</li>
              </ul>
          ))}
      </div>
    </React.Fragment>
  );
};
export default Users;
