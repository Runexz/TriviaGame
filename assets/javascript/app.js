
// need a list of variables for the right, wrong, didnt answer, and timer
var rightAnswers = 0;
// console.log("Correct answer " + rightAnswers);
var wrongAnswers = 0;
var didNotAnswer = 0;
var timer = 20;

var intervalId;

// need to start the countdown timer
function startTimer() {
    clearInterval(intervalId);
    intervalId = setInterval(reduce, 1000);
    
}
// startTimer(); test successful: timer works

// need to display the countdown timer numbers in html
function reduce() {
    timer--;
    $('#timer').html("<h2>Vault 111 will close in: " + timer + " Seconds</h2>" + "<br>");
}

// need to function for the timer


// questions to be produced when the button is clicked



// start button function should produce the questions


// submit button for when the questions are answered by the user


// need to store the right, wrong, unanswered and display to html


// need to hide the questions and display the results



