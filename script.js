let turn = "X";
let tick = new Audio("click-button-140881.mp3");
let gameover = false;
changeturn = () => {
    return turn === "X" ? "O" : "X";
};
//win logic
checkWin = () => {
    let boxtext = document.getElementsByClassName("boxtext");
    let wins = [
        [0, 1, 2, 33.5, 5, 0],
        [3, 4, 5, 33.5, 15, 0],
        [6, 7, 8, 33.5, 25, 0],
        [0, 3, 6, 23.5, 15, 90],
        [1, 4, 7, 33.5, 15, 90],
        [2, 5, 8, 43.5, 15, 90],
        [0, 4, 8, 33.5, 15, 45],
        [2, 4, 6, 33.5, 15, -45],
    ];
    wins.forEach((e) => {
        if (
            boxtext[e[0]].innerText === boxtext[e[1]].innerText &&
            boxtext[e[2]].innerText === boxtext[e[1]].innerText &&
            boxtext[e[0]].innerText !== ""
        ) {
            document.querySelector(".msg").innerText =
                boxtext[e[0]].innerText + " Wins!";
            gameover = true;
            var line = document.querySelector(".line");
            line.style.display = "flex";
            line.style.transform = `translate(${e[3]}vw,${e[4]}vw) rotate(${e[5]}deg)`;
        }
    });
};
//game logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach((element) => {
    let boxtext = element.querySelector(".boxtext");
    element.addEventListener("click", () => {
        tick.play();
        if (boxtext.innerText === "") {
            boxtext.innerText = turn;
            checkWin();
            turn = changeturn();
            if (!gameover) {
                document.getElementsByClassName("msg")[0].innerText =
                    "Turn for " + turn;
            }
        }
    });
});
//reset
let reset = document.querySelector(".btn");
reset.addEventListener("click", () => {
    tick.play();
    let boxtext = document.getElementsByClassName("boxtext");
    Array.from(boxtext).forEach((element) => {
        element.innerText = "";
    });
    gameover = false;
    document.querySelector(".line").style.display = "none";
    document.getElementsByClassName("msg")[0].innerText = "Turn for " + turn;
});
