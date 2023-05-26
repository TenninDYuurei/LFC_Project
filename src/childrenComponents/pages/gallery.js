import React from "react";
import { Link } from "react-router-dom";
// import {Outlet} from "react-router-dom";

function Gallery() {

    let styles = {
        width: 500,
        height: 500,
        backgroundColor: "black"
    }
    return <div style={styles}>
        <Link style={{color:"white"}} to="/devotionals">Devotionals</Link>
        <Link style={{color:"white"}} to="/videos">Video Skits</Link>
        <Link style={{color:"white"}} to="/images">Images</Link>
       {/* <Outlet></Outlet> */}
    </div>
}

export default Gallery