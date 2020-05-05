$(document).ready(function(){

var randomNumber1;
var randomNumber2;
var result;
var timeLeft = 10;

var generateNumbers = function () {
randomNumber1 = Math.floor(Math.random() * 10);
randomNumber2 = Math.floor(Math.random() * 10);
result = randomNumber1 + randomNumber2;
$('#randomNumber1').html(randomNumber1);
$('#randomNumber2').html(randomNumber2);
}

generateNumbers();

var points = 0;

var checkAnswer = function (userInput, answer) {
  if (userInput === result) {
    points += 1;
    timeLeft += 1;
    $('#points').html(points);
    $('#myInput').val('');
    generateNumbers();

  }
    }

  $("#myInput").on('keyup', function () {
     startGame();
     var inputValue = Number($("#myInput").val());
     checkAnswer(inputValue, result);
  });

  var interval;
  var startGame = function () {
    if (!interval) {

      if (timeLeft === 0) {
          timeLeft = 10;
          points = points - points;
        }

      interval = setInterval(function () {
        timeLeft--
        $('#countdown').html(timeLeft);
        if (timeLeft === 0) {
          clearInterval(interval);
          interval = undefined;
          $('#alert').html("Time's up! You got " + points + " points !");
        }
      }, 1000);
    }
  }

})
