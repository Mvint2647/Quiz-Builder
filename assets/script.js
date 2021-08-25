var count = 60;
var questionNumber = 0;
var score = 0;

var questionContainer = document.querySelector("#question-container");
var question = document.querySelector("#question");
var startButtonElement = document.querySelector("#start-btn")
var btnContainer = document.querySelector("#answer-buttons")
var buttons = document.querySelectorAll(".answer-button")
var feedback = document.querySelector("#feedback");
var inputEl = document.querySelector(".input")
var timerEl = document.getElementById('countdown');
var mainEl = document.getElementById('main');

console.log(buttons);
var index = 0;
    
var questionsArr = [
    {
        question: "Which Coffee Shop does the CIA headquarters own? (Fun Fact: baristas don’t write names on the cups)",
        answers: ["Dunkin'Donuts","Starbucks","Pete's Coffee & Tea","Tully’s Coffee"], 
        correct: "Starbucks"
    
    },     {
        question: "What Animal has the most Neck Bones?",
        answers: ["Sloth","Aligator","Giraffe","Horse"], 
        correct: "Sloth"

    },     {
        question: "What is hotter than the Sun?",
        answers: ["Your Crush","Volcanic lava","Lightning","Fire"], 
        correct: "Lightning"

    },     {
        question: "Most people fall asleep in how many minutes?",
        answers: ["5","30","7","45"], 
        correct: "7"

},
]

function startGame() {
    console.log("startGame")
    var playContainerElement = document.querySelector(".question-container") 
    var interval = setInterval(function(){
        document.getElementById('count').innerHTML=count;
        count--;
        if (count === 0){
          clearInterval(interval);
          document.getElementById('count').innerHTML='Done';
          // or...
          alert("You're out of time!");
        }
      }, 1000);
    questionContainer.classList.remove("hidden")
    startButtonElement.classList.add("hidden")
    showQuestion();
}
    startButtonElement.addEventListener('click', startGame)

// Q & A Appearance-----------------------------------------

function showQuestion() {
    question.textContent = questionsArr[questionNumber].question;
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].textContent = questionsArr[questionNumber].answers[i];
    }
    
};
 function checkAnswer(e) {
    var type = e.target.type;
    if(type==="submit"){
        var clickedAnswer = e.target.textContent;

        // Do code here to check for right or wrong answer

        // If right answer up the score

        // If wrong answer decrement time by 5 seconds

        // Increment question number to move to next question

        showQuestion();
    }
 } 

 btnContainer.addEventListener('click',checkAnswer);
 