const mongoose = require("mongoose");
const url = 'mongodb+srv://developervivekchavan:developervivekchavan@testeycluster0.9jkgabj.mongodb.net/ey-vehicle-rental';

function connectDB() {
    mongoose.connect(url,{useUnifiedTopology:true, useNewUrlParser:true});
    const connection = mongoose.connection;
    connection.on('connected', ()=>{ console.log('Connected to Mongo DB : Active'); });
    connection.on('error', ()=>{ console.error('Mongo DB Connection Error'); });
}

connectDB();

module.exports = mongoose;