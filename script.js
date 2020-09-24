//CREATING HTML 
var body = document.body
//(create/text/append)
var titleEl = document.createElement("h1");
    titleEl.textContent = "Code Quiz";
    body.appendChild(titleEl);

var viewScoresEl = document.createElement("h2");
    viewScoresEl.textContent = "View High Scores";
    body.appendChild(viewScoresEl);

var timerEl = document.createElement("h3");
    //timer
var introEl = document.createElement("p");
    introEl.textContent = ("Try to answer the following code-related questions within the time limit. Keep in mind that incorect answers will penalize your scoretime by 10 seconds!");
    body.appendChild(introEl);

var buttonEl = document.createElement("button");
    buttonEl.textContent = "Start Game";
    body.appendChild(buttonEl);
    

//created the question bank for code quiz
/*var qBank = 
[
    {q: "Commonly Used Data Types do NOT include", a: true },
    {q: "The condition in an if/else statement is enclosed with ____", a: true },
    {q: "Arrays in JavaScript can be used to store ___", a: true },
    {q: "String values must be enclosed within  ____ when being assigned to variables", a: true },
    {q: "A very useful tool used during development and debugging for printing content to the debugger is:", a: true }

];*/










