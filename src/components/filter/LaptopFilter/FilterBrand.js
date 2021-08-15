// import React, {} from "react";
import React, { useState } from "react";

let url = "";

const fBrand = [
  { id: "1", brand: "HP" },
  { id: "2", brand: "Dell" },
  { id: "3", brand: "Lenovo" },
  { id: "4", brand: "Apple" },
  { id: "5", brand: "MSI" },
  { id: "6", brand: "Accer" },
];
const FilterBrand = (props) => {
  const [brand, setBrand] = useState("");
  const brandHandler = (event) => {
    setBrand(event.target.value);
    console.log(event.target.value);
    props.filterByBrand(brand);
  };
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

      <a href={url}>See more</a> <br />
    </React.Fragment>
  );
};
export default FilterBrand;
