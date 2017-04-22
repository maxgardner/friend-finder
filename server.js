// Dependencies
let express = require("express");
let path = require("path");
let bodyParser = require("body-parser");

// Set up express
let app = express();
let PORT = process.env.PORT || 8080;

// Below will include requires for routing
require("app/routing/html-routes.js")(app);
require("app/routing/api-routes.js")(app);

app.listen(PORT, function(err) {
  if (err) throw err;
  console.log("Listening on Port " + PORT);
});
