
// need a list of variables for the right, wrong, didnt answer, and timer
var rightAnswers = 0;
// console.log("Correct answer " + rightAnswers);
var wrongAnswers = 0;
var didNotAnswer = 0;
var timer = 50;
var intervalId;

// need to store the questions and answers in an array
var questions = [{
    question: "What video game company is associated with Super Mario Bros.?",
    guesses: ["Nintendo", "Sega", "Sony", "Microsoft"],
    answer: 0
}, {
    question: "This lady of action uses guns, solves puzzles, and had movies based on her adventures. Who is she?",
    guesses: ["Laura Croft", "Princess Peach", "Link", "Aerith"],
    answer: 0
}, {
    question: "What acronym best describes the game World of Warcraft?",
    guesses: ["MMORPG", "MOBA", "RPG", "TBS"],
    answer: 0
}, {
    question: "Capcom's Megaman video game had an arch nemesis named?",
    guesses: ["Dr. Wily", "Eggman", "Bowser", "Thanos"],
    answer: 0
}];

// questions to be produced when the button is clicked
$("#start").on("click", function () {
    // hide the start button
    $(this).hide();

    $("#timer").html("<h2>Vault 111 will close in: 50 Seconds</h2>" + "<br>");

    startTimer();
    // start button function should produce the questions that need to be in a input type radio
    // first question
    $("#mario").html("<h3>" + questions[0].question + "</h3>");
    // first guesses
    $("#nintendo").html("<input type='radio' name='nintendo' value='0'>" + " <label> " + questions[0].guesses[0] + " </label> " +
        "<input type='radio' name='nintendo' value='1'>" + " <label> " + questions[0].guesses[1] + " </label> " +
        "<input type='radio' name='nintendo' value='2'>" + " <label> " + questions[0].guesses[2] + " </label> " +
        "<input type='radio' name='nintendo' value='3'>" + " <label> " + questions[0].guesses[3] + " </label><br><br>"
    );

    // second question
    $("#lady").html("<h3>" + questions[1].question + '</h3>');
    // second guesses
    $("#laura").html("<input type='radio' name='laura' value='0'>" + "<label>" + questions[1].guesses[0] + "</label>" +
        "<input type='radio' name='laura' value='1'>" + " <label> " + questions[1].guesses[1] + " </label> " +
        "<input type='radio' name='laura' value='2'>" + " <label> " + questions[1].guesses[2] + " </label> " +
        "<input type='radio' name='laura' value='3'>" + " <label> " + questions[1].guesses[3] + " </label><br><br>"
    );

    // third question
    $("#wow").html("<h3>" + questions[2].question + "</h3>");
    // third guesses
    $("#mmorpg").html("<input type='radio' name='mmorpg' value='0'>" + " <label> " + questions[2].guesses[0] + " </label> " +
        "<input type='radio' name='mmorpg' value='1'>" + " <label> " + questions[2].guesses[1] + " </label> " +
        "<input type='radio' name='mmorpg' value='2'>" + " <label> " + questions[2].guesses[2] + " </label> " +
        "<input type='radio' name='mmorpg' value='3'>" + " <label> " + questions[2].guesses[3] + " </label><br><br>"
    );

    // fourth question
    $("#megaman").html("<h3>" + questions[3].question + "</h3>");
    // fourth guesses
    $("#wily").html("<input type='radio' name='wily' value='0'>" + " <label> " + questions[3].guesses[0] + " </label> " +
        "<input type='radio' name='wily' value='1'>" + " <label> " + questions[3].guesses[1] + " </label> " +
        "<input type='radio' name='wily' value='2'>" + " <label> " + questions[3].guesses[2] + " </label> " +
        "<input type='radio' name='wily' value='3'>" + " <label> " + questions[3].guesses[3] + " </label><br><br>"
    );

    // submit button for when the questions are answered by the user
    $("#submit").html("<button id='done' class='btn'>Collect your Trophy!</button>");

    // grab the id done and make a on click function that will show the results and hide the questions
    $("#done").on("click", function () {
        stop();
        // checks the questions and answers
        scoreChecker();
        // hiding questions and displays results
        theEnd();

    });


});

// need to start the countdown timer
function startTimer() {
    clearInterval(intervalId);
    intervalId = setInterval(reduce, 1000);

}
// startTimer(); test successful: timer works

// need to display the countdown timer numbers in html
function reduce() {
    timer--;
    $("#timer").html("<h2>Vault 111 will close in: " + timer + " Seconds</h2>" + "<br>");

    if (timer === 0) {
        stop();

        scoreChecker();
        theEnd();
    }
}

// need to function to stop the timer
function stop() {
    clearInterval(intervalId);
}

// need to hide the questions and display the results
function theEnd() {
    $("#timer").hide();
    $("#mario").hide();
    $("#nintendo").hide();
    $("#lady").hide();
    $("#laura").hide();
    $("#wow").hide();
    $("#mmorpg").hide();
    $("#megaman").hide();
    $("#wily").hide();
    $("#submit").hide();

    $("#message").html("<h3>Please report to the Overseer for further testing</h3>");
    $("#correct").html("Answered Correctly: " + rightAnswers);
    $("#incorrect").html("Chose Poorly: " + wrongAnswers);
    $("#unanswered").html("Unanswered: " + didNotAnswer);
    // console.log("Unanswered: " + didNotAnswer)
}



// need to store the right, wrong, unanswered and display to html
function scoreChecker() {

    var userChoice1 = $("input[name='nintendo']:checked").val();
    // console.log(userChoice1);  this works
    var userChoice2 = $("input[name='laura']:checked").val();
    var userChoice3 = $("input[name='mmorpg']:checked").val();
    var userChoice4 = $("input[name='wily']:checked").val();
    // stored inputs now to match them to questions
    if (userChoice1 === undefined) {
        didNotAnswer++;
        // console.log(didNotAnswer); this works
    }
    else if (userChoice1 == questions[0].answer) {
        rightAnswers++;
        console.log(rightAnswers);
    }
    else {
        wrongAnswers++;
    }
    // second question
    if (userChoice2 === undefined) {
        didNotAnswer++;
    }
    else if (userChoice2 == questions[1].answer) {
        rightAnswers++;
    }
    else {
        wrongAnswers++;
    }
    // third question
    if (userChoice3 === undefined) {
        didNotAnswer++;
    }
    else if (userChoice3 == questions[2].answer) {
        rightAnswers++;
    }
    else {
        wrongAnswers++;
    }
    // fourth question
    if (userChoice4 === undefined) {
        didNotAnswer++;
    }
    else if (userChoice4 == questions[3].answer) {
        rightAnswers++;
    }
    else {
        wrongAnswers++;
    }
}




