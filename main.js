let win = 0;
let lose = 0;
let tie = 0;
let playerimg = "images/qus.png";
let compimg = "images/qus.png";

function loadScores() {
    win = parseInt(localStorage.getItem('rps-win')) || 0;
    lose = parseInt(localStorage.getItem('rps-lose')) || 0;
    tie = parseInt(localStorage.getItem('rps-tie')) || 0;
}

function saveScores() {
    localStorage.setItem('rps-win', win);
    localStorage.setItem('rps-lose', lose);
    localStorage.setItem('rps-tie', tie);
}

document.getElementById("rock").addEventListener("click", clickRok);
document.getElementById("paper").addEventListener("click", clickPpr);
document.getElementById("sisor").addEventListener("click", clickSsr);
document.getElementById("restart").addEventListener("click", reset);
loadScores();
uiUpdate()
function uiUpdate() {
    document.getElementById("win").innerHTML = `Win<br>${win}`;
    document.getElementById("lose").innerHTML = `Lose<br>${lose}`;
    document.getElementById("tie").innerHTML = `Tie<br>${tie}`;
    document.getElementById("playerimg").src = playerimg;
    document.getElementById("compsign").src = compimg;
}
function reset() {
    win = 0;
    lose = 0;
    tie = 0;
    playerimg = "images/qus.png";
    compimg = "images/qus.png";
    uiUpdate()
    saveScores();
}
function clickRok(){
    const rand = Math.random();
    if (rand < 1/3){
        tie++;
        compimg = "images/rok.png";
    }
    else if (1/3 <= rand && rand < 2/3){
        lose++;
        compimg = "images/ppr.png";
    }
    else if(2/3 <= rand){
        win++;
        compimg = "images/ssr.png";
    }
    playerimg = "images/rok.png";
    uiUpdate()
    saveScores();
}
function clickPpr(){
    const rand = Math.random();
    if (rand < 1/3){
        win++;
        compimg = "images/rok.png";

    }
    else if (1/3 <= rand && rand < 2/3){
        tie++;
        compimg = "images/ppr.png";
    }
    else if(2/3 <= rand){
        lose++;
        compimg = "images/ssr.png";
    }
    playerimg = "images/ppr.png";
    uiUpdate()
    saveScores();
}
function clickSsr(){
    const rand = Math.random();
    if (rand < 1/3){
        lose++;
        compimg = "images/rok.png";
    }
    else if (1/3 <= rand && rand < 2/3){
        win++;
        compimg = "images/ppr.png";
    }
    else if(2/3 <= rand){
        tie++;
        compimg = "images/ssr.png";
    }
    playerimg = "images/ssr.png";
    uiUpdate()
    saveScores();
}
