let boxes = document.querySelectorAll(".box");
let newgame = document.querySelector("#new-game");
let reset = document.querySelector("#reset");
let winmsg = document.querySelector(".win");
let winner_container = document.querySelector(".winner");
let turn0 = true;
const winPatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
boxes.forEach((box) => {
    box.addEventListener("click",() => {
        if(turn0){
            box.innerText = "O";
            turn0 = false;
        }else{
            box.innerText = "X";
            turn0 = true;
        }
        box.disabled = true;
        checkwinner();
    })
})
const checkwinner = () =>{
    for(let pattern of winPatterns){
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;
        if(pos1 != "" && pos2 != "" && pos3!= ""){
            if(pos1 === pos2 && pos2 === pos3){
                // console.log("winner" , pos1);
                showWinner(pos1);
            }
        }
    }
}
const disablebox = () => {
    for(let box of boxes){
        box.disabled = true;
    }
}
const enablebox = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText="";
    }
}
const showWinner = (winner) => {
    winmsg.innerText = `Congratulations!!! Winner is ${winner}`;
    winner_container.classList.remove("hideme");
    disablebox();
}
const reset_game = () => {
    turn0 = true;
    enablebox();
    winner_container.classList.add("hideme");
}
newgame.addEventListener("click",reset_game);
reset.addEventListener("click",reset_game);