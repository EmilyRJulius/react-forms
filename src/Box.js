import React from "react";

const Box = ({width, height, color}) => {
    const boxStyle = {
        width: width,
        height: height,
        color: color
    }
    return(
        <div style = {boxStyle}></div>
    )
}

export default Box;