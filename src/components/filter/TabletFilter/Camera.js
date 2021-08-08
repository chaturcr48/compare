import React from "react";

const fres = [
    {id: '1', mp: 'Under 2 MP'},
    {id: '2', mp: '2 - 8 MP'},
    {id: '3', mp: 'Over 8 MP'},
]

const Camera = () => {
    return (
        <React.Fragment><br/>
             <p><b>Camera Resolution</b></p>
            {fres.map(res => (
                        <div className="form-check" key={res.id}>
                        <input className="form-check-input" type="checkbox" name="flexRadioDefault" id="flexRadioDefault1" />
                        <label className="form-check-label" htmlFor="flexRadioDefault1">
                            {res.mp}
                        </label>
                        </div>
                    ))}<br/>
        </React.Fragment>
    )
}
export default Camera;