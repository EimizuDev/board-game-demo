const wheel = document.getElementById("wheel");
const spinBtn = document.querySelector(".wheel-button");
const arrow = document.getElementById("arrow");
const card = document.querySelector(".card");
const questionCard = document.querySelector(".question-card");
const question = document.getElementById("question");
const a = document.getElementById("a");
const b = document.getElementById("b");
const c = document.getElementById("c");
const d = document.getElementById("d");
const level = document.getElementById("level");
const mainMenu = document.querySelector(".main-menu");
const mainMenuPlay = document.getElementById("play");
const figure1 = document.getElementById("figure-1");
const figure2 = document.getElementById("figure-2");
const figure3 = document.getElementById("figure-3");
const confirm = document.querySelector(".confirm");
const demo = document.querySelector(".demo");

let answerA = false;
let answerB = false;
let answerC = false;
let answerD = false;
let amountSelected = 0;

let category = -1;
let questionIndex = -1;

let turn = 0;

let movesBack = false;
let redZone = false;

let figure1MoveAmount = 0;
let figure2MoveAmount = 0;
let figure3MoveAmount = 0;

// Card
const deckData = [
  { color: "#faf041", top: "17%", left: "", rotate: 0 },
  { color: "#69c95f", top: "64%", left: "21%", rotate: 216 },
  { color: "#e83333", top: "64%", left: "54%", rotate: 144 },
  { color: "#2791e3", top: "35%", left: "11.5%", rotate: 288 },
  { color: "#ff9819", top: "35%", left: "63%", rotate: 69 }
];

let questionMark = [
  { question: "? (1 ats.)", allQuestions: true, answers: ["", "", "", ""], correctAnswersAmount: 1, correctAnswers: [3], level: 2, wasAnswered: false },
  { question: "? (1 ats.)", allQuestions: true, answers: ["", "", "", ""], correctAnswersAmount: 1, correctAnswers: [3], level: 2, wasAnswered: false },
  { question: "? (1 ats.)", allQuestions: false, answers: ["", ""], correctAnswersAmount: 1, correctAnswers: [3], level: 2, wasAnswered: false },
  { question: "? (1 ats.)", allQuestions: false, answers: ["", ""], correctAnswersAmount: 1, correctAnswers: [3], level: 2, wasAnswered: false },
  { question: "? (1 ats.)", allQuestions: true, answers: ["", "", "", ""], correctAnswersAmount: 1, correctAnswers: [3], level: 2, wasAnswered: false },
  { question: "? (1 ats.)", allQuestions: true, answers: ["", "", "", ""], correctAnswersAmount: 1, correctAnswers: [3], level: 2, wasAnswered: false },
  { question: "? (1 ats.)", allQuestions: true, answers: ["", "", "", ""], correctAnswersAmount: 1, correctAnswers: [3], level: 2, wasAnswered: false }
]

let sorting = [
  { question: "? (1 ats.)", allQuestions: true, answers: ["", "", "", ""], correctAnswersAmount: 1, correctAnswers: [3], level: 1, wasAnswered: false },
  { question: "? (1 ats.)", allQuestions: true, answers: ["", "", "", ""], correctAnswersAmount: 1, correctAnswers: [3], level: 1, wasAnswered: false },
  { question: "? (1 ats.)", allQuestions: true, answers: ["", "", "", ""], correctAnswersAmount: 1, correctAnswers: [3], level: 1, wasAnswered: false },
  { question: "? (1 ats.)", allQuestions: true, answers: ["", "", "", ""], correctAnswersAmount: 1, correctAnswers: [3], level: 1, wasAnswered: false },
  { question: "? (1 ats.)", allQuestions: true, answers: ["", "", "", ""], correctAnswersAmount: 1, correctAnswers: [3], level: 1, wasAnswered: false },
  { question: "? (1 ats.)", allQuestions: true, answers: ["", "", "", ""], correctAnswersAmount: 1, correctAnswers: [3], level: 1, wasAnswered: false },
  { question: "? (1 ats.)", allQuestions: true, answers: ["", "", "", ""], correctAnswersAmount: 1, correctAnswers: [3], level: 1, wasAnswered: false },
  { question: "? (1 ats.)", allQuestions: true, answers: ["", "", "", ""], correctAnswersAmount: 1, correctAnswers: [3], level: 1, wasAnswered: false },
  { question: "? (1 ats.)", allQuestions: true, answers: ["", "", "", ""], correctAnswersAmount: 1, correctAnswers: [3], level: 1, wasAnswered: false },
  { question: "? (1 ats.)", allQuestions: true, answers: ["", "", "", ""], correctAnswersAmount: 1, correctAnswers: [3], level: 1, wasAnswered: false },
  { question: "? (1 ats.)", allQuestions: true, answers: ["", "", "", ""], correctAnswersAmount: 1, correctAnswers: [3], level: 1, wasAnswered: false },
  { question: "? (1 ats.)", allQuestions: true, answers: ["", "", "", ""], correctAnswersAmount: 1, correctAnswers: [3], level: 1, wasAnswered: false },
  { question: "? (1 ats.)", allQuestions: true, answers: ["", "", "", ""], correctAnswersAmount: 1, correctAnswers: [3], level: 1, wasAnswered: false },
  { question: "? (1 ats.)", allQuestions: true, answers: ["", "", "", ""], correctAnswersAmount: 1, correctAnswers: [3], level: 1, wasAnswered: false },
  { question: "? (1 ats.)", allQuestions: true, answers: ["", "", "", ""], correctAnswersAmount: 1, correctAnswers: [3], level: 1, wasAnswered: false }
]

