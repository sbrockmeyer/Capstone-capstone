// connecting to Mongo
const { MongoClient, ObjectId } = require('mongodb');
const uri = "mongodb+srv://Cap:pass@maindata.0baa5xo.mongodb.net/?retryWrites=true&w=majority";

// creating the database names and collection names
const dbName = 'dictionary';
const collectionName = 'term';

// what the app.js can use
exports.DA = {
    // getting all of the words
    getAllWords: async function(){
        console.log(`getAllWords`);

        const client = await MongoClient.connect(uri);

        try{
            const db = client.db(dbName);
            const collection = db.collection(collectionName);

            var query = {};
            var results = await collection.find(query).toArray();

            console.log(`here are your results for looking for all words`);
            console.log(results);

            return results;
        }catch(e){
            console.log(`uh oh something broke in wordDatabase.DA.getAllWords`);
            console.log(e);
        }finally{
            client.close()
        }
    },

    // if the word isnt in the dictionary user can add it
    createWord: async function(English, Uk, German, Swedish, Spanish, Italian, French, Polish, Definition){
        console.log(`createWord`);

        const client = await MongoClient.connect(uri);

        try{
            const db = client.db(dbName);
            const collection = db.collection(collectionName);

            var newWord={
                English: English,
                UK: Uk,
                German: German,
                Swedish: Swedish,
                Spanish: Spanish,
                Italian: Italian,
                French: French,
                Polish: Polish,
                Definition: Definition
            }

            var results = await collection.insertOne(newWord);
            
            console.log(`Yay you created a word!`);
            console.log(results);

            return resutls;

        }catch(e){
            console.log(`whoopsie something broke in wordDatabase.DA.createWord`)
            console.log(e);
        }finally{
            client.close();
        }
    },

    // if word doesnt exist or be used anymore
    deleteWord: async function(id){
        console.log(`deleteWord`)

        const client = await MongoClient.connect(uri);

        try{
            const db = client.db(dbName);
            const collection = db.collection(collectionName);

            var query = {_id: new ObjectId(id)};

            var results = await collection.deleteOne(query);

            console.log(`You deleted a word`);
            console.log(results);

            return results;

        }catch(e){
            console.log(`uh oh something went wrong with wordDatabase.DA.deleteWord`);
            console.log(e);
        }finally{
            client.close();
        }
    },

    // update word in case miss spelling happens or a word is incorrect
    updateWord: async function(id, English, Uk, German, Swedish, Spanish, Italian, French, Polish, Definition){
        console.log(`updateWord`);

        const client = await MongoClient.connect(uri);

        try{
            const db = client.db(dbName);
            const collection = db.collection(collectionName);

            var query = {_id: new ObjectId(id)}
            var update ={
                $set:{
                    English: English,
                    UK: Uk,
                    German: German,
                    Swedish: Swedish,
                    Spanish: Spanish,
                    Italian: Italian,
                    French: French,
                    Polish: Polish,
                    Definition: Definition
                }
            }

            var results = await collection.updateOne(query, update);
            
            console.log(`your word has been updated`);
            console.log(results);

            return results;
        }catch(e){
            console.log(`hmmmm... something broke here I wonder what it was.... it was in wordDatabase.DA.updateWord`);
            console.log(e);
        }finally{
            client.close();
        }
    }
}