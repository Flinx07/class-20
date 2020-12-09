var fixed,moving;
function setup() {

  createCanvas(800,400);
  
 fixed= createSprite(400, 200, 50, 50);
moving=createSprite(400,200,50,50);
fixed.shapeColor=("red");
moving.shapeColor=("blue");
}

function draw() {
  background( "black");
  moving.x=mouseX
  moving.y=mouseY
  if(fixed.x-moving.x < moving.width/2 + fixed.width/2 && moving.x-fixed.x < moving.width/2 + fixed.width/2 && moving.y-fixed.y<moving.height/2+fixed.height/2 && fixed.y-moving.y<moving.height/2+fixed.height/2) {
  fixed.shapeColor=("green");
  moving.shapeColor=("green");
  }
  else{
    fixed.shapeColor=("red");
moving.shapeColor=("blue");
  }
  drawSprites();
}
