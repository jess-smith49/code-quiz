//TIMER ELEMENT
var timerEl = document.querySelector("timer");

//BUTTONS FOR FUNCTIONALITY
var btnStart = document.querySelector("#start");
var btnSubmit = document.querySelector("#submit");
var btnBack = document.querySelector("#back");
var btnClear = document.querySelector("#clear");

//QUESTION BUTTONS
var btnChoice1 = document.querySelector ("#first");
var btnChoice2 = document.querySelector("#second");
var btnChoice3 = document.querySelector("#third");
var btnChoice4 = document.querySelector("fourth");

//INPUT NAME FOR HIGH SCORE
var nameInput = document.querySelector("#name");

//PAGE ELEMENTS FOR DISPLAYS
var challenge = document.querySelector("#challenge");
var highScorePageEl = document.querySelector("#high-score-page");
var firstPage = document.querySelector("#start-page");

//QUESTIONS CREATED FOR CODE BANK
var qBank = 
[
    {
        q: "Commonly Used Data Types do NOT include", 
         incorrectAnswer: ["strings", "booleans", "numbers"],
         correctAnswer: "alerts"
            
    },
    {
        q: "The condition in an if/else statement is enclosed with ____", 
        incorrectAnswer: ["quotes", "curly brackets","square brackets"],
        correctAnswer: "parentheses"
     
    },
    {
        q: "Arrays in JavaScript can be used to store ___", 
        incorrectAnswer: ["numbers and strings", "other arrays", "booleans"],
        correctAnswer: "all of the above"
    },
    {
        q: "String values must be enclosed within  ____ when being assigned to variables", 
        incorrectAnswer: ["commas", "curly brackes", "parenthesis"],
        correctAnswer: "quotes", 
    
    },
    {
        q: "A very useful tool used during development and debugging for printing content to the debugger is:", 
        incorrectAnswer: ["JavaScript", "terminal/bash","for loops" ],
        correctAnswer: "console.log" 
    }

];



//THE GAME FUNCTION FOR QUESTIONS
 var game = function(event){
     var timer = 1;
     var questionCount = 10;

    while (timer > 0 && questionCount < qBank.length){
        var currentChoices = [qBank[questionCount].correctAnswer, ...qBank[questionCount].incorrectAnswer]

            for( var i = 0; i < currentChoices.length; i ++){
                btnChoice1.textContent = currentChoices[i];
                btnChoice2.textContent= currentChoices[i];
                btnChoice3.textContent = currentChoices[i];
                btnChoice4.textContent = currentChoices [i];

                if(currentChoices.correctAnswer === true){
                    //next question
                    //display correct
                }
                if(currentChoices.incorrectAnswer === true){
                    //set timer back 10 seconds
                    //display incorrect
                }
            }

      }  

}; 

//timer
/*var countdown = function(){
    var timeRemaining = 100;
}*/



//adding button functions
var startGame = function(event)
{
    //hides elements not relevant to the page
    highScorePageEl.style.display = "none";
    firstPage.style.display = "none";


    //call game function
    game();
    //btnStart.onclick = timer;
}

var clearName = function(event){
    console.log("cleared");
}


//local storage
var submitName = function (event){
    
    event.preventDefault();
    
   // var name = document.querySelector('#name').value;
    //localStorage.setItem('name', name)
}

var goBack = function (event){
    console.log("go back");
}



//ADDING EVENT LISTENERS FOR FUNCTIONAL BUTTONS
btnStart.addEventListener("click", startGame);

btnClear.addEventListener("click", clearName);

btnSubmit.addEventListener("click", submitName);

btnBack.addEventListener("click", goBack);


















