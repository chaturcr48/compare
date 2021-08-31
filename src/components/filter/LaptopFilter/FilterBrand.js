import "./laptopfilter.css";
import React, { useState } from "react";

const fBrand = [
  { id: "1", brand: "HP" },
  { id: "2", brand: "Dell" },
  { id: "3", brand: "Lenovo" },
  { id: "4", brand: "Apple" },
  { id: "5", brand: "MSI" },
  { id: "6", brand: "Acer" },
];
const FilterBrand = (props) => {
  const [brand, setBrand] = useState({
    Acer: false,
    Apple: false,
    Dell: false,
    HP: false,
    Lenovo: false,
    MSI: false,
  });
  const checkClick = (event) => {
    let { value, checked } = event.target;
    setBrand({ ...brand, [value]: checked });
  };
  const applyFilter = () => {
    props.filterByBrand(brand);
  };
  
  return (
    <React.Fragment>
      {fBrand.map((brand) => (
        <div className="form-check" key={brand.id}>
          <input
            value={brand.brand}
            onInput={checkClick}
            className="form-check-input"
            type="checkbox"
            name="flexRadioDefault"
            id="flexRadioDefault1"
          />
          <label className="form-check-label" htmlFor="flexRadioDefault1">
            {brand.brand}
          </label>
        </div>
      ))}
      <button
        className="btn btn-secondary mt-2"
        data-bs-toggle="collapse"
        data-bs-target="#collapseOne"
        aria-controls="collapseOne"
        onClick={applyFilter}
      >
        Apply Brand
      </button>
    </React.Fragment>
  );
};
export default FilterBrand;
