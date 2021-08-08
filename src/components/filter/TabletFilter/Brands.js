import React from "react";

const fBrand = [
    {id: '1', brand: 'Samsung'},
    {id: '2', brand: 'Lenovo'},
    {id: '3', brand: 'Apple'},
    {id: '4', brand: 'Dell'},
    {id: '5', brand: 'i ball'},
]
let url = "";

const Brands = () => {
  return (
    <React.Fragment>
      <p>
        <b>Brands</b>
      </p>
      {fBrand.map((range) => (
        <div className="form-check" key={range.id}>
          <input
            className="form-check-input"
            type="checkbox"
            name="flexRadioDefault"
            id="flexRadioDefault1"
          />
          <label className="form-check-label" htmlFor="flexRadioDefault1">
            {range.brand}
          </label>
        </div>
      ))}<a href={url}>See more</a><br/>
    </React.Fragment>
  );
};
export default Brands;