import React from "react";


const fcapcity = [
    {id: '1', capcity: 'under 2 GB'},
    {id: '2', capcity: '2 - 8 GB '},
    {id: '3', capcity: '8 - 16 GB '},
    {id: '4', capcity: '16 - 64 GB'},
    {id: '5', capcity: '64 - 128 GB'},
    {id: '6', capcity: '128 -256 GB'},
    {id: '7', capcity: 'Above 256 GB'},
]

const BatteryCapacity = () => {
    return (
        <React.Fragment><br/>
            <p><b>Battery Capacity</b></p>
            {fcapcity.map(capcity1 => (
                        <div className="form-check" key={capcity1.id}>
                        <input className="form-check-input" type="checkbox" name="flexRadioDefault" id="flexRadioDefault1" />
                        <label className="form-check-label" htmlFor="flexRadioDefault1">
                            {capcity1.capcity}
                        </label>
                        </div>
                    ))}
        </React.Fragment>
    )
}
export default BatteryCapacity;