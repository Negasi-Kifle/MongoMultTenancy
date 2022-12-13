// DB connection
const db = require("../loaders/db");

// Switch DB
const switchDB = (tenantName) => async (req, res, next) => {
  try {
    // Get tenant name from user object and switch db to the tenant name
    db.useDb(tenantName, { useCache: true });
    console.log(db.name);
    // Go to next the middleware
    next();
  } catch {
    (err) => next(err);
  }
};

// Export
module.exports = switchDB;
