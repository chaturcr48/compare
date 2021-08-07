import React from "react";
import FilterBrand from "./FilterBrand";
import FilterPrice from "./FilterPrice";
import FilterRam from "./FilterRam";
import StorageCapacity from "./StorageCapacity";
import Stars from "./Stars";
import Stores from "./Stores";
import Weight from "./Weight";
import OperatingSystem from "./OperatingSystem";

const Filter = () => {
    return (
        <React.Fragment>
            <FilterPrice />
            <FilterBrand />
            <FilterRam />
            <StorageCapacity />
            <Stores />
            <Weight />
            <OperatingSystem/>
            <Stars />
        </React.Fragment>
    )
}
export default Filter;