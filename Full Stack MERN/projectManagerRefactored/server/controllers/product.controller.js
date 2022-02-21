const Product = require("../models/product.model");

module.exports = {

    getAllProducts: (req, res) => {
        Product.find({})
        .then((allProducts) => res.json(allProducts))
        .catch((err) => res.status(400).json(err))
    },

    getOneProduct: (req, res) => {
        Product.findById({ _id: req.params.id })
        .then((oneProduct) => res.json(oneProduct))
        .catch((err) => res.status(400).json(err))
    },

    createProduct: (req, res) => {
        Product.create(req.body)
        .then((newProduct) => res.json(newProduct))
        .catch((err) => res.status(400).json(err))
    },

    updateProduct: (req, res) => {
        Product.findByIdAndUpdate(
            { _id: req.params.id },
            req.body,
            {
            new: true,
            runValidators: true
            })
            .then((updatedProduct) => res.json(updatedProduct))
            .catch((err) => res.status(400).json(err))
    },

    deleteProduct: (req, res) => {
        Product.deleteOne({ _id: req.params.id })
        .then((deletedId) => res.json(deletedId))
        .catch((err) => res.status(400).json(err))
    }
}