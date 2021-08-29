import React from "react";
import FilterBrand from "./FilterBrand";
import FilterPrice from "./FilterPrice";
import FilterRam from "./FilterRam";
import BroadbandGeneration from "./BroadbandGeneration";
import StorageCapacity from "./StorageCapacity";
import Stars from "./Stars.js";
import Stores from "./Stores.js";
import RearCamera from "./RearCamera";
import FrontCamera from "./FrontCamera";
import '../../mobile/mobile.css';

const Filter = () => {
    return (
        <React.Fragment>
            <div className='filter py-2 pl-2 mr-3' style={{'backgrounColor': 'rgba(77, 88, 99, 0.088)'}}>
        <h5 className='mr-3' >Filters</h5>
        
        <nav className="navbar navbar-expand-lg navbar-light ml-2">
            <button className="navbar-toggler mb-2" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto" style={{'flexDirection' : 'column'}}>
                  <li className="nav-item"> <FilterPrice /></li>
                  <li className="nav-item"><FilterBrand /></li>
                  <li className="nav-item"><FilterRam /></li>
                  <li className="nav-item"><StorageCapacity /></li>
                  <li className="nav-item"><Stars /></li>
                  <li className="nav-item"><Stores /> </li>
                  <li className="nav-item"><RearCamera /></li>
                  <li className="nav-item"><FrontCamera /></li>
                  <li className="nav-item"><BroadbandGeneration /></li>
                </ul>
            </div>
          </nav>
        </div>           
        </React.Fragment>
    )
}
export default Filter;