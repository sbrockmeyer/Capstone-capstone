// connecting to Mongo
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://Cap:pass@maindata.0baa5xo.mongodb.net/?retryWrites=true&w=majority";

// creating the database names and collection names
const dbName = 'shop';
const collectionName = 'shopdetails';

// what the app.js can use
exports.DA = {

}