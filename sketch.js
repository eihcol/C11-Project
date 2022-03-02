var path, bomb, runner, runnerimg, pathimg, leftBoundary, rightBoundary

function preload(){
  //pre-load images
  pathimg = loadImage("path.png");
  runnerimg = loadAnimation("Runner-1.png", "Runner-2.png");
  bomb = loadImage("bomb.png");
  
}

function setup(){
  createCanvas(400,400);
  
  //create sprites here
  
  path=createSprite(200,200);
  path.addImage(pathimg);
  path.velocityY = 4;
  path.scale = 1.5
  
  runner=createSprite(200,350,30,30);
  runner.addAnimation("running",runnerimg);
  runner.scale = 0.05;
  
  leftBoundary=createSprite(0,0,100,800); 
  leftBoundary.visible = false;
  
  rightBoundary=createSprite(410,0,100,800); 
  rightBoundary.visible = false;


}

function draw() {
  background(0);

  runner.x = World.mouseX;

  runner.collide(leftBoundary);
  runner.collide(rightBoundary);

  path.velocityY = 4;
  if(path.y > 400){
   path.y = height/2;
  }

  drawSprites()
}
