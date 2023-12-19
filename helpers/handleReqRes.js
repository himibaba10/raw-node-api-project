// Dependencies
const url = require("url");
const { StringDecoder } = require("string_decoder");
const routes = require("../routes/routes");
const notFoundHandler = require("../routes/handleRoutes/handleNotFound");

// Module scaffolding
const handler = {};

handler.handleReqRes = (req, res) => {
  //Handle request
  const parsedUrl = url.parse(req.url, true);
  const trimmedUrl = parsedUrl.pathname.replace(/^\/+|\/+$/g, "");
  const queryStrings = parsedUrl.query;
  const headers = req.headers;
  const method = req.method;
  const reqData = { trimmedUrl, queryStrings, headers, method };

  // Handle response
  const chosenPath = trimmedUrl.length ? trimmedUrl : "/";
  const chosenHandler = routes[chosenPath] || notFoundHandler;

  const decoder = new StringDecoder("utf-8");
  let realData = "";

  req.on("data", (buffer) => {
    realData += decoder.write(buffer);
  });

  req.on("end", () => {
    realData += decoder.end();

    chosenHandler(reqData, (statusCode, payload) => {
      const payloadString = JSON.stringify(payload);

      res.writeHead(statusCode);
      res.end(payloadString);
    });
  });
};

module.exports = handler;
