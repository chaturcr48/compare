<<<<<<< HEAD
import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
// import { Link } from "react-router-dom/cjs/react-router-dom.min";
import './laptopfilter.css'
=======
// import React, {} from "react";
import React, { useState } from "react";
>>>>>>> ad29baea555bc7ff7c9d81ca2ab9ff6aa1fd516b


const fBrand = [
  { id: "1", brand: "HP" },
  { id: "2", brand: "Dell" },
  { id: "3", brand: "Lenovo" },
  { id: "4", brand: "Apple" },
  { id: "5", brand: "MSI" },
  { id: "6", brand: "Accer" },
];
<<<<<<< HEAD
const FilterBrand = ({ filterBrand, setFilterBrand }) => {
=======
const FilterBrand = (props) => {
  const [brand, setBrand] = useState("");
  const brandHandler = (event) => {
    setBrand(event.target.value);
    console.log(event.target.value);
    props.filterByBrand(brand);
  };
>>>>>>> ad29baea555bc7ff7c9d81ca2ab9ff6aa1fd516b
  return (
    <React.Fragment>
      <br />
      <p>
        <b>Brand</b>
      </p>
      {fBrand.map((brand) => (
        <div className="form-check" key={brand.id}>
          <input
            value={brand.brand}
            onInput={brandHandler}
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
<<<<<<< HEAD
      <div className="dropdown mt-2 fs-6">
        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
          See More
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <li><Link
           className="dropdown-item" href="#">ASUS</Link></li>
          <li><Link className="dropdown-item" href="#">Apple</Link></li>
          <li><Link className="dropdown-item" href="#">Microsoft</Link></li>
        </ul>
      </div>
=======

      <a href={url}>See more</a> <br />
>>>>>>> ad29baea555bc7ff7c9d81ca2ab9ff6aa1fd516b
    </React.Fragment>
  );
};
export default FilterBrand;