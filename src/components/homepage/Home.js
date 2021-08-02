import React from "react";
import MainCarousal from "../carousal/MainCarousal";
import PopulatLaptop from "./PopularLaptop";
import PopularMobiles from "./PopularMobiles";
import PopulatTablets from "./PopularTablets";
import PopularTelevision from "./PopularTelevision";

const Home = () => {
    return (
        <React.Fragment>
            <MainCarousal />
            <PopularMobiles />
            <PopulatLaptop />
            <PopularTelevision />
            <PopulatTablets />
        </React.Fragment>
    )
}
export default Home;