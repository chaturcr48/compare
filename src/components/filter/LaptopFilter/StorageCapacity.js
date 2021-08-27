import React from "react";

const fBrand = [
  { id: "1", brand: "256 GB" },
  { id: "2", brand: "1 TB" },
  { id: "3", brand: "2 TB" },
];

const StorageCapacity = () => {
  return (
    <React.Fragment>
      {fBrand.map((brand1) => (
        <div className="form-check" key={brand1.id}>
          <input
            className="form-check-input"
            type="checkbox"
            name="flexRadioDefault"
            id="flexRadioDefault1"
          />
          <label className="form-check-label" htmlFor="flexRadioDefault1">
            {brand1.brand}
          </label>
        </div>
      ))}
      <button
        className="btn btn-secondary mt-2"
        data-bs-toggle="collapse"
        data-bs-target="#collapseFour"
        aria-controls="collapseFour"
      >
        Apply Storage
      </button>
    </React.Fragment>
  );
};
export default StorageCapacity;
