let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

choices.forEach(choice => {                           //selecting choice and adding eventlistners to it
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id"); //user entered  choice is saved in the userChoice
        playGame(userChoice);                          // sending parametrs to the playGame functions 
    });
});

const genCompChoice = () =>{                            // random numbers generated by computers 
    const options = ["rock" , "paper" , "scissor"];     
    const ranIdx  = Math.floor(Math.random() *3);       // random numbers were selected between 012 mean while math.random gives floting numbers between 0 and 1 like 0.3443 0.932 then multiplied by 3 gives numbers of 012 then math.floor will remove the ddecimal value then this number is saved inthe randIdx
    return options [ranIdx];                            //any of the element is selected from the above array 
}

const playGame = (userChoice) => {
    console.log("user choice =" , userChoice);
    const compChoice = genCompChoice();             //above generated value will be stored in the compchoice
    console.log("comp choice =" , compChoice);      

    if(userChoice === compChoice){        // both the choices are same then game graw 
        drawGame();                     // forward to gameDraw function 
    } 
    else {
        let userWin = true ;         // setting userwin to true at initially
        if (userChoice === "rock"){   //if userChoice is equal to rock then compchoice be scissor or paper 
            //scissor paper
           userWin = compChoice === "paper" ?  false:true; // if the compchoice is paper then userWin set to false other wise userwin set to true 
        } 
        else if(userChoice==="paper"){
            //rock scissor
          userWin = compChoice === "scissors" ? false : true;
        }
        else {
            //rock paper
          userWin = compChoice === "rock" ? false:true;
        }
        showWinner(userWin ,userChoice , compChoice);  // passing the parameters to showwinner
    }
}

const drawGame =() =>{
    // console.log("Game was draw");
    msg.innerText = "Game Was Draw . Play Again"
    msg.Style.backgroundcolor = "#081b31";
}

const showWinner = (userWin ,userChoice , compChoice) => {
    if(userWin === true){
        userScore++;                                 // increment the score
        userScorePara.innerText = userScore;          // display the score
        // console.log("You Win!");
        msg.innerText = (`You Win! ${userChoice} beats ${compChoice}`); //display the msg 
        msg.Style.backgroundcolor = "green"; // add the background color tp the msg

    }else{
        compScore++;
        compScorePara.innerText = compScore;
        // console.log("You Lose");
        msg.innerText =  (`You Lose. ${compChoice} beats ${userChoice}`);
        msg.Style.backgroundcolor = "red";
    }
};