import React from "react";

let url = "";

const fBrand = [
    {id: '1', brand: 'Under 7 inches'},
    {id: '2', brand: '7 - 8.7 inches'},
    {id: '3', brand: '8.7 - 10.2 MP'},
    {id: '4', brand: '10.2 - 12 inches'},
    {id: '4', brand: 'Over 12 inches'},
]
const ScreenSize = () => {
  return (
    <React.Fragment>
      <br />
      <p>
        <b>Screen Size</b>
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
      <a href={url}>See more</a>
    </React.Fragment>
  );
};
export default ScreenSize;