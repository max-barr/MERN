const express = require("express");
const faker = require("faker");

const app = express();
const port = 1818;


// Function to create a new fake user
const createUser = () => {
    const newUser = {
        id: faker.datatype.number(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        // phoneNumer: faker.phone.phoneNumber(),
        email: faker.internet.email(),
        password: faker.internet.password()
    };
    return newUser;
};

// function to create a new fake company
const createCompany = () => {
    const newCompany = {
        id: faker.datatype.number(),
        name: faker.company.companyName(),
        address: {
            street: faker.address.streetAddress(),
            city: faker.address.city(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country()
        }
    }
    return newCompany;
};

// API route to return a new user
app.get("/api/users/new", (request, response) => {
    response.json( createUser() );
});

// API route to return a new company
app.get("/api/companies/new", (request, response) => {
    response.json( createCompany() );
});

// API route to return a new user and company
app.get("/api/user/company", (request, response) => {
    const newUser = createUser();
    const newCompany = createCompany();
    
    response.json({
        newUser: newUser,
        newCompany: newCompany
    });
});


// App listener to run the server on port
app.listen( port, () => console.log(`Listening on port: ${ port }`) );