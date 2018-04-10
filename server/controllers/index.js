const express = require('express');
const router = express.Router();

router.use('/', require('./home'));
router.use('/api/v1/search', require('./search'));

module.exports = router;
