const express = require('express');
const router = express.Router();

router.use('/api/v1/search', require('./search'));

module.exports = router;
