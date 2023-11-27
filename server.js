const express = require("express");
const app = express()
const port = 5000
const dbConnection = require("./db");


app.use('/api/vehicles/', require("./routes/vehicleRoute"));
app.get('/', (req,res) => res.send('EY Vehicle Rental Services are Up and Running'));
app.listen(port, () =>console.log(`EY Vehical Rental Services Running on port `+port));