import React from "react";
import FilterBrand from "./FilterBrand";
import FilterPrice from "./FilterPrice";
import FilterRam from "./FilterRam";
import BroadbandGeneration from "./BroadbandGeneration";
import StorageCapacity from "./StorageCapacity"

const Filter = () => {
    return (
        <React.Fragment>
            <FilterPrice />
            <FilterBrand />
            <StorageCapacity />
            <BroadbandGeneration />
            <FilterRam />
        </React.Fragment>
    )
}
export default Filter;