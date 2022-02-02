import React from "react";

const WordWithColor = (props) => {
    const { greeting, color, bgcolor } = props;

    const h1Style = {
        color: color,
        backgroundColor: bgcolor
    }

    return (
        <div>
            <h1 style={ h1Style }>The word is: { greeting }</h1>
        </div>
    );
}

export default WordWithColor;