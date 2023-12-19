// Dependencies
const handleAboutRoute = require("./handleRoutes/handleAboutRoute");
const handleHomeRoute = require("./handleRoutes/handleHomeRoute");

const routes = {
  "/": handleHomeRoute,
  about: handleAboutRoute,
};

module.exports = routes;
