const { MongoClient } = require("mongodb");

const uri = "mongodb+srv://amirrezaa:9ZzXg99c29oBGFiO@cluster0.n6ptk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const client = new MongoClient(uri);

async function connectToDB() {
  try {
    await client.connect();
    console.log("✅ Connected to MongoDB");
    return client.db("test");
  } catch (err) {
    console.error("❌ MongoDB Error:", err);
  }
}

module.exports = connectToDB;
