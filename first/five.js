let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#reset");
let newgame=document.querySelector("#reset1");
let msgcon=document.querySelector(".msg-container");
let msg=document.querySelector(".msg");
let newgame1=document.querySelector("#reset12");
let msgfull=document.querySelector(".msg-full");
let msg1=document.querySelector(".msg1");


let turn=true;//

const winpatterns =[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];
const resetgame=()=>{
    turn=true;
    enablebox();
    msgcon.classList.add("hide");
    msgfull.classList.add("hide1");

}

const disabledBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
        
    }

};

const enablebox=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};
const ShowWinner=(Winner)=>{
    msg.innerText=`Congulatulations , Winner is ${Winner}`;
    msgcon.classList.remove("hide");
    disabledBoxes();
};

const down=()=>{
    msg1.innerText=`Drow the match`;
    msgfull.classList.remove("hide1");
    disabledBoxes();
}

boxes.forEach((box)=>{
    box.addEventListener("click",() =>{
        if(turn){
            box.innerText="O";
            turn=false;
        }else{
            box.innerText="X";
            turn=true;
        }
        box.disabled=true;
        checkWinner();

    });
});



const checkWinner=()=>{
    for(let pattern of winpatterns){
        let pos1Val=boxes[pattern[0]].innerText;
        let pos2Val=boxes[pattern[1]].innerText;
        let pos3Val=boxes[pattern[2]].innerText;

        if(pos1Val!="" && pos2Val!="" && pos3Val!=""){
            if(pos1Val==pos2Val && pos2Val==pos3Val){
                console.log("Winner",pos1Val);
                ShowWinner(pos1Val);
                return;
            }
        }
    }
    let isDraw = true;

for (let box of boxes) {
    if (box.innerText === "") {
        isDraw = false;
        break;
    }
}
// this is written bcz if i click one it will show drow
if (isDraw) {
    down();
}
};

newgame.addEventListener("click",resetgame);
reset.addEventListener("click",resetgame);
newgame1.addEventListener("click",resetgame);