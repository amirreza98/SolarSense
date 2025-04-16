const express = require("express");
const app = express();
const sensorsRoutes = require("./routes/sensors");
const cors = require("cors");

app.use(cors()); // Enable CORS for all routes
app.use("/api", sensorsRoutes);

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
