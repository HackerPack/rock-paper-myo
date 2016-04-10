
function searchTask(term,keyword, callback){
  var keywords = keyword.split(" ");
  var taskRef = new Firebase(FIRE_BASE_URL+TASKS_TABLE);
  taskRef.orderByChild("Taken").equalTo("0").on("value", function(snapshot) {

     var searchResult = [];
     snapshot.forEach(function(childSnapshot) {

        var temp = JSON.stringify(childSnapshot.val());
        console.log(temp);
        if(keywords){
          flag=0;
          for(i=0;i<keywords.length;i++)
          {
            var n = temp.search(keywords[i]);
            if(n>-1){
              flag=0;
            }
            else
            {
              console.log("Not matched");
              flag=1;
              break;
            }
          }
          if(flag==0)
            searchResult.push(childSnapshot);
        }
      });
     console.log(searchResult);

      callback(searchResult);
  });
}
function allTasks(disaster, callback){
  var taskRef = new Firebase(FIRE_BASE_URL+TASKS_TABLE);
  taskRef.orderByChild("Taken").equalTo("0").on("value", function(snapshot) {

     var searchResult = [];
     snapshot.forEach(function(childSnapshot) {
        var temp = JSON.stringify(childSnapshot.val());
        if(disaster){
          var n = temp.search(disaster);
          if(n>-1){
            searchResult.push(childSnapshot);

          }
        }
        else{
         searchResult.push(childSnapshot);
        }
      });
     console.log(searchResult);

      callback(searchResult);
  });
}

function saveTask(task, callback){
  ref.child("Tasks").push(task);
  var taskRef = new Firebase(FIRE_BASE_URL+TASKS_TABLE);
  task.forEach(function(object){
    taskRef.update(object, callback);
  });
}
  
function takeTask(uid, requestID, callback){
  var taskRef = new Firebase(FIRE_BASE_URL+TASKS_TABLE+requestID);
  taskRef.update({"Taken":uid, "Overdue":"No"}, callback);
}
function overdueTrue(requestID, callback){
  var taskRef = new Firebase(FIRE_BASE_URL+TASKS_TABLE+requestID);
  taskRef.update({"Overdue":"Yes"}, callback);
}
function untakeTask(uid, requestID, callback){
  var taskRef = new Firebase(FIRE_BASE_URL+TASKS_TABLE+requestID);
  taskRef.once('value',function(data){
    if(data.val().Overdue == "No")
    {
      var userRef = new Firebase(FIRE_BASE_URL+USERS_TABLE+uid);
      userRef.once('value', function(data) {
        console.log("Takin away task");
    var trustLevel = data.val().trustLevel;
    trustLevel--;
    userRef.update({"trustLevel":trustLevel},callback);
    });
   }
  });
  taskRef.update({"Taken":"0","Overdue":"No"}, callback);
}
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

/*function getBorrowedBooks(uid, callback){
  var return_data = [];
  var bookRef = new Firebase(FIRE_BASE_URL+BOOKS_TABLE);
  bookRef.orderByChild("borrow_uid").equalTo(uid).on("value", function(snapshot) {
    snapshot.forEach(function(data){
      return_data.push(data.val());
    });
    callback(return_data);
  });
}
*/



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

function getTwitterWidget(hashtag, callback){
  //alert("Fetching widget details");
  var twitterRef = new Firebase(FIRE_BASE_URL+HASHTAGS_TABLE+hashtag);
  var searchResult = [];

  //twitterRef.orderByKey().equalTo(hashtag).on("value", function(snapshot) {
    twitterRef.once('value', function(data){
      console.log(hashtag);
      console.log(data.val());
      searchResult.push(data.val());
     //callback(searchResult);
     /*snapshot.forEach(function(childSnapshot) {
        var temp = JSON.stringify(childSnapshot.val());
        if(hashtag){
          var n = temp.search(hashtag);
          if(n>-1){
            searchResult.push(childSnapshot.val());
          }
        }
        else{
         searchResult.push(childSnapshot.val());
        }
      });*/
     //console.log(searchResult);
          //alert(searchResult);
     callback(searchResult);
     return searchResult
  });  
}

function getDisasters(hashtag, callback){
  var disRef = new Firebase(FIRE_BASE_URL+HASHTAGS_TABLE);
  disRef.orderByChild("hashtag").on("value", function(snapshot){
    var searchResult = [];
    snapshot.forEach(function(childSnapshot){
      var temp = JSON.stringify(childSnapshot.val());
      if (hashtag){
        var n = temp.search(hashtag);
        if (n>-1){
          searchResult.push(childSnapshot.val());
        }
      } else {
        searchResult.push(childSnapshot.val());
      }
    });
    callback(searchResult);
  });
}

function getAllTasks(callback){
  var taskRef = new Firebase(FIRE_BASE_URL+TASKS_TABLE);
  taskRef.orderByChild("Priority").on("value", function(snapshot) {

     var searchResult = [];
     snapshot.forEach(function(childSnapshot) {
        var temp = JSON.stringify(childSnapshot.val());
        if(disaster){
          var n = temp.search(disaster);
          if(n>-1){
            searchResult.push(childSnapshot);

          }
        }
        else{
         searchResult.push(childSnapshot);
        }
      });
     console.log(searchResult);

      callback(searchResult);
  });
}