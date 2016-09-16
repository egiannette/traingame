<script src="https://www.gstatic.com/firebasejs/3.4.0/firebase.js"></script>
<script>
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

  var name = "";
  var destination = "";
  var frequency = "";
  var nextarrivial = "";
  var minaway = "";

  	database.ref().on("child_added", function(childSnapshot){
  		console.log(childSnapshot.val().name);
  		console.log(childSnapshot.val().destination);
  		console.log(childSnapshot.val().frequency);
  		console.log(childSnapshot.val().nextarrivial);
  		console.log(childSnapshot.val().minaway);
  	}
$("#addTrainbtn").on("click",function(){
	
})
