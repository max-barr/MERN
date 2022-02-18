const Product = require("../models/product.model");

// create a new product
module.exports.createProduct = (req, res) => {
    Product.create(req.body)
        .then((product) => res.json( product ))
        .catch(err => res.status(400).json({ err }));
}

// find all products
module.exports.findAllProducts = (req, res) => {
    Product.find()
        .then((allProducts) => {
            res.json( allProducts )
        })
        .catch(err => res.status(400).json({ err }));
}

// find a single product
module.exports.findOneProduct = (req, res) => {
    Product.findOne({ _id: req.params.id })
        .then((oneProduct) => {
            res.json( oneProduct )
        })
        .catch(err => res.status(400).json({ err }));
}

// update a product
module.exports.updateProduct = (req, res) => {
    Product.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedProduct => {
            res.json( updatedProduct )
        })
        .catch(err => res.status(400).json({ err }));
}

// delete product
module.exports.deleteProduct = (req, res) => {
    Product.deleteOne({ _id: req.params.id })
        .then((deleteConfirmation) => {
            res.json( deleteConfirmation )
        })
        .catch(err => res.status(400).json({ err }));
}