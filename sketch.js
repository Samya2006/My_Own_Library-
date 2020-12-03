var fix
var move
var o1,o2,o3,o4;

function setup() {
  createCanvas(800,400);
  fix=createSprite(400, 200, 50, 50);
  move=createSprite(500, 200, 50, 50);
  o1=createSprite(100, 100, 50, 50);
  o2=createSprite(300, 100, 50, 50);
  o3=createSprite(500, 100, 50, 50);
  o4=createSprite(700, 100, 50, 50);

  fix.shapeColor="green";
  move.shapeColor="green";
  fix.debug=true;
  move.debug=true;

  o1.shapeColor="green";
  o2.shapeColor="green";
  o3.shapeColor="green";
  o4.shapeColor="green";

  o3.velocityX=2;
  o4.velocityX=-8;
}

function draw() {
  background(0); 
  
  move.x=mouseX;
  move.y=mouseY;

  if (isTouching(o1,move)){
    o1.shapeColor="red";
    move.shapeColor="red";
   }
  else{
    o1.shapeColor="green";
    move.shapeColor="green";  
  }
  bouceoff(o3,o4)
  drawSprites();
}
