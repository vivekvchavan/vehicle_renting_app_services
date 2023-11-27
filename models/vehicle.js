const mongoose = require("mongoose");

const vehicleSchema = new mongoose.Schema({
    name: { type: String, required: true },
    type: { type: String, required: true },
    image: { type: String, required: true },
    capacity: { type: Number, required: true },
    fuelType: { type: String, required: true },
    bookedTimeSlots: [
        {
            from: { type: String, required: true },
            to: { type: String, required: true }
        }
    ],
    rentPerHour: { type: Number, required: true },
    currencyType: { type: String, required: true }
}, { timestamps: trye });

const vehicleModel = mongoose.model('vehicle', vehicleSchema);

module.exports = vehicleModel;