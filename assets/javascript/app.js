
// need a list of variables for the right, wrong, didnt answer, and timer
var rightAnswers = 0;
// console.log("Correct answer " + rightAnswers);
var wrongAnswers = 0;
var didNotAnswer = 0;
var timer = 20;
var intervalId;

// need to store the questions and answers in an array
var questions = [{
    question: "What video game company is associated with Super Mario Bros.?",
    guesses: ["Nintendo", "Sega", "Sony", "Microsoft"],
    answer: 0
},{
    question: "This lady of action uses guns, solves puzzles, and had movies based on her adventures.",
    guesses: ["Laura Croft", "Princess Peach", "Link", "Aerith"],
    answer: 0
},{
    question: "What acronym best describes the game World of Warcraft",
    guesses: ["MMORPG", "MOBA", "RPG", "TBS"],
    answer: 0
},{
    question: "Capcom's Megaman video game had an arch nemesis named?",
    guesses: ["Dr. Wiley", "Eggman", "Bowser", "Thanos"],
    answer: 0
}];

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

    if (number === 0) {
        stop();
    }
}

// need to function to stop the timer
    function stop() {
        clearInterval(intervalId);
    }

// questions to be produced when the button is clicked
$('#start').on('click', function() {

    $('#time').html('<h2>Vault 111 will close in: 20 Seconds</h2>' + '<br>');

    startTimer();
    // start button function should produce the questions


});




// submit button for when the questions are answered by the user


// need to store the right, wrong, unanswered and display to html


// need to hide the questions and display the results



