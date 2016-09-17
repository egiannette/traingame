
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCQX8y7hk1DwA2xyWFyOYioMpMcXH8UJqY",
    authDomain: "the-train-game-268b0.firebaseapp.com",
    databaseURL: "https://the-train-game-268b0.firebaseio.com",
    storageBucket: "the-train-game-268b0.appspot.com",
    messagingSenderId: "1022520729057"
  };
  firebase.initializeApp(config);

  var database = firebase.database();

  // grabs user input
$("#addTrainbtn").on("click",function(){
  var trName = $("#nameinput").val().trim();
  var trDestination = $("#destinationinput").val().trim();
  var trTime = moment($("#timeinput").val().trim(),"MM/DD/YY hh:mm").format("X");
  var trFrequency = $("#frequencyinput").val().trim();

  // Creates local "temporary" object for holding employee data
  var newTrain = {
    name: trName,
    destination: trDestination,
    time: trTime,
    frequency: trFrequency
  }
  // uploats train data to the database
  database.ref().push(newTrain);

  // logs everything to console
  console.log(newTrain.name);
  console.log(newTrain.destination);
  console.log(newTrain.time);
  console.log(newTrain.frequency);

  // clears each text box
  $("#nameinput").val("");
  $("#destinationinput").val("");
  $("#timeinput").val("");
  $("#frequencyinput").val("");

  // Prevents moving to new page
  return false;
});
// Create Firebase event for adding train into to the database and a row in the html when a user adds an entry
database.ref().on("child_added", function(childSnapshot, prevChildKey){
  console.log(childSnapshot.val());

  // Store everything into a variable.
  var trName = childSnapshot.val().name;
  var trDestination = childSnapshot.val().destination;
  var trTime = childSnapshot.val().time;
  var trFrequency = childSnapshot.val().frequency;

  // train info
  console.log(trName);
  console.log(trDestination);
  console.log(trTime);
  console.log(trFrequency);

  var trTime = moment.unix(trTime).format("MM/DD/YY hh:mm");

  $("#tableid > tbody").append("<tr><td>" + trName + "</td><td>" + trDestination + "</td><td>" + trTime + "</td><td>" + trFrequency + "</td><td>");

  
});

