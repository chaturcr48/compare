import React, {useState} from "react";
import Brands from "./Brands";
import Price from "./Price";
import Ram from "./Ram";
import Storage from "./Storage";
import Stars from "./Stars";
import Stores from "./Stores";
import OperatingSystem from "./OperatingSystem";
import Calling from "./Calling";
import Display from "./Display";
import Camera from "./Camera";
import ScreenSize from "./ScreenSize";
import BatteryCapacity from "./Battery";
import FrontCamera from "../mobileFilter/FrontCamera";

const Filter = (props) => {

  const [brand, setBrand] = useState([]);
  const [ram, setRam] = useState([]);
  const [price, setPrice] = useState([]);
  const [ssd, setSSD] = useState([]);
  const [rearCamera, setRearCamera] = useState([]);
  const [frontCamera, setFrontCamera] = useState([]);
  const [ratings, setRatings] = useState([]);
  const [os, setOS] = useState([]);
  const [calling, setCalling] = useState([]);
  const [display, setDisplay] = useState([]);
  const [screenSize, setScreenSize] = useState([]);
  const [battery, setBattery] = useState([]);
  const [stores, setStores] = useState([]);

  const sendBrand = (brand) => {
    setBrand(brand);
    props.applyFilter(brand, ram, price, ssd, rearCamera, frontCamera, ratings, os, calling, display, screenSize, battery, stores);
  };
  const sendRam = (ram) => {
    setRam(ram);
    props.applyFilter(brand, ram, price, ssd, rearCamera, frontCamera, ratings, os, calling, display, screenSize, battery, stores);
  };
  const sendPrice = (price) => {
    setPrice(price);
    props.applyFilter(brand, ram, price, ssd, rearCamera, frontCamera, ratings, os, calling, display, screenSize, battery, stores);
  };
  const sendSSD = (ssd) => {
    setSSD(ssd);
    props.applyFilter(brand, ram, price, ssd, rearCamera, frontCamera, ratings, os, calling, display, screenSize, battery, stores);
  };
  const sendRearCamera = (rearCamera) => {
    setRearCamera(rearCamera);
    props.applyFilter(brand, ram, price, ssd, rearCamera, frontCamera, ratings, os, calling, display, screenSize, battery, stores);
  };
  const sendFrontCamera = (frontCamera) => {
    setFrontCamera(frontCamera);
    props.applyFilter(brand, ram, price, ssd, rearCamera, frontCamera, ratings, os, calling, display, screenSize, battery, stores);
  };
  const sendRatings = (ratings) => {
    setRatings(ratings);
    props.applyFilter(brand, ram, price, ssd, rearCamera, frontCamera, ratings, os, calling, display, screenSize, battery, stores);
  };
  const sendOS = (os) => {
    setOS(os);
    props.applyFilter(brand, ram, price, ssd, rearCamera, frontCamera, ratings, os, calling, display, screenSize, battery, stores);
  };
  const sendCalling = (calling) => {
    setCalling(calling);
    props.applyFilter(brand, ram, price, ssd, rearCamera, frontCamera, ratings, os, calling, display, screenSize, battery, stores);
  };
  const sendDisplay = (display) => {
    setDisplay(display);
    props.applyFilter(brand, ram, price, ssd, rearCamera, frontCamera, ratings, os, calling, display, screenSize, battery, stores);
  };
  const sendScreenSize = (screenSize) => {
    setScreenSize(screenSize);
    props.applyFilter(brand, ram, price, ssd, rearCamera, frontCamera, ratings, os, calling, display, screenSize, battery, stores);
  };
  const sendBattery = (battery) => {
    setBattery(battery);
    props.applyFilter(brand, ram, price, ssd, rearCamera, frontCamera, ratings, os, calling, display, screenSize, battery, stores);
  };
  const sendStores = (stores) => {
    setStores(stores);
    props.applyFilter(brand, ram, price, ssd, rearCamera, frontCamera, ratings, os, calling, display, screenSize, battery, stores);
  };

  return (
    <React.Fragment>
      <div className="">
        <span className="" style={{ fontSize: "22px" }}>
          Filters
        </span>

        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Brand
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <Brands filterByBrand={sendBrand} />
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                RAM
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <Ram filterByRam={sendRam} />
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Price
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <Price filterByPrice={sendPrice} />
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingFour">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFour"
                aria-expanded="false"
                aria-controls="collapseFour"
              >
                Storage Capacity
              </button>
            </h2>
            <div
              id="collapseFour"
              className="accordion-collapse collapse"
              aria-labelledby="headingFour"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <Storage filterBySSD={sendSSD} />
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingFive">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFive"
                aria-expanded="false"
                aria-controls="collapseFive"
              >
                Rear Camera
              </button>
            </h2>
            <div
              id="collapseFive"
              className="accordion-collapse collapse"
              aria-labelledby="headingiver"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <Camera filterByRearCamera={sendRearCamera} />
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingSix">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseSix"
                aria-expanded="false"
                aria-controls="collapseSix"
              >
                Front Camera
              </button>
            </h2>
            <div
              id="collapseSix"
              className="accordion-collapse collapse"
              aria-labelledby="headingiver"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <FrontCamera filterByFrontCamera={sendFrontCamera} />
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingSeven">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseSeven"
                aria-expanded="false"
                aria-controls="collapseSeven"
              >
                Ratings
              </button>
            </h2>
            <div
              id="collapseSeven"
              className="accordion-collapse collapse"
              aria-labelledby="headingiver"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <Stars filterByRatings={sendRatings} />
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingEight">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseEight"
                aria-expanded="false"
                aria-controls="collapseEight"
              >
                Operating System
              </button>
            </h2>
            <div
              id="collapseEight"
              className="accordion-collapse collapse"
              aria-labelledby="headingiver"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <OperatingSystem
                  filterByOS={sendOS}
                />
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingNine">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseNine"
                aria-expanded="false"
                aria-controls="collapseNine"
              >
                Calling
              </button>
            </h2>
            <div
              id="collapseNine"
              className="accordion-collapse collapse"
              aria-labelledby="headingiver"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <Calling filterByCalling={sendCalling} />
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTen">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTen"
                aria-expanded="false"
                aria-controls="collapseTen"
              >
                Display
              </button>
            </h2>
            <div
              id="collapseTen"
              className="accordion-collapse collapse"
              aria-labelledby="headingiver"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <Display filterByDisplay={sendDisplay} />
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingEleven">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseEleven"
                aria-expanded="false"
                aria-controls="collapseEleven"
              >
                Screen Size
              </button>
            </h2>
            <div
              id="collapseEleven"
              className="accordion-collapse collapse"
              aria-labelledby="headingiver"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <ScreenSize filterByScreenSize={sendScreenSize} />
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwelve">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwelve"
                aria-expanded="false"
                aria-controls="collapseTwelve"
              >
                Battery Capacity
              </button>
            </h2>
            <div
              id="collapseTwelve"
              className="accordion-collapse collapse"
              aria-labelledby="headingiver"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <BatteryCapacity
                  filterByBattery={sendBattery}
                />
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThirteen">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThirteen"
                aria-expanded="false"
                aria-controls="collapseThirteen"
              >
                Stores
              </button>
            </h2>
            <div
              id="collapseThirteen"
              className="accordion-collapse collapse"
              aria-labelledby="headingiver"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <Stores filterByStores={sendStores} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Filter;
