const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var rod;
var string1,string2,string3;
var bob1,bob2,bob3;

function preload()
{
	
}

function setup() {
	createCanvas(600, 500);


	engine = Engine.create();
	world = engine.world;

	var bobDiameter = 40;

	hold = new Hold(300, 100, 300, 20);

	bob1 = new Bob(200, 400, 50);
	bob2 = new Bob(250, 400, 50);
	bob3 = new Bob(300, 400, 50);
	bob4 = new Bob(350, 400, 50);
	bob5 = new Bob(400, 400, 50);

	string1 = new String(bob1.body,hold.body,-bobDiameter*2.4,0);
	string2 = new String(bob2.body,hold.body,-bobDiameter*1.3,0);
	string3 = new String(bob3.body,hold.body,0,0); 
 	string4 = new String(bob4.body,hold.body,bobDiameter*1.3,0); 
	string5 = new String(bob5.body,hold.body,bobDiameter*2.4,0);


	Engine.run(engine);
	Engine.update(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  rod.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  string1.display();
  string2.display();
  string3.display();
  string4.display();
  string5.display();

  drawSprites();
 
}
function keyPressed() { 
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-45}); 
	} 
} 