const mongoose = require("mongoose");

// MongoDB connection URI
const uri = "mongodb://localhost:27017/Laundry-app"; // Change 'mydatabase' to your database name

// Connect to MongoDB
const connectDB = async () => {
  mongoose
    .connect(uri)
    .then(() => {
      console.log("Connected to MongoDB");
    })
    .catch((error) => {
      console.error("Error connecting to MongoDB:", error);
    });
};

module.exports = connectDB;
