import React from "react";

const fstore = [
  { id: "1", store: "Amazon" },
  { id: "2", store: "Flipkart" },
  { id: "3", store: "Tatacliq" },
  { id: "4", store: "Shopclues" },
  { id: "5", store: "Reliance digital" },
  { id: "6", store: "Snapdeal" },
];

const Stores = () => {
  return (
    <React.Fragment>
      {fstore.map((store1) => (
        <div className="form-check" key={store1.id}>
          <input
            className="form-check-input"
            type="checkbox"
            name="flexRadioDefault"
            id="flexRadioDefault1"
          />
          <label className="form-check-label" htmlFor="flexRadioDefault1">
            {store1.store}
          </label>
        </div>
      ))}
      <button
        className="btn btn-secondary mt-2"
        data-bs-toggle="collapse"
        data-bs-target="#collapseThirteen"
        aria-controls="collapseThirteen"
      >
        Apply Store
      </button>
    </React.Fragment>
  );
};
export default Stores;
