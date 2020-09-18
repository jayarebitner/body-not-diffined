const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.body;

var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight=300
var ground;
var engine, world;

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  for (var k = 0; k <=width; k = k + 80) {
    divisions.push(new Ground(k, divisionHeight/2,10,divisionHeight));
  }
ground = new Ground(400,420,900,25);

for (var j = 40; j <=width; j=j+50){
  plinkos.push(new statballs(j,75));
}

for (var j = 15; j <=width-10; j=j+50){
  plinkos.push(new statballs(j,175));
}

for (var j = 40; j <=width; j=j+50){
  plinkos.push(new statballs(j,75));
}

for (var j = 15; j <=width-10; j=j+50){
  plinkos.push(new statballs(j,175));
}

for (var j = 0; j < particles.length; j++) {
  particles[j].display();
}

for (var k = 0; k < divisions.length; k++) {
  disvisions[k].display();
}

  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);
  Engine.update(engine);
  
  particles.display();
  plinkos.display();
  divisions.display();
  ground.display();


  
  








  drawSprites();
}