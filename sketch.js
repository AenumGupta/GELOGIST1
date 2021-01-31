
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	hammer=new Hammer();
	stone=new Stone(700,545,70,70);
	rubber=new Rubber(400,545);
	sand1=new Sand(500,580);
	sand2=new Sand(520,580);
	sand3=new Sand(540,580);
	sand4=new Sand(560,580);
	sand5=new Sand(580,580);
	sand6=new Sand(600,580);
	iron=new Iron(200,520,150,80);
	ground=new Ground(500,590,1000,20);

	Engine.run(engine);
  
	console.log(stone);
}


function draw() {
  rectMode(CENTER);
  background("aqua");

hammer.display();
stone.display();
rubber.display();
sand1.display();
sand2.display();
sand3.display();
sand4.display();
sand5.display();
sand6.display();
iron.display();
ground.display();

drawSprites();
}



