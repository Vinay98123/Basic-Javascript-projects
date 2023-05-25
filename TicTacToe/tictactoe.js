console.log("Tic Tac Toe");
let turn="O";
let gameover=false;
let a=true;
let b=0;
let c=0;
let d=0;
let win;

let audioTurn = new Audio("ting.mp3");
let game = new Audio("music.mp3");

//function to change the turn
 changeTurn = ()=>{
   return turn ==="O"?"X":"O";
 }

 //function to check for a win
  const checkForWin = ()=>{
    let boxtexts=document.getElementsByClassName('boxtext');
let wins=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]
   wins.forEach(e =>{
    if(boxtexts[e[0]].innerText==boxtexts[e[1]].innerText && boxtexts[e[2]].innerText==boxtexts[e[1]].innerText && boxtexts[e[0]].innerText !=='')
   {
    win=boxtexts[e[0]].innerText;
    document.querySelector('.info').innerText=boxtexts[e[0]].innerText +" Won";
    if(boxtexts[e[0]].innerText=="X"){
        c=c+1;
        document.getElementById("X").innerText="X points "+c;
    }else{
        d=d+1;
        document.getElementById("O").innerText="O points "+d;

    }
    gameover=true; 
    a=false;  
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width="200px";
}})
}
// game.play();
 //Game Logic
 let boxes=document.getElementsByClassName("box");
 
 Array.from(boxes).forEach(element =>{
    let boxtext=element.querySelector('.boxtext');
    element.addEventListener('click',()=>{
        if(a){
        if(boxtext.innerText===''){
            boxtext.innerText=turn;
             turn=changeTurn();
             audioTurn.play();
            checkForWin();
            b+=1;
            if(!gameover){
            document.getElementsByClassName("info")[0].innerText="Turn for "+turn;
            }
        }
    }
    })

 })

 // Add onclick listener to reset button
 reset.addEventListener('click',()=>{
    a=true;
    let boxtexts=document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element =>{
        element.innerText="";
    })
    turn=win;
    gameover=false;
    document.getElementsByClassName("info")[0].innerText="Turn for "+turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width="0px";

 })
 if(b==8&& gameover==false){
    document.querySelector('.info').innerText=boxtexts[e[0]].innerText +" Nobody Won";
 }