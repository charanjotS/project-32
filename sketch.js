const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var stand,box1,box2,box3,box4,box8,box9,box10,box11,box12,box13,box14,box15,box16;
var box5,box12,box13,box14,box15,box16;
var box17,box18,box19,box20,box21,box22;
var box24,box25,slingshot,stand2;
var polygon,polygonimg,stand1;
var bg
var backgroundImg
function preload(){
	polygonimg=loadImage("polygon.png");
  getBackgroundImg();
}

function setup() {
	createCanvas(1000,600);

	engine = Engine.create();
	world = engine.world;
	
  //Create the Bodies Here.
stand1=new Stand(410,550,250,20);

//level 1
box1=new Box(400,525,30,40);
box2=new Box(370,525,30,40);
box3=new Box(340,525,30,40);
box4=new Box(310,525,30,40);
box5=new Box(430,525,30,40);
box6=new Box(460,525,30,40);
box7=new Box(490,525,30,40);

box8=new Box(340,485,30,40)
box9=new Box(370,485,30,40)
box10=new Box(400,485,30,40)
box11=new Box(430,485,30,40)
box12=new Box(460,485,30,40)
box13=new Box(370,435,30,40)
box14=new Box(400,435,30,40)
box15=new Box(430,435,30,40)
box16=new Box(400,395,30,40)
ground=new Ground(100,337,2000,20);

polygon = Bodies.circle(50,200,20);
World.add(world,polygon);

slingshot= new Slingshot(polygon,{x:100,y:450});

Engine.run(engine);

  
}

function draw() {
  rectMode(CENTER);
  if(backgroundImg)
        background(backgroundImg);
    
  
  drawSprites();
 
  stand1.display();
  
  fill("turquoise")
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  fill(253,138,138)
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  fill(19,164,139)
  box13.display();
  box14.display();
  box15.display();
  fill(25,38,36)
  box16.display();
  
  slingshot.display();
  ground.display();

fill("gold");
  imageMode(CENTER)
  image(polygonimg ,polygon.position.x,polygon.position.y,40,40);

}
function mouseDragged(){
	Matter.Body.setPosition(polygon, {x: mouseX , y: mouseY});
}

function mouseReleased(){
    slingshot.fly();
}

async function getBackgroundImg(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();

  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);console.log(datetime)
  
  if(hour>=19 && hour<=6){
      bg = "bg1.png";
  }
  else{
      bg = "bg2.jpg";
  }

  backgroundImg = loadImage(bg);
 // console.log(backgroundImg);
}



