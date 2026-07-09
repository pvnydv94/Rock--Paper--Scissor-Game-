let userscore = 0;
let computerscore = 0 ;

const choices = document.querySelectorAll(".choice");

const userscorepara = document.querySelector("#userscore");
const computerscorepara = document.querySelector("#computerscore");


const gencompchoice =()=>{
    const options = ["stone","scissor","paper"];
const randIdx =Math.floor(Math.random()*3);
return options [randIdx];
};

const drawGame= ()=> {
    console.log("game was draw.");
    msg.innerText=("game was draw .play again !")
    msg.style.backgroundColor="#081b31"
};
const showwinner =(userwin, userchoice , compchoice)=>{
    if(userwin){
        userscore++;
        userscorepara.innerText= userscore;
        
      msg.innerText= `You win!  Your ${userchoice} beats ${ compchoice}`;
      msg.style.backgroundColor="green";
    }else{
        computerscore++;
        computerscorepara.innerText=computerscore ;
       
        msg.innerText=`You lost.  Computers ${compchoice}  beats your  ${ userchoice}`;
        msg.style.backgroundColor="red";
    }
};

const playgame= (userchoice) =>{
    console.log("user choice=", userchoice);

  const compchoice= gencompchoice();
  console.log("comp choice=",compchoice);
 if(userchoice=== compchoice){
 drawGame();
 } else{
    let userwin =true;
    if(userchoice=== "stone"){
        userwin= compchoice === "paper"? false: true;
    } else if (userchoice==="paper"){
        userwin = compchoice=== "scissor"?false:true;

    }else{
    
        userwin= compchoice ==="stone"? false: true;
    }
    showwinner(userwin ,userchoice,compchoice);
 }
};
choices.forEach((choice)=>{
    choice.addEventListener("click",()=> {
        const userchoice = choice.querySelector("img").getAttribute("id");
       playgame(userchoice);
    });
});