let user = document.querySelector('.user');
let ptg = document.querySelector('.ptg');
let corr = document.querySelector('.corr');
let incorr = document.querySelector('.incorr');
let tot = document.querySelector('.tot');
let points = localStorage.getItem("score");
let total = localStorage.getItem("totalQ");
let percent = (points / total) * 100;
user.innerText = localStorage.getItem("username");
ptg.innerText = percent + '%';
corr.innerText = points;
incorr.innerText = total - points;

document.querySelector('.rtbtn').addEventListener('click', function () {
    localStorage.clear();
    window.location.href = "index.html";
});