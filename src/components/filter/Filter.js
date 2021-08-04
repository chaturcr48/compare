import React from "react";
import FilterBrand from "./FilterBrand";
import FilterPrice from "./FilterPrice";
import FilterRam from "./FilterRam";

const Filter = () => {
    return (
        <React.Fragment>
            <FilterPrice />
            <FilterBrand />
            <FilterRam />
        </React.Fragment>
    )
}
export default Filter;