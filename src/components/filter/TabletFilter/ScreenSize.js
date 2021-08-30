import React from "react";

const fBrand = [
    {id: '1', brand: 'Under 7 inches'},
    {id: '2', brand: '7 - 8.7 inches'},
    {id: '3', brand: '8.7 - 10.2 MP'},
    {id: '4', brand: '10.2 - 12 inches'},
    {id: '5', brand: 'Over 12 inches'},
]
const ScreenSize = () => {
  return (
    <React.Fragment>
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
      <button
        className="btn btn-secondary mt-2"
        data-bs-toggle="collapse"
        data-bs-target="#collapseEleven"
        aria-controls="collapseEleven"
      >
        Apply Size
      </button>
    </React.Fragment>
  );
};
export default ScreenSize;