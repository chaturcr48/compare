import React from "react";
import MainCarousal from "../carousal/MainCarousal";
//import MobileSlider from "./MobileSlider";
import PopularLaptop from "./PopularLaptop";
import PopularMobiles from "./PopularMobiles";
import PopulatTablets from "./PopularTablets";
// import PopularTelevision from "./PopularTelevision";

const Home = () => {
    return (
        <React.Fragment>
            <MainCarousal />
            {/* <MobileSlider /> */}
            <PopularMobiles />
            <PopularLaptop />
            {/* <PopularTelevision /> */}
            <PopulatTablets />
            
        </React.Fragment>
    )
}
export default Home;