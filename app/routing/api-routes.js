let path = require("path");
let fs = require("fs");

// Build routes to serve HTML pages to user based on their URL path
module.exports = function(app) {
  app.get("/api/friends", function(req, res) {
    fs.readFile('/../data/friends.txt', (err, data) => {
      if (err) throw err;
      let friendArray = [JSON.parse(data)];
      res.send(friendArray);
    });
  });

  app.post("api/friends", function(req, res) {
    fs.appendFile("/../data/friends.txt", "," + req.body.friend, (err) => {
      if (err) throw err;
      console.log("Friend successfully added! Look at you, being all social.");
    });
  });
}
