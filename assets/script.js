var count = 30;
var questionNumber = 0;
var score = 0;
var enterscore = document.querySelector("#enterscore")
var questionContainer = document.querySelector("#question-container");
var question = document.querySelector("#question");
var startButtonElement = document.getElementById("start-btn");
var btnContainer = document.querySelector("#answer-buttons");
var buttons = document.querySelectorAll(".answer-button");
var feedback = document.querySelector("#feedback");
var inputEl = document.querySelector(".input");
var timerEl = document.getElementById("countdown");
var mainEl = document.getElementById("main");

console.log(buttons);
var index = 0;

var questionsArr = [
  {
    question:
      "Which Coffee Shop does the CIA headquarters own? (Fun Fact: baristas don’t write names on the cups)",
    answers: [
      "Dunkin'Donuts", "Starbucks", "Pete's Coffee & Tea", "Tully’s Coffee",
    ],
    correct: "Starbucks",
  },
  {
    question: "What Animal has the most Neck Bones?",
    answers: ["Sloth", "Aligator", "Giraffe", "Horse"],
    correct: "Sloth",
  },
  {
    question: "What is hotter than the Sun?",
    answers: ["Your Crush", "Volcanic lava", "Lightning", "Fire"],
    correct: "Lightning",
  },
  {
    question: "Most people fall asleep in how many minutes?",
    answers: ["5", "30", "7", "45"],
    correct: "7",
  },
];

function startGame() {
  console.log("startGame");
  var playContainerElement = document.querySelector(".question-container");
  var interval = setInterval(function () {
    document.getElementById("count").innerHTML = count;
    count--;
    if (count === 0 || questionNumber === questionsArr.length) {
      document.getElementById("count").innerHTML = "Out of Time!";
      clearInterval(interval);
      alert("You're out of time!");
    }
  }, 1000);

  questionContainer.classList.remove("hidden");
  startButtonElement.classList.add("hidden");
  showQuestion();
}
startButtonElement.addEventListener("click", startGame);

function endGame(){
enterscore.classList.remove("hidden")
}
function showQuestion() {
    if (questionNumber === questionsArr.length) {
        score = count;
        endGame();
        return;
    }
    question.textContent = questionsArr[questionNumber].question;
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].textContent = questionsArr[questionNumber].answers[i];
        
    }
}
function checkAnswer(event) {
   var correctAnswer = questionsArr[questionNumber].correct;

    if (event.target.textContent === correctAnswer) {
      console.log("correctAnswer");
    } else {
      console.log("wrongAnswer");
        count=count-5;
    }
    questionNumber++;
    showQuestion();
}

btnContainer.addEventListener("click", checkAnswer);


function endGame(){
  enterscore.classList.remove("hidden")
  }endGame.remove.questionContaineruestionContainer

btnContainer.addEventListener("click", endGame);
