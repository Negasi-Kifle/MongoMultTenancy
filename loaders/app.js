// Express
const express = require("express");

// App
const app = express();

// Compression to compress requests that pass through the middle wares
const compression = require("compression");

// MongoDB Sanitizer to prevent MongoDB Operator Injection.
const mongoDBSanitizer = require("express-mongo-sanitize");

// Require GEH
const geh = require("../api/geh");

// Routers

// Admin routers
const adminsRouter = require("../api/admin/router");

// Use Third party middlewares
app.use(compression());
app.use(mongoDBSanitizer());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Use routers
app.use("/api/v1/admins", adminsRouter);

// This is for test if the app is working fine.
app.get("/health", (req, res) => res.send("healthy..."));

//use Global error Handler
app.use(geh);

// Export App
module.exports = app;
