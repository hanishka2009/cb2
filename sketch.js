const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paperI,DUSTBIN
function preload()
{
	//paperI=loadImage("PAPER.png")
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;
Paper=new paper(120,400,30);
//Paper.addImage(paperI);

	//Create the Bodies Here.
fill(300,300,300)
	dustbin1=new ground(400,670,800,20)
d2=new dustbin(470,460,20,30)
d4=new ground(590,600,20,110)
//sd3=new ground(530,650,120,20)
	Engine.run(engine);
  
}


function draw() {

  
  background(255,255,255);
  dustbin1.display();
  d4.display();
// d3.display();
 Paper.display();
 d2.display();
}

function keyPressed(){
	if(keyCode===UP_ARROW){
	
			Matter.Body.applyForce(Paper.body,Paper.body.position,{x:86,y:-140})
	}
}
