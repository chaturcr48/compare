import React from "react";

const fres = [
    {id: '1', mp: 'Under 2.1 MP'},
    {id: '2', mp: '2.1 - 5 MP'},
    {id: '3', mp: '5 - 8 MP'},
    {id: '4', mp: '8 - 13 MP'},
    {id: '5', mp: '13 - 24 MP'},
    {id: '6', mp: '24 - 40 MP'},
    {id: '7', mp: 'Over 40 MP'},
]

const FrontCamera = () => {
    return (
        <React.Fragment><br/>
             <p><b>Front Camera Resolution</b></p>
            {fres.map(res => (
                        <div className="form-check" key={res.id}>
                        <input className="form-check-input" type="checkbox" name="flexRadioDefault" id="flexRadioDefault1" />
                        <label className="form-check-label" htmlFor="flexRadioDefault1">
                            {res.mp}
                        </label>
                        </div>
                    ))}
                    <br/>
        </React.Fragment>
    )
}
export default FrontCamera;