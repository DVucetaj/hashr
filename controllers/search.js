const express = require('express');
const router = express.Router();
const hashtagAPI = require('../middleware/hashtag_api');

router.get('/:search_term', (req, res) => {
  const { search_term } = req.params;
  hashtagAPI(search_term).then((results) => {
    res.status(200).json(results);
  });
});

module.exports = router;
