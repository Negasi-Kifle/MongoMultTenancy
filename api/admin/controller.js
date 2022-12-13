// Admin model
const Admin = require("./model");

// Create admin
exports.createAdmin = async (req, res, next) => {
  try {
    const data = req.body;

    // Save data
    const admin = await Admin.create({
      firstName: data.firstName,
      lastName: data.lastName,
    });

    // Send response
    res.status(200).json({
      success: true,
      data: { admin },
    });
  } catch (error) {
    next(error);
  }
};
