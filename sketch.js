
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var tree,treeImage;
var dground;
var mango1, mango2, mango3, mango4, mango5, mango6, maango7, mango8, mango9, mango10;
var stones;
var boy,boyImage;

function preload()
{
	treeImage=loadImage("tree.png");
	boyImage=loadImage("boy.png");
	
}

function setup() {
	createCanvas(1000, 650);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	stones=new Stone(100,460,23);
	dground = new GROUND();

	attach=new Throw(stones.body,{x:100,y:465});
	mango1=new Mango(550,290,34);
	mango2=new Mango(500,220,35);
	mango3=new Mango(670,260,35);
	mango4=new Mango(700,130,35);
	mango5=new Mango(600,150,36);
	mango6=new Mango(780,250,35);
	mango7=new Mango(795,165,33);
	mango8=new Mango(880,260,35);
	mango9=new Mango(940,220,35);
	mango10=new Mango(980,305,35);

	tree = createSprite(775,368);
	tree.addImage(treeImage);
	tree.scale=0.42;

	boy=createSprite(200,550);
	boy.addImage(boyImage);
	boy.scale=0.15;

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(54, 123, 203);

  fill("black");
  textSize(18);
  text("- Press spacebar for more chances -",50,50);
  
  detectCollision(stones,mango1);
  detectCollision(stones,mango2);
  detectCollision(stones,mango3);
  detectCollision(stones,mango4);
  detectCollision(stones,mango5);
  detectCollision(stones,mango6);
  detectCollision(stones,mango7);
  detectCollision(stones,mango8);
  detectCollision(stones,mango9);
  detectCollision(stones,mango10);

  dground.display(); 
drawSprites();
stones.display();
mango1.display();
mango2.display();
mango3.display();
mango4.display();
mango5.display();
mango6.display();
mango7.display();
mango8.display();
mango9.display();
mango10.display();
}

function mouseDragged(){
	Matter.Body.setPosition(stones.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
	attach.fly();
}

function detectCollision(){

	if(stones.body.position.x- mango1.body.position.x <mango1.diametre + stones.diametre
		&& mango1.body.position.x - stones.body.position.x  < mango1.diametre + stones.diametre
		&&stones.body.position.y -mango1.body.position.y < mango1.diametre + stones.diametre
		&& mango1.body.position.y - stones.body.position.y < mango1.diametre + stones.diametre)
		{
		Matter.Body.setStatic(mango1.body,false);
	}

	if(stones.body.position.x- mango2.body.position.x <mango2.diametre + stones.diametre
		&& mango2.body.position.x - stones.body.position.x  < mango2.diametre + stones.diametre
		&&stones.body.position.y -mango2.body.position.y < mango2.diametre + stones.diametre
		&& mango2.body.position.y - stones.body.position.y < mango2.diametre + stones.diametre)
		{
		Matter.Body.setStatic(mango2.body,false);
	}

	if(stones.body.position.x- mango3.body.position.x <mango3.diametre + stones.diametre
		&& mango3.body.position.x - stones.body.position.x  < mango3.diametre + stones.diametre
		&&stones.body.position.y -mango3.body.position.y < mango3.diametre + stones.diametre
		&& mango3.body.position.y - stones.body.position.y < mango3.diametre + stones.diametre)
		{
		Matter.Body.setStatic(mango3.body,false);
	}

	if(stones.body.position.x- mango4.body.position.x <mango4.diametre + stones.diametre
		&& mango4.body.position.x - stones.body.position.x  < mango4.diametre + stones.diametre
		&&stones.body.position.y -mango4.body.position.y < mango4.diametre + stones.diametre
		&& mango4.body.position.y - stones.body.position.y < mango4.diametre + stones.diametre)
		{
		Matter.Body.setStatic(mango4.body,false);
	}
	
	if(stones.body.position.x- mango5.body.position.x <mango5.diametre + stones.diametre
		&& mango5.body.position.x - stones.body.position.x  < mango5.diametre + stones.diametre
		&&stones.body.position.y -mango5.body.position.y < mango5.diametre + stones.diametre
		&& mango5.body.position.y - stones.body.position.y < mango5.diametre + stones.diametre)
		{
		Matter.Body.setStatic(mango5.body,false);
	}

	if(stones.body.position.x- mango6.body.position.x <mango6.diametre + stones.diametre
		&& mango6.body.position.x - stones.body.position.x  < mango6.diametre + stones.diametre
		&&stones.body.position.y -mango6.body.position.y < mango6.diametre + stones.diametre
		&& mango6.body.position.y - stones.body.position.y < mango6.diametre + stones.diametre)
		{
		Matter.Body.setStatic(mango6.body,false);
	}

	if(stones.body.position.x- mango7.body.position.x <mango7.diametre + stones.diametre
		&& mango7.body.position.x - stones.body.position.x  < mango7.diametre + stones.diametre
		&&stones.body.position.y -mango7.body.position.y < mango7.diametre + stones.diametre
		&& mango7.body.position.y - stones.body.position.y < mango7.diametre + stones.diametre)
		{
		Matter.Body.setStatic(mango7.body,false);
	}

	if(stones.body.position.x- mango8.body.position.x <mango8.diametre + stones.diametre
		&& mango8.body.position.x - stones.body.position.x  < mango8.diametre + stones.diametre
		&&stones.body.position.y -mango8.body.position.y < mango8.diametre + stones.diametre
		&& mango8.body.position.y - stones.body.position.y < mango8.diametre + stones.diametre)
		{
		Matter.Body.setStatic(mango8.body,false);
	}

	if(stones.body.position.x- mango9.body.position.x <mango9.diametre + stones.diametre
		&& mango9.body.position.x - stones.body.position.x  < mango9.diametre + stones.diametre
		&&stones.body.position.y -mango9.body.position.y < mango9.diametre + stones.diametre
		&& mango9.body.position.y - stones.body.position.y < mango9.diametre + stones.diametre)
		{
		Matter.Body.setStatic(mango9.body,false);
	}

	if(stones.body.position.x- mango10.body.position.x <mango10.diametre + stones.diametre
		&& mango10.body.position.x - stones.body.position.x  < mango10.diametre + stones.diametre
		&&stones.body.position.y -mango10.body.position.y < mango10.diametre + stones.diametre
		&& mango10.body.position.y - stones.body.position.y < mango10.diametre + stones.diametre)
		{
		Matter.Body.setStatic(mango10.body,false);
	}
}
 
function keyPressed(){
	if(keyCode===32){
		Matter.Body.setPosition(stones.body,{x:100,y:465});
		attach.Launch(stones.body);
	}
}

