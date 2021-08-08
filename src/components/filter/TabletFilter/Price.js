import React from "react";

const fPrice = [
  { id: "1", pRange: "Up to 5,000" },
  { id: "2", pRange: "5,000 to 10,000" },
  { id: "3", pRange: "10,00 to 25,000" },
  { id: "4", pRange: "Above 25,000 " },
];

const Price = () => {
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
      ))}<br/>
    </React.Fragment>
  );
};
export default Price;