import React, { useState } from "react";
// import React, { useState,useEffect } from "react";

import Filter from "../filter/laptopFilter/Filter";
import "./Laptops.css";
import LapDes from "./LapDes";
import Data from "./finalData.json";
import SearchProduct from "../searchBar/SearchProduct";

const Laptops = () => {

  const [searchQuery, setSearchQuery] = useState("");
  // useEffect(() => {
  //   effect
  //   return () => {
  //     cleanup
  //   };
  // }, [input]);

  const filterBrandHandler = (value) => {
    setSearchQuery(value.toLowerCase());
    console.log(value);
  }
  const filterPosts = (Data, query) => {
    if (!query) {
      return Data;
    }

    return Data.filter((Data) => {
      const laptopHeading =
        Data.Brand + " " +
        Data.Series + " " +
        Data.Type + " " +
        Data.OS_Architecture + " " +
        Data.Processor_Brand + " " +
        Data.Processor_Name + " " +
        Data.Processor_Generation + " ";
      // const laptopBrand = Data.Brand.toLowerCase();
      const laptopBrand = laptopHeading.toLowerCase();
      return laptopBrand.includes(query);
    });
  };
  const searchedData = filterPosts(Data, searchQuery);

  return (
    <React.Fragment>
      <div className="container-fluid mt-2 mx-4 px-2" style={{ 'width': 'auto' }}>
        <div className="row">
          <SearchProduct
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
        </div>
        <div className="row">
          <div className="filter-container">
            <Filter filterBrand={filterBrandHandler} />
          </div>
        </div>

        <div className="lapDes-container">
          <div> Showing 1 – 20 of 2000 results for "laptop".</div>
          <div className="mt-2">
            <LapDes data={searchedData} />
          </div>
        </div>
      </div>
    
    </React.Fragment >
  );
};
export default Laptops;