
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;


function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	ball1=new Ball(300,350,50);
	ball2=new Ball(350,350,50);
	ball3=new Ball(400,350,50);
	ball4=new Ball(450,350,50);
	ball5=new Ball(500,350,50);

	ceiling = new Ceiling(300,100,300,40);

	
  rope1= new Rope(ball1.body,ceiling.body,-50*2,0);
  rope2= new Rope(ball2.body,ceiling.body,-25*2,0);
  rope3= new Rope(ball3.body,ceiling.body,-0*2,0);
  rope4= new Rope(ball4.body,ceiling.body,25*2,0);
  rope5= new Rope(ball5.body,ceiling.body,50*2,0);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
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

  ceiling.display();
  
  drawSprites();
 keyPressed();
}

function keyPressed(){
	if (keyCode === LEFT_ARROW) 
	{ Matter.Body.applyForce(ball1.body,ball1.body.position,{x:-100,y:-100}); } 

}

