var fixedRect, movingRect,test1,test2

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  test1=createSprite(20,20,110,20);
  test1.shapeColor="yellow";
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY; 

  if(touching(movingRect,fixedRect)=== true){

  
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
  }
  else {
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
  }
  if(touching(movingRect,test1)=== true){

  
    movingRect.shapeColor = "red";
    test1.shapeColor = "red";
  }
  else {
    movingRect.shapeColor = "green";
    test1.shapeColor = "yellow";
  }
  drawSprites();
}
