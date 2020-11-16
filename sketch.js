var monkey// monkey_running=sprite_obstacle 
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage,bananaGroup;
var  obstacleGroup;
var score,ground;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}
function setup() {
  
  monkey=createSprite(100,280,20,20);
  monkey.addAnimation("monkey",monkey_running);
  monkey.scale=0.16;
  ground=createSprite(300,330,800,10);
  ground.velocityX = -3 
  score=0;

}

function draw()
{
  createCanvas(400,400);
  
  
  background("white");
  if(ground.x<0){
     ground.x=ground.width/2;
   }
    text("SURVIVAL TIME :"+score,250,50)
 drawSprites(); 
   if(keyDown("space")&& monkey.y >=100) {
        monkey.velocityY = -13;
    }
  score = Math.round(frameCount/frameRate());
   monkey.velocityY=monkey.velocityY+0.8;
  monkey.collide(ground);
  
  if (frameCount % 60 === 0) {
    banana=createSprite(200,200,20,20)
banana.addImage("banana",bananaImage);
  banana.y = Math.round(random(120,200))
   banana.velocityX = -3;
  banana.scale=0.1;
    banana.lifetime=200;
    bananaGroup=createGroup();
    bananaGroup.add(banana);
}
  
  if (frameCount % 300 === 0) {
    obstacle=createSprite(200,310,20,20)
obstacle.addImage("obstacle",obstacleImage);
  
   obstacle.velocityX = -3;
 obstacle.scale=0.15;                                  
    obstacle.lifetime=200;
    obstacleGroup=createGroup();
    obstacleGroup.add(obstacle);
}
}
