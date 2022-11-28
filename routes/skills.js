var express = require('express');
var router = express.Router();

const skillController = require('../controllers/skills');

/* GET users listing. */
router.get('/', skillController.index);
router.get('/new', skillController.new);
router.get('/:id', skillController.show);
router.post('/', skillController.create);
router.put('/:id', skillController.update);
router.delete('/:id', skillController.delete);
router.get('/:id/edit', skillController.edit);

module.exports = router;
