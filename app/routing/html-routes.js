let path = require("path");

// Build routes to serve HTML pages to user based on their URL path
module.exports = function(app) {
  app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + '/../public/index.html'));
  });

  app.get("/survey", (req, res) => {
    res.sendFile(path.join(__dirname + '/../public/survey.html'));
  });
}
