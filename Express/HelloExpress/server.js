const express = require("express");
const app = express();
const port = 8000;

const users = [
    {firstName: "Rocky", lastName: "Balboa"},
    {firstName: "James", lastName: "Smith"}
]

app.get("/api/users/:id", (request, response) => {

    console.log(request.params.id);

    response.json( users[request.params.id] );
});

console.log("hi, this is nodemon");
console.log("how are you");

app.listen( port, () => console.log(`Listening on port: ${port}`) );