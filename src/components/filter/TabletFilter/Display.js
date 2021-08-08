import React from "react";


const fqal = [
    {id: '1', qal: 'Full HD'},
    {id: '2', qal: 'HD'},
    {id: '3', qal: 'Quad HD'},
    {id: '4', qal: 'SD'},
]
const Display = () => {
  return (
    <React.Fragment>
      <p>
        <b>Display Size</b>
      </p>
      {fqal.map((brand) => (
        <div className="form-check" key={brand.id}>
          <input
            className="form-check-input"
            type="checkbox"
            name="flexRadioDefault"
            id="flexRadioDefault1"
          />
          <label className="form-check-label" htmlFor="flexRadioDefault1">
            {brand.qal}
          </label>
        </div>
      ))}
    </React.Fragment>
  );
};
export default Display;