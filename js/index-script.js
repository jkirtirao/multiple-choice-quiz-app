let username = document.querySelector(".user");
let startBtn = document.querySelector(".startBtn");
// let username;

function checkUsername() {
    if (username.value == '') {
        alert('Cannot be blank!!');

        return false;
    } else if (username.value.includes(' ')) {
        alert('Blank spaces not allowed!!');
        // username.style.
        return false;
    } else {
        return true;
    }
}

startBtn.addEventListener('click', function () {
    if (checkUsername()) {
        localStorage.setItem("username", username.value);
        console.log(localStorage.getItem("username"));
        window.location.href = "quiz.html";
    }
});