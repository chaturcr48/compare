import React from "react";

const fPrice = [
    {id: '1', pRange: 'Up to 9,000'},
    {id: '2', pRange: '9,000 to 15,000'},
    {id: '3', pRange: '15,000 to 18,000'},
    {id: '4', pRange: '18,000 to 25,000'},
    {id: '5', pRange: '25,000 to 35,000'},
    {id: '6', pRange: 'Above 30,000'},
]

const FilterPrice = () => {
    return (
        <React.Fragment>
            <p><b>Price</b></p>
                    {fPrice.map(range => (
                        <div className="form-check" key={range.id}>
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                        <label className="form-check-label" htmlFor="flexRadioDefault1">
                            {range.pRange}
                        </label>
                        </div>
                    ))}
        </React.Fragment>
    )
}
export default FilterPrice;