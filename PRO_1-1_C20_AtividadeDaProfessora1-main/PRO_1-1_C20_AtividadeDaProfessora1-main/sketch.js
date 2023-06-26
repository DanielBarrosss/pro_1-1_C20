const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies
const Body=Matter.Body

let engine;
let world;
var ball;
var ground;
var wedge;
var angle=60;
var btn
var ground2
var angle=60
var c1
var c2
var c3
var c4
var con

function setup() {
  createCanvas(400,400);
  engine=Engine.create()
  world=engine.world;
  
  var ballOpitions ={
restitution:0.5,
frictionAir:0.1
  }

  btn=createImg("up.png")
  btn.position(350,50)
  btn.size(50,50)
  btn.mouseClicked(vforce)
   ball=Bodies.circle(200,200,20,ballOpitions)
   World.add(world,ball)

con=Matter.Constraint.create({
  pointA:{x:200,y:100},
bodyB:ball,
pointB:{x:0,y:0},
length:100,
stiffness:0.1
})
World.add(world,con)
   var opitions={isStatic:true}
   ground=Bodies.rectangle(200,380,400,20,opitions)
   World.add(world,ground)
   ground2=Bodies.rectangle(100,300,100,20,opitions)
World.add(world,ground2)

  rectMode(CENTER);
  ellipseMode(RADIUS);
  c1=new Ground(50,370,50,30)
  c2=new Ground(150,370,50,30)
  c3=new Ground(250,370,50,30)
  c4=new Ground(350,370,50,30)
}


function draw() {
background("black")
Engine.update(engine)
 
ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,20)

  rect(ground.position.x,ground.position.y,400,20)

push()
Matter.Body.rotate(ground2,angle)
translate(ground2.position.x,ground2.position.y)
rotate(angle)
rect(0,0,100,20)
pop()
fill("green")
angle+=0.1
c1.display()
c2.display()
c3.display()
c4.display()

push()
strokeWeight(2)
stroke("green")
line(con.pointA.x,con.pointA.y,ball.position.x,ball.position.y)
pop()
}

function vforce(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0.25,y:0})
  
}