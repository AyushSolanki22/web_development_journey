let gameSeq=[];
let userSeq=[];

let btns=['yellow','red','purple','green'];

let started=false;

let highScore=0;
let level=0;

let h2=document.querySelector("h2");
//1
document.addEventListener("keypress",function(){
    if(started==false){
        console.log("game has started");
        started=true;          //to only show game has started once
        levelUp();
    }
})
//2
function levelUp(){
    userSeq=[];   //4
    level++;
    highScore=level>highScore?level:highScore;
    let h3=document.querySelector("h3");  
    h3.innerText=`High Score: ${highScore}`;
    h2.innerText=`Level ${level}`;

    //random button choose
    let randIdx=Math.floor(Math.random()*4);
    let randColor=btns[randIdx];
    let randBtn=document.querySelector(`.${randColor}`); 
    
    gameSeq.push(randColor);
    console.log(gameSeq);  //4
    gameFlash(randBtn);
}

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash")
    },250)
}

//3
function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash")
    },250)
}


function btnPress(){
    let btn=this;
    userFlash(btn);   //when a user press button, flash happens then too

    //4
    userColor=btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns();
}

let allbtns=document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click",btnPress);
}


//4
function checkAns(){
    let idx=userSeq.length-1;
    if(userSeq[idx]===gameSeq[idx]){
        //if we are in starting, middle then nothing we have to do ,,,, if at last index, we also have to level up
        if(userSeq.length==gameSeq.length) {
            setTimeout(levelUp, 1000 );   //to distinguish flashes -
        }
    }
    else{
        h2.innerHTML=`Game Over! Your score was <b>${level}</b> <br>Press any key to start`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },150)
        reset();      
    }
}

function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}