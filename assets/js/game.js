// GAME VARIABLES
//----------------------//
var userScore = 0;
//Counts the amount of questions
var currentQuestion = 0;
var timer = 30;
var timerCount;
var startTimer = function()  {
    timerCount = setInterval(function()  {
        console.log(timer);
        if(timer === 0)  {
        } else  {
        $("#timer").text(timer);
        timer--;
    }
    }, 1000);
    
 }


var questionArr = [
    {
        question: "What is the original name of Andy's band?",
        choice1: "Skin Pop",
        choice2: "Fire Smell",
        choice3: "Mouse Rat",
        choice4: "Cheese Poof",
        answer: 3,       //Answer is equal to value of correct guess
        correctAnswer: "Mouse Rat",
        image: "assets/images/mouserat.gif"

    },{
        question: "What kind of car does Donna drive?",
        choice1: "Mercedes",
        choice2: "BMW",
        choice3: "Jaguar",
        choice4: "Prius",
        answer: 1, 
        correctAnswer: "Mercedes",
        image: "assets/images/donna.gif"
    },{
        question: "Which NBA legend did Tom take to the Snake Hole Lounge?",
        choice1: "Larry Bird",
        choice2: "Kobe Bryant",
        choice3: "Mark Jackson",
        choice4: "Detlef Schrempf",
        answer: 4,
        correctAnswer: "Detlef Schrempf", 
        image: "assets/images/detlef.gif" 
    },{
        question: "Who is Leslie's celebrity crush?",
        choice1: "Bill Gates",
        choice2: "Joe Biden",
        choice3: "Channing Tatum",
        choice4: "Morgan Freeman",
        answer: 2,
        correctAnswer: "Joe Biden",
        image: "assets/images/leslie.gif" 
    },{
        question: "What is at the top of Ron Swanson's Pyramid of Greatness?",
        choice1: "Bacon",
        choice2: "Guns",
        choice3: "Honor",
        choice4: "Wood",
        answer: 3,
        correctAnswer: "Honor",
        image: "assets/images/ron.gif" 
    },{
        question: "Who was Tom's partner in Entertainment 720?",
        choice1: "Ben",
        choice2: "Jean Ralphio",
        choice3: "Councilman Jamm",
        choice4: "Anne",
        answer: 2,
        correctAnswer: "Jean Ralphio",
        image: "assets/images/jean.gif" 
    },{
        question: "Which member of the Parks and Recreation staff goes on to become Mayor of Pawnee?",
        choice1: "Ron",
        choice2: "Donna",
        choice3: "Jerry",
        choice4: "Tom",
        answer: 3,
        correctAnswer: "Jerry",
        image: "assets/images/jerry.gif" 
    },{
        question: "Who shot Ron?",
        choice1: "Leslie",
        choice2: "Jerry",
        choice3: "Donna",
        choice4: "Tom",
        answer: 4,
        correctAnswer: "Tom",
        image: "assets/images/tom.gif"
    },{
        question: "What is the name of the town that borders Pawnee?",
        choice1: "Sherman Oaks",
        choice2: "Sierra Hills",
        choice3: "Eagleton",
        choice4: "Springfield",
        answer: 3,
        correctAnswer: "Eagleton",
        image: "assets/images/eagleton.gif"
    },{
        question: "What is the name of Ron's sax playing alter ego?",
        choice1: "Duke Silver",
        choice2: "Count Brass",
        choice3: "Frankie Fast Fingers",
        choice4: "--Name Redacted--",
        answer: 1,
        correctAnswer: "Duke Silver",
        image: "assets/images/duke.gif"
    },{
        question: "What is the name of Indiana's beloved minature horse?",
        choice1: "Tiny Horace",
        choice2: "Bob Bird",
        choice3: "Lil Sebastian",
        choice4: "Hoosier Horse",
        answer: 3,
        correctAnswer: "Lil Sebastian",
        image: "assets/images/lilSebastian.gif"
    },{
        question: "Which famous R&B recording artist is Donna realted too?",
        choice1: "Sisqo",
        choice2: "Ginuwine",
        choice3: "R Kelly",
        choice4: "Seal",
        answer: 2,
        correctAnswer: "Ginuwine",
        image: "assets/images/ginuwine.gif"
    },{
        question: "What is the name of both of Ron's ex wives?",
        choice1: "Tammy",
        choice2: "Alice",
        choice3: "Denise",
        choice4: "Susan",
        answer: 1,
        correctAnswer: "Tammy",
        image: "assets/images/tammy.gif"
    },{
        question: "What is the full time profession of Jeremy Jamm?",
        choice1: "Lawyer",
        choice2: "Garbage Man",
        choice3: "Dentist",
        choice4: "DJ",
        answer: 3,
        correctAnswer: "Dentist",
        image: "assets/images/jamm.gif"
    }
]

