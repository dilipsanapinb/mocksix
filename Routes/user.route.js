
const express = require('express');

const { User } = require('../Models/user.model');

const bcrypt = require('bcrypt');

const jwt = require("jsonwebtoken");

require('dotenv').config();

const userRouter = express.Router();

// get all user
userRouter.get("/api", async(req, res) =>{
    try {
        let data = await User.find();
        res.status(200).send(data);
    } catch (error) {
        res.status(400).send("Error: " + error.message);
    }
})
// Register route
userRouter.post("/api/register", (req, res) => {
    const { name, email, password } = req.body;
    try {
        bcrypt.hash(password, 10, async function (err, hash) {
            if (err) {
                res.status(400).send({ "error": err.message });
                console.log(err);
            } else {
                let newUser = new User({ name, email, password: hash });
                await newUser.save()
                res.status(201).send({"msg":"Registration is Successfull","User":newUser});
            }
});
    } catch (error) {
        res.status(400).send("Error: " + error.message);
        console.log(error);
    }
})


// Login Route

userRouter.post("/api/login", async(req, res) => {
    const { email, password } = req.body;
    let user = await User.findOne({ email });
    let pass = user.password;
    try {
        bcrypt.compare(password, pass, function (err, result) {
            if (result) {
                let token = jwt.sign({ userID: user._id }, process.env.key);
                res.status(201).send({ "msg":"Login is Successfull","token": token });
            } else {
                res.status(400).send({ "error": "Invalid Credentials" });
                console.log(err);
            }
});
    } catch (error) {
        res.status(400).send("Error: " + error.message);
        console.log(error);
    }
})

module.exports = {userRouter};
