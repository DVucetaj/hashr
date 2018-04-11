const express = require('express');
const router = express.Router();

router.get('/:search_term', (req, res) => {
  const { search_term } = req.params;
  res.status(200).json({ data: [1, 2, 3] });
});

module.exports = router;