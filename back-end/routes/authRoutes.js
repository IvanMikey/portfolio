const express = require('express');
const { register, login } = require('../controllers/authController');

const router = express.Router();

// Маршрут для регистрации
router.post('/register', register);

// Маршрут для логина
router.post('/login', login);

module.exports = router;