const express = require('express');

const { getMenu } = require('../controllers/managerController');

const router = express.Router();

// 메뉴 DB에 저장
router.get('/', getMenu);

module.exports = router;
