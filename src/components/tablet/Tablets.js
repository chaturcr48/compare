import React, {useState} from "react";
import Filter from "../filter/TabletFilter/Filter";
import SearchProduct from "../searchBar/SearchProduct";
import TabDes from "./TabDes";
import "./tablet.css";
import TabletData from "./TabletData.json";

const Tablet = () => {

  const [searchQuery, setSearchQuery] = useState("");

  const filterPosts = (TabletData, query) => {
    if (!query) {
      return TabletData;
    }

    return TabletData.filter((Data) => {
      const laptopHeading =
        Data.Brand;

      const laptopBrand = laptopHeading.toLowerCase();
      return laptopBrand.includes(query);
    });
  };
  const searchedData = filterPosts(TabletData, searchQuery);

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
              <TabDes data={searchedData} />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Tablet;
