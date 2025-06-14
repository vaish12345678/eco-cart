const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  material: { type: String, required: true },
  weight: { type: Number, required: true },
  supplier: { type: String, required: true },
  sustainabilityScore: { type: Number, required: true },
  price: { type: Number, required: true },
  retailerId: { type: mongoose.Schema.Types.ObjectId, ref: 'Retailer' } // Optional: if you want to link retailer
});

module.exports = mongoose.model('Product', productSchema);
