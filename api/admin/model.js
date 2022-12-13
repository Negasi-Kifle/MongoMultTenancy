// Mongoose
const mongoose = require("mongoose");

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

// Export
module.exports = Admin;
