var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.redirect("/skills"); // redirect for now
  res.render('index', { title: "John's Developer Skills" });
});

module.exports = router;
