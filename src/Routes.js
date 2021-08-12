import React from "react";
import { Route, Switch } from "react-router-dom";
import Contact from "./components/Contact";
import FooterDetail from "./components/footer/FooterDetail";
import Home from "./components/homepage/Home";
import Laptops from "./components/laptop/Laptops";
import Mobiles from "./components/mobile/Mobiles";
import LaptopDetail from "./components/pages/LaptopDetail";
import Tablets from "./components/tablet/Tablets";
import ApplyPagination from "./components/test/ApplyPagination";
import Test from "./components/test/Test";
import Users from "./components/users/Users";

const Routes = () => {
    return (
        <React.Fragment>
            <Switch>
            <Route path='/home' > <Home /> </Route>
            <Route path='/laptop' exact > <Laptops /> </Route>
            <Route path='/mobiles' > <Mobiles /> </Route>
            <Route path='/tablets' > <Tablets /> </Route>
            <Route path='/test' > <Test /> </Route>
            <Route path='/applyPagination' > <ApplyPagination /> </Route>
            <Route path='/users' > <Users /> </Route>
            <Route path='/laptop/:laptopId' > <LaptopDetail /> </Route>
            <Route path='/footer-detail' > <FooterDetail /> </Route>
            <Route path='/contactus' > <Contact /> </Route>
            </Switch>
        </React.Fragment>
    )
}
export default Routes;