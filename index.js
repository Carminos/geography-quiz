// 1. Create a multidimensional array to hold quiz questions and answers
const questions = [
    ["What is the capital of Azerbaijan?", "Baku"],
    ["What is the biggest ocean?", "Pacific"],
    ["What is the tallest mountain in the world?", "Mount Everest"],
    ["Which country has the largest population in the world?", "China"],
    ["What is the name of the longest river in Africa?", "The Nile"],
    ["What is the name of the largest country in the world?", "Russia"],
];

// 2. Store the number of questions answered correctly
const correct = [];
const incorrect = [];
let correctAnswers = 0;

/*  3. Use a loop to cycle through each question
    - Present each question to the user
    - Compare the user's response to answer in the array
    - If the response matches the answer, the number of correctly
       answered questions increments by 1 */

for (let i=0; i < questions.length; i++) {
    let question = questions[i][0];
    let answer = questions[i][1];
    let response = prompt(question);

    if (response === answer) {
        correctAnswers ++;
        correct.push(question);
    }   else{
        incorrect.push(question);
    }
}
function createListItems(arr) {
    let items = '';
    for (let i = 0; i < arr.length; i++) {
      items += `<li>${arr[i]}</li>`; 

    }
    return items;
}

// 4. Display the number of correct answers to the user
let html = `
    <h1>You got ${correctAnswers} question(s) correct</h1>;
    <h2>You got these questions right: </h2>
    <ol>${createListItems(correct)}</ol>

    <h2>You got these questions wrong: </h2>
    <ol>${createListItems(incorrect)}</ol>
   `;

document.querySelector('main').innerHTML = html;





