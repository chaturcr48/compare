import React from "react";

const fstars = [
  { id: "1", ratings: "5 stars" },
  { id: "2", ratings: "4 stars and above" },
  { id: "3", ratings: "3 stars and above" },
  { id: "4", ratings: "2 stars and above" },
  { id: "5", ratings: "1 stars and above" },
];

const Stars = () => {
  return (
    <React.Fragment>
      {fstars.map((range) => (
        <div className="form-check" key={range.id}>
          <input
            className="form-check-input"
            type="checkbox"
            name="flexRadioDefault"
            id="flexRadioDefault1"
          />
          <label className="form-check-label" htmlFor="flexRadioDefault1">
            {range.ratings}
          </label>
        </div>
      ))}
      <button
        className="btn btn-secondary mt-2"
        data-bs-toggle="collapse"
        data-bs-target="#collapseEight"
        aria-controls="collapseEight"
      >
        Apply Ratings
      </button>
    </React.Fragment>
  );
};
export default Stars;
