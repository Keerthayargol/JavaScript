let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScore1=document.querySelector("#user");
const compSore1=document.querySelector("#comp");

const gencompchoice=()=>{
    const options=["rock","paper","Scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
}
const drawGame=()=>{
    console.log("Draw the game");
    msg.innerText="Game was Draw. Play again";
    msg.style.backgroundColor="blue";
}
const showWin=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userScore1.innerText=userScore;
        console.log("You win");
        msg.innerText=`You win! Yours ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }else{
        compScore++;
        compSore1.innerText=compScore;
        console.log("Compter Win");
        msg.innerText=`You lost. ${compChoice} beats yours ${userChoice}`;
        msg.style.backgroundColor="red";
    }
}

const playGame=(userChoice)=>{
    console.log("user choices =",userChoice);
    const compChoice= gencompchoice();
    console.log("computer choice = ",compChoice);

    if(userChoice===compChoice){
        drawGame();
    }else{
        let userWin=true;
        if(userChoice==="rock"){

          userWin= compChoice==="paper" ? false:true;
        }else if(userChoice==="paper"){

           userWin= compChoice==="Scissors" ? false:true;
        }else{
            userWin=compChoice==="rock" ?false:true;

        }
        showWin(userWin,userChoice,compChoice);
    }

};

choices.forEach((choice)=>{
    
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);

    })
})