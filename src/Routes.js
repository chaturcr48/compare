import React from "react";
import { Route } from "react-router-dom";
import Home from "./components/homepage/Home";
import Laptops from "./components/laptop/Laptops";
import Mobiles from "./components/mobile/Mobiles";
import Tablets from "./components/tablet/Tablets";

const Routes = () => {
    return (
        <React.Fragment>
            <Route path='/home' > <Home /> </Route>
            <Route path='/laptops' > <Laptops /> </Route>
            <Route path='/mobiles' > <Mobiles /> </Route>
            <Route path='/tablets' > <Tablets /> </Route>
        </React.Fragment>
    )
}
export default Routes;