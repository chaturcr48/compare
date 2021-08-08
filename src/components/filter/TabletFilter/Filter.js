import React from "react";
import Brands from "./Brands";
import Price from "./Price";
import Ram from "./Ram";
import Storage from "./Storage";
import Stars from "./Stars";
import Stores from "./Stores";
import OperatingSystem from "./OperatingSystem";
import Calling from "./Calling";
import Display from "./Display";
import Camera from "./Camera"
import ScreenSize from "./ScreenSize";
import BatteryCapacity from "./Battery";

const Filter = () => {
    return (
        <React.Fragment>
            <Price />
            <Brands />
            <Ram />
            <Storage />
            <Stores />
            <OperatingSystem/>
            <Calling/>
            <Camera/>
            <Display/>
            <ScreenSize/>
            <BatteryCapacity/>
            <Stars />
        </React.Fragment>
    )
}
export default Filter;