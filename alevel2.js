var count = 0;
//panel constructor 
function Panel(Xpos,Ypos,Width,
/*Xpos is left position,Ypos is top position,PanelColor is background color of panel,ID is the id attribute of DOM element making panel*/
Height,PanelColor,ID){
this.Xpos = Xpos;
this.Ypos = Ypos;
this.Width = Width;
this.Height = Height;
this.PanelColor = PanelColor;
this.ID= ID;
this.getX = function (){
document.getElementById(this.ID).style.position="absolute";
document.getElementById(this.ID).style.left = this.Xpos+"px";
};
this.getY = function (){
document.getElementById(this.ID).style.position = "absolute";
document.getElementById(this.ID).style.top = this.Ypos+"px";
};
this.getW = function (){
document.getElementById(this.ID).style.width = this.Width+"px";
};
this.getH = function (){
document.getElementById(this.ID).style.height = this.Height+"px";
};
this.getPanelColor = function (){
document.getElementById(this.ID).style.backgroundColor = this.PanelColor;
};
}
var Panel=new Panel(0.025*screen.width,0.05*screen.height,0.95*screen.width,200,'black','panel');
//alien constructor
function Alien(Xpos,Ypos,Width,
/*Xpos is left position,Ypos is top position,Speed is duration of setTimeout function,rightBorder and leftBorder are the limits of alien travel or wall positions*/
Height,Xstep,Speed,rightWallpos,leftWallpos,Dstep){
this.Xpos = Xpos;
this.Ypos= Ypos;
this.Width = Width;
this.Height = Height;
this.Xstep = Xstep;
this.Speed = Speed;
this.rightWallpos= rightWallpos;
this.leftWallpos = leftWallpos;
this.Dstep = Dstep;
this.getX = function (){
alien.style.position = "absolute";
alien.style.left = this.Xpos+"px";
bomb.style.position = "absolute";
bomb.style.left = this.Xpos+10+"px";
};
this.getY = function (){
alien.style.position = "absolute";
alien.style.top = this.Ypos+"px";
bomb.style.position = "absolute";
bomb.style.top = this.Ypos+"px";
};
this.getW = function (){
alien.style.width = this.Width+"px";
bomb.style.width = "5px";
};
this.getH = function (){
alien.style.height = this.Height+"px";
bomb.style.height = "5px";
};
//method to animate right
this.moveRight = function alienright(){
alien.style.left = parseInt(alien.style.left)+Xstep+"px";
bomb.style.left = parseInt(bomb.style.left)+Xstep+"px";
auto=setTimeout(alienright,Speed);
if(parseInt(alien.style.left)>rightWallpos){
clearTimeout(auto);
//Bomb methods called here so bomb and alien animation is in sync
Alien.moveDown();
Alien.moveLeft();
}
if(parseInt(alien.style.left)==100 || parseInt(alien.style.left)==200 || parseInt(alien.style.left)==300 || parseInt(alien.style.left)==400 || parseInt(alien.style.left)==500 || parseInt(alien.style.left)==600 || parseInt(alien.style.left)==700 || parseInt(alien.style.left)==800 || parseInt(alien.style.left)==900 || parseInt(alien.style.left)==1000 || parseInt(alien.style.left)==1100 || parseInt(alien.style.left)==1200){
Alien.Fire();
}
};
//method to animate left
this.moveLeft = function alienleft(){
alien.style.left = parseInt(alien.style.left)-Xstep+"px";
bomb.style.left = parseInt(bomb.style.left)-Xstep+"px";
auto = setTimeout(alienleft,Speed);
if(parseInt(alien.style.left)<leftWallpos){
clearTimeout(auto);
Alien.moveDown();
Alien.moveRight();
}
if(parseInt(alien.style.left)==40 || parseInt(alien.style.left)==141 || parseInt(alien.style.left)==241 ||  parseInt(alien.style.left)==341 || parseInt(alien.style.left)==441 || parseInt(alien.style.left)==541 || parseInt(alien.style.left)==641 || parseInt(alien.style.left)==741 || parseInt(alien.style.left)==841 || parseInt(alien.style.left)==941 || parseInt(alien.style.left)==1041 || parseInt(alien.style.left)==1141){
Alien.Fire();
}
};
this.moveDown = function (){
alien.style.top = parseInt(alien.style.top)+Dstep+"px";
bomb.style.top = parseInt(bomb.style.top)+Dstep+"px";
if(parseInt(bomb.style.top)>180){
info.innerHTML  = "Alien has reached Earth";
function end(){
clearTimeout(auto);
Game.endgame();
}
setTimeout(end,2000);
}
};
this.Fire = function (){
ran = Math.floor(Math.random()*Panel.Width);
bomb.style.top = Panel.Height-4+"px";
bomb.style.left = ran+"px";
function ret(){
bomb.style.top = parseInt(alien.style.top)+"px";
bomb.style.left = parseInt(alien.style.left)+10+"px";
}
setTimeout(ret,500);
if(parseInt(bomb.style.top)>parseInt(defender.style.top)){
if(parseInt(bomb.style.left)>parseInt(defender.style.left) && parseInt(bomb.style.left)<parseInt(defender.style.left)+30){
info.innerHTML  = "You've been hit";
function end(){
clearTimeout(auto);
Game.endgame();
}
setTimeout(end,2000);
}
}
};
}
//alien object
var Alien = new Alien(10,10,30,20,1,20,0.95*Panel.Width-20,0,40);
//bomb constructor
function Bomb(Xpos,Ypos,Width,Height,Xstep,Dstep,Speed,rightWallpos,leftWallpos){
this.Xpos = Xpos;
this.Ypos = Ypos;
this.Width = Width;
this.Height = Height;
this.Xstep = Xstep;
this.Dstep = Dstep;
this.Speed = Speed;
this.rightWallpos = rightWallpos;
this.leftWallpos = leftWallpos;
this.getX = function (){
bomb.style.position = "absolute";
bomb.style.left = this.Xpos+"px";
};
this.getY = function (){
bomb.style.position = "absolute";
bomb.style.top = this.Ypos+"px";
};
this.getW = function (){
bomb.style.width = this.Width+"px";
};
this.getH = function (){
bomb.style.height = this.Height+"px";
};
this.moveRight = function bombright(){
bomb.style.left = parseInt(bomb.style.left)+Xstep+"px";
auto= setTimeout(bombright,Speed);
if(parseInt(bomb.style.left)>rightWallpos){
//see Alien.moveRight method above
}
};
this.moveLeft = function bombleft(){
bomb.style.left = parseInt(bomb.style.left)-Xstep+"px";
auto = setTimeout(bombleft,Speed);
if(parseInt(bomb.style.left)<leftWallpos){
clearTimeout(auto);
Bomb.moveDown();
Bomb.moveRight();
}
};
this.moveDown = function (){
bomb.style.top = parseInt(bomb.style.top)+Dstep+"px";
};
this.bombDrop = function (){
ran = Math.floor(Math.random()*Panel.Width);
bomb.style.top= "195px";
bomb.style.left = ran+"px";
if(parseInt(bomb.style.top)>194){
function ret(){
bomb.style.top = parseInt(alien.style.top)+"px";
bomb.style.left = parseInt(alien.style.left)+"px";
}
setTimeout(ret,200);
}
if(parseInt(bomb.style.top)>180){
if(parseInt(bomb.style.left)>parseInt(defender.style.left) && parseInt(bomb.style.left)<parseInt(defender.style.left)+30){
info.innerHTML  = "You have been hit by bomb";
function end(){
clearTimeout(auto);
Game.endgame();
}
setTimeout(end,2000);
}
}
};
}
//Defender constructor
function Defender(Xpos,Ypos,Width,Height,Xstep,Speed,rightWallpos,leftWallpos){
this.Xpos = Xpos;
this.Ypos = Ypos;
this.Width = Width;
this.Height = Height;
this.Xstep = Xstep;
this.Speed = Speed;
this.rightWallpos = rightWallpos;
this.leftWallpos = leftWallpos;
this.getX= function (){
defender.style.position = "absolute";
defender.style.left = this.Xpos+"px";
laser.style.position = "absolute";
laser.style.left = this.Xpos+10+"px";
};
this.getY = function (){
defender.style.position = "absolute";
defender.style.top = this.Ypos+"px";
laser.style.position = "absolute";
laser.style.top = this.Ypos+"px";
};
this.getW = function (){
defender.style.width = this.Width+"px";
laser.style.width = "5px";
};
this.getH = function (){
defender.style.height = this.Height+"px";
laser.style.height = "5px";
};
this.moveArrowRight = function (){
document.addEventListener("keydown",function (){
if(event.code=="ArrowRight"){
Defender.moveRight();
}
});
};
this.moveArrowLeft = function (){
document.addEventListener("keydown",function (){
if(event.code=="ArrowLeft"){
Defender.moveLeft();
}
});
};
this.moveRight = function defenderright(){
defender.style.left = parseInt(defender.style.left)+Xstep+"px";
laser.style.left = parseInt(laser.style.left)+Xstep+"px"; autodefenderright=setTimeout(defenderright,Speed);
if(parseInt(defender.style.left)>rightWallpos){
clearTimeout(autodefenderright);
clearTimeout(autodefenderleft);
}
//adds responsiveness of control,was deduced from experimentation
clearTimeout(autodefenderleft);
};
this.moveLeft = function defenderleft(){
defender.style.left = parseInt(defender.style.left)-Xstep+"px";
laser.style.left = parseInt(laser.style.left)-Xstep+"px";
autodefenderleft = setTimeout(defenderleft,Speed);
if(parseInt(defender.style.left)<leftWallpos){
clearTimeout(autodefenderleft);
clearTimeout(autodefenderright);
}
clearTimeout(autodefenderright);
};
this.Stop= function (){
clearTimeout(autodefenderright);
clearTimeout(autodefenderleft);
};
this.Hide = function (){
defender.style.display = "none";
laser.style.display = "none";
};
this.fire = function laserfire(){
laser.style.top = parseInt(laser.style.top)-5+"px";
auto = setTimeout(laserfire,20);
if(parseInt(laser.style.top)<5){
clearTimeout(auto);
laser.style.top = parseInt(defender.style.top)+"px";
laser.style.left = parseInt(defender.style.left)+10+"px";
}
if(parseInt(laser.style.top)<parseInt(alien.style.top)){
if(parseInt(laser.style.left)>parseInt(alien.style.left)-10 && parseInt(laser.style.left)<parseInt(alien.style.left)+20){
count = count+1;
ran = Math.floor(Math.random()*Panel.Width);
info.innerHTML  = count+"Hit";
alien.style.top = "10px";
alien.style.left = ran+"px";
bomb.style.top = "10px";
bomb.style.left = parseInt(alien.style.left)+10+"px";
if(count==10){
function back(){
window.location = "alevel3.html";
}
setTimeout(back,2000);
}
}
}
};
}
//defender object
var Defender = new Defender(Panel.Width/2,Panel.Height-20,30,20,1,10,Panel.Width-30,0);
//Game object 
var Game = {
init:function (){
panel.style.display = "none";
gamestart.style.display = "block";
Alien.getX();
Alien.getY();
Alien.getW();
Alien.getH();
Alien.Fire();
Panel.getX();
Panel.getY();
Panel.getW();
Panel.getH();
Panel.getPanelColor();
Defender.getX();
Defender.getY();
Defender.getW();
Defender.getH();
Defender.moveArrowRight();
Defender.moveArrowLeft();
},
start:function (){
gamestart.style.display = "none";
panel.style.display = "block";
left.style.display = "block";
right.style.display = "block";
stopp.style.display = "block";
btn.style.display = "block";
shoot.style.display = "none";
},
alienbombright:function (){
btn.style.display = "none";
shoot.style.display = "block";
Alien.moveRight();
},
endgame:function (){
panel.style.display = "none";
gameover.style.display = "block";
count = 0;
info.innerHTML  = "";
},
tryagain:function (){
Game.init();
gameover.style.display = "none";
gamestart.style.display = "block";
}
};
//initialise objects
window.onload  = Game.init;