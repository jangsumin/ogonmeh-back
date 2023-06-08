const express = require('express');

const { postMenu } = require('../controllers/managerController');

const router = express.Router();

// 메뉴 DB에 저장
router.post('/', postMenu);

module.exports = router;
