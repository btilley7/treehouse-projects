// 1. Create a multidimensional array to hold quiz questions and answers
let questions = [['What is 2 + 2?',4], ['What is 3 + 3?',6], ['What is 4 + 4?',8]];

// 2. Store the number of questions answered correctly
let score = '';
let answer = '';
let answerSheet = '';

/* 
  3. Use a loop to cycle through each question
      - Present each question to the user
      - Compare the user's response to answer in the array
      - If the response matches the answer, the number of correctly
        answered questions increments by 1
*/

for (let i = 0; i < questions.length; i++){
  answer = prompt(`${questions[i][0]}`);
  console.log(`the correct answer is: ${questions[i][1]}`);
  
  if (answer == questions[i][1]){
    score++;
    console.log ('right answer');
    console.log(`current score is: ${score}`);
    
    answerSheet += `<li>${questions[i][0]}  The answer is: ${questions[i][1]}`;
    
  } else {
    console.log ('wrong answer');
    console.log(`current score is: ${score}`);

    answerSheet += `<li>${questions[i][0]}  Sorry! The answer was: ${questions[i][1]}`;
  }
}

// 4. Display the number of correct answers to the user

let html = `<h1>You've answered ${score} correctly!</h1>`;
let htmlList = `<ol>${answerSheet}</ol>`;

document.querySelector("main").innerHTML = html + htmlList;

