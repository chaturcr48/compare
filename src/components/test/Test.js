import React, { useState, useEffect } from "react";

const Test = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    // fetch("https://compare-demo-api-default-rtdb.firebaseio.com/users")
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <React.Fragment>
        <div className="container">
          <ul className='my-4'>
            {items.map((item) => (
              <li className='border my-1 px-2 bg-info' key={item.id}>
                <div><strong> Id :</strong> {item.id}</div>
                <div><strong> Name :</strong> {item.name}</div>
                <div><strong> City :</strong> {item.address.city}</div>
                <div><strong> Zipcode :</strong> {item.address.zipcode}</div>
                <div><strong> Latitude :</strong> {item.address.geo.lat}</div>
                <div><strong> Longitude :</strong> {item.address.geo.lng}</div>
              </li>
            ))}
          </ul>
        </div>
      </React.Fragment>
    );
  }
};
export default Test;
