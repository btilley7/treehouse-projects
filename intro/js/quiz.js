/* 
  1. Store correct answers
   - When quiz begins, no answers are correct
*/

let q1 = 0;
let q2 = 0;
let q3 = 0;
let q4 = 0;
let q5 = 0;

// 2. Store the rank of a player
let answer = 0;
let rank  = 0;

// 3. Select the <main> HTML element

document.querySelector('main').innerHTML = `<h2>Your results are: ${rank}</h2>`;

/*
  4. Ask at least 5 questions
   - Store each answer in a variable
   - Keep track of the number of correct answers
*/

q1 = prompt('What is 2 + 2');
if (q1 == 4) {
    answer++;
    console.log(answer);
}
q2 = prompt('What is 3 + 3');
if (q2 == 6) {
    answer++;
    console.log(answer);
}
q3 = prompt('What is 4 + 4');
if (q3 == 8) {
    answer++;
    console.log(answer);
}
q4 = prompt('What is 5 + 5');
if (q4 == 10) {
    answer++;
    console.log(answer);
}
q5 = prompt('What is 6 + 6');
if (q5 == 12) {
    answer++;
    console.log(answer);
}

/*
  5. Rank player based on number of correct answers
   - 5 correct = Gold
   - 3-4 correct = Silver
   - 1-2 correct = Bronze
   - 0 correct = No crown
*/
switch (answer) {
    case 5:
        rank = "Gold";
        break;
    case 4:
    case 3:
        rank = "Silver";
        break;
    case 2:
    case 1:
        rank = "Bronze";
    default:
        rank = "No Crown";
        break;
}

// 6. Output results to the <main> element

document.querySelector('main').innerHTML = `<p>You got ${answer} out of 5 questions right!`;