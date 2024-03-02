
const { PrismaClient } = require('@prisma/client');
const JWT_SECRET = 'Res_Jwt';
const prisma = new PrismaClient();


exports.create = async (req, res) => {
    const {name, wilaya} = req.body;
    try {
       await prisma.region.create({
            data: {
                name: name,
                wilaya: wilaya
            },
        });

        res.status(201).json({ success: true });
    } catch (error) {
        res.status(500).send('There was a problem registering the user.');
    }
}

exports.getRegion = async(req, res) => {
    try {
        const regions = await prisma.region.findMany();
 
        res.status(201).json({ success: true, data: regions});
     } catch (error) {
         res.status(500).send('There was a problem registering the user.');
     }
}

exports.regionPerWilaya = async(req, res)=>{
    const {wilaya} = req.params
    try {
        const regions = await prisma.region.findMany({
            where:{
                wilaya: wilaya
            }
        });
        res.status(201).json({ success: true, data: regions});
    } catch (error) {
        res.status(500).send('There was a problem registering the user.');
    }
}

