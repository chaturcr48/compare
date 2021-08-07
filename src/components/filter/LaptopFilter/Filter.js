import React from "react";
import FilterBrand from "./FilterBrand";
import FilterPrice from "./FilterPrice";
import FilterRam from "./FilterRam";
import StorageCapacity from "./StorageCapacity";
import Stars from "./Stars";
import Stores from "./Stores";

const Filter = () => {
    return (
        <React.Fragment>
            <FilterPrice />
            <FilterBrand />
            <FilterRam />
            <StorageCapacity />
            <Stars/>
            <Stores/>
        </React.Fragment>
    )
}
export default Filter;