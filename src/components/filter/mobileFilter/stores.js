import React, { useState } from "react";

const fstore = [
  { id: "1", store: "Amazon" },
  { id: "2", store: "Flipkart" },
  { id: "3", store: "Tatacliq" },
  { id: "4", store: "Shopclues" },
  { id: "5", store: "RelianceDigital" },
  { id: "6", store: "Snapdeal" },
];

const Stores = (props) => {
  const [stores, setStores] = useState({
    Amazon: false,
    Flipkart: false,
    Tatacliq: false,
    Shopclues: false,
    RelianceDigital: false,
    Snapdeal: false,
  });
  const checkClick = (event) => {
    let { value, checked } = event.target;
    setStores({ ...stores, [value]: checked });
  };
  const applyFilter = () => {
    props.filterByStores(stores);
  };
  return (
    <React.Fragment>
      {fstore.map((store) => (
        <div className="form-check" key={store.id}>
          <input
            value={store.store}
            onInput={checkClick}
            className="form-check-input"
            type="checkbox"
            name="flexRadioDefault"
            id="flexRadioDefault1"
          />
          <label className="form-check-label" htmlFor="flexRadioDefault1">
            {store.store}
          </label>
        </div>
      ))}
      <button
        className="btn btn-secondary mt-2"
        data-bs-toggle="collapse"
        data-bs-target="#collapseNine"
        aria-controls="collapseNine"
        onClick={applyFilter}
      >
        Apply Stores
      </button>
    </React.Fragment>
  );
};
export default Stores;
