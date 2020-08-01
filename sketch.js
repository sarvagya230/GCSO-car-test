var car,wall,speed,sizeH,sizeW,weight;
weight=random(400,500);
var Destruction ;
function setup() {
  speed=random(1,20);
  sizeH=random(20,50);
  sizeW=sizeH;
  car=createSprite(100,100,20,20);
  wall=createSprite(900,100,30,90);
  createCanvas(1600,1000);
  car.shapeColor="white";

}

function draw() {
  
 
  background(0);
  car.width=sizeW;
  car.height=sizeH;
 
  car.velocityX=speed;
  deformation(car,wall)
  console.log(destruction);
  
  
  
  drawSprites();
}
function deformation(a,b)
{
  if(a.collide(b))
  {
    if(Destruction<100)
    {
      a.shapeColor=color(255,0,0)
    }
    else if(Destruction<180 && Destruction>100)
    {
      a.shapeColor=color(0,255,0);
    }
    else
    {
      a.shapeColor=color(0,0,255);
    }
  }


}
function destruction()
{
  Destruction=0.5*weight*speed*speed/2250;
}
