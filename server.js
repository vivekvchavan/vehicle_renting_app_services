const express = require("express");
const app = express()
const port = 5000
const dbConnection = require("./db");

app.get('/', (req,res) => res.send('Hello World'));
app.listen(port, () =>console.log(`EY Vehical Rental Services Running on port `+port));