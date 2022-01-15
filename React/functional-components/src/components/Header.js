import React from "react";

const Header = (props) => {
    const { firstName, lastName } = props;
    return (
        <div>
            <h1>
                {/* Can also use {props.firstName} dot notation */}
                My name is {firstName} {lastName}
            </h1>
        </div>
    );
}

export default Header;