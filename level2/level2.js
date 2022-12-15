const quizDB = { 
    one: [
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
    }
],

"two": [
    {
        question:"Q1: What is the full form of CT?",
        a:"Current Transformer",
        b:"Hey Text Markup Language",
        c:"HyperText Markup Language",
        d:"Hypertext Markup Language",
        ans:"ans1"

    },
    {
        question:"Q1: What is the full form of PT?",
        a:"Potential Transformer",
        b:"Hey Text Markup Language",
        c:"HyperText Markup Language",
        d:"Hypertext Markup Language",
        ans:"ans1"

    },
    {
        question:"Q1: What is the full form of ?",
        a:"Potential Transformer",
        b:"Hey Text Markup Language",
        c:"HyperText Markup Language",
        d:"Hypertext Markup Language",
        ans:"ans1"

    }
]

};

const lvl2 = document.querySelector('#levels2')

const answer1 = document.querySelector('#ans1');
const answer2 = document.querySelector('#ans2');
const answer3 = document.querySelector('#ans3');
const answer4 = document.querySelector('#ans4');

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');

const submit = document.querySelector('#submit');

const answers = document.querySelectorAll('.answer');

const showScore = document.querySelector('#showScore');



let score = 0;

let questionCount = 0
let questionType = Math.floor((Math.random() * 2)+1);

if(questionType == 1){
    quizeType = quizDB.one;
}
else{
    quizeType = quizDB.two;
}

let z =0;

const loadQuestion = () => {



    let questionType = Math.floor((Math.random() * 2)+1);

    if(questionType == 1){
        quizeType = quizDB.one;
    }
    else{
        quizeType = quizDB.two;
    }
  
    console.log(questionType);

    // const quizeType = quizDB.one;



    const questionList = quizeType[questionCount];

    console.log(questionList)

    question.innerHTML = questionList.question;

    option1.innerHTML = questionList.a;
    option2.innerHTML = questionList.b;
    option3.innerHTML = questionList.c;
    option4.innerHTML = questionList.d;

    z++;
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
    let get = document.getElementById("next2");

    if(score<3){
        location.reload();
    }
    else{
        // window.location.href = "../index2.html";
        // lvl2.href.innerHTML = "../level2/level2.html";

        get.action = "../index2.html";
        localStorage.setItem("gamelevel3",'../level3/level3.html');
        // lvl2.href = "../level2/level.html"
    }
}

let questions = 0;

submit.addEventListener('click', () => {
    const checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer);
    console.log(quizeType)

    if(checkedAnswer === quizeType[questionCount].ans){
        score++;
    };

    console.log(score);

    questionCount= Math.floor((Math.random() * 2)+1);;
    deselectAll();

    questions++;
    console.log("the value of z " + z)
    if( z<=4){
        loadQuestion();
        
    }else{
        question.remove();
        option1.innerHTML="";
        option2.innerHTML="";
        option3.innerHTML="";
        option4.innerHTML="";
        submit.remove();
        answer1.remove();
        answer2.remove();
        answer3.remove();
        answer4.remove();

        showScore.innerHTML = `<h3> You Scored ${score}/${questions} </h3>
        <form id="next2"><button class = 'btn' onclick = "redirect()">${(score<3)?"try again":"Passed"}</button></form>`;

        showScore.classList.remove('scoreArea');
    }
});