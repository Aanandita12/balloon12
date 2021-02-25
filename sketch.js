
  var score;
  var redScore;
  var blueScore;
  var greenScore;
  var BalloonsGroup;

var blueBalloon;
var greenBalloon;
var redBalloon;

var balloon,balloons;
var arrow, bow;
function preload(){
  blue_balloons=loadImage("blue_balloon0.png");
   green_balloons=loadImage("green_balloon0.png");
   red_balloons=loadImage("red_balloon0.png");
   pink_balloons=loadImage("pink_balloon0.png");
  bowX =loadImage("bow0.png");
  groundImage = loadImage("background0.png");
  arrowX =loadImage("arrow0.png");
}

function setup(){
  background(180);
  createCanvas(600,400);
  
  
  
  score = 0;
  redScore = 0;
  blueScore = 0;
  greenScore = 0;
  
  text("Score: "+score, 250 , 20);
fill("black"); 
  //score = score + Math.round(getFrameRate()/60);
  
  redBalloon=createSprite(50,160,20,50);
  greenBalloon=createSprite(50,160,20,50);
  blueBalloon=createSprite(50,160,20,50);
  
  pink_balloons.scale = 1;
  
 // bow = createSprite(350, 100, 10, 50);
// bow.addImage(bowX);  
   
 // edges=createEdgeSprites();
  
   
  background = createSprite(0, 0, 600, 600);
  background.addImage(groundImage);
  background.scale = 2.5;
 //  background.x = background.width /2;
  
  
  bow = createSprite(550, 100, 10, 50);
 bow.addImage(bowX);  
  
   arrow = createSprite(550, 400, 50, 10);
  arrow.addImage(arrowX);
  arrow.scale = 0.3;
 //arrow.collide(blue_balloons||green_balloons||red_balloons||pink_balloons);
  
 /* function balloonPOP(){
  if(balloon.isTouching(arrow)){
  balloon.visible = false;
    score = score+1;
  }
  }*/
    if(keyDown("space")&& arrow.y >= 100) {
    arrow.velocityY = -100;
  }
  
}


function balloonPOP(){
  
  if(redBalloon.isTouching(arrow)){
  redBalloon.destroy(arrow);
    score = score+3;
    redScore = redScore +1;
  }
  
  if(blueBalloon.isTouching(arrow)){
  blueBalloon.destroy(arrow);
    score = score+2;
    blueScore = blueScore +1;
  }
  
  if(greenBalloon.isTouching(arrow)){
  greenBalloon.destroy(arrow);
    score = score+1;
    greenScore = greenScore +1;
  }
  
  
  }

function draw(){
  background.velocityX = -3;
  if(background.x < 0){
   background.x = background.width /2;

     }
  
  
  //arrow.x = bow.x;
  arrow.y =bow.y;           
  bow.y = mouseY;
  
  if(keyDown("space")) {
    arrow.velocityX = -50;
    
  if(arrow.x < 0) {
    arrow.x = 550;
    arrow.y =bow.y;   
  }
}
  
  
//background(200);
  drawSprites();
  spawnBalloons();
  balloonPOP();
  
  fill("black");
   text("Score: "+score, 20 , 20);
  fill("red"); 
   text("Red score: "+ redScore, 100 , 20);
  fill("blue");
   text("Blue score: "+ blueScore, 200 , 20);
  fill("green");
   text("Green score: "+ greenScore, 300 , 20);
 // fill("green");
}
 function spawnBalloons() {
  //write code here to spawn the balloons
  if (frameCount % 100 === 0) { 
    
   
   var rand = Math.round(random(1, 3));
    switch(rand){
    case 1 : blueBalloon.addImage(blue_balloons);
        blueBalloon.velocityX = 7;
        
    blueBalloon = createSprite(0,0,30,20);        
    blueBalloon.y = Math.round(random(10,350))
    blueBalloon.scale = 0.1;
   // blueBalloon.velocityX = 3;
    
        
   break;
 case 2 : redBalloon.addImage(red_balloons);
          redBalloon.velocityX = 10;
          redBalloon = createSprite(0,0,30,20);        
          redBalloon.y = Math.round(random(10,350))
          redBalloon.scale = 0.1;
   //  redBalloon.velocityX = 3;
        
    break;
 case 3 : greenBalloon.addImage(green_balloons);
          greenBalloon.velocityX = 5; 
          greenBalloon = createSprite(0,0,30,20);        
          greenBalloon.y = Math.round(random(10,350))
          greenBalloon.scale = 0.1;
 //   greenBalloon.velocityX = 3;
      default:  break;
      
   
  }  
    
    //assigning lifetime to the variable
    redBalloon.lifetime = 180;
    blueBalloon.lifetime = 180;
    greenBalloon.lifetime = 180;
//    BalloonsGroup.add(balloon);
}
 }