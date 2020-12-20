
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
var ground;
var dustbin1,dustbin2,dustbin3;

function preload()
{
	
}

function setup() {
	createCanvas(1350, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground=createSprite(600,600,1490,20)
    

paper=createSprite (50,550,50,50);
dustbin1=createSprite(1250,540,20,90);
dustbin2=createSprite(1000,540,20,90);
dustbin3=createSprite(1125,580,280,20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ground.shapeColor=("green")
  dustbin1.shapeColor=("yellow");
  dustbin2.shapeColor=("yellow");
  dustbin3.shapeColor=("yellow");
  paper.shapeColor=("red");



keyPressed();
  drawSprites();
 
}

function keyPressed(){
if (keyDown === UP_ARROW) {

	Matter.Body.applyForce(paper.body,paper.body.position,
		{
x:12,
y:-13
	})
	
}


}

