var timer=60;
var score=0;
var hitrn=0;
function increaseScore(){
    score+=10;
    document.querySelector("#scoreval").textContent=score;
}
function getNewHit(){
   hitrn= Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent=hitrn;
}
function makeBubble(){
    var clutter="";
for(var i=1;i<=100;i++){
var rn= Math.floor(Math.random()*10);
clutter+=`<div class="bubble">${rn}</div>`;
}
document.querySelector('#pbtm').innerHTML=clutter;
// Math.random() ->it gives random value between 00 and 1 but not 0 and 1
// Math.floor() -> it gives the nearest lower integer value of the given number
// Math.random()*10 it gives value like 2.11444;
// Math.floor(Math.random()*10) it gives 2;
}
function runtimer(){
var timerint=setInterval(function(){
if(timer>0){
    timer--;
    document.querySelector("#timerval").textContent=timer;
}
else{
    clearInterval(timerint);
    document.querySelector("#pbtm").innerHTML=`<h1 >Game Over</h1>`;
    
}

},1000);
}

document.querySelector('#pbtm')
.addEventListener("click",function(dets){
var clickedNumber=Number(dets.target.textContent);
if(clickedNumber==hitrn){
    increaseScore();
    makeBubble();
    getNewHit();
}
});
runtimer();
makeBubble();
getNewHit();
increaseScore();

// eventbubbling->jispe lick karoge wo element
// par event raise hoga , aur event listener naa milne par event element ke parent par listener dhundega , waha bhi na mile ne par event parent ke parent ke parent par listner 
// dhundega 