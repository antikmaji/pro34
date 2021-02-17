const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Constraint=Matter.Constraint;

function preload() {
//preload the images here

bg=loadImage("GamingBackground.png");

}

function setup() {
  createCanvas(3200, 1600);

  engine=Engine.create();
  world=engine.world;
  // create sprites here

box1=new Box(600,100,70,70);
box2=new Box(600,100,70,70);
box3=new Box(600,100,70,70);
box4=new Box(600,100,70,70);
box5=new Box(600,100,70,70);
box6=new Box(670,100,70,70);
box7=new Box(670,100,70,70);
box8=new Box(670,100,70,70);
box9=new Box(670,100,70,70);
box10=new Box(670,100,70,70);
box11=new Box(740,100,70,70);
box12=new Box(740,100,70,70);
box13=new Box(740,100,70,70);
box14=new Box(740,100,70,70);
box15=new Box(740,100,70,70);
box16=new Box(810,100,70,70);
box17=new Box(810,100,70,70);
box18=new Box(810,100,70,70);
box19=new Box(810,100,70,70);
box20=new Box(810,100,70,70);
superhero=new Superhero(400,350,140);
monster=new Monster(1000,450,100);
rope1=new Rope(superhero.body,{x:400,y:80})
ground=new Ground(600,600,1000,20);

}

function draw() {

  background(bg);

  Engine.update(engine);
 
  box1.display();
  box2.display();
  box3.display();
  box4.display();  
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();  
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display(); 
  superhero.display();
  monster.display();
  ground.display();
  
}

function mouseDragged(){
      Matter.Body.setPosition(superhero.body, {x: mouseX , y: mouseY});
}


