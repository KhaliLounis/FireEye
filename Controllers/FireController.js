
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();


exports.create = async (req, res) => {
    const {area, raison, regionId, comment} = req.body;
    try {
       await prisma.fire.create({
            data: {
                area: area,
                raison: raison,
                regionId: regionId,
                comment: comment
            },
        });

        res.status(201).json({ success: true });
    } catch (error) {
        console.log(error)
        res.status(500).send('There was a problem registering the drone');
    }
}

exports.RegionFire = async(req, res)=>{
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
        const fires = await prisma.fire.findMany({
            where: {
                regionId: authUser.regionId 
            }
        });
        res.status(201).json({ success: true, data:  fires});
    } catch (error) {
        console.log(error)
        res.status(500).send('There was a problem registering the Fire');
    }
}



