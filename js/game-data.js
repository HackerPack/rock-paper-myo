var UserScore;
var ComputerScore;

function trumpCard()
{

  console.log('wolf wins');
  
}


function wolfattack()
{
  UserScore = 9000;
  ComputerScore = 0;
  $("#myModal").modal();
             $("#YourScore").html(String(UserScore));
             $('#ComputerScore').html(String(ComputerScore));
             var audio = new Audio('../music/wolf-howl5.wav');
            audio.play();
}
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
    switch(random_gesture)
      {
       case 1: 
         //console.log('rock');

         $("#comp_choice").html("Rock");
            $('#comp_box1').removeClass('hide'); // Rock
            break;
       case 2: 
         //console.log('paper');
         $("#comp_choice").html("Paper");
         $('#comp_box2').removeClass('hide'); // Paper
         break;
       case 3:
         //console.log('scissors');
         $("#comp_choice").html("Scissors");
         $('#comp_box3').removeClass('hide'); // Scissor

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
   $('#user_box1').addClass('hide'); // Rock
   $('#user_box2').addClass('hide'); // Paper
   $('#user_box3').addClass('hide'); //  Scissor

   $('#comp_box1').addClass('hide'); // Rock
   $('#comp_box2').addClass('hide'); // Paper
   $('#comp_box3').addClass('hide'); //  Scissor
   var random_gesture ; 
   var result;
     switch(gesture)
     {
       case 0 :
         console.log('you played resting');
         
         break;
       case 1:
         console.log('you played rock');

         random_gesture = randomReaction();
         result = declareResult(gesture,random_gesture);

         $("#your_choice").html("Rock");
         $("#winner").html(result);
         $('#user_box1').removeClass('hide');

         
         break;
       case 2:
         console.log('you played paper');
         random_gesture = randomReaction();
         result = declareResult(gesture,random_gesture);

         $("#your_choice").html("Paper");
         $("#winner").html(result);
         $('#user_box2').removeClass('hide');
         break;
       case 3:
         console.log('you played scissors');
         random_gesture = randomReaction();
         result = declareResult(gesture,random_gesture);

         $("#your_choice").html("Scissors");
         $("#winner").html(result);
         $('#user_box3').removeClass('hide');

         break;
       case 4:
        console.log(' you played the trump card');
        wolfattack();
        break;
        

     };

     if(result=="victory"){
        $("#winner").html(String(result));
        UserScore++;
        $("#YourScore").html(String(UserScore));
     }
     if(result=="defeat"){
        $("#winner").html(String(result));
        ComputerScore++;
        $("#ComputerScore").html(String(ComputerScore));
     }
     

 };

