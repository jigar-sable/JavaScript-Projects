const question = document.querySelector('.question');
const option1 = document.querySelector('#opt1');
const option2 = document.querySelector('#opt2');
const option3 = document.querySelector('#opt3');
const option4 = document.querySelector('#opt4');
const submitBtn = document.querySelector('#submit');
const options = document.querySelectorAll('.answer');
const quizWrapper = document.querySelector('#quiz-wrapper');
const result = document.querySelector('#result');

let queIndex = 0; 
let score = 0;

const loadQuestion = () => {
    let queList = quizArr[queIndex];
    question.innerHTML = `${queIndex + 1}. ${queList.question}`;
    option1.innerHTML = queList.opt1;
    option2.innerHTML = queList.opt2;
    option3.innerHTML = queList.opt3;
    option4.innerHTML = queList.opt4;
}

loadQuestion(queIndex);

const getCheckedAnswer = () => {
    let selectedOption;

    options.forEach((option) => {
        if(option.checked){
            selectedOption = option.id;
        }
    });
    return selectedOption;
}

const deselectAll = () => {
    options.forEach(option => option.checked = false);
}

submitBtn.addEventListener('click', () => {
    const checkedAnswer = getCheckedAnswer();
    // console.log(checkedAnswer); 
    deselectAll();
    if(checkedAnswer === quizArr[queIndex].ans) {
        score++;
        // console.log(score);
    }
    queIndex++;
    if(queIndex < quizArr.length){
        loadQuestion(queIndex);
    } else {
        quizWrapper.classList.add('hidden');
        result.innerHTML = `
        <span class="text-2xl font-semibold">Your Score Is : <span class="text-yellow-500 text-3xl">${score}/${quizArr.length}</span> </span>
        <button class="p-3 text-xl mt-4 w-full bg-yellow-600 text-white rounded hover:bg-yellow-700 shadow-lg transition duration-75" onclick="location.reload()">Restart</button>
        `;
    }
});