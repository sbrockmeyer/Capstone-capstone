// everything installed
const express = require('express');
const cors = require('cors');
const bcrypt = require('bcrypt');

// connection to different JS files for the different Data
const wordDatabase = require('./term'); //wordDatabase.DA.jfoej
const peopleDatabase = require('./user'); //peopleDatabase.DA.jfoej
const shopDatabase = require('./shop'); //shopDatabase.DA.jfoej
const { json } = require('express');

// creating port and using express
const app = express();
const PORT = 4000;

app.use(express.json());
app.use(cors());

// initial loading of back-end
app.get("/", function (req, res) {
  res.send("Hello welcome if you are looking for the api key for the words its gonna be under '/wordsapi' ");
});

// api for the front end to connect to for the words
app.get('/wordsapi', async function (req, res) {
  var words = await wordDatabase.DA.getAllWords();
  console.log(`here is all of your stuff from the api`);
  console.log(words);

  res.json(words);
});
// http://localhost:4000/wordsapi

// add word
// English, Uk, German, Swedish, Spanish, Italian, French, Polish
app.post('/addWord', async function (req, res) {
  var eng = req.body.English;
  var uk = req.body.UK;
  var ger = req.body.German;
  var swe = req.body.Swedish;
  var span = req.body.Spanish;
  var ital = req.body.Italian;
  var fren = req.body.French;
  var pol = req.body.Polish;
  var def = req.body.Definition

  var word = await wordDatabase.DA.createWord(eng, uk, ger, swe, span, ital, fren, pol, def);

  res.json(word);
})

// update word
app.post('/updateWord', async function (req, res) {
  var id = req.body.wordId
  var eng = req.body.English;
  var uk = req.body.UK;
  var ger = req.body.German;
  var swe = req.body.Swedish;
  var span = req.body.Spanish;
  var ital = req.body.Italian;
  var fren = req.body.French;
  var pol = req.body.Polish;
  var def = req.body.Definition

  var upWord = await wordDatabase.DA.updateWord(id, eng, uk, ger, swe, span, ital, fren, pol, def);

  res.json(upWord);
})

// delete word
app.delete('/delete/:id', async function (req, res) {
  console.log(req.params);

  var word = await wordDatabase.DA.deleteWord(req.params.id);
  console.log(word);

  res.json(word);
})

// api for the front end to connect for the shops
app.get('/shopapi', async function (req, res) {
  var shop = await shopDatabase.DA.getAllShops();
  console.log(`here are all the shops`);
  console.log(shop);
  res.json(shop);
})
// http://localhost:4000/shopapi

// create/add shop
// shopName, description, language, country, currency
app.post('/createShop', async function (req, res) {
  console.log(req.body);
  var name = req.body.shopName;
  var des = req.body.description;
  var lang = req.body.language;
  var count = req.body.country;
  var curr = req.body.currency;

  console.log('rawr');

  var shop = await shopDatabase.DA.addShop(name, des, lang, count, curr);

  res.json(shop);
})

// terminate shop
app.delete('/deleteShop/:id', async function (req, res) {
  console.log(req.params);

  var delShop = await shopDatabase.DA.terminateShop(req.params.id);
  console.log(delShop);

  res.json(delShop);
})

// update/edit shop
app.post('/updateShop', async function (req, res) {
  var id = req.body.Id;
  var name = req.body.shopName;
  var des = req.body.description;
  var lang = req.body.language;
  var count = req.body.country;
  var curr = req.body.currency;

  var upShop = await shopDatabase.DA.editShop(id, name, des, lang, count, curr);

  res.json(upShop);
})

// get all users
app.get('/allUsers', async function(req,res){
  var user = await peopleDatabase.DA.getAllUsers();
  console.log(`here are all the users`);
  console.log(user);
  res.json(user);
})

// create user
app.post('/createUser', async function (req, res) {
  var pass = req.body.pass;
  var firstName = req.body.fName;
  var lastName = req.body.lName;
  var email = req.body.email;
  var username = req.body.username;

  peopleDatabase.DA.createUser(firstName, lastName,username, pass, email)
})

// update user
app.post('/updateUser', async function (req, res){
  var pass = req.body.pass;
  var firstName = req.body.fName;
  var lastName = req.body.lastName;
  var email = req.body.email;
  var id = req.body.id;
  var username = req.body.username;

  var updateUser = await peopleDatabase.DA.updateUser(id, firstName, lastName, username, pass, email);

  res.json(updateUser);
})

// login
// app.post('/login', async function (req, res) {

// })

// logout



// port listenting
app.listen(PORT, () => console.log(`listening at ${PORT}`));