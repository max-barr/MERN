import React from "react";

const Box = (props) => {
    const boxStyle = {
        display: "inline-block",
        margin: "15px",
        height: "50px",
        width: "50px",
        background: props.color
    };

    return (
        <div style={ boxStyle }></div>
    )
}

export default Box;