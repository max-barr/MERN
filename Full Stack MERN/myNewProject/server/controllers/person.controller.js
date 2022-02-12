const Person = require("../models/person.model");

module.exports.index = (req, res) => {
    res.json({ message: "Hello World" });
};

module.exports.createPerson = (req, res) => {
    Person.create(req.body)
        .then(person => res.json(person))
        .catch(err => res.json(err))
}

module.exports.findAllPeople = (req, res) => {
    Person.find()
        .then((allPeople) => {
            res.json({ people: allPeople })
        })
        .catch((err) => {
            res.json({ message: "Something went wrong", error: err })
        });
}