import React from "react";
import Brands from "./Brands";
import Price from "./Price";
import Ram from "./Ram";
import Storage from "./Storage";
import Stars from "./Stars";
import Stores from "./Stores";
import OperatingSystem from "./OperatingSystem";
import Calling from "./Calling";
import Display from "./Display";
import Camera from "./Camera"
import ScreenSize from "./ScreenSize";
import BatteryCapacity from "./Battery";

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
                  <li className="nav-item"> <Price /></li>
                  <li className="nav-item"><Brands /></li>
                  <li className="nav-item"><Ram /></li>
                  <li className="nav-item"><Storage /></li>
                  <li className="nav-item"><Stores /> </li>
                  <li className="nav-item"><Calling/> </li>
                  <li className="nav-item"><OperatingSystem/> </li>
                  <li className="nav-item"><Camera/> </li>

                  <li className="nav-item"><Display/></li>
                  <li className="nav-item"><ScreenSize/></li>
                  <li className="nav-item"><BatteryCapacity/></li>
                  <li className="nav-item"><Stars /></li>
                </ul>
            </div>
          </nav>
        </div>  

            
            
            
            
            
            
        </React.Fragment>
    )
}
export default Filter;
