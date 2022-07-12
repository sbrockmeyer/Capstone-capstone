// connecting to Mongo
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = "mongodb+srv://Cap:pass@maindata.0baa5xo.mongodb.net/?retryWrites=true&w=majority";

// creating the database names and collection names
const dbName = 'shop';
const collectionName = 'shopdetails';

// what the app.js can use
exports.DA = {
    // shows all of the shops you can buy from
    getAllShops: async function () {
        console.log(`getAllShops`);

        const client = await MongoClient.connect(uri);

        try {
            const db = client.db(dbName);
            const collection = db.collection(collectionName);

            var query = {};
            var results = await collection.find(query).toArray();

            console.log(`here are all of your shops`);
            console.log(results);

            return results;
        } catch (e) {
            console.log(`oh no something broke in shopDatabase.DA.getAllShops`);
            console.log(e)
        } finally {
            client.close()
        }
    },

    // allows users to add/create a shop
    addShop: async function (shopName, description, language, country, currency) {
        console.log(`add/create shop`);

        const client = await MongoClient.connect(uri);

        try {
            const db = client.db(dbName);
            const collection = db.collection(collectionName);

            var newShop = {
                ShopName: shopName,
                Description: description,
                Language: language,
                Country: country,
                Currency: currency
            }

            var results = await collection.insertOne(newShop);

            console.log(`Create shop was successful`);
            console.log(results);

            return results;
        } catch (e) {
            console.log(`uh ho something got borked in shopDatabase.DA.addShop`);
            console.log(e)
        } finally {
            client.close()
        }
    },

    // allows users to delete their shop 
    terminateShop: async function (id) {
        console.log(`terminateShop`);

        const client = await MongoClient.connect(uri);

        try {
            const db = client.db(dbName);
            const collection = db.collection(collectionName);

            var query = { _id: new ObjectId(id) };

            var results = await collection.deleteOne(query);

            console.log(`you have terminated the shop successfully`)
            console.log(results);

            return results;
        } catch (e) {
            console.log(`something broke in shopDatabase.DA.terminateShop`);
            console.log(e);
        } finally {
            client.close()
        }
    },

    // users can edit their shop
    editShop: async function (shopName, description, language, country, currency) {
        console.log(`editShop`);

        const client = await MongoClient.connect(uri);

        try {
            const db = client.db(dbName);
            const collection = db.collection(collectionName);

            var query = { _id: new ObjectId(id) };
            var update = {
                $set: {
                    ShopName: shopName,
                    Description: description,
                    Language: language,
                    Country: country,
                    Currency: currency
                }
            }

            var results = await collection.updateOne(query, update);

            console.log(`your shop has been updated`);
            console.log(results);

            return results;
        } catch (e) {
            console.log(`oh no something got borked in shopDatabase.DA.editShop`);
            console.log(e);
        } finally {
            client.close();
        }
    }
}