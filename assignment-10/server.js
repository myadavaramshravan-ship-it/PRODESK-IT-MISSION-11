require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const postRoutes = require("./routes/PostRoutes");

const app = express();

// CORS
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "http://localhost:5174",
      "http://localhost:5175",
      "http://localhost:5176",
      "http://localhost:5177",
      "https://prodesk-it-mission-11.vercel.app", // Replace with your actual Vercel URL
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

// Middleware
app.use(express.json());

// Test Route
app.get("/", (req, res) => {
  res.send("API is running successfully");
});

// Routes
app.use("/", postRoutes);

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected Successfully");

    // Start Server ONLY after MongoDB connects
    const PORT = process.env.PORT || 5000;

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("MongoDB Connection Error:", err);
    process.exit(1);
  });