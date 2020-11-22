
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;

function preload()
{
	treeImg=loadImage("images/tree.png");
	boyImg=loadImage("images/boy.png");	
}

function setup() {
	createCanvas(1000, 600);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground=new Ground();
	stone=new Stone(145,410,30);

	mango1=new Mango(750,200,25);
	mango2=new Mango(810,300,35);
	mango3=new Mango(720,150,30);
	mango4=new Mango(850,210,45);
	mango5=new Mango(900,290,50);
	
	chain =new Constrain(stone.body,{x:146,y:410});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");

  ground.display();

  imageMode(CENTER);
  image(treeImg,800,320,400,500);
  image(boyImg,200,490,200,300);

  stone.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();

  drawSprites();
 
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
    chain.fly();
}

function keyPressed(){
	if(keyCode===32){
		chain.attach(stone.body);
	}
}

function detectColl(stones,mangos){
	var stonesPos=stones.body.position;
	var mangosPos=mangos.body.position;

	var distance=dist(stonesPos.x,stonesPos.y,mangosPos.x,mangosPos.y);
	if(distance<=stones.r+mangos.r){
		Body.setStatic(mangos,false);
	}
}