let food = [
  { question: "? (1 ats.)", allQuestions: true, answers: ["", "", "", ""], correctAnswersAmount: 1, correctAnswers: [3], level: 1, wasAnswered: false },
  { question: "? (1 ats.)", allQuestions: true, answers: ["", "", "", ""], correctAnswersAmount: 1, correctAnswers: [3], level: 1, wasAnswered: false },
  { question: "? (1 ats.)", allQuestions: true, answers: ["", "", "", ""], correctAnswersAmount: 1, correctAnswers: [3], level: 1, wasAnswered: false },
  { question: "? (1 ats.)", allQuestions: true, answers: ["", "", "", ""], correctAnswersAmount: 1, correctAnswers: [3], level: 1, wasAnswered: false },
  { question: "? (1 ats.)", allQuestions: true, answers: ["", "", "", ""], correctAnswersAmount: 1, correctAnswers: [3], level: 1, wasAnswered: false },
  { question: "? (1 ats.)", allQuestions: true, answers: ["", "", "", ""], correctAnswersAmount: 1, correctAnswers: [3], level: 1, wasAnswered: false },
  { question: "? (1 ats.)", allQuestions: true, answers: ["", "", "", ""], correctAnswersAmount: 1, correctAnswers: [3], level: 1, wasAnswered: false },
  { question: "? (1 ats.)", allQuestions: true, answers: ["", "", "", ""], correctAnswersAmount: 1, correctAnswers: [3], level: 1, wasAnswered: false },
  { question: "? (1 ats.)", allQuestions: true, answers: ["", "", "", ""], correctAnswersAmount: 1, correctAnswers: [3], level: 1, wasAnswered: false },
  { question: "? (1 ats.)", allQuestions: true, answers: ["", "", "", ""], correctAnswersAmount: 1, correctAnswers: [3], level: 1, wasAnswered: false },
  { question: "? (1 ats.)", allQuestions: true, answers: ["", "", "", ""], correctAnswersAmount: 1, correctAnswers: [3], level: 1, wasAnswered: false },
  { question: "? (1 ats.)", allQuestions: true, answers: ["", "", "", ""], correctAnswersAmount: 1, correctAnswers: [3], level: 1, wasAnswered: false },
  { question: "? (1 ats.)", allQuestions: true, answers: ["", "", "", ""], correctAnswersAmount: 1, correctAnswers: [3], level: 1, wasAnswered: false },
  { question: "? (1 ats.)", allQuestions: true, answers: ["", "", "", ""], correctAnswersAmount: 1, correctAnswers: [3], level: 1, wasAnswered: false },
  { question: "? (1 ats.)", allQuestions: true, answers: ["", "", "", ""], correctAnswersAmount: 1, correctAnswers: [3], level: 1, wasAnswered: false }
]

