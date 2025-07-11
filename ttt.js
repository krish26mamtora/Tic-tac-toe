let boxes = document.querySelectorAll(".box")
let resetBtn = document.querySelector("#reset-btn")
let newgamebtn =document.querySelector("#new_Game")
let msgcontainer =document.querySelector(".msg-container")
let msg=document.querySelector("#msg");

let turno = true;

const winpatterns =[
    [0,1,2],[0,3,6],[0,4,8],
    [1,4,7],[2,5,8],[2,4,6],
    [3,4,5],[6,7,8],
];

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box was presses");
        if(turno){

            box.innerText="O";
            turno=false;
        }else{
            box.innerText="X";
            turno=true;
        }
        box.disabled=true; 

        checkwinner();
    })
})

const resetgame=()=>{
    turno=true;
    enableboxes();
    msgcontainer.classList.add("hide");
}
const showwinner=(winner)=>{
    msg.innerText=`Winner ${winner}`;
    msgcontainer.classList.remove("hide");
    disableboxes();
}

const disableboxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}

const enableboxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

const checkwinner=()=>{
    for(let pattern of winpatterns){

    let pos1val=boxes[pattern[0]].innerText;
    let pos2val=boxes[pattern[1]].innerText;
    let pos3val=boxes[pattern[2]].innerText;
    
    if(pos1val!=""&&pos2val!=""&&pos3val!=""){
        if(pos1val==pos2val && pos2val==pos3val){
            console.log("Winner = ",pos1val);
            showwinner(pos1val);
        }
    }
    
    }
};

newgamebtn.addEventListener("click",resetgame);
resetBtn.addEventListener("click",resetgame);