import React from "react";

function Logo() {
    const styles = {
        backgroundColor: "black",
        width: 150,
        height: "15vh",
        display: "flex",
        justifyContent: "center",
        alignItems : "center"
    }

    return (
        <div>
            <div style={styles}>
                <div style={{fontSize : "3rem"}} className="whiteBg">logo</div>
            </div>
        </div>
    )
}

export default Logo