let devices = [
  { question: "? (1 ats.)", allQuestions: true, answers: ["", "", "", ""], correctAnswersAmount: 1, correctAnswers: [3], level: 1, wasAnswered: false },
  { question: "? (1 ats.)", allQuestions: true, answers: ["", "", "", ""], correctAnswersAmount: 1, correctAnswers: [3], level: 1, wasAnswered: false },
  { question: "? (1 ats.)", allQuestions: true, answers: ["", "", "", ""], correctAnswersAmount: 1, correctAnswers: [3], level: 1, wasAnswered: false },
  { question: "? (1 ats.)", allQuestions: true, answers: ["", "", "", ""], correctAnswersAmount: 1, correctAnswers: [3], level: 1, wasAnswered: false },
  { question: "? (1 ats.)", allQuestions: true, answers: ["", "", "", ""], correctAnswersAmount: 1, correctAnswers: [3], level: 1, wasAnswered: false },
  { question: "? (1 ats.)", allQuestions: true, answers: ["", "", "", ""], correctAnswersAmount: 1, correctAnswers: [3], level: 1, wasAnswered: false },
  { question: "? (1 ats.)", allQuestions: true, answers: ["", "", "", ""], correctAnswersAmount: 1, correctAnswers: [3], level: 1, wasAnswered: false },
  { question: "? (1 ats.)", allQuestions: true, answers: ["", "", "", ""], correctAnswersAmount: 1, correctAnswers: [3], level: 1, wasAnswered: false },
  { question: "? (1 ats.)", allQuestions: true, answers: ["", "", "", ""], correctAnswersAmount: 1, correctAnswers: [3], level: 1, wasAnswered: false },
  { question: "? (1 ats.)", allQuestions: true, answers: ["", "", "", ""], correctAnswersAmount: 1, correctAnswers: [3], level: 1, wasAnswered: false },
  { question: "? (1 ats.)", allQuestions: true, answers: ["", "", "", ""], correctAnswersAmount: 1, correctAnswers: [3], level: 1, wasAnswered: false },
  { question: "? (1 ats.)", allQuestions: true, answers: ["", "", "", ""], correctAnswersAmount: 1, correctAnswers: [3], level: 1, wasAnswered: false },
  { question: "? (1 ats.)", allQuestions: true, answers: ["", "", "", ""], correctAnswersAmount: 1, correctAnswers: [3], level: 1, wasAnswered: false },
  { question: "? (1 ats.)", allQuestions: true, answers: ["", "", "", ""], correctAnswersAmount: 1, correctAnswers: [3], level: 1, wasAnswered: false },
  { question: "? (1 ats.)", allQuestions: true, answers: ["", "", "", ""], correctAnswersAmount: 1, correctAnswers: [3], level: 1, wasAnswered: false }
]

let pollution = [
  { question: "? (1 ats.)", allQuestions: true, answers: ["", "", "", ""], correctAnswersAmount: 1, correctAnswers: [3], level: 1, wasAnswered: false },
  { question: "? (1 ats.)", allQuestions: true, answers: ["", "", "", ""], correctAnswersAmount: 1, correctAnswers: [3], level: 1, wasAnswered: false },
  { question: "? (1 ats.)", allQuestions: true, answers: ["", "", "", ""], correctAnswersAmount: 1, correctAnswers: [3], level: 1, wasAnswered: false },
  { question: "? (1 ats.)", allQuestions: true, answers: ["", "", "", ""], correctAnswersAmount: 1, correctAnswers: [3], level: 1, wasAnswered: false },
  { question: "? (1 ats.)", allQuestions: true, answers: ["", "", "", ""], correctAnswersAmount: 1, correctAnswers: [3], level: 1, wasAnswered: false },
  { question: "? (1 ats.)", allQuestions: true, answers: ["", "", "", ""], correctAnswersAmount: 1, correctAnswers: [3], level: 1, wasAnswered: false },
  { question: "? (1 ats.)", allQuestions: true, answers: ["", "", "", ""], correctAnswersAmount: 1, correctAnswers: [3], level: 1, wasAnswered: false },
  { question: "? (1 ats.)", allQuestions: true, answers: ["", "", "", ""], correctAnswersAmount: 1, correctAnswers: [3], level: 1, wasAnswered: false },
  { question: "? (1 ats.)", allQuestions: true, answers: ["", "", "", ""], correctAnswersAmount: 1, correctAnswers: [3], level: 1, wasAnswered: false },
  { question: "? (1 ats.)", allQuestions: true, answers: ["", "", "", ""], correctAnswersAmount: 1, correctAnswers: [3], level: 1, wasAnswered: false },
  { question: "? (1 ats.)", allQuestions: true, answers: ["", "", "", ""], correctAnswersAmount: 1, correctAnswers: [3], level: 1, wasAnswered: false },
  { question: "? (1 ats.)", allQuestions: true, answers: ["", "", "", ""], correctAnswersAmount: 1, correctAnswers: [3], level: 1, wasAnswered: false },
  { question: "? (1 ats.)", allQuestions: true, answers: ["", "", "", ""], correctAnswersAmount: 1, correctAnswers: [3], level: 1, wasAnswered: false },
  { question: "? (1 ats.)", allQuestions: true, answers: ["", "", "", ""], correctAnswersAmount: 1, correctAnswers: [3], level: 1, wasAnswered: false },
  { question: "? (1 ats.)", allQuestions: true, answers: ["", "", "", ""], correctAnswersAmount: 1, correctAnswers: [3], level: 1, wasAnswered: false }
]

