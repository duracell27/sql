const express = require('express');
const router = express.Router();

const auth = require('../controllers/auth.js');
// import { register, login, getMe } from "../controllers/auth.js";
// import { checkAuth } from "../utils/check.js";

//Register
//http://localhost:3002/api/auth/register
router.post('/register', auth.register)

//Login
//http://localhost:3002/api/auth/login
router.post('/login', auth.login)

//Get me
//http://localhost:3002/api/auth/getMe
router.get('/getMe', auth.getMe)

module.exports = router