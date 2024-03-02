const express = require('express');
const router = express.Router();
const {create, getDevices, search, deviceSensors, regionDevices} = require('../Controllers/DeviceController')
const verifyTokenRes = require('../Middleware/ResponsableAuth')
const verifyTokenAdmin = require('../Middleware/AdminAuth')


 router.post('/',verifyTokenRes , create)
 router.get('/',verifyTokenAdmin , getDevices)
 router.get('/search',verifyTokenAdmin , search)
 router.get('/region',verifyTokenRes , regionDevices)
 router.get('/:droneId',verifyTokenRes , deviceSensors)


module.exports = router