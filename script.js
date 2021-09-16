// Timer--------------------------
var countdownEl = $("#countdown");
var currentTime = 59;

function countNumbers() {
  if (currentTime > 0) {
    countdownEl.text(currentTime);
    currentTime--;
  }
}

setInterval(countNumbers, 1000);

// Quiz--------------------------

const quizEl = document.getElementById("quiz");

let quiz = "";

const quizDiv = document.createElement('div');

let currentQuestionNumber = 0;

const questions = [
    {
        q: "Javascript has the ability to manipulate which front-end files?",
        a: [
            "HTML",
            "HTML or CSS",
            "Neither HTML or CSS",
            "CSS"
        ]
    },
    {
        q: "Which one of these is not a  programming language?",
        a: [
            "SQL",
            "Python",
            "Javascript",
            "C-- "
        ]
    },
    {
        q: "What does HTML stand for?",
        a: [
            "HyperTextMarkup Language",
            "Hot Trotting Message Lady",
            "IDK",
            "House-To-MessageLanguages"
        ]
    }  
]



// Homepage submit---------------------------------------
const submit = document.querySelector('button')
var submitEl = document.querySelector("#submit");
var startBtn = document.querySelector('#startBtn');



// functions
function startQuiz() {
    renderQuestion();
  }


// function checkAnswers(index2) {
//     // if else statement to check if the answer is correct
//      {
//         let result;
//         if (answers = wrong) {
//           result = 'positive';
//         } else {
//           result = 'NOT positive';
//         }

//         renderQuestion(index2+1);
//       }
// }

function renderQuestion(index) {
    currentQuestionNumber =  index || 0;
    quizDiv.innerHTML = "";
    quiz = ""
// template literal to read multiple questions and answers
  quiz += `
  <form>
  <p>${questions[currentQuestionNumber].q}:</p>
      <input type="radio" id="strings" name="fav_language" value="strings">
      <label for="html">${questions[currentQuestionNumber].a[0]}</label><br>
      <input type="radio" id="css" name="fav_language" value="CSS">
      <label for="css">${questions[currentQuestionNumber].a[1]}</label><br>
      <input type="radio" id="javascript" name="fav_language" value="JavaScript">
      <label for="javascript">${questions[currentQuestionNumber].a[2]}</label> <br>
      <input type="radio" id="javascript" name="fav_language" value="JavaScript">
      <label for="javascript">${questions[currentQuestionNumber].a[3]}</label> <br>
      <input id=submit type="submit"  value="Submit" onClick="checkAnswers(${currentQuestionNumber})">
  </form>
  `;

  quizDiv.innerHTML = quiz;

document.querySelector('body').append(quizDiv)}



// <!-- To save initials at the end of the quiz -->

// document.getElementById("myForm").onsubmit = function() {myFunction()};
    
// function myFunction() {
//   alert("The form was submitted");
// }


startBtn.addEventListener('click', startQuiz)