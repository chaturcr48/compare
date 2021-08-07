import React from "react";

let url ='';

const fstores = [
    {id: '1', stores: 'Amazon'},
    {id: '2', stores: 'Flipkart'},
    {id: '3', stores: 'Tatacliq'},
    {id: '4', stores: 'Shopclues'},
    {id: '5', stores: 'Reliance digital'}
]

const Stores = () => {
    return (
        <React.Fragment><br/>
            <p><b>Stores</b></p>
            {fstores.map(stores1 => (
                        <div className="form-check" key={stores1.id}>
                        <input className="form-check-input" type="checkbox" name="flexRadioDefault" id="flexRadioDefault1" />
                        <label className="form-check-label" htmlFor="flexRadioDefault1">
                            {stores1.stores}
                        </label>
                        </div>
                    ))}
                    <a href={url}>See more</a> <br />
        </React.Fragment>
    )
}
export default Stores;