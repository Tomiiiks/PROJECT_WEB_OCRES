var express = require("express");
var router = express.Router();
const axios = require('axios');

/* GET home page. */
router.get("/", function(req, res, next) {
  res.send("Thiss is my homepage");

});

module.exports = router;