function pullCard() {
  console.log("called");
  for (let x of rotationValues) {
    if (currentRotation >= x.minDegree && currentRotation <= x.maxDegree) {
      questionCard.style.backgroundColor = deckData[x.index].color;

      category = x.index;

      c.style.visibility = "visible";
      d.style.visibility = "visible";

      if (turn != 0) {
        confirm.style.visibility = "hidden";
        a.disabled = true;
        b.disabled = true;
        c.disabled = true;
        d.disabled = true;

        console.log("Not your turn: " + turn);
      } else {
        confirm.style.visibility = "visible";
        a.disabled = false;
        b.disabled = false;
        c.disabled = false;
        d.disabled = false;

        console.log("Your turn");
      }

      if (x.index == 0) {
        for (let i = 0; i < food.length; i++) {
          if (food[i].wasAnswered === false) {
            questionIndex = i;

            question.innerText = food[i].question;

            a.innerText = "A. " + food[i].answers[0];
            b.innerText = "B. " + food[i].answers[1];
            if (food[i].allQuestions === true) {
              c.innerText = "C. " + food[i].answers[2];
              d.innerText = "D. " + food[i].answers[3];
            } else {
              c.style.visibility = "hidden";
              d.style.visibility = "hidden";
            }

            if (food[i].level === 1) {
              level.innerText = "(Level one)";
            } else if (food[i].level === 2) {
              level.innerText = "(Level two)";
            } else {
              level.innerText = "(Level three)";
            }

            food[i].wasAnswered = true;

            break;
          } else if (i == food.length - 1) {
            // Can't play
          }
        }
      } else if (x.index == 1) {
        for (let i = 0; i < sorting.length; i++) {
          if (sorting[i].wasAnswered === false) {
            questionIndex = i;

            question.innerText = sorting[i].question;

            a.innerText = "A. " + sorting[i].answers[0];
            b.innerText = "B. " + sorting[i].answers[1];
            if (sorting[i].allQuestions === true) {
              c.innerText = "C. " + sorting[i].answers[2];
              d.innerText = "D. " + sorting[i].answers[3];
            } else {
              c.style.visibility = "hidden";
              d.style.visibility = "hidden";
            }

            if (sorting[i].level === 1) {
              level.innerText = "(Level one)";
            } else if (sorting[i].level === 2) {
              level.innerText = "(Level two)";
            } else {
              level.innerText = "(Level three)";
            }

            sorting[i].wasAnswered = true;

            break;
          } else if (i == sorting.length - 1) {
            // Can't play
          }
        }
      } else if (x.index == 2) {
        for (let i = 0; i < devices.length; i++) {
          if (devices[i].wasAnswered === false) {
            questionIndex = i;

            question.innerText = devices[i].question;

            a.innerText = "A. " + devices[i].answers[0];
            b.innerText = "B. " + devices[i].answers[1];
            if (devices[i].allQuestions === true) {
              c.innerText = "C. " + devices[i].answers[2];
              d.innerText = "D. " + devices[i].answers[3];
            } else {
              c.style.visibility = "hidden";
              d.style.visibility = "hidden";
            }

            if (devices[i].level === 1) {
              level.innerText = "(Level one)";
            } else if (devices[i].level === 2) {
              level.innerText = "(Level two)";
            } else {
              level.innerText = "(Level three)";
            }

            devices[i].wasAnswered = true;

            break;
          } else if (i == devices.length - 1) {
            // Can't play
          }
        }
      } else if (x.index == 3) {
        for (let i = 0; i < pollution.length; i++) {
          if (pollution[i].wasAnswered === false) {
            questionIndex = i;

            question.innerText = pollution[i].question;

            a.innerText = "A. " + pollution[i].answers[0];
            b.innerText = "B. " + pollution[i].answers[1];
            if (pollution[i].allQuestions === true) {
              c.innerText = "C. " + pollution[i].answers[2];
              d.innerText = "D. " + pollution[i].answers[3];
            } else {
              c.style.visibility = "hidden";
              d.style.visibility = "hidden";
            }

            if (pollution[i].level === 1) {
              level.innerText = "(Level one)";
            } else if (pollution[i].level === 2) {
              level.innerText = "(Level two)";
            } else {
              level.innerText = "(Level three)";
            }

            pollution[i].wasAnswered = true;

            break;
          } else if (i == pollution.length - 1) {
            // Can't play
          }
        }
      } else if (x.index == 4) {
        for (let i = 0; i < questionMark.length; i++) {
          if (questionMark[i].wasAnswered === false) {
            questionIndex = i;

            question.innerText = questionMark[i].question;

            a.innerText = "A. " + questionMark[i].answers[0];
            b.innerText = "B. " + questionMark[i].answers[1];
            if (questionMark[i].allQuestions === true) {
              c.innerText = "C. " + questionMark[i].answers[2];
              d.innerText = "D. " + questionMark[i].answers[3];
            } else {
              c.style.visibility = "hidden";
              d.style.visibility = "hidden";
            }

            if (questionMark[i].level === 1) {
              level.innerText = "(Level one)";
            } else if (questionMark[i].level === 2) {
              level.innerText = "(Level two)";
            } else {
              level.innerText = "(Level three)";
            }

            questionMark[i].wasAnswered = true;

            break;
          } else if (i == questionMark.length - 1) {
            // Can't play
          }
        }
      }

      setTimeout(function () {
        card.style.backgroundColor = deckData[x.index].color;
        card.style.top = deckData[x.index].top;
        card.style.left = deckData[x.index].left;
        card.style.transform = `rotate(${deckData[x.index].rotate}deg)`;
      }, 1000);

      setTimeout(function () {
        card.style.visibility = "visible";
        card.style.transition = "all 0.5s ease-in-out";
        if (deckData[x.index].rotate == 144 || deckData[x.index].rotate == 216) {
          card.style.transform = "rotate(180deg)";
        } else if (deckData[x.index].rotate == 288) {
          card.style.transform = "rotate(360deg)";
        } else {
          card.style.transform = "rotate(0deg)";
        }
      }, 1100);

      setTimeout(function () {
        card.style.transition = "all 1.5s cubic-bezier(0.66, 0.09, 0.31, 1.02)";
        card.style.top = "200%";
      }, 1300);

      setTimeout(function () {
        questionCard.style.visibility = "visible";
        questionCard.style.top = "50%";
      }, 2000);

      if (turn != 0) {
        console.log("not my turn");

        setTimeout(function () {
          while (canSelect()) {
            const i = Math.floor(Math.random() * 4);

            if (i == 0 && answerA == false) {
              answerA = true;
              amountSelected++;
              a.classList.toggle("selected");
            } else if (i == 1 && answerB == false) {
              answerB = true;
              amountSelected++;
              b.classList.toggle("selected");
            } else if (i == 2 && answerC == false) {
              answerC = true;
              amountSelected++;
              c.classList.toggle("selected");
            } else if (i == 3 && answerD == false) {
              answerD = true;
              amountSelected++;
              d.classList.toggle("selected");
            }
          }

          answerCheck();
        }, 4000);
      }

      break;
    }
  }
}

