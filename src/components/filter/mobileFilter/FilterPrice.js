import React,{useState} from "react";

const fPrice = [
  { id: "1", pRange: "Up to 9,000", hRange: '9000' },
  { id: "2", pRange: "9,000 to 15,000", hRange: '15000' },
  { id: "3", pRange: "15,000 to 18,000", hRange: '18000' },
  { id: "4", pRange: "18,000 to 25,000", hRange: '25000' },
  { id: "5", pRange: "25,000 to 35,000", hRange: '35000' },
  { id: "6", pRange: "Above 30,000", hRange: '50000' },
];

const FilterPrice = (props) => {
  const [price, setPrice] = useState({
    9000: false,
    15000: false,
    18000: false,
    25000: false,
    35000: false,
    50000: false,
  });
  const checkClick = (event) => {
    let { value, checked } = event.target;
    setPrice({ [value]: checked });
  };
  const applyFilter = () => {
    props.filterByPrice(price);
  };
  return (
    <React.Fragment>
      {fPrice.map((range) => (
        <div className="form-check" key={range.id}>
          <input
            value={range.hRange}
            onInput={checkClick}
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
      <button
        className="btn btn-secondary mt-2"
        data-bs-toggle="collapse"
        data-bs-target="#collapseThree"
        aria-controls="collapseThree"
        onClick={applyFilter}
      >
        Apply Price
      </button>
    </React.Fragment>
  );
};
export default FilterPrice;
