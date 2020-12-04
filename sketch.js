var helicopterIMG, helicopterSprite, packageSprite,packageIMG,box1,box2,box3;
var packageBody,ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

	box1=createSprite(width/2, 640, 200, 20);
	box1.shapeColor = "red";
	
	box2=createSprite(300, 600, 20, 100);	
	box2.shapeColor = "red";
	box3=createSprite(500, 600, 20, 100);
	box3.shapeColor = "red";
	box1.setStatic = false,
	box2.setStatic = false,
	box3.setStatic = false

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG);
	packageSprite.scale=0.2;

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);

	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	Engine.run(engine);  
}

function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x;
  packageSprite.y= packageBody.position.y;
  rect(ground.position.x,ground.position.y,width,10);
  drawSprites();
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	packageBody.y = packageSprite.y - 1;
	packageSprite.y = packageSprite.y - 1;
	Matter.Body.setStatic(packageBody, false);
  }
}