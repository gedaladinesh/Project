require("dotenv").config();
console.log("🔍 MONGO_URI:", process.env.MONGO_URI); // Debugging step
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("✅ MongoDB Connected"))
  .catch(err => console.error("❌ MongoDB Connection Failed:", err));

// Import and Connect Routes
const crimeRoutes = require("./routes/crimeRoutes"); // Import routes
app.use("/api/crimes", crimeRoutes); // Prefix all routes with "/api/crimes"

// Sample Route
app.get("/", (req, res) => {
    res.send("✅ Crime Track API is Running...");
});

// Start Server
// Start Express Server on Port 5000
app.listen(5000, () => {
  console.log("🚀 Server running on http://localhost:5000");
});



