var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;
var gameStarted = false;

var yourName = prompt("Let's first meet each other. What is your Name?")
$("h1").text("Press A Key to Start, " + yourName)

//When user presses any button, it triggers nextSequence
$(document).keydown(function() {
  if (!gameStarted) {

    $("h1").text("Level " + 0)
    nextSequence();
    gameStarted = true;

  }
})


// When use clicks a button, it flashes and makes sound
$(".btn").click(function() {

  var userChosenColour = this.id;
  playSequence(userChosenColour)
  userClickedPattern.push(userChosenColour)
  checkAnswer(userClickedPattern.length - 1)

})


// Functions

function nextSequence() {
  userClickedPattern = [];
  level++;
  $("h1").text("Level " + level)
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);
  playSequence(randomChosenColor);

}

function playSequence(randomChosenColor) {
  switch (randomChosenColor) {

    case "green":
      $("#green").fadeOut(100).fadeIn(100);
      var greenSound = new Audio('sounds/green.mp3');
      greenSound.play();
      break;

    case "blue":
      $("#blue").fadeOut(100).fadeIn(100);
      var blueSound = new Audio('sounds/blue.mp3');
      blueSound.play();
      break;

    case "red":
      $("#red").fadeOut(100).fadeIn(100);
      var redSound = new Audio('sounds/red.mp3');
      redSound.play();
      break;

    case "yellow":
      $("#yellow").fadeOut(100).fadeIn(100);
      var yellowSound = new Audio('sounds/yellow.mp3');
      yellowSound.play();
      break;
  }
}

function checkAnswer(level) {

  if (gamePattern[level] === userClickedPattern[level]) {


    if (gamePattern.length === userClickedPattern.length) {

      // if (gamePattern.length === 1) {
      //     $("h1").text("Not that impressive, " + yourName)
      // } else if (gamePattern.length === 2) {
      //   $("h1").text("Still not that impressive, " + yourName)
      // } else {
      //   $("h1").text("Your mother thinks more of you than that, " + yourName)
      // }

      switch (gamePattern.length) {
        case 1:
        $("h1").text("Not that impressive, " + yourName);
        break;

        case 2:
        $("h1").text("Still not that impressive, " + yourName);
        break;

        default:
        $("h1").text("You are a disgrace to your family but keep it going, " + yourName);
        break;
      }

      // $("h1").text("Not that impressive, " + yourName)
      setTimeout(function() {
        nextSequence();
      }, 1000)

    }

  } else {

    var wrongSound = new Audio('sounds/wrong.mp3');
    wrongSound.play();
    $("body").addClass("game-over");
    setTimeout(function() {
      $("body").removeClass("game-over");
    }, 200)

    $("#level-title").text("You are a failure to your family, " + yourName +  ". Press Any Key to Restart");

    startOver()
  }

}


function startOver() {

  level = 0;
  gamePattern = [];
  gameStarted = false;
  // $("h1").text("Game Over")


}
