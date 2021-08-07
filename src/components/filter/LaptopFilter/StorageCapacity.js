import React from "react";

let url ='';

const fBrand = [
    {id: '1', brand: 'Upto 500 GB'},
    {id: '2', brand: '1 TB'},
    {id: '3', brand: '2 TB'},
    {id: '3', brand: '3 TB'},
    {id: '4', brand: '4TB and Above'},
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
                    <a href={url}>See more</a> <br />
        </React.Fragment>
    )
}
export default StorageCapacity;