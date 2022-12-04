// We can declare a variable and set it equal to a function and call that function using the variable name

let exampleFunction = function(message) {
    console.log(message);
};

exampleFunction( 'hello from exampleFunction!' );

// we can also pass a function as a parameter into a parent function. In this case let's call this parameter "callback" and pass it a message.

function parentFunction( callback ) {
    callback( 'information from the parent function' );
};

parentFunction(exampleFunction);