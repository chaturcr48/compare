import React from "react";

let url ='';

const fBrand = [
    {id: '1', brand: 'HP'},
    {id: '2', brand: 'Dell'},
    {id: '3', brand: 'Lenevo'},
    {id: '4', brand: 'MSI'},
    {id: '5', brand: 'xyz'},
]

const FilterBrand = () => {
    return (
        <React.Fragment>
            <p><b>Brand</b></p>
            {fBrand.map(brand => (
                        <div className="form-check" key={brand.id}>
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                        <label className="form-check-label" htmlFor="flexRadioDefault1">
                            {brand.brand}
                        </label>
                        </div>
                    ))}
                    <a href={url}>See more</a> <br />
        </React.Fragment>
    )
}
export default FilterBrand;