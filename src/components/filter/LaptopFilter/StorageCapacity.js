import React from "react";


const fBrand = [
    {id: '1', brand: 'Upto 500 GB'},
    {id: '2', brand: '1 TB'},
    {id: '3', brand: '2 TB'},
    {id: '4', brand: '3 TB'},
    {id: '5', brand: '4TB and Above'},
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