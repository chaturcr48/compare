import React from "react";

const fBbrand = [
    {id: '1', BBRange: '3G'},
    {id: '2', BBRange: '4G'},
    {id: '3', BBRange: '5G '},
]

const Broadband_generation = () => {
    return (
        <React.Fragment><br/>
            <p><b>Broadband Generation</b></p>
                    {fBbrand.map(range => (
                        <div className="form-check" key={range.id}>
                        <input className="form-check-input" type="checkbox" name="flexRadioDefault" id="flexRadioDefault2" />
                        <label className="form-check-label" htmlFor="flexRadioDefault1">
                            {range.BBRange}
                        </label>
                        </div>
                    ))}
        </React.Fragment>
    )
}
export default Broadband_generation;