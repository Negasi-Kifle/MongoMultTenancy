// DB connection
const db = require("../loaders/db");

// Switch DB
module.exports = (tenantName) => {
  return (req, res, next) => {
    try {
      console.log("Passed tenant name", tenantName);
      console.log("Connected to ", db.name);
      // Get tenant name from user object and switch db to the tenant name
      const switchedDb = db.useDb(tenantName, { useCache: true });

      console.log("Switched to DB: ", switchedDb.name);

      // Pass it to the next middleware
      req.tenantDb = switchedDb;
      // Go to the next middleware
      next();
    } catch {
      (err) => next(err);
    }
  };
};

// Export
// module.exports = switchDB;
