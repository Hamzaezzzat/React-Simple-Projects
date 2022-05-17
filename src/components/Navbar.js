import React from "react";
import logo from "../images/logo.svg";
// import style from "./components.module.css";
import "../style.css";

export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="logoSection">
                <img src={logo} reactLogo alt="" />
                <h3>ReactFacts</h3>
            </div>
            <h4> React Course Project - 1</h4>
            <div className="toggle-mode-container">
                <span>Light</span>
                <div className="toggle-mode-holder">
                    <div className="toggle-mode-circle circle-mode-dark"></div>
                </div>
                <span>Dark</span>
            </div>
        </nav>
    );
}