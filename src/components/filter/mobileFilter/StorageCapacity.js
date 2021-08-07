import React from "react";

let url ='';

const fBrand = [
    {id: '1', brand: 'Upto 32 GB'},
    {id: '2', brand: '32 - 64 GB'},
    {id: '3', brand: '64 - 128 GB'},
    {id: '4', brand: 'Above 128 GB'},
]

const StorageCapacity = () => {
    return (
        <React.Fragment><br/>
            <p><b>Storage Capacity</b></p>
            {fBrand.map(brand1 => (
                        <div className="form-check" key={brand1.id}>
                        <input className="form-check-input" type="checkbox" name="flexRadioDefault" id="flexRadioDefault1" />
                        <label className="form-check-label" htmlFor="flexRadioDefault1">
                            {brand1.brand}
                        </label>
                        </div>
                    ))}
        </React.Fragment>
    )
}
export default StorageCapacity;