function canSelect() {
  if (category == 0) {
    if (amountSelected < food[questionIndex].correctAnswersAmount) return true;
  } else if (category == 1) {
    if (amountSelected < sorting[questionIndex].correctAnswersAmount) return true;
  } else if (category == 2) {
    if (amountSelected < devices[questionIndex].correctAnswersAmount) return true;
  } else if (category == 3) {
    if (amountSelected < pollution[questionIndex].correctAnswersAmount) return true;
  } else if (category == 4) {
    if (amountSelected < questionMark[questionIndex].correctAnswersAmount) return true;
  }

  return false;
}

function selectA() {
  if (answerA || canSelect()) {
    a.classList.toggle("selected");
    answerA = !answerA;

    if (answerA == true) {
      amountSelected++;
    } else {
      amountSelected--;
    }
  }
}

function selectB() {
  if (answerB || canSelect()) {
    b.classList.toggle("selected");
    answerB = !answerB;

    if (answerB == true) {
      amountSelected++;
    } else {
      amountSelected--;
    }
  }
}

function selectC() {
  if (answerC || canSelect()) {
    c.classList.toggle("selected");
    answerC = !answerC;

    if (answerC == true) {
      amountSelected++;
    } else {
      amountSelected--;
    }
  }
}

function selectD() {
  if (answerD || canSelect()) {
    d.classList.toggle("selected");
    answerD = !answerD;

    if (answerD == true) {
      amountSelected++;
    } else {
      amountSelected--;
    }
  }
}

