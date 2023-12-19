// Dependencies
const http = require("http");
const { handleReqRes } = require("./helpers/handleReqRes");

// Module scaffolding
const app = {};

// Configurations for app object
app.config = {
  port: 5000,
};

/*
 * ----- All the functions will be declared below -----
 */

// function to handle request and response
app.handleReqRes = handleReqRes;

// function to create and run the server
app.createServer = () => {
  const server = http.createServer(app.handleReqRes);

  // Listen server and log in the cli if the server successfully runs
  server.listen(app.config.port, () => {
    console.log(`Listening on port ${app.config.port}`);
  });
};

/*
 * ----- Functions end -----
 */

// Creating and running the server
app.createServer();
