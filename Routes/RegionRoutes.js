const express = require('express');
const router = express.Router();
const {create, getRegion, regionPerWilaya} = require('../Controllers/RegionController')
const verifyTokenAdmin = require('../Middleware/AdminAuth')


router.post('/',verifyTokenAdmin , create)
router.get('/', verifyTokenAdmin ,getRegion)
router.get('/:wilaya', verifyTokenAdmin ,regionPerWilaya)

module.exports = router