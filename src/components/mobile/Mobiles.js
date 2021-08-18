import React, { useState } from "react";
import Filter from "../filter/mobileFilter/Filter";
import SearchProduct from "../searchBar/SearchProduct";
import MobDes from "./MobDes";
import './mobile.css';
import MobileData from './mobileData.json';

const Mobiles = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filterPosts = (MobileData, query) => {
    if (!query) {
      return MobileData;
    }

    return MobileData.filter((Data) => {
      const laptopHeading =
        Data.Brand;

      const laptopBrand = laptopHeading.toLowerCase();
      return laptopBrand.includes(query);
    });
  };
  const searchedData = filterPosts(MobileData, searchQuery);
  return (
    <React.Fragment>
      <div className="container-fluid mt-2 mx-4 px-2" style={{ 'width': 'auto' }}>
        <div className="row">
          <SearchProduct
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
        </div>
        <div className="row" style={{ 'justifyContent': 'center' }}>
          <div className='full-line'>
            <div className="filter-container mt-3" style={{ 'width': 'auto' }}>
              <Filter
              // filterBrand={filterBrand}
              // setFilterBrand={setFilterBrand}
              />
            </div>
          </div>
          <div className="lapDes-container">
            <div> Showing 1 – 20 of 2000 results for "laptop".</div>
            <div className="mt-2">
              <MobDes data={searchedData} />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Mobiles;
