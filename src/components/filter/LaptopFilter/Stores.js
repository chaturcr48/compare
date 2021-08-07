import React from "react";

let url ='';

const fstore = [
    {id: '1', store: 'Amazon'},
    {id: '2', store: 'Flipkart'},
    {id: '3', store: 'Tatacliq'},
    {id: '4', store: 'Shopclues'},
    {id: '5', store: 'Reliance digital'}
]

const Stores = () => {
    return (
        <React.Fragment><br/>
            <p><b>Stores</b></p>
            {fstore.map(store1 => (
                        <div className="form-check" key={store1.id}>
                        <input className="form-check-input" type="checkbox" name="flexRadioDefault" id="flexRadioDefault1" />
                        <label className="form-check-label" htmlFor="flexRadioDefault1">
                            {store1.store}
                        </label>
                        </div>
                    ))}
                    <a href={url}>See more</a> <br />
        </React.Fragment>
    )
}
export default Stores;