const express = require('express');

const { updateMenu } = require('../controllers/managerController');

const router = express.Router();

// 메뉴 DB에 저장
router.patch('/', updateMenu);

module.exports = router;
