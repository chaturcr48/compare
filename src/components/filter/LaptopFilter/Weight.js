import React from "react";

const fweight = [
    {id: '1', weight: 'Under 1.25 Kg '},
    {id: '2', weight: '1.25 - 1.5 Kg'},
    {id: '3', weight: '1.5 - 1.75 Kg'},
    {id: '4', weight: '1.75 - 2.0 Kg'},
    {id: '5', weight: '2.0 - 2.25 Kg'},
    {id: '6', weight: 'Over 2.25 Kg'},
]

const Weight = () => {
    return (
        <React.Fragment><br/>
            <p><b>Weight</b></p>
                    {fweight.map(range => (
                        <div className="form-check" key={range.id}>
                        <input className="form-check-input" type="checkbox" name="flexRadioDefault" id="flexRadioDefault1" />
                        <label className="form-check-label" htmlFor="flexRadioDefault1">
                            {range.weight}
                        </label>
                        </div>
                    ))}
        </React.Fragment>
    )
}
export default Weight;