// Use dotenv
require("dotenv").config();

// Put env variables in an object
const config = {
  env: process.env.NODE_ENV,
  db: {
    remote: process.env.MONGODB_REMOTE,
  },
};

// Export config
module.exports = config;
