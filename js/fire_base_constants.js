var FIRE_BASE_URL = "https://rock-paper-scissors-game.firebaseio.com/";
var TASKS_TABLE = "tasks/";
var HASHTAGS_TABLE = "twitterhashtags/";
var USERS_TABLE = "users/";
var ref = new Firebase(FIRE_BASE_URL);
var isNewUser = true;
var globalTaskRef = new Firebase(FIRE_BASE_URL+TASKS_TABLE);
var globalUserRef = new Firebase(FIRE_BASE_URL+USERS_TABLE);
/*var LIBRARY_ACCOUNT_ID = "56241a14de4bf40b17112a75";
var DEBIT_ACCOUNT_ID = "56241a14de4bf40b17112a77";
var ACCOUNT_URL = "http://api.reimaginebanking.com/accounts/"; 
var TRANSFER_URL = "/transfers/"; 
var CAPITAL_ONE_QUERY_PARAM = "?key=2ec3d395b0e81344514ca1ecbae6edcb";*/

/*
globalUserRef.on("child_added", function(snapshot) {
	console.log(snapshot.val());
});

globalUserRef.on("child_changed", function(snapshot) {
	console.log(snapshot.val());
});

globalUserRef.on("child_removed", function(snapshot) {
	console.log(snapshot.val());
});

globalBookRef.on("child_added", function(snapshot) {
	console.log(snapshot.val());
});

globalBookRef.on("child_changed", function(snapshot) {
	console.log(snapshot.val());
});

globalBookRef.on("child_removed", function(snapshot) {
	console.log(snapshot.val());
});
*/