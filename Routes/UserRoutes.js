const express = require('express');
const router = express.Router();
const {login, register} = require('../Controllers/UserController')
const verifyTokenRes = require('../Middleware/ResponsableAuth')


router.post('/', login)

router.post('/create', register)


module.exports = router