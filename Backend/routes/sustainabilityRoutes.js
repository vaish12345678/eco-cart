// backend/routes/sustainabilityRoutes.js

const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send("Sustainability API working");
});

module.exports = router;
