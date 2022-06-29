// everything installed
const express = require('express');
const cors = require('cors');

// connection to different JS files for the different Data
const wordDatabase = require('./term'); //wordDatabase.DA.jfoej
const peopleDatabse = require('./user'); //peopleDatabase.DA.jfoej
const shopDatabse = require('./shop'); //shopDatabase.DA.jfoej

// creating port and using express
const app = express();
const PORT = 4000;

app.use(cors());



// port listenting
app.listen(PORT, ()=> console.log(`listening at ${PORT}`));