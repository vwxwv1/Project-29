const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground, ball, ballIMG;
var block8, block9, block10, block11, block12, block13, block14, block15, block16;

function preload() {
  ballIMG = loadImage("ball.png");
}

function setup() {
  createCanvas(1600,800);

  engine = Engine.create();
	world = engine.world;

  rectMode(CENTER);

  ball = Bodies.circle(50,200,30);
  World.add(world, ball);
  
  slingShot = new SlingShot(this.ball,{x:100,y:200});

  ground = new Ground(775, 500, 300, 10);

  block8 = new Box(330, 235, 30, 40);
  block9 = new Box(360, 235, 30, 40);
  block10 = new Box(390, 235, 30, 40);
  block11 = new Box(420, 235, 30, 40);
  block12 = new Box(450, 235, 30, 40);

  block13 = new Box(360, 195, 30, 40);
  block14 = new Box(390, 195, 30, 40);
  block15 = new Box(420, 195, 30, 40);
  
  block16 = new Box(390,155,30,40);
}

function draw() {
  background(56, 44, 44);  

  ground.display();

  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();

  image(ballIMG, ball.position.x, ball.position.y, 40, 40);
}

function mouseDragged(){
  Matter.Body.setPosition(this.ball, {x: mouseX , y: mouseY});
}

function mouseReleased(){
  slingShot.fly();
}