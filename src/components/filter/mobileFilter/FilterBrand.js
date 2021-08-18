import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";


const fBrand = [
    {id: '1', brand: 'Samsung'},
    {id: '2', brand: 'Xiaomi'},
    {id: '3', brand: 'Vivo'},
    {id: '4', brand: 'Apple'},
    {id: '5', brand: 'Oppo'},
    {id: '6', brand: 'Nokia'},
]
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
    </React.Fragment>
  );
};
export default FilterBrand;
