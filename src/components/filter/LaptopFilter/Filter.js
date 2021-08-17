import React from "react";
import '../../../css/Filter.css';
import FilterBrand from "./FilterBrand";
import FilterPrice from "./FilterPrice";
import FilterRam from "./FilterRam";
import StorageCapacity from "./StorageCapacity";
import Stars from "./Stars";
import Stores from "./Stores";
import Weight from "./Weight";
import OperatingSystem from "./OperatingSystem";
import '../../laptop/Laptops.css'

const Filter = () => {
  return (
    <React.Fragment>
      <div className='filter py-2 pl-2 mr-3' style={{'backgrounColor': 'rgba(77, 88, 99, 0.088)'}}>
        <h5 className='mr-3' >Filters</h5>
        
        <nav className="navbar navbar-expand-lg navbar-light ml-2" >
            <button className="navbar-toggler mb-2" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto" style={{'flexDirection' : 'column'}}>
                  <li className="nav-item"> <FilterPrice /></li>
                  <li className="nav-item"><FilterBrand /></li>
                  <li className="nav-item"><FilterRam /></li>
                  <li className="nav-item"><StorageCapacity /></li>
                  <li className="nav-item"><Stores /> </li>
                  <li className="nav-item"><Weight /></li>
                  <li className="nav-item"><OperatingSystem /> </li>
                  <li className="nav-item"><Stars /></li>
                </ul>
            </div>
          </nav>
        </div>
    </React.Fragment>
  );
};
export default Filter;
