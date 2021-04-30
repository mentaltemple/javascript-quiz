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

    choice: [
      "A True/False Statement",
      "An alien life form",
      "A country",
      "A ghost",
    ],
    answer: "A True/False Statement",
  },
  {
    question: "What is a boolean?",

    choice: [
      "A True/False Statement",
      "A space ship",
      "An alien life form",
      "A ghost particle",
    ],
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
      var generateQuest = document.createElement("h3");

      var answerButtons = document.querySelector("#buttons");

      var makeButton1 = document.createElement("button");
      makeButton1.innerText = questionArray[i].choice[0];
      makeButton1.setAttribute("id", "button1");

      var makeButton2 = document.createElement("button");
      makeButton2.innerText = questionArray[i].choice[1];
      makeButton2.setAttribute("id", "button2");

      var makeButton3 = document.createElement("button");
      makeButton3.innerText = questionArray[i].choice[2];
      makeButton3.setAttribute("id", "button3");

      var makeButton4 = document.createElement("button");
      makeButton4.innerText = questionArray[i].choice[3];
      makeButton4.setAttribute("id", "button4");

      generateQuest.textContent = questionArray[i].question;
      questTxt.appendChild(generateQuest);

      answerButtons.appendChild(makeButton1);
      answerButtons.appendChild(makeButton2);
      answerButtons.appendChild(makeButton3);
      answerButtons.appendChild(makeButton4);

      var answerClick1 = document.querySelector("#button1");

      answerClick1.addEventListener("click", function (event) {
        console.log(answerClick1);
      });
      var answerClick2 = document.querySelector("#button2");

      answerClick2.addEventListener("click", function (event) {
        console.log(answerClick2);
      });
      var answerClick3 = document.querySelector("#button3");

      answerClick3.addEventListener("click", function (event) {
        console.log(answerClick3);
      });

      var answerClick4 = document.querySelector("#button4");

      answerClick4.addEventListener("click", function (event) {
        console.log(answerClick4);
      });
      // pull data from button clicked

      var but1txt = answerClick1.textContent;
      var but2txt = answerClick2.textContent;
      var but3txt = answerClick3.textContent;
      var but4txt = answerClick4.textContent;

      if (but1txt === questionArray[i].answer) {
        console.log(but2txt);
        console.log(questionArray[i].answer);

        // ++score;
      }
      return;
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
  displayQbox.setAttribute("style", "display: none;");
  var imgEl = document.createElement("img");
  imgEl.setAttribute("src", "./assets/images/game-over.jpg");
  mainEl.appendChild(imgEl);
}

//hide start screen

//user presented with a question, user answers the question

//user answer is compared to correct answer

//if correct, add to score

//if incorrect, subtract from time

//user presented with another question

//when answer is incorrect, time is subtracted from the clock

//when all questions are answered, or time = 0, game over

//save initials and score
