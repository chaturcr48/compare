import React from "react";

const fPrice = [
  { id: "1", pRange: "Up to 30,000 " },
  { id: "2", pRange: "30,000 to 50,000" },
  { id: "3", pRange: "50,000 to 65,000" },
  { id: "4", pRange: "65,000 to 80,000" },
  { id: "5", pRange: "Above 80,000" },
];

const FilterPrice = () => {
  return (
    <React.Fragment>
      <p>
        <b>Price</b>
      </p>
      {fPrice.map((range) => (
        <div className="form-check" key={range.id}>
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault1"
          />
          <label className="form-check-label" htmlFor="flexRadioDefault1">
            {range.pRange}
          </label>
        </div>
      ))}
    </React.Fragment>
  );
};
export default FilterPrice;