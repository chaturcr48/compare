import React from "react";

const fos = [
    {id: '1', os: 'Android'},
    {id: '2', os: 'IOS'},
    {id: '3', os: ' Windows'},
]

const OperatingSystem = () => {
    return (
        <React.Fragment><br/>
            <p><b>Operating System</b></p>
                    {fos.map(range => (
                        <div className="form-check" key={range.id}>
                        <input className="form-check-input" type="checkbox" name="flexRadioDefault" id="flexRadioDefault1" />
                        <label className="form-check-label" htmlFor="flexRadioDefault1">
                            {range.os}
                        </label>
                        </div>
                    ))}
        </React.Fragment>
    )
}
export default OperatingSystem;