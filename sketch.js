var wall, bullet;
var speed,weight, thickness;
var damage;

function setup() {
  createCanvas(1600,400);
  
thickness=random(20,80);
  speed=random(100,150);
  weight=random(400,1500);

  bullet=createSprite(50,200,50,50);
  wall=createSprite(120,200,thickness,200);
  damage=0.5*weight*speed*speed/thickness*thickness*thickness;
}

function draw() {
  background(255,255,255); 
  
  bullet.velocityX=speed/20;

  
if(wall.x-bullet.x<(bullet.width+wall.width)/2)
{
  bullet.velocityX=0;

  if(damage>10)
  {
    bullet.shapeColor=color(255,0,0);
  }

  if(damage<10)
  {
    bullet.shapeColor=color(0,255,0);
  }

}
  drawSprites();
}