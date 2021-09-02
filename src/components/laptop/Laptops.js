import React, { useState } from "react";

import Filter from "../filter/LaptopFilter/Filter";
import "./Laptops.css";
import LapDes from "./LapDes";
import Data from "./laptopData.json";
// import SearchProduct from "../searchBar/SearchProduct";

const Laptops = () => {
  let ud = [];

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
    });
  };
  const filterByRam = (Data, ram) => {
    return Data.filter((Data) => {
      const laptopRam = Data.RAM;
      return laptopRam.includes(ram);
    });
  };
  const filterByPrice = (Data, price) => {
    return Data.filter((Data) => {
      const laptopPrice = Data.Discounted_price;
      if (price === "30000") {
        return laptopPrice < 30000;
      } else if (price === "50000") {
        return laptopPrice >= 30000 && laptopPrice < 50000;
      } else if (price === "70000") {
        return laptopPrice >= 50000 && laptopPrice < 70000;
      } else if (price === "90000") {
        return laptopPrice >= 70000 && laptopPrice < 90000;
      } else {
        return laptopPrice >= 90000;
      }
    });
  };
  const filterBySSD = (Data, ssd) => {
    return Data.filter((Data) => {
      const laptopSSD = Data.SSD_Capacity;
      return laptopSSD.includes(ssd);
    });
  };
  const filterByWeight = (Data, weight) => {
    return Data.filter((Data) => {
      const laptopWeight = Data.Weight;
      if (weight === "1.25 kg") {
        return laptopWeight <= "1.25 kg";
      } else if (weight === "1.251 kg") {
        return laptopWeight > "1.25 kg" && laptopWeight <= "1.5 kg";
      } else if (weight === "1.51 kg") {
        return laptopWeight > "1.5 kg" && laptopWeight <= "1.75 kg";
      } else if (weight === "1.751 kg") {
        return laptopWeight > "1.75 kg" && laptopWeight <= "2.0 kg";
      } else if (weight === "2.1 kg") {
        return laptopWeight > "2.0 kg" && laptopWeight <= "2.25 kg";
      } else {
        return laptopWeight > "2.25 kg";
      }
    });
  };

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
  };
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
  };
  const priceHandler = (price, ud) => {
    let priceData = [];
    let key = Object.keys(price);
    let value = Object.values(price);
    let filterData = [];
    let dataFeedToPrice = ud;
    for (let i = 0; i < key.length; i++) {
      if (value[i] === true) {
        filterData = filterByPrice(dataFeedToPrice, key[i]);
        priceData = [...priceData, ...filterData];
      }
    }
    if (priceData.length === 0) {
      return ud;
    } else {
      return priceData;
    }
  };
  const ssdHandler = (ssd, ud) => {
    let ssdData = [];
    let key = Object.keys(ssd);
    let value = Object.values(ssd);
    let filterData = [];
    let dataFeedToSSD = ud;
    for (let i = 0; i < key.length; i++) {
      if (value[i] === true) {
        filterData = filterBySSD(dataFeedToSSD, key[i]);
        ssdData = [...ssdData, ...filterData];
      }
    }
    if (ssdData.length === 0) {
      return ud;
    } else {
      return ssdData;
    }
  };
  const weightHandler = (weight, ud) => {
    let weightData = [];
    let key = Object.keys(weight);
    let value = Object.values(weight);
    let filterData = [];
    let dataFeedToWeight = ud;
    for (let i = 0; i < key.length; i++) {
      if (value[i] === true) {
        filterData = filterByWeight(dataFeedToWeight, key[i]);
        weightData = [...weightData, ...filterData];
      }
    }
    if (weightData.length === 0) {
      return ud;
    } else {
      return weightData;
    }
  };

  const applyAllFilter = (brand, ram, price, ssd, weight) => {
    ud = brandHandler(brand, Data);
    ud = ramHandler(ram, ud);
    ud = priceHandler(price, ud);
    ud = ssdHandler(ssd, ud);
    ud = weightHandler(weight, ud);
    setFeedableData(ud);
  };

  return (
    <React.Fragment>
      <div className="container-fluid mt-2 mx-4 px-2" style={{ width: "auto" }}>
        {/* <div className="row">
          <SearchProduct
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
        </div> */}
        <div className="row" style={{ justifyContent: "center" }}>
          <div className="full-line">
            <div className="">
              <Filter applyFilter={applyAllFilter} />
            </div>
          </div>

          {/* <div className="col-9"> */}
          <div className="lapDes-container">
            <div> Showing 1 – 20 of 2000 results for "laptop".</div>
            <div className="mt-2">
              <LapDes data={feedableData} />
            </div>
          </div>
          {/* </div> */}
        </div>
      </div>
    </React.Fragment>
  );
};
export default Laptops;
