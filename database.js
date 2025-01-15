const { MongoClient } = require('mongodb');

const client = new MongoClient(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
const dbName = "shopping-site";
let db;

async function connect (){
    try {
        console.log('Db Connected');
        await client.connect();
        db = client.db(dbName);
    }
    catch(err){
        console.error('Error connecting to MongoDB:', err);
        process.exit(1); 
    } 
}

function getDb (){
    if (!db) {
        throw new Error('Database not connected');
    }
    return db;
}

module.exports = {
    connect,getDb
}