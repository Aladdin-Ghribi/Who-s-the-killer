const player_name=document.getElementById("info");
let players=[];
const playersWithRandomPlacement=[];
let html="";
const display= document.getElementById("lay-2");
const body= document.getElementById("body");
let  citizensCounter=0


function addCitizens(){
document.getElementById("citizens").textContent;


}

function addToList(){
players.push(player_name.value)
player_name.value='';
displayPlayer();
}



function displayPlayer(){

players.forEach(element => {
  html+=`
<div class="container">
      <h3 class="titel">${element}</h3>
      <img class="img" id="card">
  </div>
`
});
 display.innerHTML=html;
  html='';
}



function generateCards(){
let imgs=document.querySelectorAll("#card");

const checkcards=[`./assets/img/1.png`,`./assets/img/2.png`,`./assets/img/3.png`,`./assets/img/4.png`,];

imgs.forEach(element=>{
let random= checkcards[Math.floor(Math.random()*checkcards.length)];

if(checkcards!==``){
  element.src=random;
  checkcards.splice(checkcards.indexOf(random),1)
  console.log(checkcards);}
else{
  element.src="./assets/img/5.png"
}


})
}console.log(body);
function test(){
  
}