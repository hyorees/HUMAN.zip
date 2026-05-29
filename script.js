const startBtn = document.getElementById("startBtn");
startBtn.addEventListener("click", function() {
    window.location.href = "test.html";
});

const testMenu = document.getElementById("testMenu");
const typesMenu = document.getElementById("typesMenu");
const introMenu = document.getElementById("introMenu");

testMenu.addEventListener("click", function() {
    window.location.href = "test.html";
});

typesMenu.addEventListener("click", function() {
    window.location.href = "types.html";
});

introMenu.addEventListener("click", function() {
    window.location.href = "intro.html";
});