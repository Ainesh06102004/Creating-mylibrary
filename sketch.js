var fixedRect, movingRect;
var rect3,rect4;


function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  
  rect3 = createSprite(200, 500, 40, 40);
  rect4 = createSprite (200, 550, 50,50);

  
  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
}

function draw() {
  background(0,0,0);  

  bounceoff(movingRect, fixedRect);
 
  if(collide(rect3, rect4)) {
    rect3.shapeColor = "red";
    rect4.shapeColor = "red";

  }
  
  else {
    rect3.shapeColor = "grey";
    rect4.shapeColor = "grey";
  }
   

  rect4.y = mouseY;
  rect4.x = mouseX; 

  drawSprites();
}