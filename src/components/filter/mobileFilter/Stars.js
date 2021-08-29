import React,{useState} from "react";

const fstars = [
  { id: "1", ratings: "5 stars", rating: 5 },
  { id: "2", ratings: "4 stars and above", rating: 4 },
  { id: "3", ratings: "3 stars and above", rating: 3 },
  { id: "4", ratings: "2 stars and above", rating: 2 },
  { id: "5", ratings: "1 stars and above", rating: 1 },
];

const Stars = (props) => {
  const [ratings, setRatings] = useState({
    5: false,
    4: false,
    3: false,
    2: false,
    1: false,
  });
  const checkClick = (event) => {
    let { value, checked } = event.target;
    setRatings({ ...ratings, [value]: checked });
  };
  const applyFilter = () => {
    props.filterByRatings(ratings);
  };
  return (
    <React.Fragment>
      {fstars.map((range) => (
        <div className="form-check" key={range.id}>
          <input
            value={range.rating}
            onInput={checkClick}
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
        data-bs-target="#collapseSeven"
        aria-controls="collapseSeven"
        onClick={applyFilter}
      >
        Apply Ratings
      </button>
    </React.Fragment>
  );
};
export default Stars;
