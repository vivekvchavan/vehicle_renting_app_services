const express = require("express");
const router = express.Router();
const User = require("../models/userModel");

router.post("/login", async (req, res) => {
    const { username, password } = req.body;
    try {
        console.log("Login API Called");
        const user = await User.findOne({ username, password });
        if (user) {
            res.send(user);
        } else {
            return res.status(400).json(error);
        }
    } catch (error) {
        return res.status(400).json(error);
    }
});


router.post("/register", async (req, res) => {
    const { username, password } = req.body;
    try {
        console.log("Register API Called");
        const newUser = new User(req.body);
        await newUser.save();
        res.send('User Registered Successfully');
    } catch (error) {
        return res.status(400).json(error);
    }
});

module.exports = router;