
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();


exports.create = async (req, res) => {
    const {ref, longitude, latitude,regionId, azimuth,supervision, activeStatus} = req.body;
    try {
       await prisma.device.create({
            data: {
                ref: ref,
                longitude: longitude,
                latitude: latitude,
                regionId:regionId,
                azimuth: azimuth,
                supervision: supervision,
                activeStatus: activeStatus
            },
        });

        res.status(201).json({ success: true });
    } catch (error) {
        console.log(error)
        res.status(500).send('There was a problem registering the device');
    }
}

exports.getDevices = async (req, res)=>{
    try {
        const devices = await prisma.device.findMany();
       
        
        res.status(200).json({ success: true, data: devices   });
     } catch (error) {
         console.log(error)
         res.status(500).send('There was a problem registering the device');
     }
}

exports.search = async(req, res) =>{
    const {ref} = req.query
    try {
        const devices = await prisma.device.findMany({
            where:{
                ref: {
                    contains: ref,
                    
                }
            }
        });
 
        res.status(201).json({ success: true, data: devices });
    } catch (error) {
        console.log(error)
        res.status(500).send('There was a problem registering the device');
    }
}

exports.deviceSensors = async (req, res)=>{
        const {deviceId} = req.params
        try {
            const sensors = await prisma.sensor.findMany({
                where:{
                    deviceId: parseInt(deviceId)
                }
            });
     
            res.status(201).json({ success: true, data: sensors});
         } catch (error) {
             res.status(500).send('There was a problem registering the sensors.');
         }
    }

exports.regionDevices = async (req, res)=>{
    const user = req.user;
    try {
        const authUser = await prisma.user.findFirst({
            where: {
                id: user.userId
            },
            select: {
                regionId: true
            }
        });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        const devices = await prisma.device.findMany({
            where: {
                regionId: authUser.regionId 
            }
        });
        res.status(201).json({ success: true, data:  devices});
    } catch (error) {
        console.log(error)
        res.status(500).send('There was a problem registering the Fire');
    }
}


