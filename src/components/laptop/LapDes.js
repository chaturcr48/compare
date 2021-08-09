import React from 'react'
import Data from './Data.json'

export const LapDes = () => {
    return (
        <div>
            {Data.map((Data)=>(
                <div className="card"
                key={Data.id}
                style={{ maxWidth: "800px", border: "none" }}>
                    <div className="row g-0 pb-0">
                        <div className="col-md-4 py-2">
                            <img src={Data.imgUrl} className="img-fluid rounded-start"
                            alt="..."/>
                        </div>
                        <div className="col-md-8">
                            <div className="card-body p-2">
                            <h5 className="card-title">{Data.Brand}  {Data.Series} {Data.Model_Number} {Data.Type} {Data.OS_Architecture}  {Data.Processor_Brand} {Data.Processor_Name} {Data.Processor_Generation}  </h5>                            
                            <ul className="card-text"> 
                                <li> Storage : {Data.SSD_Capacity} SSD {Data.HDD_Capacity } HDD</li>
                                <li> Ram : {Data.RAM} {Data.RAM_Type}</li>
                                <li> Suitable_For : {Data.Suitable_For }</li>
                                <li> Battery : {Data.Battery_Cell } {Data.Battery_Backup }</li>
                                <li> Graphic : {Data.Dedicated_Graphic_Memory_Capacity} {Data.Dedicated_Graphic_Memory_Type}</li>
                                <li> Operating System : {Data.Operating_System}</li>
                                <li> Screen_Size : {Data.Screen_Size}</li>
                            </ul>
                            </div>
                        </div>
                    </div><hr/>                    
                </div>
            ))}
        </div>
    )
}

export default LapDes;