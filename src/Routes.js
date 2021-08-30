import React from "react";
import { Route, Switch } from "react-router-dom";
import Feedback from "./components/Feedback/Feedback";
import FooterDetail from "./components/footer/FooterDetail";
import Team from "./components/footer/Team";
import Home from "./components/homepage/Home";
import Laptops from "./components/laptop/Laptops";
import Mobiles from "./components/mobile/Mobiles";
import LaptopDetail from "./components/pages/LaptopDetail";
import MobileDetail from "./components/pages/MobileDetail";
import TabletDetail from "./components/pages/TabletDetail";
import Tablets from "./components/tablet/Tablets";
import ApplyPagination from "./components/test/ApplyPagination";
// import MobileApiTest from "./components/test/MobileApiTest";
import Test from "./components/test/Test";
// import Users from "./components/users/Users";

const Routes = () => {
    return (
        <React.Fragment>
            <Switch>
            <Route path='/' exact> <Home /> </Route>
            <Route path='/home'> <Home /> </Route>
            <Route path='/mobiles' exact> <Mobiles /> </Route>
            <Route path='/mobiles/:mobileId' > <MobileDetail /> </Route>
            <Route path='/tablets' exact> <Tablets /> </Route>
            <Route path='/tablets/:tabletId' > <TabletDetail /> </Route>
            <Route path='/test' > <Test /> </Route>
            <Route path='/applyPagination' > <ApplyPagination /> </Route>
            {/* <Route path='/users' > <Users /> </Route> */}
            <Route path='/laptop' exact > <Laptops /> </Route>
            <Route path='/laptop/:laptopId' > <LaptopDetail /> </Route>
            <Route path='/footer-detail' > <FooterDetail /> </Route>
            <Route path='/footer-team'> <Team /> </Route>
            <Route path='/footer-feedback' > <Feedback /> </Route>
            {/* <Route path='/mobile-api-test' > <MobileApiTest /> </Route> */}
            </Switch>
        </React.Fragment>
    )
}
export default Routes;