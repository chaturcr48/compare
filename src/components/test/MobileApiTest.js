import React, { useState, useEffect } from "react";

const MobileApiTest = () => {
  const [MobileData, setMobileData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://synkrino-e13d6-default-rtdb.firebaseio.com/test.json")
      .then((response) => {
        if (response.ok) return response.json();
        throw new Error("something went wrong while requesting posts");
      })
      .then((data) => setMobileData(data))
      .catch((error) => setError(error.message));
  }, []);
  console.log(typeof MobileData);
  if (error) {
    return <h2>Error</h2>;
  } else {
    return (
      <React.Fragment>
        <div className="container">
          <li>
            {/* {MobileData[10].id} {MobileData[10].Brand} */}
          </li>
        </div>
        <div className="container">
          {MobileData.map((item) => (
            <ul key={item.id}>
              <li>{item.id}</li>
              <li>{item.Brand}</li>
            </ul>
          ))}
        </div>
      </React.Fragment>
    );
  }
};
export default MobileApiTest;
