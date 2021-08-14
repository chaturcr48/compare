import React, {useState} from "react";
import Filter from "../filter/TabletFilter/Filter";
import SearchTablet from "../searchBar/SearchTablet";
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
        Data.Brand + " "+
        Data.Series + " "+
        Data.Type + " "+
        Data.OS_Architecture + " "+
        Data.Processor_Brand + " "+
        Data.Processor_Name + " "+
        Data.Processor_Generation + " ";

      const laptopBrand = laptopHeading.toLowerCase();
      return laptopBrand.includes(query);
    });
  };
  const searchedData = filterPosts(TabletData, searchQuery);

  return (
    <React.Fragment>
      <div className="row mt-4 mx-1">
      <div className="row">
        <SearchTablet
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
          <div className="my-2" style={{ gridRow: "1/2" }}>
            {searchedData.map((tablet) => (
              <div
                className="card mb-3"
                key={tablet.id}
                style={{ maxWidth: "800px", border: "none" }}
              >
                <div className="row g-0">
                  <div className="col-md-4">
                    <img src="" className="img-fluid rounded-start" alt="..." />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">{tablet.Brand} </h5>
                      <p className="card-text">
                        {tablet.Display_Size} {tablet.OS}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Tablet;
