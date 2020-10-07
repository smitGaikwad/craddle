
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
roof1 = new roof(400,40,480,30);
roof2 = new roof(400,200 ,480,30);

ball1 = new ball(40,100,40);
ball2 = new ball(240,100,40);
ball3 = new ball(280,100,40);
ball4 = new ball(320,100,40);
ball5 = new ball(360,100,40);

rope1 = new rope(ball1.body,{x:200,y:40});
rope2 = new rope(ball2.body,{x:240,y:40});
rope3 = new rope(ball3.body,{x:280,y:40});
rope4 = new rope(ball4.body,{x:320,y:40});
rope5 = new rope(ball5.body,{x:360,y:40});
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  roof1.display();
  roof2.display();

  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
  drawSprites();
 
}



