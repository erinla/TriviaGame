// Displays start button to begin the game.

// Start button is pushed by user and game begins.

// Timer starts, first question is displayed with the answer choices.

// User chooses correct answer before timer runs out.
// Answer is displayed with "Good Job".

// User chooses incorrect answer before timer runs out.
// Answer is displayed with "Wrong Answer."

// Time runs out before user picks an answer.
// Answer is displayed with "Time's Up!"

// All questions have been shown, end screen shows a tally of correct answers, incorrect answers, and unanswered questions.
// Start Over button is displayed with the tally.

// Game restarts and variables are reset.


$(document).ready(function () {

    var correctAnswers = 0;
    var incorrectAnswers = 0;
    var unansweredQuestions = 0;
    var timeLeft = 15;
    var gameRunning = false;
    var downloadTimer;
    var index = 0;


    var questions = [
        {
            question: "Finish that lyric! \nMoon river, wider than a mile...",
            choices: ["I'm crossing you in style someday", "The moon shines on the waves today", "Rivers make me smile", "I'll be seeing you, it has been a while"],
            answer: "I'm crossing you in style someday",
            image: ("assets/images/moonriver.jpg")
        },
        {
            question: "Finish that lyric! \nYou make me feel so young...",
            choices: ["You make me feel like bells have been rung", "You make me feel so spring has sprung", "You make me feel like I'm 19 again", "You make me feel so happy"],
            answer: "You make me feel so spring has sprung",
            image: ("assets/images/spring.jpg")
        },
        {
            question: "Finish that lyric! \nI've got you under my skin...",
            choices: ["And it feels like a total win", "You're really getting on my nerves", "I have got you, deep in the heart of me", "I wish you would go away"],
            answer: "I have got you, deep in the heart of me",
            image: ("assets/images/heart.jpg")
        },
        {
            question: "Finish that lyric! \nThey call you Lady Luck...",
            choices: ["But I call you Lady Grace", "And I'm your Sir Unlucky", "Cheers to the good life", "But there is room for doubt"],
            answer: "But there is room for doubt",
            image: ("assets/images/dice.jpg")
        },
        {
            question: "Finish that lyric! \nHeaven, I'm in heaven... ",
            choices: ["And my heart beats so that I can hardly speak", "The angels sing all around me", "The view is so beautiful from here", "Help me bring my feet back down"],
            answer: "And my heart beats so that I can hardly speak",
            image: ("assets/images/dance.jpg")
        },
        {
            question: "Finish that lyric! \nIt was just one of those things...",
            choices: ["It makes my heart dance and sing", "Just one of those crazy flings", "You make me feel like I've grown wings", "Now it's time to buy me a ring"],
            answer: "Just one of those crazy flings",
            image: ("assets/images/cheers.jpg")
        },
        {
            question: "Finish that lyric! \nHold me close and hold me fast...",
            choices: ["And dance with me all night", "Let us make this moment last", "The magic spell you cast", "Spin me around the dance floor"],
            answer: "The magic spell you cast",
            image: ("assets/immages/rose.jpg")
        },
        {
            question: "Finish that lyric! \nStart spreading the news...",
            choices: ["I'm quitting my job for love", "I've got the blues", "The birds sing a tune", "I'm leaving today"],
            answer: "I'm leaving today",
            image: ("assets/images/newyork.jpg")
        }];

    function createQuestions(index) {
        gameRunning = true;
        $(".question").empty();

        var h2 = $('<h2>');
        h2.text(questions[index].question)
        $(".question").append(h2);
        for (var j = 0; j < 4; j++) {
            var button = $('<button>');
            button.text(questions[index].choices[j])
            button.addClass("btn-question btn-info p-3 m-3")
            button.attr("data-value", questions[index].choices[j])
            button.attr("data-index", [index])
            $(".question").append(button);
        }


        timer();

    }



    $(document).on("click", ".btn-question", function () {
        var dataValue = $(this).attr("data-value")
        var dataIndex = $(this).attr("data-index")
        console.log(dataValue)
        var correctAnswer = questions[dataIndex].answer;
        if (!gameRunning) {
            return false;
        }
        if (dataValue === correctAnswer) {
            correctAnswers++
            index++
            console.log("Correct answers " + correctAnswers)

        } else {
            incorrectAnswers++
            index++
            console.log("Incorrect answers " + incorrectAnswers)

        }


        if (correctAnswers === 1 || incorrectAnswers === 1) {
            createQuestions(index);

        }

        if (correctAnswers + incorrectAnswers === 8) {
            restartGame();
        }


    })



    function restartGame() {
        $(".start").html("Play Again?");
        $(".start").show();



    }

    function timer() {
        $("#countdown").show();
        downloadTimer = setInterval(function () {
            document.getElementById("countdown").innerHTML = timeLeft + " seconds remaining";
            timeLeft -= 1;
            if (timeLeft <= 0) {
                clearInterval(downloadTimer);
                gameRunning = false;
                document.getElementById("countdown").innerHTML = "Time's Up!"
                $(".question").empty();
                var winTally = '<h3>' + correctAnswers + '</h3>';
                $(".win-tally").html("Correct Answers: " + correctAnswers);
                var lossTally = '<h3>' + incorrectAnswers + '</h3>';
                $(".loss-tally").html("Incorrect Answers: " + incorrectAnswers);
                restartGame();
            }
        }
            , 1000);
    }



    $(".start").on("click", function () {
        createQuestions(index);
        $(".start").hide();
        correctAnswers = 0;
        incorrectAnswers = 0;
        timeLeft = 30;
        document.getElementById("countdown").innerHTML = timeLeft + " seconds remaining";
    });


    //*********************************************************************************** */
    // function createQuestions() {
    //     gameRunning = true;
    //     $(".question").empty();
    //     for (var i = 0; i < questions.length; i++) {
    //         var h2 = $('<h2>');
    //         h2.text(questions[i].question)
    //         $(".question").append(h2);
    //         for (var j = 0; j < 4; j++) {
    //             var button = $('<button>');
    //             button.text(questions[i].choices[j])
    //             button.addClass("btn-question btn-info p-3 m-3")
    //             button.attr("data-value", questions[i].choices[j])
    //             button.attr("data-index", [i])
    //             $(".question").append(button);
    //         }
    //     }
    //     timer();

    // }


    // $(document).on("click", ".btn-question", function () {
    //     var dataValue = $(this).attr("data-value")
    //     var dataIndex = $(this).attr("data-index")
    //     console.log(dataValue)
    //     var correctAnswer = questions[dataIndex].answer;
    //     if (!gameRunning) {
    //         return false;
    //     }
    //     if (dataValue === correctAnswer) {
    //         correctAnswers++
    //         console.log("Correct answers " + correctAnswers)
    //     } else {
    //         incorrectAnswers++
    //         console.log("Incorrect answers " + incorrectAnswers)
    //     }
    //     if (correctAnswers + incorrectAnswers === 8) {
    //         gameRunning = false;
    //         clearInterval(downloadTimer);
    //         $(".question").empty();
    //         $("#countdown").hide();
    //         var winTally = '<h3>' + correctAnswers + '</h3>';
    //         $(".win-tally").html("Correct Answers: " + correctAnswers);
    //         var lossTally = '<h3>' + incorrectAnswers + '</h3>';
    //         $(".loss-tally").html("Incorrect Answers: " + incorrectAnswers);
    //         restartGame();

    //     }
    // })

    // function restartGame() {
    //     $(".start").html("Play Again?");
    //     $(".start").show();



    // }

    // function timer() {
    //     $("#countdown").show();
    //     downloadTimer = setInterval(function () {
    //         document.getElementById("countdown").innerHTML = timeLeft + " seconds remaining";
    //         timeLeft -= 1;
    //         if (timeLeft <= 0) {
    //             clearInterval(downloadTimer);
    //             gameRunning = false;
    //             document.getElementById("countdown").innerHTML = "Time's Up!"
    //             $(".question").empty();
    //             var winTally = '<h3>' + correctAnswers + '</h3>';
    //             $(".win-tally").html("Correct Answers: " + correctAnswers);
    //             var lossTally = '<h3>' + incorrectAnswers + '</h3>';
    //             $(".loss-tally").html("Incorrect Answers: " + incorrectAnswers);
    //             restartGame();
    //         }
    //     }
    //         , 1000);
    // }



    // $(".start").on("click", function () {
    //     createQuestions();
    //     $(".start").hide();
    //     correctAnswers = 0;
    //     incorrectAnswers = 0;
    //     timeLeft = 5;
    //     document.getElementById("countdown").innerHTML = timeLeft + " seconds remaining";
    // });


});
