var questionContainerElement = document.getElementById('question-container')
var questionElement = document.getElementById('question-container')
var answerButtonsElement = document.getElementById('answer-buttons')
var playButtonElement = document.getElementById('play-btn')
var choiceButton = document.querySelectorAll('.btn')
console.log (choiceButton)



var questionsArr = [
    {
        question: "What color is the sky?",
        answers: ["blue","red","green","black"], 
        correct: "blue"
    
    },     {
        question: "What color is the ground?",
        answers: ["blue","red","green","black"], 
        correct: "blue"

    },     {
        question: "What color is the tree?",
        answers: ["blue","red","green","black"], 
        correct: "blue"

    },     {
        question: "What color is the trashcan?",
        answers: ["blue","red","green","black"], 
        correct: "blue"

},
]

var questionNumber = 0
console.log (questionsArr[questionNumber].question)
questionNumber++
console.log (questionsArr[questionNumber].question)
questionNumber++
console.log (questionsArr[questionNumber].question)
questionNumber++
console.log (questionsArr[questionNumber].question)



function startGame() {
    console.log('Started')
    var playContainerElement = document.querySelector('.play-container') 
    playContainerElement.classList.add('hidden')
}
    playButtonElement.addEventListener('click', startGame)
// --------------------------------------------------------------------------

var countDownDate = new Date("Jul 25, 2021 16:37:52").getTime();


// function setNextQuestion() {
//     resetState()
//     showQuestion(shuffledQuestions[currentQuestionIndex])
// }

// function showQuestion(question) {
//     questionElement.innerText= question.question
//     question.answers.forEach(answer=> {
//         var button = document.createElement('button')
//         button.innerText = answer.text
//         button.classList.add('btn')
//             if (answer.correct) {
//          button.dataset.correct = answer.correct 
//     }
//              button.addEventListener('click', selectAnswer)
//               answerButtonsElement.appendChild(button)
//     })
// }
// function resetState() {
//     clearStatusClass(document.body)
//     nextButton.classList.add('hide')
//     while (answerButtonsElement.firstChild) {
//         answerButtonsElement.removeChild
//         (answerButtonsElement.firstChild)
//     }
// }

// function selectAnswer(e) {
//         var selectedButton = e.target
//         var correct = selectedButton.dataset.correct
//         setStatusClass(document.body, correct)
//     Array.from(answerButtonsElement.children).forEach(button => {
//         setStatusClass(button, button.dataeset.correct)
//     })

//     if(shuffledQuestions.length > currentQuestionIndex +1) {
//     nextButton.classList.remove('hide')
// }else {
//     startButton.innerText = ('restart')
//     startButton.classList.remove('hide')
// }


// function setStatusClass(element, correct) {
//     clearStatusClass(element)
//     if (correct) {
//            element.classList.add('correct')
//         } else {
//            element.classList.add('wrong')
//     }
// }
 
// function clearStatusClass(element) {
//     element.classList.remove('correct')
//     element.classList.remove('wrong')
// }

// var questions = [
//     {
//         question: 'what is 1+82',
//         answers: [
//             { text: '82', correct: true },
//             { text: '22', correct: false }
//         ]
//     }
// ]
// }