function answerCheck() {
  a.disabled = true;
  b.disabled = true;
  c.disabled = true;
  d.disabled = true;

  a.classList.add("incorrect");
  b.classList.add("incorrect");
  c.classList.add("incorrect");
  d.classList.add("incorrect");

  let answeredCorrectly = true;

  let amountToMove = 2;

  if (category == 0) {
    amountToMove = food[questionIndex].level + 1;

    for (let i of food[questionIndex].correctAnswers) {
      if (i == 0) {
        a.classList.add("correct");
        a.classList.remove("incorrect");

        if (!answerA) {
          answeredCorrectly = false;
        }
      } else if (i == 1) {
        b.classList.add("correct");
        b.classList.remove("incorrect");

        if (!answerB) {
          answeredCorrectly = false;
        }
      } else if (i == 2) {
        c.classList.add("correct");
        c.classList.remove("incorrect");

        if (!answerC) {
          answeredCorrectly = false;
        }
      } else if (i == 3) {
        d.classList.add("correct");
        d.classList.remove("incorrect");

        if (!answerD) {
          answeredCorrectly = false;
        }
      }
    }
  } else if (category == 1) {
    amountToMove = sorting[questionIndex].level + 1;

    for (let i of sorting[questionIndex].correctAnswers) {
      if (i == 0) {
        a.classList.add("correct");
        a.classList.remove("incorrect");

        if (!answerA) {
          answeredCorrectly = false;
        }
      } else if (i == 1) {
        b.classList.add("correct");
        b.classList.remove("incorrect");

        if (!answerB) {
          answeredCorrectly = false;
        }
      } else if (i == 2) {
        c.classList.add("correct");
        c.classList.remove("incorrect");

        if (!answerC) {
          answeredCorrectly = false;
        }
      } else if (i == 3) {
        d.classList.add("correct");
        d.classList.remove("incorrect");

        if (!answerD) {
          answeredCorrectly = false;
        }
      }
    }
  } else if (category == 2) {
    amountToMove = devices[questionIndex].level + 1;

    for (let i of devices[questionIndex].correctAnswers) {
      if (i == 0) {
        a.classList.add("correct");
        a.classList.remove("incorrect");

        if (!answerA) {
          answeredCorrectly = false;
        }
      } else if (i == 1) {
        b.classList.add("correct");
        b.classList.remove("incorrect");

        if (!answerB) {
          answeredCorrectly = false;
        }
      } else if (i == 2) {
        c.classList.add("correct");
        c.classList.remove("incorrect");

        if (!answerC) {
          answeredCorrectly = false;
        }
      } else if (i == 3) {
        d.classList.add("correct");
        d.classList.remove("incorrect");

        if (!answerD) {
          answeredCorrectly = false;
        }
      }
    }
  } else if (category == 3) {
    amountToMove = pollution[questionIndex].level + 1;

    for (let i of pollution[questionIndex].correctAnswers) {
      if (i == 0) {
        a.classList.add("correct");
        a.classList.remove("incorrect");

        if (!answerA) {
          answeredCorrectly = false;
        }
      } else if (i == 1) {
        b.classList.add("correct");
        b.classList.remove("incorrect");

        if (!answerB) {
          answeredCorrectly = false;
        }
      } else if (i == 2) {
        c.classList.add("correct");
        c.classList.remove("incorrect");

        if (!answerC) {
          answeredCorrectly = false;
        }
      } else if (i == 3) {
        d.classList.add("correct");
        d.classList.remove("incorrect");

        if (!answerD) {
          answeredCorrectly = false;
        }
      }
    }
  } else if (category == 4) {
    amountToMove = questionMark[questionIndex].level + 1;

    movesBack = true;

    for (let i of questionMark[questionIndex].correctAnswers) {
      if (i == 0) {
        a.classList.add("correct");
        a.classList.remove("incorrect");

        if (!answerA) {
          answeredCorrectly = false;
        }
      } else if (i == 1) {
        b.classList.add("correct");
        b.classList.remove("incorrect");

        if (!answerB) {
          answeredCorrectly = false;
        }
      } else if (i == 2) {
        c.classList.add("correct");
        c.classList.remove("incorrect");

        if (!answerC) {
          answeredCorrectly = false;
        }
      } else if (i == 3) {
        d.classList.add("correct");
        d.classList.remove("incorrect");

        if (!answerD) {
          answeredCorrectly = false;
        }
      }
    }
  }

  setTimeout(function () {
    a.classList.remove("selected");
    a.classList.remove("correct");
    a.classList.remove("incorrect");
    answerA = false;
    b.classList.remove("selected");
    b.classList.remove("correct");
    b.classList.remove("incorrect");
    answerB = false;
    c.classList.remove("selected");
    c.classList.remove("correct");
    c.classList.remove("incorrect");
    answerC = false;
    d.classList.remove("selected");
    d.classList.remove("correct");
    d.classList.remove("incorrect");
    answerD = false;

    card.style.visibility = "hidden";
    card.style.transition = "none";

    questionCard.style.top = "150%";
  }, 4000);

  setTimeout(function () {
    questionCard.style.visibility = "hidden";
  }, 4100);

  setTimeout(function () {
    if (answeredCorrectly) {
      moveForward(turn, amountToMove);
    } else if (movesBack) {
      if ((turn == 0 && figure1MoveAmount > 0) || (turn == 1 && figure2MoveAmount > 0) || (turn == 2 && figure3MoveAmount > 0)) {
        moveBackward(turn, amountToMove);
      }
    }

    if (!redZone) {
      if (turn == 2) {
        turn = 0;
      } else {
        turn += 1;
      }
    }

    if (turn != 0) {
      setTimeout(function () {
        spinWheel();
      }, 1500);
    } else {
      spinBtn.disabled = false;
      wheel.style.boxShadow = "rgb(255 255 255 / 60%) 0 0 1vmin 1.1vmin";
    }
  }, 4500);

  amountSelected = 0;

  category = -1;
  questionIndex = -1;
}


// Figures
const startPosition = { figure1left: 45, figure1top: 6, figure2left: 50, figure2top: 7, figure3left: 51, figure3top: 2 }

