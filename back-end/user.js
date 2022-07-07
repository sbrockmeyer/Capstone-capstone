// connecting to Mongo
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = "mongodb+srv://Cap:pass@maindata.0baa5xo.mongodb.net/?retryWrites=true&w=majority";

// creating the database names and collection names
const dbName = 'user';
const collectionName = 'person';

// what the app.js can use
exports.DA = {
    createUser: async function(){
        console.log(`createUser`);

        const client = await MongoClient.connect(uri);

        try{
            const db = client.db(dbName);
            const collection = db.collection(collectionName);

            var newUser ={

            }

            var results = await collection.insertOne(newUser);

            console.log(`User Created!`);
            console.log(results);

            return results;
        }catch(e){
            console.log(`Uh oh something broke in peopleDatabase.DA.createUser`);
            console.log(e);
        }finally{
            client.close()
        }
    },

    updateUser: async function(){
        console.log(`updateUser`);

        const client = await MongoClient.connect(uri);

        try{
            const db = client.db(dbName);
            const collection = db.collection(collectionName);

            var query = {_id: new ObjectId(id)};
            var update={
                $set:{

                }
            }

            var results = await collection.updateOne(query, update);

            console.log(`success!!`);
            console.log(results);

            return results;
        }catch(e){
            console.log(`Uhhhh something broke in peopleDatabase.DA.updateUser`);
            console.log(e);
        }finally{
            client.close()
        }
    },

    
}