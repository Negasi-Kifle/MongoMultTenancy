// Use dotenv
require("dotenv").config();

// Put env variables in an object
const config = {
  db: {
    remote: process.env.MONGODB_REMOTE,
  },
};

// Export config
module.exports = config;
