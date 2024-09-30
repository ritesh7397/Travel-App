const CryptoJS = require('crypto-js');

const User = require("../model/user.model");

// THIS CODE FOR REGISTER NEW USER

// REQ. BODY.USERNAME
// body:{
//     "username": "Prakash",
//     "number":13543,
//     "email": "hahja@gmail.com",
//     "password":"12345678"
// }


const signupHandler = async (req, res) => {   // localhost:3500/api/auth/register
    try {
        const newUser = new User({
            username: req.body.username,
            number: req.body.number,
            email: req.body.email,
            password: CryptoJS.AES.encrypt(req.body.password, process.env.PASSWORD_SECRET_KEY).toString()
        });
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);

    } catch (err) {
        res.status(500).json({ message: "Error creating a user" })

    }
}

module.exports = signupHandler;