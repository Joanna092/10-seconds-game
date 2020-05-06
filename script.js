var playPlus = function() {

    $(document).ready(function() {

        $('#calculation_mark').html(" +");

        var allResults = [0, 0];
        var randomNumber1;
        var randomNumber2;
        var result;
        var timeLeft = 10;

        var generateNumbers = function() {
            randomNumber1 = Math.floor(Math.random() * rangeOutputId.value);
            randomNumber2 = Math.floor(Math.random() * rangeOutputId.value);
            result = randomNumber1 + randomNumber2;
            $('#randomNumber1').html(randomNumber1);
            $('#randomNumber2').html(randomNumber2);
        }

        generateNumbers();

        var points = 0;

        var checkAnswer = function(userInput, answer) {
            if (userInput === result) {
                points += 1;
                timeLeft += 1;
                $('#points').html(points);
                $('#myInput').val('');
                generateNumbers();

            }
        }

        $("#myInput").on('keyup', function() {
            startGame();
            var inputValue = Number($("#myInput").val());
            checkAnswer(inputValue, result);
        });

        var interval;
        var startGame = function() {
            if (!interval) {

                if (timeLeft === 0) {
                    timeLeft = 10;
                    points = points - points;
                }

                interval = setInterval(function() {
                    timeLeft--
                    $('#countdown').html(timeLeft);
                    if (timeLeft === 0) {
                        clearInterval(interval);
                        interval = undefined;
                        allResults.push(points);
                        $('#highestNumber').html(Math.max.apply(null, allResults));
                        $('#alert').html("Time's up! You got " + points + " points !");
                    }
                }, 1000);
            }
        }

    })

}


var playMinus = function() {

    $(document).ready(function() {

        $('#calculation_mark').html(" -");

        var allResults = [0, 0];
        var randomNumber1;
        var randomNumber2;
        var result;
        var timeLeft = 10;

        var generateNumbers = function() {

            randomNumber1 = Math.floor(Math.random() * rangeOutputId.value)
            randomNumber2 = randomNumber1 + Math.floor(Math.random() * rangeOutputId.value)

            result = randomNumber2 - randomNumber1;
            $('#randomNumber1').html(randomNumber2);
            $('#randomNumber2').html(randomNumber1);
        }

        generateNumbers();

        var points = 0;

        var checkAnswer = function(userInput, answer) {
            if (userInput === result) {
                points += 1;
                timeLeft += 1;
                $('#points').html(points);
                $('#myInput').val('');
                generateNumbers();

            }
        }

        $("#myInput").on('keyup', function() {
            startGame();
            var inputValue = Number($("#myInput").val());
            checkAnswer(inputValue, result);
        });

        var interval;
        var startGame = function() {
            if (!interval) {

                if (timeLeft === 0) {
                    timeLeft = 10;
                    points = points - points;
                }

                interval = setInterval(function() {
                    timeLeft--
                    $('#countdown').html(timeLeft);
                    if (timeLeft === 0) {
                        clearInterval(interval);
                        interval = undefined;
                        allResults.push(points);
                        $('#highestNumber').html(Math.max.apply(null, allResults));
                        $('#alert').html("Time's up! You got " + points + " points !");
                    }
                }, 1000);
            }
        }

    })

}


var playMultiply = function() {

    $(document).ready(function() {

        $('#calculation_mark').html(" *");
        var allResults = [0, 0];

        var randomNumber1;
        var randomNumber2;
        var result;
        var timeLeft = 10;

        var generateNumbers = function() {
            randomNumber1 = Math.floor(Math.random() * rangeOutputId.value);
            randomNumber2 = Math.floor(Math.random() * rangeOutputId.value);
            result = randomNumber1 * randomNumber2;
            $('#randomNumber1').html(randomNumber1);
            $('#randomNumber2').html(randomNumber2);
        }

        generateNumbers();

        var points = 0;

        var checkAnswer = function(userInput, answer) {
            if (userInput === result) {
                points += 1;
                timeLeft += 1;
                $('#points').html(points);
                $('#myInput').val('');
                generateNumbers();

            }
        }

        $("#myInput").on('keyup', function() {
            startGame();
            var inputValue = Number($("#myInput").val());
            checkAnswer(inputValue, result);
        });

        var interval;
        var startGame = function() {
            if (!interval) {

                if (timeLeft === 0) {
                    timeLeft = 10;
                    points = points - points;
                }

                interval = setInterval(function() {
                    timeLeft--
                    $('#countdown').html(timeLeft);
                    if (timeLeft === 0) {
                        clearInterval(interval);
                        interval = undefined;
                        allResults.push(points);
                        $('#highestNumber').html(Math.max.apply(null, allResults));
                        $('#alert').html("Time's up! You got " + points + " points !");
                    }
                }, 1000);
            }
        }

    })

}

var playDivide = function() {

    $(document).ready(function() {

        $('#calculation_mark').html(" /");
        var allResults = [0, 0];

        var randomNumber1;
        var randomNumber2;
        var result;
        var timeLeft = 10;

        var generateNumbers = function() {

            randomNumber1 = Math.floor(Math.random() * (rangeOutputId.value - 1)) + 1;
            randomNumber2 = randomNumber1 * Math.floor(Math.random() * rangeOutputId.value);

            result = randomNumber2 / randomNumber1;
            $('#randomNumber1').html(randomNumber2);
            $('#randomNumber2').html(randomNumber1);
        }

        generateNumbers();

        var points = 0;

        var checkAnswer = function(userInput, answer) {
            if (userInput === result) {
                points += 1;
                timeLeft += 1;
                $('#points').html(points);
                $('#myInput').val('');
                generateNumbers();

            }
        }

        $("#myInput").on('keyup', function() {
            startGame();
            var inputValue = Number($("#myInput").val());
            checkAnswer(inputValue, result);
        });

        var interval;
        var startGame = function() {
            if (!interval) {

                if (timeLeft === 0) {
                    timeLeft = 10;
                    points = points - points;
                }

                interval = setInterval(function() {
                    timeLeft--
                    $('#countdown').html(timeLeft);
                    if (timeLeft === 0) {
                        clearInterval(interval);
                        interval = undefined;
                        allResults.push(points);
                        $('#highestNumber').html(Math.max.apply(null, allResults));
                        $('#alert').html("Time's up! You got " + points + " points !");
                    }
                }, 1000);
            }
        }

    })

}
