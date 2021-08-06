import React from "react";
import FilterBrand from "./FilterBrand";
import FilterPrice from "./FilterPrice";
import FilterRam from "./FilterRam";
import Broadband_generation from "./Broadband_generation";
import Storage_capacity from "./Storage_capacity"

const Filter = () => {
    return (
        <React.Fragment>
            <FilterPrice />
            <FilterBrand />
            <Storage_capacity />
            <Broadband_generation />
            <FilterRam />
        </React.Fragment>
    )
}
export default Filter;