const quizDB = [
    {
        question:"Q1: What is the full form of HTML?",
        a:"Hello To My Land",
        b:"Hey Text Markup Language",
        c:"HyperText Markup Language",
        d:"Hypertext Markup Language",
        ans:"ans4"
    },
    {
        question:"Q2: What is the full form of CSS?",
        a:"Cascading Style Sheets",
        b:"Cascading Style Sheep",
        c:"Cartoon Style Sheets",
        d:"Cascading Super Sheets",
        ans:"ans1"
    },
    {
        question:"Q3: What is the full form of HTTP?",
        a:"Hypertext Transfer Product",
        b:"Hypertext Test Protocol",
        c:"Hey Transfer Protocol",
        d:"Hypertext Transfer Protocol",
        ans:"ans4"
    },
    {
        question:"Q4: What is the full form of JS?",
        a:"JavaScript",
        b:"JavaSuper",
        c:"JustScript",
        d:"JorderShoes",
        ans:"ans1"
    },
];


const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');

const submit = document.querySelector('#submit');

const answers = document.querySelectorAll('.answer');

const showScore = document.querySelector('#showScore');



let questionCount = 0;
let score = 0;

const loadQuestion = () => {

    const questionList = quizDB[questionCount];

    question.innerHTML = questionList.question;

    option1.innerHTML = questionList.a;
    option2.innerHTML = questionList.b;
    option3.innerHTML = questionList.c;
    option4.innerHTML = questionList.d;

    
}

loadQuestion();

const getCheckAnswer = () =>{
    let answer;

    answers.forEach((curAnsElem) => {
        if(curAnsElem.checked){
            answer = curAnsElem.id;
        }
    });

    return answer;
}


const deselectAll = () => {
    answers.forEach((curAnsElem) => curAnsElem.checked = false);
}

const redirect = () => {
    let get = document.getElementById("next");
    if(score<3){
        location.reload();
    }
    else{

        get.action = "../index2.html";
        localStorage.setItem("gamelevel2",'../level2/level.html');
        
        
    }
}

submit.addEventListener('click', () => {
    const checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer);

    if(checkedAnswer === quizDB[questionCount].ans){
        score++;
    };

    questionCount++;
    deselectAll();


    if(questionCount <  quizDB.length){
        loadQuestion();
    }else{
        showScore.innerHTML = `<h3> You Scored ${score}/${quizDB.length} </h3><form id="next">
        <button class = 'btn' onclick = "redirect()">${(score<3)?"try again":"Passed"}</button></form>`;

        showScore.classList.remove('scoreArea');
    }
});