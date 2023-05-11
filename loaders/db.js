// Mongoose
const mongoose = require("mongoose");

// Config
const config = require("../config");

// Options
const options = {
  autoIndex: false, // Don't build indexes
  maxPoolSize: 10, // Maintain up to 10 socket connections
  serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
  socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
  // family: 4, // Use IPv4, skip trying IPv6
};

// Create connection
const connect = () => mongoose.createConnection(config.db.remote, options);

// Connect to mongoDB
const connectToMongoDB = () => {
  const db = connect();
  // console.log(db);
  // Listen events
  db.on("open", () => {
    console.log("Connection opened");
  });

  db.on("error", (error) => {
    console.log("Error while creating connection", error);
    process.exit(1);
  });

  // Return
  return db;
};

// Export
module.exports = connectToMongoDB();
