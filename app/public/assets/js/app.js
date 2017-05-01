function compareFriends(newSurvey, currSurveys) {
  let compatibility;
  for (i in currSurveys) {
    for (j in currSurveys[i]) {
      console.log("CURRENT SURVEYS!!! " + currSurveys[i][j]);
      compatibility += Math.abs(parseInt(currSurveys[i][j]) - parseInt(newSurvey[j]));
    }
  }
  console.log(compatibility);
  return compatibility;
}

function getRequest(newSurvey) {
  $.get("/api/friends", (response) => {
    let surveys = [];
    for (i in response) {
      surveys.push(response[i].survey);
    }
    compareFriends(newSurvey, surveys);
  });
}

// Event listener for survey completion
$("#complete-survey").on("click", (event) => {
  event.preventDefault();

  let name = $("#name").val().trim();
  let photo = $("#photo").val().trim();
  let survey = [
    parseInt($("#q1 option:selected").val()),
    parseInt($("#q2 option:selected").val()),
    parseInt($("#q3 option:selected").val()),
    parseInt($("#q4 option:selected").val()),
    parseInt($("#q5 option:selected").val()),
    parseInt($("#q6 option:selected").val()),
    parseInt($("#q7 option:selected").val()),
    parseInt($("#q8 option:selected").val()),
    parseInt($("#q9 option:selected").val()),
    parseInt($("#q10 option:selected").val())
  ];

  // Store survey info as an object
  let newFriend = {
    name: name,
    photo: photo,
    survey: survey
  };

  getRequest(survey);

  // Send post request to server with new object
  $.post("/api/friends", newFriend)
    .done((data) => {
      console.log(data);
    });
});
