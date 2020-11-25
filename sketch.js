

var PLAY = 1;
var END = 0;
var gameState = 1;

//creating variables
var bullet,speed, weight;
var wall,thickness;
var bulletI;
var damage;
var res,resI;

function preload(){

    resI = loadImage("res.png");
}


function setup() {

  //this code will create the play area
  createCanvas(1600,400);

  speed  = random(220,310);
  weight = random(30,50);


  //creating car sprite
  bullet = createSprite(30, 200, 100, 30);
  
  bullet.scale =0.3;
  bullet.velocityX  = speed;
  
  res = createSprite(600,300);
  res.addImage("restart",resI);
  res.scale = 0.08;
  res.visible = false;

  thickness = random(20,80);
  wall = createSprite(1200,200,thickness, 250);




  





}

function draw() {

  //giving background colour
  background("lightblue"); 
  
  if(gameState === PLAY){

    res.visible = false;

    if(hasCollided(bullet,wall)){

    

      bullet.velocityX = 0;

      damage = 0.5 * weight * speed * speed / (thickness * thickness * thickness );

      if(damage > 10){
        wall.shapeColor = "red";
      }
    
      if(damage < 10){
        wall.shapeColor = "green";
      }

      gameState = END;
    }

    


}  else if(gameState === END){
      res.visible = true;
      if(mousePressedOver(res)){
        reset();

      }
    }

 



  drawSprites();
  textSize(17);
  fill("white");
  stroke("white"); 
  text("DAMAGE : " + damage,1000,50);
  text("SPEED: " + speed,700,50);
  text("WEIGHT : " + weight,400,50);
}



function reset(){
  
  gameState = PLAY;

  damage = 0;
  
  bullet.velocityX = speed;
  bullet.x = 30;
  bullet.y = 200;
  speed  = random(220,310);
  weight = random(30,50);
  thickness = random(20,80);
  wall.width = thickness;
}













