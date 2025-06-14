const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    userType: { type: String, enum: ['customer', 'retailer'], default: 'customer' }
});

module.exports = mongoose.model('User', userSchema);
