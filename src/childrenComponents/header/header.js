import React from "react";
import Logo from "./logo";
import NavBar from "./nav";

//Reference comments at the bottom for more information

function Header() {
    return (
        <header className="header">
            <Logo />
            <NavBar />
        </header>
    )
    
}

export default Header
/*
Logo comp is in logo.js
Nav bar contains all the links on the right side of the header.
Check nav.js for it
Also all the css for the header can be found in the index.css file
 */