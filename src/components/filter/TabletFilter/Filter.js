import React from "react";
import Brands from "./Brands";
import Price from "./Price";
import Ram from "./Ram";
import Storage from "./Storage";
import Stars from "./Stars";
import Stores from "./Stores";
import OperatingSystem from "./OperatingSystem";

const Filter = () => {
    return (
        <React.Fragment>
            <Price />
            <Brands />
            <Ram />
            <Storage />
            <Stores />
            <OperatingSystem/>
            <Stars />
        </React.Fragment>
    )
}
export default Filter;