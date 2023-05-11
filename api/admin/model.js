// Mongoose
const mongoose = require("mongoose");

// Db connection
const db = require("../../loaders/db");

// Admin schema
const adminSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, "First name is reqiured"],
    },
    lastName: {
      type: String,
      required: [true, "Last name is required"],
    },
  },

  {
    writeConcern: {
      w: "majority",
      j: true,
    },
    timestamps: true,
  }
);

// Create the model
const Admin = mongoose.model("Admin", adminSchema);

// The switched db
const getTenantDB = async (tenantDbName) => {
  const tenantDb = db.useDb(tenantDbName);
  return tenantDb;
};

// Model in the switched db
const getModel = async (tenantDbName) => {
  const tenantDb = await getTenantDB(tenantDbName);
  return tenantDb.model("Admin", adminSchema);
};

// Export
module.exports = getModel;
