import React from "react";

const fRam = [
    {id: '1', ram: '1 GB'},
    {id: '2', ram: '3 GB'},
    {id: '3', ram: '4 GB'},
    {id: '4', ram: '6 GB'},
    {id: '5', ram: '8 GB'},
    {id: '6', ram: '12 GB'},
]

const FilterRam = () => {
    return (
        <React.Fragment><br/>
             <p ><b>Ram</b></p>
            {fRam.map(ram => (
                        <div className="form-check" key={ram.id}>
                        <input className="form-check-input" type="checkbox" name="flexRadioDefault" id="flexRadioDefault1" />
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