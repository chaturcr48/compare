import React from "react";

//let url ='';

const fstore = [
    {id: '1', store: 'Amazon'},
    {id: '2', store: 'Flipkart'},
    {id: '3', store: 'TataCliQ'},
    {id: '4', store: 'Shopclues'},
    {id: '5', store: 'Reliance digital'},
    {id: '6', store: 'Snapdeal'}
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
        </React.Fragment>
    )
}
export default Stores;