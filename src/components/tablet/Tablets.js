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
      <div className="row mt-4 mx-1">
      <div className="row">
        <SearchProduct
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
      </div>
      <div className='row'>
        <div className="col-3 pl-4">
          <div
            className="filter container"
            style={{
              display: "inline-block",
              minWidth: "30px",
              width: "19.1vw",
              backgroundColor: "rgb(240,240,240)",
              padding: "2vw",
              overflow: "hidden",
              border: "2px solid rgb(68,88,99)",
              borderRadius: "1vw",
              fontFamily: "Quicksand",
            }}
          >
            <h4>Filters</h4>
            <br />
            <Filter />
            <br />
          </div>
        </div>
        <div className="col-9">
          <div> Showing 1 – 20 of 2000 results for "tablet".</div>
          <div>
            <TabDes data={searchedData} />
          </div>
        </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Tablet;
