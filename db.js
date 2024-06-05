const mongoose = require("mongoose");
require("dotenv").config();


// Define the MongoDB connection URL
// const mongoURL = "mongodb://127.0.0.1:27017/hotels"
// const mongoURL = "mongodb+srv://kvaibhav467:vaibhav123@cluster0.lajylnu.mongodb.net/"
const mongoURL = process.env.MONGODB_URL


// Set up MongoDB connection
mongoose.connect(mongoURL);


// Get the default connection
// Mongoose maintains a default connection object representing the MongoDB connection
const db = mongoose.connection;


// Define  event listeners for database connection
db.on("connected", () => {
  console.log("Connected to MongoDB server");
});

db.on("error", (err) => {
  console.log("MongoDB connection error : ", err);
});

db.on("disconnected", () => {
  console.log("MongoDB disconnected");
});



// Export the database connection
module.exports = db