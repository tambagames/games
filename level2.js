var count = 0;
//game object 
var Game = {
init:function (){
info.innerHTML  = "";
count = 0;
gameend.style.display = "none";
gamestart.style.display = "block";
Panel.getX();
Panel.getY();
Panel.getW();
Panel.getH();
Panel.getColor();
Tracker.getX();
Tracker.getY();
Tracker.getW();
Tracker.getH();
Tracker.getColor();
Tank.pos();
Chopper.getX();
Chopper.getY();
Chopper.getW();
Chopper.getH();
Laser.getX();
Laser.getY();
Laser.getW();
Laser.getH();
},
start:function (){
gamestart.style.display = "none";
gamearea.style.display = "block";
left.style.display = "block";
right.style.display = "block";
up.style.display = "block";
down.style.display = "block";
stopp.style.display = "block";
},
endgame:function (){
gamearea.style.display = "none";
gameend.style.display = "block";
}
};
//game area panel constructor
function Panel(Xpos,Ypos,Width,Height,panelColor){
this.Xpos = Xpos;
this.Ypos = Ypos;
this.Width = Width;
this.Height = Height;
this.panelColor = panelColor;
this.getX = function (){
gamearea.style.position = "absolute";
gamearea.style.left = this.Xpos+"px";
};
this.getY = function (){
gamearea.style.position = "absolute";
gamearea.style.top = this.Ypos+"px";
};
this.getW = function (){
gamearea.style.width = this.Width+"px";
};
this.getH = function (){
gamearea.style.height = this.Height+"px";
};
this.getColor = function (){
gamearea.style.backgroundColor = this.panelColor;
};
}
//panel object
var Panel = new Panel(0.025*screen.width,0.05*screen.height,0.95*screen.width,0.6*screen.height,"black");
//ttracker constructor
function Tracker(Xpos,Ypos,Width,Height,Xstep,Ystep,Speed,rightWallpos,leftWallpos){
this.Xpos = Xpos;
this.Ypos = Ypos;
this.Width = Width;
this.Height = Height;
this.Xstep = Xstep;
this.Ystep = Ystep;
this.Speed = Speed;
this.rightWallpos = rightWallpos;
this.leftWallpos = leftWallpos;
this.getX = function (){
tracker.style.position = "absolute";
tracker.style.left = this.Xpos+"px";
};
this.getY = function (){
tracker.style.position = "absolute";
tracker.style.top = this.Ypos+"px";
};
this.getW = function (){
tracker.style.width = this.Width+"px";
};
this.getH = function (){
tracker.style.height = this.Height+"px";
};
this.getColor = function (){
tracker.style.color = "red";
};
this.moveLeftArrow = function (){
document.addEventListener("keydown",function (){
if(event.code=="ArrowLeft"){
Tracker.moveLeft();
}
});
};
this.moveRightArrow = function (){
document.addEventListener("keydown",function (){
if(event.code=="ArrowRight"){
Tracker.moveLeft();
}
});
};
this.moveArrowUp = function (){
document.addEventListener("keydown",function (){
if(event.code=="ArrowUp"){
Tracker.moveUp();
}
});
};
this.moveArrowDown = function (){
document.addEventListener("keydown",function (){
if(event.code=="ArrowDown"){
Tracker.moveDown();
}
});
};
this.moveLeft = function trackerleft(){
tracker.style.left = parseInt(tracker.style.left)-Xstep+"px";
auto = setTimeout(trackerleft,Speed);
if(parseInt(tracker.style.left)<leftWallpos){
clearTimeout(auto);
}
};
this.moveRight = function trackerright(){
tracker.style.left = parseInt(tracker.style.left)+Xstep+"px";
auto = setTimeout(trackerright,Speed);
if(parseInt(tracker.style.left)>rightWallpos){
clearTimeout(auto);
}
};
this.moveUp = function trackerup(){
tracker.style.top = parseInt(tracker.style.top)-Ystep+"px";
auto = setTimeout(trackerup,Speed);
if(parseInt(tracker.style.top)<0){
clearTimeout(auto);
}
};
this.moveDown = function trackerdown(){
tracker.style.top = parseInt(tracker.style.top)+Ystep+"px";
auto = setTimeout(trackerdown,Speed);
if(parseInt(tracker.style.top)>Panel.Height/2){
clearTimeout(auto);
}
};
this.Stop= function (){
clearTimeout(auto);
};
}
//tracker object
var Tracker = new Tracker(50,50,5,5,2,2,20,Panel.Width-15,5);
//tank object
var Tank = {
pos:function (){
tank.style.position = "absolute";
tank.style.left = Panel.Width/1.5+"px";
tank.style.top = Panel.Height-20+"px";
tank.style.width = "30px";
tank.style.height = "20px";
}
};
//chopper object
function Chopper(Xpos,Ypos,Width,Height,Xstep,Ystep,Speed,rightWallpos){
this.Xpos = Xpos;
this.Ypos = Ypos;
this.Width = Width;
this.Height = Height;
this.Xstep = Xstep;
this.Ypos = Ypos;
this.Speed = Speed;
this.rightWallpos = rightWallpos;
this.getX = function (){
helicopter.style.position = "absolute";
helicopter.style.left = this.Xpos+"px";
bomb.style.position = "absolute";
bomb.style.left = this.Xpos+"px";
};
this.getY = function (){
helicopter.style.position = "absolute";
helicopter.style.top = this.Ypos+"px";
bomb.style.position = "absolute";
bomb.style.top = this.Ypos+"px";
};
this.getW = function (){
helicopter.style.width = this.Width+"px";
bomb.style.width = "5px";
};
this.getH = function (){
helicopter.style.height = this.Height+"px";
bomb.style.height = "5px";
};
this.moveRight = function chopperright(){
ran = Math.floor(Math.random()*Panel.Width/2);
helicopter.style.left = parseInt(helicopter.style.left)+Xstep+"px";
bomb.style.left = parseInt(bomb.style.left)+Xstep+"px";
autochopperright = setTimeout(chopperright,Speed);
if(parseInt(helicopter.style.left)>parseInt(tank.style.left)+10 && parseInt(helicopter.style.left)<parseInt(tank.style.left)+15){
Chopper.fire();
function end(){
Game.endgame();
}
setTimeout(end,1000);
}
if(parseInt(helicopter.style.left)==ran){
clearTimeout(autochopperright);
Chopper.moveDown();
}
};
this.moveDown = function chopperdown(){
helicopter.style.top = parseInt(helicopter.style.top)+2+"px";
bomb.style.top = parseInt(bomb.style.top)+2+"px";
autochopperdown = setTimeout(chopperdown,20);
if(parseInt(helicopter.style.top)>Panel.Height/2){
clearTimeout(autochopperdown);
Chopper.moveRight();
}
};
this.move = function (){
play.style.display = "none";
shoot.style.display = "block";
Chopper.moveRight();
};
this.explode = function (){
bomb.style.width = "50px";
bomb.style.height = "50px";
function shrink(){
ran = Math.floor(Math.random()*Panel.Height/2);
helicopter.style.left = "0px";
bomb.style.left = "0px";
helicopter.style.top = ran+"px";
bomb.style.top = ran+"px";
bomb.style.width = "5px";
bomb.style.height = "5px";
bomb.style.display = "none";
helicopter.style.display = "none";
}
setTimeout(shrink,200);
function show(){
helicopter.style.display = "block";
bomb.style.display = "block";
}
setTimeout(show,500)
};
this.fire = function bombfire(){
bomb.style.top = parseInt(bomb.style.top)+20+"px";
autofire = setTimeout(bombfire,30);
if(parseInt(bomb.style.top)>Panel.Height){
bomb.style.top = parseInt(helicopter.style.top)+"px";
bomb.style.left = parseInt(helicopter.style.left)+"px";
}
if(parseInt(helicopter.style.left)>parseInt(tank.style.left)+15){
clearTimeout(autofire);
}
};
}
//chopper object
var Chopper = new Chopper(10,50,20,20,1,1,20,Panel.Width-20);
//laser constructor
function Laser(Xpos,Ypos,Width,Height){
this.Xpos = Xpos;
this.Ypos = Ypos;
this.Width = Width;
this.Height = Height;
this.getX = function (){
laser.style.position = "absolute";
laser.style.left = this.Xpos+"px";
};
this.getY = function (){
laser.style.position = "absolute";
laser.style.top = this.Ypos+"px";
};
this.getW = function (){
laser.style.width = this.Width+"px";
};
this.geH = function (){
laser.style.height = this.Height+"px";
};
this.fire = function (){
laser.style.top = parseInt(tracker.style.top)+20+"px";
laser.style.left = parseInt(tracker.style.left)+"px";
function ret(){
laser.style.top = Panel.Height-10+"px";
laser.style.left = Panel.Width/1.5+"px";
}
setTimeout(ret,1000);
if(parseInt(laser.style.left)>parseInt(helicopter.style.left)-20 && parseInt(laser.style.left)<parseInt(helicopter.style.left)+30){
if(parseInt(laser.style.top)>parseInt(helicopter.style.top)-30 && parseInt(laser.style.top)<parseInt(helicopter.style.top)+30){
count = count+1;
info.innerHTML  =count + "down";
Chopper.explode();
if(count==10){
window.location = "level3.html";
}
}
}
};
}
//laser constructor
var Laser = new Laser(Panel.Width/1.5,Panel.Height-20,10,10);
//initialise objects 
window.onload =Game.init;