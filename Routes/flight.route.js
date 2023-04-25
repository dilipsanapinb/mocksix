const express = require('express');

const { Flight} = require('../Models/flight.models');

require('dotenv').config();

const flightRouter = express.Router();

flightRouter.get("/api/flights", async(req, res) =>{
    try {
        let flight = await Flight.find();
        res.status(200).send({"msg":"All Fligths Data",'Flight':flight});
    } catch (error) {
        res.status(500).send({ "msg": error.message });
        console.log(error);
    }
})

// flight By ID

flightRouter.get("/api/flights/:id", async (req, res) => {
    let id=req.params.id
    try {
        let flight = await Flight.find({'_id':id});
        res.status(200).send({"msg":"Sigle Fligths DataByID",'Flight':flight});
    } catch (error) {
        res.status(500).send({ "msg": error.message });
        console.log(error);
    }
})

// add flight
flightRouter.post("/api/flights", async(req, res) =>{
    let payload = req.body;
    try {
        let newFlight = new Flight(payload);
        await newFlight.save();
        res.status(201).send({"msg":"Flight Added Successfully"});
    } catch (error) {
        res.status(500).send({ "msg": error.message,"alert":"Something went wrong at post flight" });
        console.log(error);
    }
})

// update flight

flightRouter.patch("/api/flights/:id", async (req, res) => {
    let id=req.params.id;
    let payload = req.body;
    try {
        let updatedFlight = await Flight.findByIdAndUpdate({'_id':id},payload);
        res.status(204).send({ "msg": "Flight Updated Successfully" });
        console.log(`flight with id:${id} is updated`);
    } catch (error) {
        res.status(500).send({ "msg": error.message,"alert":"Something went wrong at update flight" });
        console.log(error);
    }
})

// delete flight

flightRouter.delete("/api/flights/:id", async (req, res) => {
    let id=req.params.id;
    try {
        let deletedFlight = await Flight.findByIdAndDelete({'_id':id});
        res.status(202).send({ "msg": "Flight Deleted Successfully" });
        console.log(`flight with id:${id} is deleted`);
    } catch (error) {
        res.status(500).send({ "msg": error.message,"alert":"Something went wrong at delete flight" });
        console.log(error);
    }
})


module.exports = { flightRouter };