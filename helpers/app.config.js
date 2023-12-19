// Dependencies
require("dotenv").config();

// Configurations for app object
config = {
  port: process.env.PORT,
  role: process.env.ROLE,
};

module.exports = config;
