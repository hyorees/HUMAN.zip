const backBtn = document.getElementById("backBtn");

backBtn.addEventListener("click", function() {
    window.location.href = "index.html";
});

const question = document.getElementById("question");
const answerBox = document.getElementById("answerBox");
const progressText = document.getElementById("progressText");
const progress = document.querySelector(".progress");

let currentQuestion = 0;

const scores = {
    emotional: 0,
    reels: 0,
    caffeine: 0,
    planner: 0,
    playlist: 0,
    internet: 0
};

const questions = [
    {
        question: "새벽 2시의 당신은?",

        answers: [
            {
                text: "감성 플레이리스트 틀기",
                type: "playlist"
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
                type: "emotional"
            },

            {
                text: "새로운 밈 찾아보기",
                type: "internet"
            }
        ]
    },

    {
        question: "친구가 릴스를 보냈을 때 당신은?",

        answers: [
            {
                text: "이미 어제 본 밈임",
                type: "internet"
            },

            {
                text: "저장해서 나중에 또 봄",
                type: "reels"
            },

            {
                text: "괜히 의미 부여함",
                type: "emotional"
            },

            {
                text: "듣고 있던 음악 끊겨서 짜증남",
                type: "playlist"
            },

            {
                text: "커피 마시면서 보기",
                type: "caffeine"
            },

            {
                text: "나중에 보려고 저장만 해둠",
                type: "planner"
            }
        ]
    },

    {
        question: "시험기간 당신의 모습은?",

        answers: [
            {
                text: "커피 없이 못 버팀",
                type: "caffeine"
            },

            {
                text: "계획만 거창하게 짬",
                type: "planner"
            },

            {
                text: "공부하다 새벽 감성 폭주함",
                type: "emotional"
            },

            {
                text: "공부하다 릴스 켬",
                type: "reels"
            },

            {
                text: "플리 고르느라 시간 감",
                type: "playlist"
            },

            {
                text: "에타 보다가 시간 삭제",
                type: "internet"
            }
        ]
    },

    {
        question: "자기 전에 보통 나는?",

        answers: [
            {
                text: "갑자기 인생 고민 시작",
                type: "emotional"
            },

            {
                text: "쇼츠 무한 스크롤",
                type: "reels"
            },

            {
                text: "내일 계획 세우기",
                type: "planner"
            },

            {
                text: "플레이리스트 정리",
                type: "playlist"
            },

            {
                text: "야식 + 커피 고민",
                type: "caffeine"
            },

            {
                text: "에타 댓글 정독",
                type: "internet"
            }
        ]
    },

    {
        question: "인터넷이 하루 동안 끊긴다면?",

        answers: [
            {
                text: "밈 못 보는게 제일 힘듦",
                type: "internet"
            },

            {
                text: "쇼츠 못 봐서 심심함",
                type: "reels"
            },

            {
                text: "음악 못 들어서 불안함",
                type: "playlist"
            },

            {
                text: "카페에서 멍 때릴 듯",
                type: "caffeine"
            },

            {
                text: "계획했던 하루 루틴 무너짐",
                type: "planner"
            },

            {
                text: "별 생각 없음",
                type: "emotional"
            }
        ]
    },

    {
        question: "갑자기 우울해질 때 나는?",

        answers: [
            {
                text: "혼자 감성 글 찾아봄",
                type: "emotional"
            },

            {
                text: "릴스 보면서 잊어버림",
                type: "reels"
            },

            {
                text: "카페인 충전",
                type: "caffeine"
            },

            {
                text: "내일부터 바뀌겠다고 다짐함",
                type: "planner"
            },

            {
                text: "음악 크게 틀기",
                type: "playlist"
            },

            {
                text: "에타에 글 올리고 반응 확인함",
                type: "internet"
            }
        ]
    },

    {
        question: "SNS에 가장 자주 올리는 건?",

        answers: [
            {
                text: "감성 사진 / 글",
                type: "emotional"
            },

            {
                text: "릴스 공유",
                type: "reels"
            },

            {
                text: "커피(카페) 사진",
                type: "caffeine"
            },

            {
                text: "다이어리 / 계획표",
                type: "planner"
            },

            {
                text: "음악 캡쳐",
                type: "playlist"
            },

            {
                text: "밈 / 인터넷 드립",
                type: "internet"
            }
        ]
    }
];

function showQuestion() {
    if (currentQuestion >= questions.length) {
        const resultType = getResultType();
        
        localStorage.setItem("resultType", resultType);
        window.location.href = "result.html";
        return;
    }

    progressText.innerText = `Q.${currentQuestion + 1} / ${questions.length}`;
    const progressPercent = ((currentQuestion + 1) / questions.length) * 100;
    progress.style.width = progressPercent + "%";

    question.innerText = questions[currentQuestion].question;
    answerBox.innerHTML = "";

    questions[currentQuestion].answers.forEach(function(answer) {
        const button = document.createElement("button");
        button.classList.add("answer-btn");
        button.innerText = answer.text;
        button.addEventListener("click", function() {
            scores[answer.type]++;
            currentQuestion++;
            showQuestion();
        });

        answerBox.appendChild(button);
    });
}

function getResultType() {
    let maxType = "emotional";
    let maxScore = scores.emotional;
    for (let type in scores) {
        if (scores[type] > maxScore) {
            maxScore = scores[type];
            maxType = type;
        }
    }

    return maxType;
}

showQuestion();