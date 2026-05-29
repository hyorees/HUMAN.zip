const backBtn = document.getElementById("backBtn");
backBtn.addEventListener("click", function() {
    window.location.href = "index.html";

});

const question = document.getElementById("question");
const answerBox = document.getElementById("answerBox");

const questions = [
    {
        question: "시험기간 새벽 2시의 당신은?",

        answers: [

            {
                text: "감성 플레이리스트 틀기",
                type: "emotional"
            },

            {
                text: "릴스 5분만 보려 했는데 1시간 지나 있음",
                type: "reels"
            },

            {
                text: "커피 한 잔 하기",
                type: "caffeine"
            },

            {
                text: "갑자기 할 일 계획 세우기",
                type: "planner"
            },

            {
                text: "이어폰 끼고 산책 나가기",
                type: "playlist"
            },

            {
                text: "시험기간 밈 찾아보기",
                type: "internet"
            }

        ]

    }

];

function showQuestion() {
    question.innerText = questions[0].question;
    answerBox.innerHTML = "";
    questions[0].answers.forEach(function(answer) {
        const button = document.createElement("button");
        button.classList.add("answer-btn");
        button.innerText = answer.text;
        answerBox.appendChild(button);

    });
}

showQuestion();