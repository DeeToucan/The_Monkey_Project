//creates varibles
var monkey , monkey_running;
var ground,InvGround;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score;

function preload(){
  
  //creates the monkey's animation
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  
  //creates the banana image
  bananaImage = loadImage("banana.png");
  
  //creates obsticales image
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400,400);
  
  //creates the ground and invisible ground
  ground=createSprite(200,380,800,80);
  InvGround=createSprite(200,350,800,10);
  InvGround.visible=false;
  
  //creates the monkey
  monkey=createSprite(100,400,20,20);
  monkey.addAnimation("monkey_running",monkey_running);
  monkey.scale=0.1;
  //monkey.debug=true;


  

  
  
}


function draw() {
  background(0,20,185);
  
  //creates the gravity
  monkey.velocityY=monkey.velocityY+0.8;

  //creates collision 
  monkey.collide(InvGround);
  
  //defines what happens when the player presses space
  if (keyDown("space") && monkey.isTouching(ground)){
    monkey.velocityY=-14.5;
  }
  
  //spawns obsticales and bananas
  SpawnRock();
  SpawnBanana(150,350);
  
  drawSprites();
}

//the function that spawns the obsticales
function SpawnRock(){
  
  
  if (frameCount % 60==0){
  
  //creates the obsticale
  obstacle=createSprite(400,320,20,20);
  obstacle.addImage("obstacleImage",obstacleImage);
  obstacle.scale=0.2;
  obstacle.setCollider("rectangle",0,0,obstacle.width-100,obstacle.height-100);
  //obstacle.debug=true;
  
  //adds the velocity and lifetime to the obsticale
  obstacle.velocityX=-5;
  obstacle.lifetime=150;
  }
  
}

function SpawnBanana(x1,x2){
  
  if(frameCount % 70==0){
  
  //creates the random varible used for the banana's y postion
  var rand=Math.round(random(x1,x2));
    
  //creates banana
  banana=createSprite(300,rand,20,20);
  banana.addImage("bananaImage",bananaImage);
  banana.scale=0.1;
  //banana.debug=true;
    
  //adds the velocity and lifetime to the banana
  banana.velocityX=-7;
  banana.lifetime=150;
  }
}








