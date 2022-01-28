import React, {useState} from "react";

const Tabs = (props) => {

    const tabStyle = {
        display: "inline-block",
        margin: "5px",
        height: "50px",
        width: "50px",
        border: "1px solid black",
    };

    const determineSelectedTabStyle = () => {
        if(props.index === props.currentTabIndex) {
            return {
                backgroundColor: "black",
                color: "white"
            }
        }
    }

    const tabHandler = () => {
        props.setCurrentTabIndex(props.index);
    }

    return (
        <div>
            <h2 onClick={tabHandler} style={tabStyle, determineSelectedTabStyle()}>{props.label}</h2>
            <textarea>{props.content}</textarea>
        </div>
    )
}

export default Tabs;