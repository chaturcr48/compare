import React, { useState } from "react";

import Filter from "../filter/laptopFilter/Filter";
import "./Laptops.css";
import LapDes from "./LapDes";
import Data from "./finalData.json";
import SearchLaptop from "../searchBar/SearchLaptop";

const Laptops = () => {
  // const { search } = window.location;
  // const query = new URLSearchParams(search).get("s");
  // const [searchQuery, setSearchQuery] = useState(query || "");

  const [searchQuery, setSearchQuery] = useState("");

  const filterPosts = (Data, query) => {
    if (!query) {
      return Data;
    }

    return Data.filter((Data) => {
      const laptopHeading =
        Data.Brand + " "+
        Data.Series + " "+
        Data.Type + " "+
        Data.OS_Architecture + " "+
        Data.Processor_Brand + " "+
        Data.Processor_Name + " "+
        Data.Processor_Generation + " ";
      // const laptopBrand = Data.Brand.toLowerCase();
      const laptopBrand = laptopHeading.toLowerCase();
      return laptopBrand.includes(query);
    });
  };
  const searchedData = filterPosts(Data, searchQuery);

  return (
    <React.Fragment>
      <div className="container mt-2">
        <div className="row">
          <SearchLaptop
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
        </div>
        <div className="row">
          <div className="filter-container">
            <Filter />
          </div>
          <div className="lapDes-container">
            <div> Showing 1 – 20 of 2000 results for "laptop".</div>
            <div className="mt-2">
              <LapDes data={searchedData} />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Laptops;
