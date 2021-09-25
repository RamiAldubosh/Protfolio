const quizData = [{
        question: 'What is the most used programming languages in 2021?',
        a: 'java',
        b: 'C',
        c: 'Python',
        d: 'Javascript',
        correct: 'd'
    },
    {
        question: 'Who is the president of USA?',
        a: 'Marry Poppens',
        b: 'Trump',
        c: 'Biden',
        d: 'Merkel',
        correct: 'c'
    },
    {
        question: 'What year was Javascript launched?',
        a: '1996',
        b: '1995',
        c: '1994',
        d: 'none of the above',
        correct: 'b'
    }
];

const questionE1 = document.getElementById('question')
const answerEls = document.querySelectorAll(".answer");
const quiz = document.getElementById("quiz");
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');
let score = 0
let currentQuiz = 0;
let answer = undefined;
loadQuiz();

function loadQuiz() {
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];
    questionE1.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
 
    let answer= undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
         answer = answerEl.id;
        }
    });
    return answer;
}

function deselectAnswers(){
    answerEls.forEach((answerEl) =>{
        answerEl.checked= false;
    });
}

submitBtn.addEventListener("click", () => {
  
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }
        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
           quiz.innerHTML=`<h2>you answered correctly at
            ${score}/${quizData.length} questions!!.
              </h2> <button onclick ="location.reload()" >Reload1</button>` 
        }
    }
});