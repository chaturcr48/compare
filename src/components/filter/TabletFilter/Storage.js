import React from "react";


const fBrand = [
    {id: '1', brand: 'under 2 GB'},
    {id: '2', brand: '2 - 8 GB '},
    {id: '3', brand: '8 - 16 GB '},
    {id: '4', brand: '16 - 64 GB'},
    {id: '5', brand: '64 - 128 GB'},
    {id: '6', brand: '128 -256 GB'},
    {id: '7', brand: 'Above 256 GB'},
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