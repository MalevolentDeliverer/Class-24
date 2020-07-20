const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,bird,log1,pig1;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(800,550,100,100);
    box2 = new Box(1030,550,100,100);
    box3 = new Box(800,480,100,100);
    box4 = new Box(1030,480,100,100);
    box5 = new Box(912,410,100,100);
    ground = new Ground(600,height,1200,20);
    bird = new Bird(100,100);
    log1 = new Log(912,500,360,PI/2);
    log2 = new Log(912,420,360,PI/2);
    log3 = new Log(960,300,200,-PI/7);
    log4 = new Log(912,300,200,PI/7);
    pig1 = new Pig(912,550);
    pig2 = new Pig(912,430)
    


}

function draw(){
    background(0);
    Engine.update(engine);
    text(mouseX+","+mouseY,200,22);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    ground.display();
    bird.display();
    log1.display();
    log2.display();
    log3.display();
    log4.display();
    pig1.display();
    pig2.display();
}