import React, { useState } from "react";
import FilterBrand from "./FilterBrand";
import FilterPrice from "./FilterPrice";
import FilterRam from "./FilterRam";
import BroadbandGeneration from "./BroadbandGeneration";
import StorageCapacity from "./StorageCapacity";
import Stars from "./Stars.js";
import Stores from "./stores.js";
import RearCamera from "./RearCamera";
import FrontCamera from "./FrontCamera";
import "../../mobile/mobile.css";

const Filter = (props) => {
  const [brand, setBrand] = useState([]);
  const [ram, setRam] = useState([]);
  const [price, setPrice] = useState([]);
  const [ssd, setSSD] = useState([]);
  const [rearCamera, setRearCamera] = useState([]);
  const [frontCamera, setFrontCamera] = useState([]);
  const [ratings, setRatings] = useState([]);
  const [broadbandgeneration, setBroadbandGeneration] = useState([]);
  const [stores, setStores] = useState([]);

  const sendBrand = (brand) => {
    setBrand(brand);
    props.applyFilter(brand, ram, price, ssd, rearCamera, frontCamera, ratings, broadbandgeneration, stores);
  };
  const sendRam = (ram) => {
    setRam(ram);
    props.applyFilter(brand, ram, price, ssd, rearCamera, frontCamera, ratings, broadbandgeneration, stores);
  };
  const sendPrice = (price) => {
    setPrice(price);
    props.applyFilter(brand, ram, price, ssd, rearCamera, frontCamera, ratings, broadbandgeneration, stores);
  };
  const sendSSD = (ssd) => {
    setSSD(ssd);
    props.applyFilter(brand, ram, price, ssd, rearCamera, frontCamera, ratings, broadbandgeneration, stores);
  };
  const sendRearCamera = (rearCamera) => {
    setRearCamera(rearCamera);
    props.applyFilter(brand, ram, price, ssd, rearCamera, frontCamera, ratings, broadbandgeneration, stores);
  };
  const sendFrontCamera = (frontCamera) => {
    setFrontCamera(frontCamera);
    props.applyFilter(brand, ram, price, ssd, rearCamera, frontCamera, ratings, broadbandgeneration, stores);
  };
  const sendRatings = (ratings) => {
    setRatings(ratings);
    props.applyFilter(brand, ram, price, ssd, rearCamera, frontCamera, ratings, broadbandgeneration, stores);
  };
  const sendBroadbandGeneration = (broadbandgeneration) => {
    setBroadbandGeneration(broadbandgeneration);
    props.applyFilter(brand, ram, price, ssd, rearCamera, frontCamera, ratings, broadbandgeneration, stores);
  };
  const sendStores = (stores) => {
    setStores(stores);
    props.applyFilter(brand, ram, price, ssd, rearCamera, frontCamera, ratings, broadbandgeneration, stores);
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
                <FilterBrand filterByBrand={sendBrand} />
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
                <FilterRam filterByRam={sendRam} />
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
                <FilterPrice filterByPrice={sendPrice} />
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
                <StorageCapacity filterBySSD={sendSSD} />
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
                <RearCamera filterByRearCamera={sendRearCamera} />
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
                Broadband Generation
              </button>
            </h2>
            <div
              id="collapseEight"
              className="accordion-collapse collapse"
              aria-labelledby="headingiver"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
              <BroadbandGeneration filterByBroadbandGeneration={sendBroadbandGeneration} />
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
                Stores
              </button>
            </h2>
            <div
              id="collapseNine"
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
