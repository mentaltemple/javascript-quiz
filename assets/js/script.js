//user clicks a start button, timer starts
// Selects element by class
var timeEl = document.querySelector("#time");
var mainEl = document.querySelector("main");
var clickStart = document.querySelector("#startBtn");
var hideStart = document.querySelector("#startScreen");
var displayQbox = document.querySelector("#qBox");

var secondsLeft = 60;

var questionArray = [
  {
    question: "What is a boolean?",

    choice: ["A True/False Statement", "wrong", "wrong", "wrong"],
    answer: "A True/False Statement",
  },
  {
    question: "What is a boolean?",

    choice: ["A True/False Statement", "wrong", "wrong", "wrong"],
    answer: "A True/False Statement",
  },
  {
    question: "What is a boolean?",

    choice: ["A True/False Statement", "wrong", "wrong", "wrong"],
    answer: "A True/False Statement",
  },
  {
    question: "What is a boolean?",

    choice: ["A True/False Statement", "wrong", "wrong", "wrong"],
    answer: "A True/False Statement",
  },
  {
    question: "What is a boolean?",

    choice: ["A True/False Statement", "wrong", "wrong", "wrong"],
    answer: "A True/False Statement",
  },
  {
    question: "What is a boolean?",

    choice: ["A True/False Statement", "wrong", "wrong", "wrong"],
    answer: "A True/False Statement",
  },
  {
    question: "What is a boolean?",

    choice: ["A True/False Statement", "wrong", "wrong", "wrong"],
    answer: "A True/False Statement",
  },
  {
    question: "What is a boolean?",

    choice: ["A True/False Statement", "wrong", "wrong", "wrong"],
    answer: "A True/False Statement",
  },
  {
    question: "What is a boolean?",

    choice: ["A True/False Statement", "wrong", "wrong", "wrong"],
    answer: "A True/False Statement",
  },
  {
    question: "What is a boolean?",

    choice: ["A True/False Statement", "wrong", "wrong", "wrong"],
    answer: "A True/False Statement",
  },
];

clickStart.addEventListener("click", function (event) {
  setTime();
  hideStart.setAttribute("style", "display: none;");
  displayQbox.setAttribute("style", "display: block;");
  questionGen();

  function questionGen() {
    for (i = 0; i < questionArray.length; i++) {
      var questTxt = document.querySelector("#questTxt");
      var answerButtons = document.querySelector("#buttons");
      var generateQuest = document.createElement("h3");
      generateQuest.textContent = questionArray[i].question;
      questTxt.appendChild(generateQuest);
    }
  }
});

function setTime() {
  // Sets interval in variable
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = "Time: " + secondsLeft + " seconds ";

    if (secondsLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      // Calls function to create and append image
      sendMessage();
    }
  }, 1000);
}

function sendMessage() {
  timeEl.textContent = "TIME'S UP!";
  var imgEl = document.createElement("img");
  imgEl.setAttribute("src", "./assets/images/game-over.jpg");
  mainEl.appendChild(imgEl);
}

//hide start screen

//user presented with a question, user answers the question

//user presented with another question

//when answer is incorrect, time is subtracted from the clock

//when all questions are answered, or time = 0, game over

//save initials and score
