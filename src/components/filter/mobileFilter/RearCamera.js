import React from "react";

const fres = [
    {id: '1', mp: 'Under 5 MP'},
    {id: '2', mp: '5 - 13 MP'},
    {id: '3', mp: '13 - 32 MP'},
    {id: '4', mp: '32 - 40 MP'},
    {id: '5', mp: 'Over 40 MP'},
]

const RearCamera = () => {
    return (
        <React.Fragment><br/>
             <p ><b>Rear Camera Resolution</b></p>
            {fres.map(res => (
                        <div className="form-check" key={res.id}>
                        <input className="form-check-input" type="checkbox" name="flexRadioDefault" id="flexRadioDefault1" />
                        <label className="form-check-label" htmlFor="flexRadioDefault1">
                            {res.mp}
                        </label>
                        </div>
                    ))}
                    <br />
        </React.Fragment>
    )
}
export default RearCamera;