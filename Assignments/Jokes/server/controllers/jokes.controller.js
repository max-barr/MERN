const Joke = require("../models/jokes.model");

// Get all jokes
module.exports.findAllJokes = (req, res) => {
    Joke.find()
        .then((allJokes) => {
            res.json({ jokes: allJokes })
        })
        .catch((err) => {
            res.json({ message: "Something went wrong", error: err })
        });
}

// Get a single joke
module.exports.findOneJoke = (req, res) => {
    Joke.findOne({ _id: req.params.id })
        .then(oneJoke => {
            res.json({ joke: oneJoke })
        })
        .catch(err => {
            res.json({ message: "Something went wrong", error: err })
        });
}

// Create a joke
module.exports.createNewJoke = (req, res) => {
    Joke.create(req.body)
        .then(newJoke => {
            res.json({ joke: newJoke })
        })
        .catch(err => {
            res.json({ message: "Something went wrong", error: err })
        });
}

// Update a joke
module.exports.updateJoke = (req, res) => {
    Joke.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedJoke => {
            res.json({ joke: updatedJoke })
        })
        .catch(err => {
            res.json({ message: "Something went wrong", error: err})
        });
}

// Delete a joke
module.exports.deleteJoke = (req, res) => {
    Joke.deleteOne({ _id: req.params.id })
        .then(result => {
            res.json({ result: result })
        })
        .catch(err => {
            res.json({ message: "Something went wrong", error: err })
        });
}

