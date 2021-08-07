import React from "react";
import FilterBrand from "./FilterBrand";
import FilterPrice from "./FilterPrice";
import FilterRam from "./FilterRam";
import BroadbandGeneration from "./BroadbandGeneration";
import StorageCapacity from "./StorageCapacity";
import Stars from "./Stars";
import Stores from "./Stores";
import RearCamera from "./RearCamera";
import FrontCamera from "./FrontCamera";

const Filter = () => {
    return (
        <React.Fragment>
            <FilterPrice />
            <FilterBrand />
            <FilterRam />
            <StorageCapacity />
            <Stars/>
            <Stores/>
            <RearCamera/>
            <FrontCamera/>
            <BroadbandGeneration />
        </React.Fragment>
    )
}
export default Filter;