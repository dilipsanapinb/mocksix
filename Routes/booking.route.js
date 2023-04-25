const express = require('express');

const { Booking} = require('../Models/booking.model');

require('dotenv').config();

const bookingRouter = express.Router();

bookingRouter.get("/api/dashboard", async(req, res) =>{
    try {
        let booking = await Booking.find()
            .populate("user", "-password")
            .populate("flight", "airline flightNo departure arrival departureTime arrivalTime seats price")
        res.status(200).send({"msg":"All Booking Data",'Bookings':booking});
    } catch (error) {
        res.status(500).send({ "msg": error.message });
        console.log(error);
    }
})



// add flight
bookingRouter.post("/api/booking", async(req, res) =>{
    let {user,flight} = req.body;
    try {
        if (!user || !flight) {
            res.status(400).send({ "msg": "Please provide user and flight details" });
        } 
        book = {
            user: user,
            flight: flight,
        }
        var newBooking =await  Booking.create(book);
        newBooking=await newBooking.populate("user","-password")
        newBooking=await newBooking.populate("flight","airline flightNo departure arrival departureTime arrivalTime seats price")
        res.status(201).send({"msg":"Flight Booked  Successfully","Booking":newBooking});
    } catch (error) {
        res.status(500).send({ "msg": error.message,"alert":"Something went wrong at Booking a flight" });
        console.log(error);
    }
})

module.exports={bookingRouter}