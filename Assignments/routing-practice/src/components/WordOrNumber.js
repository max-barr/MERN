import React from "react";

const WordOrNumber = (props) => {
    console.log(props.arg);
    console.log(typeof(props.arg));
    console.log(isNaN(props.arg));
    
    return (
        <div> 
            { isNaN(props.arg)  
            ?    
                <h1>The word is: { props.arg }</h1>
            :
                <h1>The number is: { props.arg }</h1>
            }    
        </div> 
    );
}

export default WordOrNumber;