const Pet = require("../models/pet.model");

module.exports = {

    getAllPets: (req, res) => {
        Pet.find({})
        .then((allPets) => res.json(allPets))
        .catch((err) => res.status(400).json(err))
    },

    getOnePet: (req, res) => {
        Pet.findById({ _id: req.params.id })
        .then((onePet) => res.json(onePet))
        .catch((err) => res.status(400).json(err))
    },

    createPet: (req, res) => {

        // const { skillOne, skillTwo, skillThree } = req.body;
        // req.body.skills = [ skillOne, skillTwo, skillThree ];
        // delete req.body.skillOne;
        // delete req.body.skillTwo;
        // delete req.body.skillThree;
        
        Pet.create(req.body)
        .then((newPet) => res.json(newPet))
        .catch((err) => res.status(400).json(err))
    },

    updatePet: (req, res) => {
        Pet.findByIdAndUpdate(
            { _id: req.params.id },
            req.body,
            {
            new: true,
            runValidators: true
            })
            .then((updatedPet) => res.json(updatedPet))
            .catch((err) => res.status(400).json(err))
    },

    deletePet: (req, res) => {
        Pet.deleteOne({ _id: req.params.id })
        .then((deletedId) => res.json(deletedId))
        .catch((err) => res.status(400).json(err))
    }
}