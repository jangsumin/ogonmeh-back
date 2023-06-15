const express = require('express');

const { updateCount } = require('../controllers/userController');

const router = express.Router();

router.put('/', updateCount);

module.exports = router;
