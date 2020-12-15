const express = require('express');
const numbersController = require('../controllers/numbers');
const router = express.Router();

router.get('/', numbersController.getMainPage);
router.post('/', numbersController.postNewNumber);
router.post('/delete', numbersController.deleteNumber);

module.exports = router;