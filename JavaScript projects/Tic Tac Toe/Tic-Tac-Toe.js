let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#resetButton");
let newGameBtn = document.querySelector("#new-btn");               //accessing the nodes
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true;   //player X , player O  set the turn O as true 

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7], // possible matches in the tic tac toe table
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

const resetGame = () => {                  //restarting the game 
    turnO = true;                           // setting the turn O to true to restart the game
    enableBoxes();                         // which allows the player to click the button
    msgContainer.classList.add("hide");     // which hide the winner and new Game details from the interface
}

boxes.forEach((box) => {                    //running the loop for thee all 9 boxes 
    box.addEventListener("click", () => {
        if (turnO) {                        // if the turnO is true then it enter into the loop
            box.innerText = "O";            //add value into the box 
            turnO = false;                //change the turnO to another state 
        } else {
            box.innerText = "X"
            turnO = true;
        }
         box.disabled = true;              // this will not allow a button to change agian once if it is clicked 

        checkWinner();                  //function calling  
    });
});


const disableBoxes = () => {              // this does not allow To click 
    for (let box of boxes) {
        box.disabled = true;
    }
}

const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";             // empty the innerr text 
    }
}


const checkWinner = () => {
    for (pattern of winPatterns) {        //iterate to every patter in the array 
        let pos1Val = boxes[pattern[0]].innerText;      // store the value inside the patters
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {    // checks that the values not equal to null
            if (pos1Val === pos2Val && pos2Val === pos3Val) {      // all the values must be equall to same element
                disableBoxes();                                //does not allow to enter if an element is already entered inside the box
                showWinner(pos1Val);                           // pass the element value to the function 
            }
        }
    }
};

const showWinner = (winner) => {
    msg.innerText = `Congratulations , Winner is a ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};



newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);