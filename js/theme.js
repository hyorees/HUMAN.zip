const modeBtn = document.getElementById("modeBtn");
if(localStorage.getItem("theme") === "light") {
    document.body.classList.add("light-mode");
    if(modeBtn){
        modeBtn.innerText = "☀️";
    }
}

if(modeBtn){
    modeBtn.addEventListener("click", function(){
        document.body.classList.toggle("light-mode");
        if(document.body.classList.contains("light-mode")){
            modeBtn.innerText = "☀️";
            localStorage.setItem("theme","light");
        }

        else{
            modeBtn.innerText = "🌙";
            localStorage.setItem("theme","dark");
        }
    });
}