import React, { useState } from "react";

import Filter from "../filter/LaptopFilter/Filter";
import "./Laptops.css";
import LapDes from "./LapDes";
import Data from "./laptopData.json";
// import SearchProduct from "../searchBar/SearchProduct";

const Laptops = () => {

  let ud=[];

  // const [searchQuery, setSearchQuery] = useState("");
  // const filterPosts = (Data, query) => {
  //   if (!query) {
  //     return Data;
  //   }

  //   return Data.filter((Data) => {
  //     const laptopHeading =
  //       Data.Brand + " "+
  //       Data.Series + " "+
  //       Data.Type + " "+
  //       Data.OS_Architecture + " "+
  //       Data.Processor_Brand + " "+
  //       Data.Processor_Name + " "+
  //       Data.Processor_Generation + " ";
  //     // const laptopBrand = Data.Brand.toLowerCase();
  //     const laptopBrand = laptopHeading.toLowerCase();
  //     return laptopBrand.includes(query);
  //   });
  // };
  // const searchedData = filterPosts(Data, searchQuery);

  const [feedableData, setFeedableData] = useState(Data);

  const filterByBrand = (Data, brand) => {
    return Data.filter((Data) => {
      const laptopBrand = Data.Brand.toLowerCase();
      const query = brand.toLowerCase();
      return laptopBrand.includes(query);
    })
  }
  const filterByRam = (Data, ram) => {
    return Data.filter((Data) => {
      const laptopRam = Data.RAM;
      return laptopRam.includes(ram);
    })
  }

  const brandHandler = (brand, Data) => {
    let brandData = [];
    let key = Object.keys(brand);
    let value = Object.values(brand);
    let filterData = [];
    for (let i = 0; i < key.length; i++) {
      if (value[i] === true) {
        filterData = filterByBrand(Data, key[i]);
        brandData = [...brandData, ...filterData];
      }
    }
    if (brandData.length === 0) {
      return Data;
    } else {
      return brandData;
    }
  }

  const ramHandler = (ram, ud) => {
    let ramData = [];
    let key = Object.keys(ram);
    let value = Object.values(ram);
    let filterData = [];
    let dataFeedToRam = ud;
    for (let i = 0; i < key.length; i++) {
      if (value[i] === true) {
        filterData = filterByRam(dataFeedToRam, key[i]);
        ramData = [...ramData, ...filterData];
      }
    }
    if (ramData.length === 0) {
      return ud;
    } else {
      return ramData;
    }
  }

  const applyAllFilter = (brand, ram) => {
    ud = brandHandler(brand, Data);
    ud = ramHandler(ram, ud);
    setFeedableData(ud);
  }

  return (
    <React.Fragment>
      <div className="container-fluid mt-2 mx-4 px-2" style={{ 'width': 'auto' }}>
        {/* <div className="row">
          <SearchProduct
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
        </div> */}
        <div className="row" style={{ 'justifyContent': 'center' }}>
          <div className='full-line'>
            <div className="">
              <Filter applyFilter={applyAllFilter} />
            </div>
          </div>

          <div className="col-9">
            <div className="lapDes-container">
              <div> Showing 1 – 20 of 2000 results for "laptop".</div>
              <div className="mt-2">
                <LapDes data={feedableData} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Laptops;