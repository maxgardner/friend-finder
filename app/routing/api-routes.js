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

  app.post("/api/friends", function(req, res) {
    let newFriend = {
      name: req.body.name,
      photo: req.body.photo,
      survey: [
        req.body.q1,
        req.body.q2,
        req.body.q3,
        req.body.q4,
        req.body.q5,
        req.body.q6,
        req.body.q7,
        req.body.q8,
        req.body.q9,
        req.body.q10
      ]
    }
    fs.appendFile("/../data/friends.txt", ", " + newFriend, (err) => {
      if (err) throw err;
      console.log("Friend successfully added! Look at you, being all social.");
    });
  });
}