$(document).ready(function(){
    checkGuess();
    $(document).on('click', ".start-button", function() {
        $(".start-button").hide();
        resetGame();
    });
});



// var timerClock = function()  {
    
// }

var renderQuestions = function()  {
    $(".game-container").show();
    $(".score-container").show();
    startTimer();
    $(".img-container").hide();
    $("#question").text(questionArr[currentQuestion].question);
    $("#choice-1").text(questionArr[currentQuestion].choice1);
    $("#choice-2").text(questionArr[currentQuestion].choice2);
    $("#choice-3").text(questionArr[currentQuestion].choice3);
    $("#choice-4").text(questionArr[currentQuestion].choice4);
}

var checkGuess = function()  {
    //Collect value and compare to question answer
    $(document).on('click', ".guess", function(){
        clearInterval(timerCount);
        timer = 30;
        console.log("works");
        var userGuess = $(this).val();
        console.log(typeof userGuess);
        console.log(typeof $(this).val());
        if(userGuess == questionArr[currentQuestion].answer)  {
            userScore++;
            console.log("correct guess");
            $("#score").text(userScore + " Correct");
            currentQuestion++
            renderCorrect();
        } else {
            currentQuestion++;
            renderWrong();
        }
    });

}

var endGame = function()  {
    $(".game-container").hide();
    $(".results-container").hide();
    $(".image-container").attr('src', "assets/images/dead.gif")
    $(".game-over").show();
    $(document).on('click', ".game-over", function(){
        $(".game-over").hide();
        $(".start-button").show();
    });
}

var resetGame = function()  {       //Reset the game back to the beginning
    timerSec = 30;
    userScore = 0;
    $("#score").text(userScore + " Correct");
    currentQuestion = 0;
    console.log("Current Question" + currentQuestion);
    renderQuestions();
}



var renderCorrect = function()  {
    var gameContainer = $(".game-container");
    var resultsConatiner = $(".results-container")
    
    gameContainer.hide();
 
    resultsConatiner.show();
    

    $(".img-container").show();
    $(".score-container").hide();
    
    $(".answer-value").text("Correct");
    $(".correct-answer").text("Correct Answer: " + questionArr[currentQuestion - 1].correctAnswer);
    $(".img-container").attr('src', questionArr[currentQuestion -1].image);
    $(".img-container").html(questionArr[currentQuestion -1].image);
    $(".next-question").on('click', function(){
        if(currentQuestion == (questionArr.length))  {
            console.log("This is the current question: " + currentQuestion);
            endGame();
        } else{
            resultsConatiner.hide();
            renderQuestions();
        }
    })

}

var renderWrong = function()  {
    var gameContainer = $(".game-container");
    var resultsConatiner = $(".results-container")
    
    gameContainer.hide();
 
    resultsConatiner.show();

    

    $(".img-container").show();
    $(".score-container").hide();
    
    $(".answer-value").text("Wrong");
    $(".correct-answer").text("Correct Answer: " + questionArr[currentQuestion - 1].correctAnswer);
    $(".img-container").attr('src', questionArr[currentQuestion -1].image);
    $(".img-container").html(questionArr[currentQuestion -1].image);
    $(".next-question").on('click', function(){
        if(currentQuestion == (questionArr.length))  {
            console.log("This is the current question: " + currentQuestion);
            endGame();
        } else{
            resultsConatiner.hide();
            renderQuestions();
        }
    })

}










//TIMER
//----------------------//
//TIMER STARTS AT 30 SECONDS
//ONCE TIMER RUNS OUT NEW QUESTION IS LOADED AND TIMER RESTARTS

//QUESTIONS
//----------------------//
//QUESTION, 4 MULTIPLE CHOICE OPTIONS, AND ANSWER STORED IN AN OBJECT
//QUESTION LOADS AT GAME START
//RELOAD NEW QUESTION
//CONTINUE GAME UNTIL NO MORE QUESTIONS REMAIN
//DISPLAY USER SCORE 