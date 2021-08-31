import React, { useState } from "react";
import Filter from "../filter/TabletFilter/Filter";
import TabDes from "./TabDes";
import "./tablet.css";
import TabletData from "./tabletData.json";

const Tablet = () => {
  let ud =[];
  const [feedableData, setFeedableData] = useState(TabletData);

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
    console.log(Data.length);
    return Data.filter((Data) => {
      const laptopPrice = Data.Discounted_price;
      if (price === "9000") {
        return laptopPrice < 9000;
      } else if (price === "15000") {
        return laptopPrice >= 9000 && laptopPrice < 15000;
      } else if (price === "18000") {
        return laptopPrice >= 15000 && laptopPrice < 18000;
      } else if (price === "25000") {
        return laptopPrice >= 18000 && laptopPrice < 25000;
      } else if (price === "35000") {
        return laptopPrice >= 25000 && laptopPrice < 35000;
      } else {
        return laptopPrice >= 35000;
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

  const applyAllFilter = (brand, ram, price) => {
    ud = brandHandler(brand, TabletData);
    ud = ramHandler(ram, ud);
    ud = priceHandler(price, ud);
    setFeedableData(ud);
  };

  return (
    <React.Fragment>
      <div className="container-fluid ">
        <div className="row">
          <div className="full-line">
            <div className="">
              <Filter applyFilter={applyAllFilter} />
            </div>
          </div>
          <div className="lapDes-container">
            <div> Showing 1 – 20 of 2000 results for "laptop".</div>
            <div className="mt-2">
              <TabDes data={feedableData} />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Tablet;
