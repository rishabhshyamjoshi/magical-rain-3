var ground;
var drops;

function setup() {
createCanvas(800,400);
  ground = createSprite(275,395,200,20);
  ground.shapeColor="black";
  
}

function draw() {
  background(0,0,0);
  
if(World.frameCount % 10 === 0){
    drops  = createSprite(200,5,5,23);
    drops2 = createSprite(250,5,5,23);
    drops3 = createSprite(300,5,5,23);
    drops4 = createSprite(350,5,5,23);

    drops.velocityY=9;
    drops.shapeColor="blue";
    drops2.velocityY=7;
    drops2.shapeColor="blue";
    drops3.velocityY=8;
    drops3.shapeColor="blue";
    drops4.velocityY=7.5;
    drops4.shapeColor="blue";

    }
 
  if(keyDown("space")){
    drops.velocityY=6;
    drops2.velocityY=6;
    drops3.velocityY=6;
    drops4.velocityY=6;

    drops.shapeColor="green";  
    drops3.shapeColor="red";
    drops4.shapeColor="yellow";
                 
    ground.shapeColor="pink";

    background(mouseX,mouseY,35);

  }
 text1 =  text("1) press and hold enter to slow down the rain and to see next task",400,30);
 
  if(keyDown("enter")){
    drops.velocityY=4;
    drops2.velocityY=5;
    drops3.velocityY=4.5;
    drops4.velocityY=3.8;

    text2 =text("2) press and hold shift to speed up the rain and  to see next task",400,50);

    ground.shapeColor = "red";
 
}

  if(keyDown("shift")){
    drops.velocityY=11;
    drops.shapeColor="blue";
    drops2.velocityY=9;
    drops2.shapeColor="blue";
    drops3.velocityY=10;
    drops3.shapeColor="blue";
    drops4.velocityY=9.5;
    drops4.shapeColor="blue";

    ground.shapeColor = "blue";

  text3 =  text("3) press space to see the rain at the same speed ",400,70);

}


  drawSprites();
}