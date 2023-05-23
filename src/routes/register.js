const express = require('express');

const { registerMenu } = require('../controllers/managerController');

const router = express.Router();

// 메뉴 DB에 저장
router.post('/', registerMenu);

module.exports = router;
