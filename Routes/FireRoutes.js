const express = require('express');
const router = express.Router();
const {create, RegionFire} = require('../Controllers/FireController')
const verifyTokenRes = require('../Middleware/ResponsableAuth')


router.post('/',verifyTokenRes , create)
router.get('/',verifyTokenRes , RegionFire)

module.exports = router