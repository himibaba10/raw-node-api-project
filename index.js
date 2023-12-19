// Dependencies
const http = require("http");
const { handleReqRes } = require("./helpers/handleReqRes");
const { port } = require("./helpers/app.config");

// Module scaffolding
const app = {};

/*
 * ----- All the functions will be declared below -----
 */

// function to handle request and response
app.handleReqRes = handleReqRes;

// immediately invoked function run the server
(app.createServer = () => {
  const server = http.createServer(app.handleReqRes);

  // Listen server and log in the cli if the server successfully runs
  server.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });
})();

/*
 * ----- Functions end -----
 */
