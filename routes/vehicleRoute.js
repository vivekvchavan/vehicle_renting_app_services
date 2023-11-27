const express = require("express");
const router = express.Router();
const Vehicle = require("../models/vehicleModel");

router.get("/getAllVehicles", async(req,res)=>{
   try {
    const vehicle = await Vehicle.find();
    console.log("getAllVehicles Service API Called");
    res.send(vehicle);    
   } catch (error) {
    return res.status(400).json(error);
   }
});

module.exports = router;