const express = require('express');

const { getCount } = require('../controllers/userController');

const router = express.Router();

router.get('/', getCount);

module.exports = router;
