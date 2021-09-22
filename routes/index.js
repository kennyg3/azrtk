const express = require('express');
const router = express.Router();
const asyncHandler = (handler) => (req, res, next) =>
  handler(req, res, next).catch(next);
router.get(
  '/test',
  asyncHandler(async (req, res) => {
    res.render('home');
    console.log('test');
  })
);
module.exports = router;
