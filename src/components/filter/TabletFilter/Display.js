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
      <button
        className="btn btn-secondary mt-2"
        data-bs-toggle="collapse"
        data-bs-target="#collapseTen"
        aria-controls="collapseTen"
      >
        Apply Display
      </button>
    </React.Fragment>
  );
};
export default Display;