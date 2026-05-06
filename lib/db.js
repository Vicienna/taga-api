const { MongoClient } = require('mongodb');

const uri = process.env.MONGODB_URI;
let cachedClient = null;
let cachedDb = null;

async function connectToDatabase() {
  if (cachedClient && cachedDb) {
    return { client: cachedClient, db: cachedDb };
  }
  if (!uri) throw new Error("MONGODB_URI is not defined in env");
  
  const client = await MongoClient.connect(uri);
  const db = client.db("spacepixel_db");

  cachedClient = client;
  cachedDb = db;
  return { client, db };
}

module.exports = { connectToDatabase };
