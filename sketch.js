
var balloon,boolImg,balloonImg2,bool3;
var database,position;
var backgroundImg;
function setup() {
  database=firebase.database();
  createCanvas(800,400);
backgroundImg=loadImage("images/bg.png")

boolImg=loadImage("images/bool1.png")

balloonImg2=loadImage("images/bool2.png")

bool3=loadImage("images/bool3.png")

balloon=createSprite(200,280,50,50)
balloon.addImage(boolImg)
balloon.scale=0.4;
var bp=database.ref("balloon")
bp.on("value",readPosition)
}

function draw() {
  background(backgroundImg);  
  drawSprites();
  if(position!==undefined){
    if(keyDown(LEFT_ARROW)){
  balloon.x=balloon.x-10;
        balloon.addImage(balloonImg2)
    }
    else if(keyDown(RIGHT_ARROW)){
        balloon.x=balloon.x+10;
        balloon.addImage(bool3)
    }
    else if(keyDown(UP_ARROW)){
        balloon.y=balloon.y-10;
        balloon.scale=balloon.scale+0.005
    }
    else if(keyDown(DOWN_ARROW)){
        balloon.y=balloon.y+10;
        balloon.scale=balloon.scale-0.005
    }
    drawSprites();
}}

function changePosition(x,y){
   database.ref("balloon").set({
       "x":position.x+x,
       "y":position.y+y
   })
}
function readPosition(data){
position=data.val()
balloon.x=position.x
balloon.y=position.y
}
