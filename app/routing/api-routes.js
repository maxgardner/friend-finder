let path = require("path");
let fs = require("fs");

// Build routes to serve HTML pages to user based on their URL path
module.exports = function(app) {
  app.get("/api/friends", function(req, res) {
    fs.readFile(__dirname + '/../data/friends.txt', (err, data) => {
      if (err) throw err;
      console.log(data);
      let friendArray = [JSON.parse(data)];
      res.send(friendArray);
    });
  });

  app.post("/api/friends", function(req, res) {
    console.log(req.body);
    fs.appendFile(__dirname + "/../data/friends.txt", ", " + JSON.stringify(req.body.newFriend), (err) => {
      if (err) throw err;

    });
  });
}
