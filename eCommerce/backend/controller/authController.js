const userModel = require("../models/authModel");
const bcrypt = require('bcryptjs');

async function registerUser(req, res) {
    try {


        const { email, name, password, confirmPassword } = req.body;

        console.log(req.body);

       

        if (!email) {
            return res.status(400).json({ success: false, error: true, message: 'Email is required' });
        }

        if (!name) {
            return res.status(400).json({ success: false, error: true, message: 'Name is required' });
        }

        if (!password) {
            return res.status(400).json({ success: false, error: true, message: 'Password is required' });
        }


        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        if (!hashedPassword) {
            return res.status(500).json({ success: false, error: true, message: 'Something went wrong' });
        }
        const payload = {
            email,
            name,
            password : hashedPassword
        }

        const userData = new userModel(payload)
        const saveUser = await userData.save();

        res.status(201).json({ success: true, error: false, message: 'User registered successfully', data: saveUser });

    } catch (error) {
        res.status(500).json({ success: false, error: true, message: error.message });
    }
}


module.exports = {
    registerUser
}