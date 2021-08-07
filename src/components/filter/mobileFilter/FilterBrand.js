import React from "react";

let url = "";

const fBrand = [
<<<<<<< HEAD:src/components/filter/FilterBrand.js
  { id: "1", brand: "HP" },
  { id: "2", brand: "Dell" },
  { id: "3", brand: "Lenevo" },
  { id: "4", brand: "MSI" },
  { id: "5", brand: "xyz" },
];
=======
    {id: '1', brand: 'Samsung'},
    {id: '2', brand: 'Xiaomi'},
    {id: '3', brand: 'Vivo'},
    {id: '4', brand: 'Apple'},
    {id: '5', brand: 'Oppo'},
    {id: '6', brand: 'Nokia'},
]
>>>>>>> f538893e16e94c35aff908c6d26093b0da63858a:src/components/filter/mobileFilter/FilterBrand.js

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
