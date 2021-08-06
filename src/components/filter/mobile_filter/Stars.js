import React from "react";

const fstars = [
    {id: '1', pRange: '5 stars'},
    {id: '2', pRange: '4 stars and above'},
    {id: '3', pRange: '3 stars and above'},
    {id: '4', pRange: '2 stars and above'},
    {id: '5', pRange: '1 stars and above'},
]

const FilterPrice = () => {
    return (
        <React.Fragment>
            <p><b>Ratings</b></p>
                    {fstars.map(range => (
                        <div className="form-check" key={range.id}>
                        <input className="form-check-input" type="checkbox" name="flexRadioDefault" id="flexRadioDefault1" />
                        <label className="form-check-label" htmlFor="flexRadioDefault1">
                            {range.pRange}
                        </label>
                        </div>
                    ))}
        </React.Fragment>
    )
}
export default FilterPrice;