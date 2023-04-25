
const express = require('express');

const { connection } = require("./Config/db");

const { userRouter } = require('./Routes/user.route');

const { flightRouter } = require('./Routes/flight.route');

const {bookingRouter}=require("./Routes/booking.route")


require('dotenv').config();

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello World");
});

// Router

app.use("/user", userRouter);

app.use("/flight", flightRouter);

app.use("/book", bookingRouter);

app.listen(process.env.port, async() => {
    try {
        await connection;
        console.log("Connected to the Database");
    } catch (error) {
        console.log({"Errror":error.message});
    }
    console.log(`Server is running on port ${process.env.port}`);
})