import React from "react";

const fRam = [
    {id: '1', ram: '6 GB'},
    {id: '2', ram: '8 GB'},
]

const FilterRam = () => {
    return (
        <React.Fragment>
             <p><b>Brand</b></p>
            {fRam.map(ram => (
                        <div className="form-check" key={ram.id}>
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                        <label className="form-check-label" htmlFor="flexRadioDefault1">
                            {ram.ram}
                        </label>
                        </div>
                    ))}
                    <br />
        </React.Fragment>
    )
}
export default FilterRam;