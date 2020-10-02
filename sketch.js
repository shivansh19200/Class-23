const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var world,ground;
var engine;
var box1, box2;

function setup(){
  createCanvas(600,600);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(300,600);

  box1 = new Box(200,300,50,50);
  box2 = new Box(270,200,50,50);

  log = new Log(230,150);
}

function draw(){
  Engine.update(engine);
  background("blue");

  ground.display();

  box1.display();
  box2.display();
  log.display();

}