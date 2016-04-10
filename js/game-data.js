
var ComputerScore=0;
var UserScore=0;

function startGame()
             {
   var rootref = new Firebase('https://rock-paper-scissors-game.firebaseio.com/');
   rootref.child('current_result').on("child_changed", function(snapshot) { 
   //var  gesture= snapshot.val()[0];
   //console.log(gesture['user1']);
   //console.log(snapshot.val());
   generateReaction(snapshot.val());

  }, function (errorObject) {
   console.log("The read failed: " + errorObject.code);
  });


  };


 function randomReaction()
 {

    var random_gesture = Math.floor((Math.random() * 3) + 1);
    console.log("Random gesture"+random_gesture);
    switch(random_gesture)
      {
       case 1: 
         //console.log('rock');
         $("#comp_choice").html("Rock");
         $("#response").attr("src","img/1.jpg");
         break;
       case 2: 
         //console.log('paper');
         $("#comp_choice").html("Paper");
         $("#response").attr("src","img/2.jpg");
         break;
       case 3:
         //console.log('scissors');
         $("#comp_choice").html("Scissors");
         $("#response").attr("src","img/3.png");
         break;
      };

 
      return random_gesture;
 }

 function declareResult(gesture,random_gesture)
 {
   if(gesture == 1)
   {
     if(random_gesture == 1)      
       return 'tie';
     else if(random_gesture == 2)
       return 'defeat';
     else
       return 'victory';
     
   }
   else if(gesture == 2)
   {

     if(random_gesture == 1)
       return 'victory';      
     else if(random_gesture == 2)
       return 'tie';
     else
       return 'defeat';
   }
   else if(gesture == 3)
   { 
     if(random_gesture == 1)
       return 'defeat';
     else if(random_gesture == 2)
       return 'victory';
     else
       return 'tie';

   }
 }

 function generateReaction(gesture)
 {
   var random_gesture ; 
   var result;
     switch(gesture)
     {
       case 0 :
         console.log('you played resting');
         $("#your_choice").html("-");
         $("#winner").html("-");
         $("#comp_choice").html("-");
         
         
         break;
       case 1:
         console.log('you played rock');
         random_gesture = randomReaction();
         result = declareResult(gesture,random_gesture);
         $("#your_choice").html("Rock");
         $("#winner").html(result);
         break;
       case 2:
         console.log('you played paper');
         random_gesture = randomReaction();
         result = declareResult(gesture,random_gesture);
         $("#your_choice").html("Paper");
         $("#winner").html(result);
         break;
       case 3:
         console.log('you played scissors');
         random_gesture = randomReaction();
         result = declareResult(gesture,random_gesture);
         $("#your_choice").html("Scissors");
         $("#winner").html(result);
         break;
     };

     if(result=="victory"){
        UserScore++;

     }
     if(result=="defeat"){
        ComputerScore++;
     }
     $("#YourScore").html(String(UserScore));
     $("#ComputerScore").html(String(ComputerScore));

 };

