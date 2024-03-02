const jwt = require('jsonwebtoken');
const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');
const JWT_SECRET = 'Admin_Jwt';
const prisma = new PrismaClient();

exports.register = async (req, res) => {
    const {name, email, password } = req.body;
    try {
        const hashedPassword = bcrypt.hashSync(password, 8);

        const user = await prisma.admin.create({
            data: {
                name: name,
                email: email,
                password: hashedPassword,
            },
        });

        const token = jwt.sign({ id: user.id }, JWT_SECRET, {
            expiresIn: 86400, // 24 hours
        });

        res.status(201).json({ auth: true, token });
    } catch (error) {
        res.status(500).send('There was a problem registering the user.');
    }
}
exports.login = async (req, res) => {
    const { email, password } = req.body
    try {
        // Find the user by email
        const user = await prisma.admin.findUnique({
            where: {
                email,
            },
        });

        // Check if user exists and password is correct
        if (user && bcrypt.compareSync(password, user.password)) {
            // Generate a JWT token
            const token = jwt.sign(
                { userId: user.id, email: user.email },
                JWT_SECRET,
                { expiresIn: '24h' }
            );

            res.json({ success: true, message: 'Login successful', token: token , username: user.name,admin:true});
        } else {
            res.status(401).json({ message: 'Invalid email or password' });
        }
    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ message: 'Something went wrong' });
    }

}

exports.dashboard = async(req,res) =>{
    try {
        const deviceCount = await prisma.device.count();
        const fireCount = await prisma.fire.count();
        const fires = await prisma.fire.findMany();
        let totalArea = 0;
    
        fires.forEach(fire => {
            totalArea += fire.area;
        });
        res.json({success:true, devices: deviceCount, fires: fireCount, area: totalArea})
    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ message: 'Something went wrong' });
    }
}


exports.allResponsables = async(req,res)=>{
    try {
        const users = await prisma.user.findMany({
            select:{
                id: true,
                name: true,
                email: true,
                region: true
            }
        })
        res.json({ success: true ,data: users });
    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ message: 'Something went wrong' });
    }
}

exports.responsablePerWilaya = async (req, res) => {
    const { wilaya } = req.params
    try {
        // Find the user by email
        const users = await prisma.user.findMany({
            where: {
                region: {
                    wilaya: wilaya
                }
            },
            select: {
                id: true,
                name: true,
                email: true,
                region: {
                    select: {
                        wilaya: true,
                        name:true
                    }
                }
            }
        });
    
        if (users.length > 0) {
            res.json({ success: true, data: users });
        } else {
            res.status(404).json({ message: 'No users found for the specified wilaya' });
        }
    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ message: 'Something went wrong' });
    }

}

exports.search = async(req, res) => {
    const { name } = req.query;
    try {
        // Find users by name (case-insensitive search)
        const users = await prisma.user.findMany({
            where: {
                name: {
                    contains: name,
                    
                }
            },
            select: {
                id: true,
                name: true,
                email: true,
                // Assuming you want to fetch the entire region object associated with the user
                // Adjust the fields you want from the region accordingly
                region: {
                    select: {
                        id: true,
                        wilaya: true,
                        // Add other fields from the region model you might need
                    }
                }
            }
        });
    
        if (users.length > 0) {
            res.json({ success: true, data: users });
        } else {
            res.status(404).json({ message: 'No users found.' }); // Adjusted the message to be more general
        }
    } catch (error) {
        console.error('Search error:', error);
        res.status(500).json({ message: 'Something went wrong' });
    }
};

exports.fires = async(req, res)=>{
    try {
        const fires = await prisma.fire.findMany({
            select:{
                region: true,
                area: true, 
                raison: true
            }
        });
        res.status(201).json({ success: true, data:  fires});
    } catch (error) {
        console.log(error)
        res.status(500).send('There was a problem registering the Fire');
    }
}
