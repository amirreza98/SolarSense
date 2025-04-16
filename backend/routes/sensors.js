const express = require("express");
const router = express.Router();
const connectToDB = require("../db");

router.get("/sensors", async (req, res) => {
  try {
    const db = await connectToDB();
    const collection = db.collection("solardatas");

    const range = req.query.range || "24h";
    let count;

    if (range === "2h") count = 13;
    else if (range === "24h") count = 289;
    else if (range === "1m") count = 8771;

    // 100 داده‌ی آخر برای دیباگ یا نمایش سریع
    const data = await collection
      .find({})
      .sort({ timestamp: 1 })
      .skip(199)  
      .limit(count)
      .toArray();

    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).send("Poblem in getting data from MongoDB");
  }
});

module.exports = router;
