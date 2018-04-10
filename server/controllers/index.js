const express = require('express');
const router = express.Router();

router.use('/', require('./home'));
router.use('/search', require('./search'));

module.exports = router;
