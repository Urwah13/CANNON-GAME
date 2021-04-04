var cannon;
var bullet;
var background;
var cannonIMG;
var landIMG;
var BD1;
var BD2;
var BD3;
var BD4;
var spawnObstacleGroup;
var bulletGroup;
var buildingGroup;
var score=0;
var building;

function preload() {
  cannonIMG=loadImage("canon.png");
  landIMG=loadImage("land.png");
  BD1=loadImage("building1.png");
  BD2=loadImage("building2.png");
  BD3=loadImage("building3.png");
  BD4=loadImage("building4.png");

  fireIMG=loadImage("fire.png");
}

function setup() {
  createCanvas(800,400);
  cannon= createSprite(400, 350, 50, 50); 
  cannon.addImage(cannonIMG);
  bulletGroup=new Group();
  buildingGroup=new Group();
  

  cannon.scale=0.1;
  
}

function draw() {
  background("lightblue"); 
  image(landIMG,-10,0,1000,600);
  spawnObstacleGroup(); 
  cannon.x=mouseX;
  if(keyWentDown ("space")){
    bullet=createSprite(300,250,10,10);
    bullet.addImage(fireIMG);
    bullet.scale=0.05;
    bullet.x=cannon.x;
    bullet.y=cannon.y;
    bullet.velocityY= -5;
    bulletGroup.add(bullet);
    
  }

  if(bulletGroup.isTouching(buildingGroup)){
    score=score+5;
    building.destroy();
    bulletGroup.destroyEach();
  }
  
  
  drawSprites();
  text(score,100,30);
  

}

function spawnObstacleGroup() {
 if(frameCount % 30 === 0) {
   building = createSprite(0,100,40,40);
   building.velocityX= 4;
   var rand = Math.round(random(1,4));
   buildingGroup.add(building);
   switch(rand) {
     case 1: building.addImage(BD1);
            building.scale=0.20;
            break;
     case 2: building.addImage(BD2);
            building.scale=0.5;
            break;
     case 3: building.addImage(BD3);
            building.scale=0.5;
            break;
     case 4: building.addImage(BD4);
            building.scale=0.5;
     default: break;
   }

   
   building.lifetime = 400;
 }
}