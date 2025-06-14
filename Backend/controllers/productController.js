const Product = require('../models/Product');

exports.addProduct = async (req, res) => {
    const product = new Product(req.body);
    await product.save();
    res.status(201).json(product);
};

exports.getAllProducts = async (req, res) => {
    const products = await Product.find();
    res.json(products);
};
  