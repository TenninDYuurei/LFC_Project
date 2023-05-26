import React from "react";
import { NavLink } from "react-router-dom";


function QuickLink(props) {
    return (
        <NavLink to={props.url} 
            rel="noreferrer"
            style={props.style}
            className={props.class}
        >{props.target}</NavLink>
    )
}

export default QuickLink