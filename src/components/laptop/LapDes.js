import React from "react";
import { Link } from "react-router-dom";
import Data from "./Data.json";
import "../../css/LapDes.css";

export const LapDes = () => {
  return (
    <div>
      {Data.map((Data) => (
        <div className="card full-card" key={Data.id} style={{ border: "none" }}>
          <div className="row">
            <div className="col-md-4 image">
              <Link to={"/laptop/" + Data.id}>
                <img
                  src={Data.imgUrl}
                  className="img-fluid"
                  alt="..."
                />
              </Link>
            </div>
            <div className="col-md-8">
              <div className="px-2">
                <h5 className="card-title title">
                  <Link to={"/laptop/" + Data.id}>
                    {Data.Brand} {Data.Series} {Data.Type}
                    {Data.OS_Architecture} {Data.Processor_Brand}
                    {Data.Processor_Name} {Data.Processor_Generation}
                  </Link>
                </h5>
                <ul className="card-text">
                  <li>
                    Storage : {Data.SSD_Capacity} SSD {Data.HDD_Capacity} HDD
                  </li>
                  <li>
                    Ram : {Data.RAM} {Data.RAM_Type}
                  </li>
                  <li> Suitable_For : {Data.Suitable_For}</li>
                  <li>
                    Battery : {Data.Battery_Cell} {Data.Battery_Backup}
                  </li>
                  <li>
                    Graphic : {Data.Dedicated_Graphic_Memory_Capacity}{" "}
                    {Data.Dedicated_Graphic_Memory_Type}
                  </li>
                  <li> Operating System : {Data.Operating_System}</li>
                  <li> Screen_Size : {Data.Screen_Size}</li>
                </ul>
              </div>
            </div>
          </div>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default LapDes;
