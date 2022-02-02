import React from "react";
import reactDom from "react-dom";
import usingLogo from "./reactIconf.png"


export default function Navbar(){
    return(
        <nav>
            <img src={usingLogo}></img>
            <h1>ReactFacts</h1>
            <h3>Dropdown components</h3>
        </nav>
    )
}