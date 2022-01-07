var path,pathImg;
var runner,runnerAnimation;

function preload() {
   
pathImg=loadImage("path.png");
runnerAnimation=loadAnimation("Runner-1.png", "Runner-2.png");

}

function setup(){

  path=createSprite(200,200)
  path.addImage(pathImg)
  path.velocityY=4;
  path.scale=1.2;

runner=createSprite(200,200)
runner.addAnimation("runner",runnerAnimation);
runner.scale=.1

var invisGround = createSprite(50,100,9,4000)


var invisGround2 = createSprite(399,80,10,4000)


invisGround.visible=false
invisGround2.visible=false





}

function draw() {
  background(0)
 

 

if(path.y>400){
  path.y=height/2;
}


runner.x = World.mouseX;
  




  drawSprites();
}