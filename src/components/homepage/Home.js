import React from "react";
import MainCarousal from "../carousal/MainCarousal";
import LatestMobile from "../mobile/NewestArrival/LatestMobile";
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
      <LatestMobile />
      <PopularMobiles />
      <PopularLaptop />
      {/* <PopularTelevision /> */}
      <PopulatTablets />
      <div className="border m-2 p-2">
        <div>Amazon Store</div>
        <span>
          <a
            target="_blank"
            rel="noreferrer noopener"
            style={{ marginRight: "10px" }}
            href="https://www.amazon.in/b?_encoding=UTF8&tag=ellcomp-21&linkCode=ur2&linkId=08e3399555a5ad3c800c6b32ddbfe0b8&camp=3638&creative=24630&node=976419031"
          >
            Electronics
          </a>
        </span>
        <span>
          <a
            target="_blank"
            rel="noreferrer noopener"
            style={{ marginRight: "10px" }}
            href="https://www.amazon.in/b?_encoding=UTF8&tag=ellcomp-21&linkCode=ur2&linkId=a8f01540def7306f09d58868395d6887&camp=3638&creative=24630&node=976392031"
          >
            Computers
          </a>
        </span>
        <span>
          <a
            target="_blank"
            rel="noreferrer noopener"
            style={{ marginRight: "10px" }}
            href="https://www.amazon.in/b?_encoding=UTF8&tag=ellcomp-21&linkCode=ur2&linkId=53f9cdf756790846324d2a92beeee597&camp=3638&creative=24630&node=1984443031"
          >
            Sports and Outdoors
          </a>
        </span>
        <div>Amazon Special Facility</div>
        <span>
          <a
            target="_blank"
            rel="noreferrer noopener"
            style={{ marginRight: "10px" }}
            href="https://www.amazon.in/tryprime?tag=ellcomp-21"
          >Prime Membership</a>
          </span>
        <span>
          <a
            target="_blank"
            rel="noreferrer noopener"
            style={{ marginRight: "10px" }}
            href="https://www.amazon.in/dp/B077S5CVBQ/?ref=assoc_tag_sept19?actioncode=AINOTH066082819002X&tag=ellcomp-21"
          >Prime Membership</a>
          </span>
        <span>
          <a
            target="_blank"
            rel="noreferrer noopener"
            style={{ marginRight: "10px" }}
            href="https://www.amazon.in/tryab?tag=ellcomp-21"
          >Amazon Business</a>
          </span>
        <span>
          <a
            target="_blank"
            rel="noreferrer noopener"
            style={{ marginRight: "10px" }}
            href="https://sell.amazon.in/sell-online.html?ref_=asin_soa_rd&ld=INSOAASSOCIATES&tag=ellcomp-21"
          >Sell On Amazon</a>
          </span>
        <span>
          <a
            target="_blank"
            rel="noreferrer noopener"
            style={{ marginRight: "10px" }}
            href="https://www.amazon.in/dp/B077S5CVBQ/?ref=assoc_tag_sept19?actioncode=AINOTH066082819002X&tag=ellcomp-21"
          >Audible Books</a>
          </span>
        <span>
          <a
            target="_blank"
            rel="noreferrer noopener"
            style={{ marginRight: "10px" }}
            href="https://primevideo.com?tag=ellcomp-21"
          >Prime Video</a>
          </span>
      </div>
    </React.Fragment>
  );
};
export default Home;
