import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

function WithNav(props) {
    return (
        <>
            <Navbar></Navbar>
            <Outlet/>
            {/* {props.children} */}
        </>
        
    )
}

export default WithNav;