const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

// Add Product
router.post('/add', async (req, res) => {
  try {
    const newProduct = new Product(req.body);
    const savedProduct = await newProduct.save();
    res.status(201).json(savedProduct);
  } catch (err) {
    console.error('Error in /api/products/add:', err);
    res.status(400).json({ message: err.message });
  }
});

// Get All Products
router.get('/all', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    console.error('Error in /api/products/all:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

// Get Products by Retailer ID (Assuming retailerId is stored in Product)
router.get('/retailer/:retailerId', async (req, res) => {
  try {
    const products = await Product.find({ retailerId: req.params.retailerId });
    res.json(products);
  } catch (err) {
    console.error('Error in /api/products/retailer/:retailerId:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

// Delete Product by ID
router.delete('/delete/:id', async (req, res) => {
  try {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);
    if (!deletedProduct) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json({ message: 'Product deleted successfully' });
  } catch (err) {
    console.error('Error deleting product:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