const figurePositions = [
  { figure1left: 56, figure1top: 8, figure2left: 60, figure2top: 4, figure3left: 55, figure3top: 3 },
  { figure1left: 64, figure1top: 11, figure2left: 68, figure2top: 7, figure3left: 63, figure3top: 6 },
  { figure1left: 70, figure1top: 15, figure2left: 75, figure2top: 12, figure3left: 71, figure3top: 9 },
  { figure1left: 75, figure1top: 20, figure2left: 80, figure2top: 19, figure3left: 77, figure3top: 15 },
  { figure1left: 80, figure1top: 27, figure2left: 85, figure2top: 26, figure3left: 82, figure3top: 22 },
  { figure1left: 82, figure1top: 34, figure2left: 88, figure2top: 34, figure3left: 85, figure3top: 30 },
  { figure1left: 84, figure1top: 41, figure2left: 89, figure2top: 43, figure3left: 88, figure3top: 38 },
  { figure1left: 84, figure1top: 49, figure2left: 89, figure2top: 51, figure3left: 89, figure3top: 46 },
  { figure1left: 82, figure1top: 56, figure2left: 87, figure2top: 60, figure3left: 88, figure3top: 55 },
  { figure1left: 80, figure1top: 63, figure2left: 83, figure2top: 68, figure3left: 85, figure3top: 63 },
  { figure1left: 76, figure1top: 69, figure2left: 77, figure2top: 74, figure3left: 81, figure3top: 71 },
  { figure1left: 70, figure1top: 75, figure2left: 71, figure2top: 80, figure3left: 75, figure3top: 77 },
  { figure1left: 64, figure1top: 79, figure2left: 64, figure2top: 84, figure3left: 69, figure3top: 82 },
  { figure1left: 57, figure1top: 82, figure2left: 56, figure2top: 87, figure3left: 61, figure3top: 86 },
  { figure1left: 49, figure1top: 83, figure2left: 47, figure2top: 88, figure3left: 52, figure3top: 88 }
]

function moveForward(figureIndex, slotsToMove = 2) {
  if (figureIndex == 0) {
    for (let i = figure1MoveAmount; i < figure1MoveAmount + slotsToMove; i++) {
      if (i >= figurePositions.length) break;

      setTimeout(function () {
        figure1.style.top = figurePositions[i].figure1top + "vmin";
        figure1.style.left = figurePositions[i].figure1left + "vmin";
      }, (i - figure1MoveAmount) * 500);
    }

    figure1MoveAmount += slotsToMove;

    movesBack = false;
    redZone = false;

    if (figure1MoveAmount >= 10) {
      demo.style.top = "50%";
    } else if (figure1MoveAmount == 6) {
      movesBack = true;
      redZone = true;
    }
  } else if (figureIndex == 1) {
    for (let i = figure2MoveAmount; i < figure2MoveAmount + slotsToMove; i++) {
      setTimeout(function () {
        figure2.style.top = figurePositions[i].figure2top + "vmin";
        figure2.style.left = figurePositions[i].figure2left + "vmin";
      }, (i - figure2MoveAmount) * 500);
    }

    figure2MoveAmount += slotsToMove;

    movesBack = false;
    redZone = false;

    if (figure2MoveAmount >= 10) {
      demo.style.top = "50%";
    } else if (figure2MoveAmount == 6) {
      movesBack = true;
      redZone = true;
    }
  } else if (figureIndex == 2) {
    for (let i = figure3MoveAmount; i < figure3MoveAmount + slotsToMove; i++) {
      setTimeout(function () {
        figure3.style.top = figurePositions[i].figure3top + "vmin";
        figure3.style.left = figurePositions[i].figure3left + "vmin";
      }, (i - figure3MoveAmount) * 500);
    }

    figure3MoveAmount += slotsToMove;

    movesBack = false;
    redZone = false;

    if (figure3MoveAmount >= 10) {
      demo.style.top = "50%";
    } else if (figure3MoveAmount == 6) {
      movesBack = true;
      redZone = true;
    }
  }
}

