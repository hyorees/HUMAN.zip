document.getElementById("homeBtn")
.addEventListener("click", function() {

    window.location.href = "index.html";

});

document.getElementById("testMenu")
.addEventListener("click", function() {

    window.location.href = "test.html";

});

document.getElementById("typesMenu")
.addEventListener("click", function() {

    window.location.href = "types.html";

});

document.getElementById("introMenu")
.addEventListener("click", function() {

    window.location.href = "intro.html";

});

const types = [

    {
        title: "새벽감성 과몰입형",
        color: "#CDBDFF",
        keyword: "감성 / 새벽 / 과몰입"
    },

    {
        title: "릴스 무한 스크롤형",
        color: "#FFD6D6",
        keyword: "도파민 / 쇼츠 / SNS"
    },

    {
        title: "카페인 연명형",
        color: "#FFE7C5",
        keyword: "생존 / 시험기간 / 커피"
    },

    {
        title: "계획만 완벽형",
        color: "#D9F7E5",
        keyword: "미루기 / 계획 / 꾸미기"
    },

    {
        title: "현실도피 플레이리스트형",
        color: "#D7E9FF",
        keyword: "음악 / 현실도피 / 감정"
    },

    {
        title: "인터넷 고인물형",
        color: "#E2F1D8",
        keyword: "밈 / SNS / 커뮤니티"
    }

];

const container = document.querySelector(".types-container");

types.forEach(function(type) {
    const card = document.createElement("div");
    card.classList.add("type-card");
    card.innerHTML = `<div class = "color-circle" style = "background-color: ${type.color}"></div>
    <h2>${type.title}</h2>
    <p>${type.keyword}</p>`;
    container.appendChild(card);
});