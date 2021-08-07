import React from "react";
import FilterBrand from "./FilterBrand";
import FilterPrice from "./FilterPrice";
import FilterRam from "./FilterRam";
import BroadbandGeneration from "./BroadbandGeneration";
import StorageCapacity from "./StorageCapacity"
import Stars from "./Stars"

const Filter = () => {
    return (
        <React.Fragment>
            <FilterPrice />
            <FilterBrand />
            <FilterRam />
            <StorageCapacity />
            <Stars/>
            <BroadbandGeneration />
        </React.Fragment>
    )
}
export default Filter;