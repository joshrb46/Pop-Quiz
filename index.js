let score = 0;
let answerInput;
let answer;

answerInput = prompt(`What is the sum of 4 + 10 - 6?
    [1] 20
    [2] 16
    [3] 14
    [4] 8
    `);
answer = Number(answerInput);
if (Number.isNaN(answer)) {
  alert("Please enter a number.");
} else if (answer < 1 || answer > 4) {
  alert("Please enter 1,2,3, or 4.");
} else {
  if (answer === 4) {
    alert("Correct!");
    score = score + 1;
  } else {
    alert("Incorrect.");
  }
}
answerInput =
  prompt(`A ___ is a named pointer to a memory address, at which a value is stored.
    [1]  Operator
    [2]  Variable
    [3]  Experssion
    [4]  const
    `);
answer = Number(answerInput);
if (Number.isNaN(answer)) {
  alert("Please enter a number.");
} else if (answer < 1 || answer > 4) {
  alert("Please enter 1, 2, 3, or 4");
} else {
  if (answer === 2) {
    alert("Correct!");
    score = score + 1;
  } else {
    alert("Incorrect.");
  }
}
answerInput =
  prompt(`Type coercion is the automatic conversion of a value from one data type to another.
    [True]
    [False]
    `);
answer = Number(answerInput);
if (Number.isNaN(answer)) {
  alert("Please enter a number.");
} else if (answer < 1 || answer > 2) {
  alert("Please enter 1 or 2.");
} else {
  if (answer === 1) {
    alert("Correct!");
    score = score + 1;
  } else {
    alert("Incorrect.");
  }
}
alert(`You have completed the quiz!
    Your final score is ${score} out of 3.
    `);

if (score === 0) {
  alert("You need to study!");
} else if (score === 3) {
  alert("Nice one! You got them all correct!");
} else {
  alert("Close one!");
}