function moveBackward(figureIndex, slotsToMove = 2) {
  let counter = 0;

  if (figureIndex == 0) {
    for (let i = figure1MoveAmount - 2; i > figure1MoveAmount - (slotsToMove + 2); i--) {
      counter++;

      setTimeout(function () {
        figure1.style.top = figurePositions[i].figure1top + "vmin";
        figure1.style.left = figurePositions[i].figure1left + "vmin";
      }, counter * 500);

      if (i == 0) {
        setTimeout(function () {
          figure1.style.top = startPosition.figure1top + "vmin";
          figure1.style.left = startPosition.figure1left + "vmin";
        }, (counter + 1) * 500);
      }

      if (i == 0) break;
    }

    if (figure1MoveAmount >= slotsToMove) {
      figure1MoveAmount -= slotsToMove;
    } else {
      figure1MoveAmount = 0;
    }

    movesBack = false;
    redZone = false;

    if (figure1MoveAmount >= 10) {
      demo.style.top = "50%";
    } else if (figure1MoveAmount == 5) {
      movesBack = true;
      redZone = true;
    }
  } else if (figureIndex == 1) {
    for (let i = figure2MoveAmount - 2; i > figure2MoveAmount - (slotsToMove + 2); i--) {
      counter++;

      setTimeout(function () {
        figure2.style.top = figurePositions[i].figure2top + "vmin";
        figure2.style.left = figurePositions[i].figure2left + "vmin";
      }, counter * 500);

      if (i == 0) {
        setTimeout(function () {
          figure2.style.top = startPosition.figure2top + "vmin";
          figure2.style.left = startPosition.figure2left + "vmin";
        }, (counter + 1) * 500);
      }

      if (i == 0) break;
    }

    if (figure2MoveAmount >= slotsToMove) {
      figure2MoveAmount -= slotsToMove;
    } else {
      figure2MoveAmount = 0;
    }

    movesBack = false;
    redZone = false;

    if (figure2MoveAmount >= 10) {
      demo.style.top = "50%";
    } else if (figure2MoveAmount == 5) {
      movesBack = true;
      redZone = true;
    }
  } else if (figureIndex == 2) {
    for (let i = figure3MoveAmount - 1; i > figure3MoveAmount - (slotsToMove + 2); i--) {
      counter++;

      setTimeout(function () {
        figure3.style.top = figurePositions[i].figure3top + "vmin";
        figure3.style.left = figurePositions[i].figure3left + "vmin";
      }, counter * 500);

      if (i == 0) {
        setTimeout(function () {
          figure3.style.top = startPosition.figure3top + "vmin";
          figure3.style.left = startPosition.figure3left + "vmin";
        }, (counter + 1) * 500);
      }

      if (i == 0) break;
    }

    if (figure3MoveAmount >= slotsToMove) {
      figure3MoveAmount -= slotsToMove;
    } else {
      figure3MoveAmount = 0;
    }

    movesBack = false;
    redZone = false;

    if (figure3MoveAmount >= 10) {
      demo.style.top = "50%";
    } else if (figure3MoveAmount == 5) {
      movesBack = true;
      redZone = true;
    }
  }
}


// WHEEL
const rotationValues = [
  { minDegree: 0, maxDegree: 42, index: 0 },
  { minDegree: 43, maxDegree: 85, index: 1 },
  { minDegree: 86, maxDegree: 127, index: 2 },
  { minDegree: 128, maxDegree: 169, index: 3 },
  { minDegree: 170, maxDegree: 212, index: 0 },
  { minDegree: 213, maxDegree: 254, index: 1 },
  { minDegree: 255, maxDegree: 296, index: 2 },
  { minDegree: 297, maxDegree: 337, index: 3 },
  { minDegree: 338, maxDegree: 359, index: 4 }
];

const data = [16, 16, 16, 16, 16, 16, 16, 16, 8];

const pieColors = [
  "#faf041",
  "#69c95f",
  "#e83333",
  "#2791e3",
  "#faf041",
  "#69c95f",
  "#e83333",
  "#2791e3",
  "#ff9819"
];

const chart = new Chart(wheel, {
  plugins: [ChartDataLabels],
  type: "pie",
  data: {
    datasets: [
      {
        backgroundColor: pieColors,
        data: data,
        borderWidth: 1
      }
    ]
  },
  options: {
    responsive: false,
    animation: { duration: 0 },
    hover: false,
    plugins: {
      tooltip: false,
      legend: {
        display: false
      },
      datalabels: {
        display: false
      }
    }
  }
});

let currentRotation = 60; // Match with the starting rotation

const slowDownInterval = 18;

function spinWheel() {
  spinBtn.disabled = true;
  wheel.style.boxShadow = "none";

  let spinForceEnergy = Math.floor(Math.random() * (36 - 16) + 16);

  let rotationInterval = window.setInterval(() => {
    currentRotation += spinForceEnergy;
    arrow.style.transform = `translate(-51%, -51.4%) rotate(${currentRotation}deg)`;

    if (currentRotation >= 360) {
      arrow.style.transform = "translate(-51%, -51.4%) rotate(0deg)";
      currentRotation = 0;

      if (spinForceEnergy > slowDownInterval) {
        spinForceEnergy -= 6;
      }
    }

    if (spinForceEnergy > 0 && spinForceEnergy <= slowDownInterval) {
      spinForceEnergy -= 0.3;
    }

    if (spinForceEnergy <= 0) {
      spinForceEnergy = 0;
      clearInterval(rotationInterval);
      console.log("pullcard");
      pullCard();
    }
  }, 20);
}


// Main menu
function play() {
  mainMenuPlay.disabled = true;
  mainMenu.style.top = "150%";

  setTimeout(function () {
    mainMenu.style.visibility = "hidden";
  }, 1000);
}
