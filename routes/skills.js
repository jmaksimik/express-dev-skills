var express = require('express');
var router = express.Router();

const skillController = require('../controllers/skills');

/* GET users listing. */
router.get('/', skillController.index);
router.get('/:id', skillController.show)

module.exports = router;
