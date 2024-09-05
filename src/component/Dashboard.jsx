import React, { useState } from "react";
import Menus from "./Menus";
import { Routes, Route, Navigate } from "react-router-dom";

import GeoInformation from "../component/menuItems/GeoInformation";
import Hub from "../component/menuItems/Hub";
import OrderList from "../component/menuItems/OrderList";
import Overview from "../component/menuItems/Overview";
import Product from "../component/menuItems/Product";
import Users from "../component/menuItems/Users";
import Invoice from "./menuItems/Invoice";
import Inventory from "./menuItems/Inventory";
import Home from "./menuItems/Home";

import Attendance from "../component/feturesItems/Attendance";
import LogOut from "../component/feturesItems/LogOut";
import Settings from "../component/feturesItems/Settings";

import MenuOne from "../component/productSubMenus/MenuOne";
import MenuTwo from "../component/productSubMenus/MenuTwo";
import MenuThree from "../component/productSubMenus/MenuThree";
import NavbarHead from "./nav/NavbarHead";


const Dashboard = () => {

    const [dashboardShrink, setDashboardShrink] = useState(false)


    return (
        <div className="d-flex  ">


            <div
                className="position-sticky sticky-top overflow-y-scroll custom-scrollbar position-relative"
                style={{ width: `${dashboardShrink ? "70px" : "230px"}`, height: "100vh" }}
            >
                <Menus dashboardShrink={dashboardShrink} setDashboardShrink={setDashboardShrink} />
            </div>


            <div>

                <div className=" position-relative w-100">
                    {/* <NavbarHead /> */}
                </div>


                <Routes>
                    <Route path="/" element={<Navigate to="/home" />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/geo-information" element={<GeoInformation />} />
                    <Route path="/hub" element={<Hub />} />
                    <Route path="/order-list" element={<OrderList />} />
                    <Route path="/overview" element={<Overview />} />
                    <Route path="/product" element={<Product />} />
                    <Route path="/users" element={<Users />} />
                    <Route path="/invoice" element={<Invoice />} />
                    <Route path="/inventory" element={<Inventory />} />

                    <Route path="/attendance" element={<Attendance />} />
                    <Route path="/settings" element={<Settings />} />
                    <Route path="/logout" element={<LogOut />} />

                    <Route path="/sub-menu-1" element={<MenuOne />} />
                    <Route path="/sub-menu-2" element={<MenuTwo />} />
                    <Route path="/sub-menu-3" element={<MenuThree />} />
                </Routes>

                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
            </div>
        </div>
    );
};

export default Dashboard;
