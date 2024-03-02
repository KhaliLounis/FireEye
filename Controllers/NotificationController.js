
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient()
const main = require('../Componenets/MailComponent');


exports.getNotif = async (req, res) => {
    try {
        // Fetch notifications using Prisma
        const notifications = await prisma.notification.findMany({
            include:{
                region : true
            }
        });

        // Return the notifications in the response
        res.status(200).json({ success: true, notifications });
    } catch (error) {
        // If an error occurs during the fetch operation, log the error and send a 500 response
        console.error(error);
        res.status(500).send('There was a problem fetching notifications');
    }
}

exports.check = async(req, res)=>{
    const user = req.user;
    try {
        const fireAlert = await prisma.notification.findFirst({
            where:{
                status: false
            }
        })
        main(user.email).catch(console.error);
        res.json({success: true, alert: fireAlert})
    } catch (error) {
        console.log(error)
        res.status(500).send('There was a problem registering the drone');
    }
}



