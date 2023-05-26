import React from "react";
import { useNavigate } from "react-router-dom";


function About() {

    const navigate = useNavigate();
    let styles = {
        width: 500,
        height: 500,
        backgroundColor: "black",
        color:"white"
    }
    return <div style = {styles}>
        <button style={{ backgroundColor: "white" }}
            onClick={() => { navigate(-1) }}
            //alternatively you can add path in quotes
        >
                Go back
        </button>
    </div>
}

export default About