const jwt = require('jsonwebtoken');
const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');
const JWT_SECRET = 'Res_Jwt';
const prisma = new PrismaClient();



exports.register = async (req, res) => {
    const {name, email, password, regionId } = req.body;
    try {
        const hashedPassword = bcrypt.hashSync(password, 8);

        const user = await prisma.user.create({
            data: {
                name: name,
                email: email,
                password: hashedPassword,
                regionId: regionId
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
        const user = await prisma.user.findUnique({
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

            res.json({ success: true, message: 'Login successful', token: token,  username: user.name,admin:false });
        } else {
            res.status(401).json({ message: 'Invalid email or password' });
        }
    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ message: 'Something went wrong' });
    }

}


