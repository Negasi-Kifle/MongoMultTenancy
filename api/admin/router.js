// Router
const router = require("express").Router();

// Controller
const controller = require("./controller");

// Traffic splitter
const trafficSplitter = require("../../trafficSplitter");
// Create admin
router.post("/", trafficSplitter("admins"), controller.createAdmin);

// Export
module.exports = router;
