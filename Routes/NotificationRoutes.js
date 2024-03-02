const express = require('express');
const router = express.Router();
const {getNotif,check} = require('../Controllers/NotificationController')
const verifyTokenAdmin = require('../Middleware/AdminAuth')


router.get('/',verifyTokenAdmin , getNotif)

router.get('/notify', check)

module.exports = router