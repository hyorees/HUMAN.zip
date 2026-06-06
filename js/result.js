document.getElementById("homeBtn").addEventListener("click", function() {
    window.location.href = "index.html";
});

document.getElementById("testMenu").addEventListener("click", function() {
    window.location.href = "test.html";
});

document.getElementById("typesMenu").addEventListener("click", function() {
    window.location.href = "types.html";
});

document.getElementById("introMenu").addEventListener("click", function() {
    window.location.href = "intro.html";
});

const resultTitle = document.getElementById("resultTitle");
const resultType = localStorage.getItem("resultType");
const resultKeyword = document.getElementById("resultKeyword");
const resultColor = document.getElementById("resultColor");
const resultMusic = document.getElementById("resultMusic");
const resultMessage = document.getElementById("resultMessage");
const resultFeatures = document.getElementById("resultFeatures");
const resultCard = document.getElementById("resultCard");
const saveBtn = document.getElementById("saveBtn");
const buttonBox = document.getElementById("buttonBox");

const resultData = {
    emotional: {
        title: "새벽감성 과몰입형",
        keyword: "감성 / 새벽 / 과몰입",
        features: [
            "혼자 의미 부여 자주 함",
            "새벽에 감성 폭주",
            "자려고 누우면 흑역사가 생각남"
        ],

        music: "북향 - 다이나믹 듀오",
        color: "#9D4EDD",
        cardColor: "#F3EEFF",
        message: "새벽은 당신에게 너무 많은 생각을 준다."
    },

    reels: {
        title: "릴스 무한 스크롤형",
        keyword: "도파민 / 쇼츠 / SNS",
        features: [
            "릴스 보다가 시간 삭제",
            "알고리즘 지배형 인간",
            "집중력 이슈 있음"
        ],
        
        music: "Dopamine - WING",
        color: "#FF5D8F",
        cardColor: "#FFF0F7",
        message: "딱 5분만 보려고 했잖아..."
        },

    caffeine: {
        title: "카페인 연명형",
        keyword: "생존 / 시험기간 / 커피",
        features: [
            "아메리카노 없으면 기능 정지",
            "밤샘에 익숙함",
            "1일 1아메리카노 필수"
        ],

        music: "One fine day - MONKEY BGM",
        color: "#C77D3B",
        cardColor: "#FFF6EE",
        message: "카페인은 이제 혈액의 일부다."
    },

    planner: {
        title: "계획만 완벽형",
        keyword: "계획 / 미루기 / 꾸미기",
        features: [
            "계획표는 항상 완벽함",
            "실천은 내일부터",
            "계획표 꾸미기에 진심"
        ],
        
        music: "Bubble Gum - Clairo",
        color: "#52B788",
        cardColor: "#EEFFF8",
        message: "계획은 완벽했는데 왜 아직 시작 전이지?"
        },

    playlist: {
        title: "현실도피 플레이리스트형",
        keyword: "음악 / 현실도피 / 감정",
        features: [
            "힘들면 음악부터 틂",
            "이어폰 없으면 불안",
            "상상 속 세계 자주 감"
        ],

        music: "인생영화 - pH-1",
        color: "#4D96FF",
        cardColor: "#EEF6FF",
        message: "현실 OFF, 플레이리스트 ON"
    },

    internet: {
        title: "인터넷 고인물형",
        keyword: "밈 / SNS / 커뮤니티",
        features: [
            "밈 이해 속도 빠름",
            "인터넷 유행에 민감함",
            "커뮤니티 체류 시간 높음"
        ],
        
        music: "REDRED - CORTIS",
        color: "#43AA8B",
        cardColor: "#EEFFFC",
        message: "인터넷 속에도 사람들이 있다고..!"
        }
};

const data = resultData[resultType];

resultTitle.innerText = data.title;
resultKeyword.innerText = data.keyword;
resultMusic.innerText = "추천 음악: " + data.music;
resultMessage.innerText = data.message;
resultColor.style.backgroundColor = data.color;
resultCard.style.backgroundColor = data.cardColor;
resultTitle.style.color = data.color;
resultMessage.style.color = data.color;
resultFeatures.innerHTML = "";

data.features.forEach(function(feature) {
    resultFeatures.innerHTML += `<p>* ${feature}</p>`;
});

const retryBtn = document.getElementById("retryBtn");
retryBtn.addEventListener("click", function() {
    window.location.href = "test.html";
});

saveBtn.addEventListener("click", function() {
    html2canvas(resultCard).then(function(canvas) {
        const link = document.createElement("a");
        link.download = "HUMAN.zip-result.png";
        link.href = canvas.toDataURL();
        link.click();
    });
});