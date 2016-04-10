

function completeTask(uid, requestID, callback){
  var taskRef = new Firebase(FIRE_BASE_URL+TASKS_TABLE+requestID);
  taskRef.update({"Finished":uid}, callback);
  var userRef = new Firebase(FIRE_BASE_URL+USERS_TABLE+uid);
  userRef.once('value', function(data) {
    var trustLevel = data.val().trustLevel;
    trustLevel++;
    userRef.update({"trustLevel":trustLevel},callback);
  });
}


function getMyTasks(uid, callback){
  var return_data = [];
  var taskRef = new Firebase(FIRE_BASE_URL+TASKS_TABLE);
  taskRef.orderByChild("Taken").equalTo(uid).on("value", function(snapshot) {
    snapshot.forEach(function(data){
      if(data.val().Finished == "0")
      return_data.push(data);
    });
    console.log(return_data);
    callback(return_data);
  });
}

function getCompletedTasks(uid, callback){
  var return_data = [];
  var bookRef = new Firebase(FIRE_BASE_URL+TASKS_TABLE);
  bookRef.orderByChild("Finished").equalTo(uid).on("value", function(snapshot) {
    snapshot.forEach(function(data){
      return_data.push(data);
    });
    callback(return_data);
  });
}

function getUser(uid, callback){
var user_data = [];
var userRef = new Firebase(FIRE_BASE_URL+USERS_TABLE+uid);

userRef.once('value', function(data) {
	//console.log(data.val());
  user_data.push(data.val());
	callback(user_data);
	});
}


getUser('facebook:10153182851271621', function(data){
    data.forEach(function(innerData){
        //console.log(innerData.fname);
    });
});