const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
var hex1, ground1, chain1, block1, block2, block3, block4, block5, block6, block7, block8, block9, block10, slingShot

function preload(){
    polygon_img = loadImage("sprites/polygon.png");
}


function setup() {
	createCanvas(1500, 900);
	engine = Engine.create();
    world = engine.world;
    
   
    ground1 = new Ground(750,895,1500,10);

    stand1 = new Stand(450,425,250,10);

    hex1 = Bodies.circle(100,350,20);
    World.add(world,hex1);

    slingShot = new Slingshot(this.hex1,{x: 150, y: 350})

    block1 = new Block(350,422,30,40);

    block2 = new Block(380,422,30,40);
  
    block3 = new Block(410,422,30,40);
 
    block4 = new Block(440,422,30,40);

    block5 = new Block(470,422,30,40);

    block6 = new Block(500,422,30,40);

    block7 = new Block(530,422,30,40);

    block8 = new Block(555,422,30,40);
 
    
    


}

    function draw() {

        background(0);
        Engine.update(engine);
       
        slingShot.display();

        ground1.display();

        block1.display();
        block2.display();
        block3.display();
        block4.display();
        block5.display();
        block6.display();
        block7.display();
        block8.display();


        stand1.display();

        imageMode(CENTER);
        image(polygon_img,hex1.position.x,hex1.position.y,40,40);


    }

    /*function drawLine(constraint){
        HexagonBodyPosition = constraint.bodyA.position;
        GroundBodyPosition = constraint.bodyB.position;

        GroundBodyOffset = constraint.pointB;

        GroundBodyX = GroundBodyPosition.x+GroundBodyOffset.x;
        GroundBodyY = GroundBodyPosition.y+GroundBobyOffset.y;
        line(HexagonBodyPosition.x,HexagonBodyPosition.y,GroundBody.x,GroundBody.y);


    }*/

    function mouseDragged(){
        Matter.Body.setPosition(this.hex1, {x: mouseX , y: mouseY});
    }


    function mouseReleased(){
        slingShot.fly();
    }

    