let path = require("path");

// Build routes to serve HTML pages to user based on their URL path
module.exports = function(app) {
  app.use(function(req, res) {
    res.sendFile(path.join(__dirname + '/../public/index.html'));
  });

  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname + '/../public/survey.html'));
  });
}
