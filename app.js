let boxes = document.querySelectorAll(".box");
let rbtn = document.querySelector("#rst-btn");
let winmsg = document.querySelector("#winmsg");
let nbtn = document.querySelector("#ngame");


let turnO = true; //false 
const showWinner = (winner) => {
    winmsg.innerText=`Congratulations , the winner is ${winner}`;
    winmsg.classList.remove("hide");
    disableBox();
}

const resetGame = () =>{
    turnO = true ;
    enableBox() ;
    winmsg.classList.add("hide");


}

 const disableBox = () =>{
    for(let box of boxes ){
        box.disabled = true ;

    }
}

const enableBox = () =>{
    for(let box of boxes ){
        box.disabled = false ;
        box.innerText=""

    }
}



const Winpatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("button was clicked");
        if (turnO) {
            box.innerText = "O";
            turnO = false;
        }
        else {
            box.innerText = "X"
            turnO = true
        }
        box.disabled = true;
        checkWinner();
    })
})

const checkWinner = () => {
    for (pattern of Winpatterns) {
        pos1val = boxes[pattern[0]].innerText;
        pos2val = boxes[pattern[1]].innerText;
        pos3val = boxes[pattern[2]].innerText;
        if (pos1val != "" && pos2val != "" && pos3val != "") {
            if (pos1val === pos2val && pos2val === pos3val) {
                console.log( pos1val , " is the winner ") ;
                showWinner(pos1val);
                
            }
        }


    }
}

nbtn.addEventListener("click" , enableBox) ;
rbtn.addEventListener("click" , enableBox);