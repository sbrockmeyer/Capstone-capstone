// everything installed
const express = require('express');
const cors = require('cors');

// connection to different JS files for the different Data
const wordDatabase = require('./term'); //wordDatabase.DA.jfoej
const peopleDatabase = require('./user'); //peopleDatabase.DA.jfoej
const shopDatabase = require('./shop'); //shopDatabase.DA.jfoej

// creating port and using express
const app = express();
const PORT = 4000;

app.use(cors());

// initial loading of back-end
app.get("/", function(req, res){
    res.send("Hello welcome if you are looking for the api key for the words its gonna be under '/wordsapi' ");
});

// api for the front end to connect to for the words
app.get('/wordsapi', async function(req, res){
    var words = await wordDatabase.DA.getAllWords();
    console.log(`here is all of your stuff from the api`);
    console.log(words);

    res.json(words);
});
// add word

// update word

// delete word

// api for the front end to connect for the shops
app.get('/shopapi', async function(req, res){
    var shop = await shopDatabase.DA.getAllShops();
    console.log(`here are all the shops`);
    console.log(shop);
    res.json(shop);
})

// 



// port listenting
app.listen(PORT, ()=> console.log(`listening at ${PORT}`));