const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');
const auth = require('../middleware/auth');

router.post('/users', userController.createUser);
router.get('/users', auth, userController.getUsers);
router.post('/signUp', userController.signIn);
router.post('/login', userController.login);

module.exports = router;
