import React from "react";
import { Route } from "react-router-dom";
import Home from "./components/homepage/Home";
import Laptops from "./components/laptop/Laptops";
import Mobiles from "./components/mobile/Mobiles";
import Tablets from "./components/tablet/Tablets";
import ApplyPagination from "./components/test/ApplyPagination";
import Test from "./components/test/Test";
import Detail from "./components/Detail/Detail";

const Routes = () => {
    return (
        <React.Fragment>
            <Route path='/home' > <Home /> </Route>
            <Route path='/laptops' > <Laptops /> </Route>
            <Route path='/mobiles' > <Mobiles /> </Route>
            <Route path='/tablets' > <Tablets /> </Route>
            <Route path='/test' > <Test /> </Route>
            <Route path='/applyPagination' > <ApplyPagination /> </Route>
            <Route path='/detail' > <Detail /> </Route>
        </React.Fragment>
    )
}
export default Routes;