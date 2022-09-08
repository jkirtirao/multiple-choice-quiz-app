let qno = 0;
let opt = document.querySelectorAll('.optioncontainer');
let optV = document.querySelectorAll('.a');
let nextBtn = document.querySelector('.next');
let selectedOpt = "X";
let score = 0;
localStorage.setItem("score", score);

// let questionsArr = [
//     // [qno, question, opt1, opt2, opt3, opt4, correctOpt]
//     [1, "Question 1", "a1", "a2", "a3", "a4", "A"],
//     [2, "Question 2", "b1", "b2", "b3", "b4", "B"],
//     [3, "Question 3", "c1", "c2", "c3", "c4", "C"],
//     [4, "Question 4", "d1", "d2", "d3", "d4", "D"],
//     [5, "Question 5", "e1", "e2", "e3", "e4", "A"],
//     [6, "Question 6", "a1", "a2", "a3", "a4", "A"],
//     [7, "Question 7", "b1", "b2", "b3", "b4", "B"],
//     [8, "Question 8", "c1", "c2", "c3", "c4", "C"],
//     [9, "Question 9", "d1", "d2", "d3", "d4", "D"],
//     [10, "Question 10", "e1", "e2", "e3", "e4", "A"]
// ];

let questionsArr = [
    // qno., question, opt1, opt2, opt3, opt4, correctOpt 
    [1, 'What does CSS stand for?', 'Computer Style Sheets', 'Creative Style Sheets', 'Cascading Style Sheets', 'Colorful Style Sheets', 'C'],
    [2, 'Which HTML tag is used to define an internal style sheet?', '<css>', '<html>', '<style>', 'script', 'C'],
    [3, 'Where in an HTML document is the correct place to refer to an external style sheet?', 'In the <body> section', 'At the end of the document', 'At the end of the <body> section', 'In the <head> section', 'D'],
    [4, 'Which HTML attribute is used to define inline style?', 'style', 'class', 'font', 'styles', 'A'],
    [5, 'Which is the correct CSS syntax?', '{body:color=black;}', 'body{color:black;}', '{body;color:black;}', 'body:color=black;', 'B'],
    [6, 'How do you insert a comment in a CSS file?', '//this is a comment', '*this is a comment', '//this is a comment//', '/*this is a comment*/', 'D'],
    [7, 'How do you select an element with id"demo"?', '#demo', '*demo', '.demo', 'demo', 'A'],
    [8, 'How do you select element with class name"text"?', '*test', '.test', 'test', '#test', 'B'],
    [9, 'How do you select all p elements inside a div element?', 'div * p', 'div + p', 'div p', 'div.p', 'C'],
    [10, 'What is the default value of the position property?', 'relative', 'static', 'absolute', 'fixed', 'B']
];
let totalQuestions = questionsArr.length;
localStorage.setItem("totalQ", totalQuestions);


// first question by default
document.querySelector('.qno').innerText = questionsArr[0][0];
document.querySelector('.question').innerText = questionsArr[0][1];
document.querySelectorAll('.optval')[0].innerText = questionsArr[0][2];
document.querySelectorAll('.optval')[1].innerText = questionsArr[0][3];
document.querySelectorAll('.optval')[2].innerText = questionsArr[0][4];
document.querySelectorAll('.optval')[3].innerText = questionsArr[0][5];
document.querySelector('.totques').innerText = totalQuestions;

function activeLink(o) {
    opt.forEach((item) => item.classList.remove('active'));
    o.classList.add('active');
}

opt.forEach((item) => item.addEventListener('click', function () {
    activeLink(this);
    selectedOpt = this.querySelector(".opt").innerText;
    console.log(selectedOpt);
}));

function animate() {
    optV.forEach((item) => item.classList.remove('anim'));

    const myTimeout = setTimeout(function () {
        optV.forEach((item) => item.classList.add('anim'));

    }, 1);
    myTimeout;

    // optV.forEach((item) => item.classList.remove('anim'));

}


nextBtn.addEventListener('click', function () {
    if (qno <= totalQuestions) {
        resetOptions();
    }
    nextQuestion();
    animate();
});

document.querySelector('.gen').addEventListener('click', function () {
        localStorage.setItem("score", score);
        // console.log(localStorage.getItem("username"));
        window.location.href = "scorecard.html";
});

// check selected answer and update score in local storage
function check(correct) {
    if (selectedOpt === correct) {
        localStorage.setItem("score", ++score);
    }
    selectedOpt = "X";
}

// to reset state of options
function resetOptions() {
    opt.forEach((item) => item.classList.remove('active'));
}

// Update to Next Question
function nextQuestion() {
    qno++;
    if (qno < totalQuestions) {
        document.querySelector('.qno').innerText = questionsArr[qno][0];
        document.querySelector('.question').innerText = questionsArr[qno][1];
        document.querySelectorAll('.optval')[0].innerText = questionsArr[qno][2];
        document.querySelectorAll('.optval')[1].innerText = questionsArr[qno][3];
        document.querySelectorAll('.optval')[2].innerText = questionsArr[qno][4];
        document.querySelectorAll('.optval')[3].innerText = questionsArr[qno][5];
        check(questionsArr[qno-1][6]);
        // console.log(qno);
    } else {
        console.log(qno);
        document.querySelector('.next').style.display = "none";

        document.querySelector('.question').innerText = "Click to see your score card!";
        document.querySelector('.question').style.marginTop = "30px";

        document.querySelector('.qnum').style.display = "none";
        document.querySelector('.options').style.display = "none";

        document.querySelector('.gen').style.display = "inline";
    }

}


