const express = require('express');
const router = express.Router();

// Sample route (you can expand later)
router.get('/', (req, res) => {
  res.send('Retailer routes working!');
});

module.exports = router;
