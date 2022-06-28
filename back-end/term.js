const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://Cap:pass@maindata.0baa5xo.mongodb.net/?retryWrites=true&w=majority";

const dbName = 'dictionary';
const collectionName = 'term';