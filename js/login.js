ref.onAuth(function(authData) {
	console.log("outside if")
	console.log(authData);
	console.log("in");

  if (authData == null) {
  	console.log("inside if")
    
  }
});

function getId(authData){
	authData = ref.getAuth();
	if(authData.facebook)
		{console.log(authData.facebook.id);
	return authData.facebook.id;
}
else if(authData.twitter)
{
	console.log(authData.twitter.id);
	return authData.twitter.id;

}
}

function getFName(authData){
	return authData.facebook.cachedUserProfile.first_name;
}

function getLName(authData){
	return authData.facebook.cachedUserProfile.last_name;
}


function loginFB(){

	ref.authWithOAuthPopup("facebook", function(error, authData) {
  		if (error) {
   			console.log("Login Failed!", error);

  		} else {
  			console.log("Authenticated successfully with payload:", authData.facebook.cachedUserProfile.first_name);
  			if (authData.facebook){
    	  ref.child("users").child(authData.facebook.id).set({
		      fname: getFName(authData),
		      lname: getLName(authData),
		      id: getId(authData),
		      trustLevel: "0"
	    });
    }
  			checkSession();
  		}
	}, {
  		remember: "sessionOnly"
	});
}
function loginTwitter(){

	ref.authWithOAuthPopup("twitter", function(error, authData) {
  		if (error) {
   			console.log("Login Failed!", error);
  		} else {
  			console.log("Authenticated successfully with payload:", authData.twitter.cachedUserProfile.first_name); 

		if (authData.twitter){
			console.log(authData.twitter);
			ref.child("users").child(authData.twitter.id).set({
					fname: authData.twitter.displayName,
		      		lname: authData.twitter.displayName,
		      		id: authData.twitter.id,
		      		trustLevel: "0"
				});
		} //authData
  			checkSession();
  		}
	}, {
  		remember: "sessionOnly"
	});
}
function logout(){
	ref.unauth();
	window.location.href = "index.html";
}

function checkSession(){
	authData = ref.getAuth();
	console.log("Entertin");
	console.log(authData);
	if(authData){
		window.location.href = "pages/index.html";
	}
}

function checkSessionLogin(){
	authData = ref.getAuth();
	console.log(authData);
	if(authData == null){
		window.location.href = "index.html";
	}else{
		window.full_name = getFName(authData) + " "+ getLName(authData);
		$(".username").html("&nbsp;&nbsp;" + window.full_name);
	}
}


