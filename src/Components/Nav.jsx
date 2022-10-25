import React from "react";
import logopic from "../images/logo.png"
import { NavLink } from "react-router-dom";

function Nav() {
//equis 
    const expandNav = () => {
        const dashes = document.querySelectorAll(".dash");
        const dashContainer = document.querySelector(".dash-container")
        const ul = document.querySelector("nav ul");

        if (dashes[2].style.opacity === "0") {
            ul.style.right = "-100%";
            
            dashes[2].style.opacity = "1";
            dashContainer.style.position = "absolute";
        } else {
            ul.style.right = "0";
            
            dashes[2].style.opacity = "0";
            dashContainer.style.position = "fixed";
        }
    }


    return (
        <nav>
            <div className="logo"><img src={logopic} alt="logo" /></div>
            <div className="dash-container" onClick={expandNav}>
                <div className="dash"></div>
                <div className="dash"></div>
                <div className="dash"></div>
            </div>
            <ul>
                <li><NavLink to="/home" className={({ isActive }) => (isActive ? "active-nav nav-link" : "nav-link")}><span><b>00</b> HOME</span></NavLink></li>
                <li><NavLink to="/destination" className={({ isActive }) => (isActive ? "active-nav nav-link" : "nav-link")}><span><b>01</b> DESTINATION</span></NavLink></li>
                <li><NavLink to="/crew" className={({ isActive }) => (isActive ? "active-nav nav-link" : "nav-link")}><span><b>02</b> CREW</span></NavLink></li>
                <li><NavLink to="/technology" className={({ isActive }) => (isActive ? "active-nav nav-link" : "nav-link")}><span><b>03</b> TECHNOLOGY</span></NavLink></li>
            </ul>
        </nav>
    );
}

export default Nav;