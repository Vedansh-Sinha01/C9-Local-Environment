var sprite;
function setup() {
  createCanvas(1200,800);
  sprite=createSprite (400,500,50,70);
}

function draw() 
{
  background("blue");
  if(keyIsDown(RIGHT_ARROW)){
    sprite.x=sprite.x+5
  }
  if(keyIsDown(LEFT_ARROW)){
    sprite.x=sprite.x-5
  }
  if(keyIsDown(UP_ARROW)){
    sprite.y=sprite.y+5
  }
   if(keyIsDown(DOWN_ARROW)){
    sprite.y=sprite.y-5
  }
drawSprites();
}



