const express = require('express');
const router = express.Router();
const {} = require('../Controllers/AdminController')
const verifyTokenAdmin = require('../Middleware/AdminAuth')


router.post('/', login)

router.post('/create', register)
router.get('/getUsers', verifyTokenAdmin ,allResponsables)
router.get('/getUsers/:wilaya', verifyTokenAdmin ,responsablePerWilaya)
router.get('/search', verifyTokenAdmin ,search)
router.get('/fires', verifyTokenAdmin ,fires)
router.get('/dashboard', verifyTokenAdmin ,dashboard)
module.exports = router