
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper = new Paper(100, 300, 20, 20);
	dustbin = new Dustbin(300, 300, 100, 50);
	ground = new Ground(100, 600, 800, 10);
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper.display();
  dustbin.display();
  ground.display();
  drawSprites();
 
}



