const express = require('express');
const router = express.Router();
const homeController = require('./src/controllers/homeController');
const loginController = require('./src/controllers/loginController');
// Rotas da Home
router.get('/', homeController.index);

//Rotas login 
router.get('/login/index', loginController.index)
router.post('/login/register', loginController.register)

module.exports = router;