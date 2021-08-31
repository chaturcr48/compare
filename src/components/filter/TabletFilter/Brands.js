import React, {useState} from "react";

const fBrand = [
    {id: '1', brand: 'Samsung'},
    {id: '2', brand: 'Lenovo'},
    {id: '3', brand: 'Apple'},
    {id: '4', brand: 'Dell'},
    {id: '5', brand: 'i ball'},
    {id: '6', brand: 'Asus'},
    {id: '7', brand: 'Microsoft'},
]

const Brands = (props) => {
  const [brand, setBrand] = useState({
    Samsung: false,
    Lenovo: false,
    Apple: false,
    Dell: false,
    iBall: false,
    Asus: false,
    Microsoft: false,
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
      {fBrand.map((range) => (
        <div className="form-check" key={range.id}>
          <input
            value={range.brand}
            onInput={checkClick}
            className="form-check-input"
            type="checkbox"
            name="flexRadioDefault"
            id="flexRadioDefault1"
          />
          <label className="form-check-label" htmlFor="flexRadioDefault1">
            {range.brand}
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
export default Brands;