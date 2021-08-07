import React from "react";

const fcalling = [
    {id: '1', calling: 'Yes'},
    {id: '2', calling: 'No'},
]

const Calling = () => {
  return (
    <React.Fragment>
      <p>
        <b>Voice Calling Facility</b>
      </p>
      {fcalling.map((range) => (
        <div className="form-check" key={range.id}>
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault1"
          />
          <label className="form-check-label" htmlFor="flexRadioDefault1">
            {range.calling}
          </label>
        </div>
      ))}<a href={url}>See more</a>
    </React.Fragment>
  );
};
export default Calling;