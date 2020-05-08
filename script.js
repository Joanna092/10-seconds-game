$(document).ready(function() {

    var allResults = [];
    var result;
    var timeLeft = 10;
    var currentQuestion;

    var getQuestionType = function() {
        var selectedTypes = [];

        $('.checkboxes:checked').each(function(i, ele) {
            selectedTypes.push($(ele).prop('id'))
        })

        if (selectedTypes.length === 0) {
            return 'plus';
        }

        return selectedTypes[Math.floor(Math.random() * selectedTypes.length)];
    }

    var questionGenerator = function() {

        var selectedRange = $('#rangeInputId').val();

        var question = {};
        var num1 = Math.floor(Math.random() * selectedRange);
        var num2 = Math.floor(Math.random() * selectedRange);

        var questionType = getQuestionType();

        switch (questionType) {
            case "plus":
                result = num1 + num2;
                question.equation = String(num1) + " + " + String(num2);
                break;
            case 'minus':
                num1 = num2 + Math.floor(Math.random() * selectedRange);
                result = num1 - num2;
                question.equation = String(num1) + " - " + String(num2);
                break;
            case 'multiply':
                result = num1 * num2;
                question.equation = String(num1) + " * " + String(num2);
                break;
            case 'divide':
                num2 = Math.floor(Math.random() * (selectedRange - 1)) + 1;
                num1 = num2 * Math.floor(Math.random() * selectedRange);
                result = num1 / num2;
                question.equation = String(num1) + " / " + String(num2);
                break;
        }
        return question;
    };

    var renderNewQuestion = function() {
        currentQuestion = questionGenerator();
        $('#equation').text(currentQuestion.equation);
    };

    renderNewQuestion();

    var points = 0;

    var checkAnswer = function(userInput, answer) {
        if (userInput === result) {
            points += 1;
            timeLeft += 1;
            $('#points').html(points);
            $('#myInput').val('');
            renderNewQuestion();
            $('#alert').html(' '); //
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
