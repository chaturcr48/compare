import React from "react";

let url = "";

const fBrand = [
    {id: '1', brand: 'Samsung'},
    {id: '2', brand: 'Xiaomi'},
    {id: '3', brand: 'Vivo'},
    {id: '4', brand: 'Apple'},
    {id: '5', brand: 'Oppo'},
    {id: '6', brand: 'Nokia'},
]
<<<<<<< HEAD
=======

>>>>>>> c81d5da55dac19abe229beb07f2afdbf6726df43
const FilterBrand = () => {
  return (
    <React.Fragment>
      <br />
      <p>
        <b>Brand</b>
      </p>
      {fBrand.map((brand) => (
        <div className="form-check" key={brand.id}>
          <input
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
