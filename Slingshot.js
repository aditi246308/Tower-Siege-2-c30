class Slingshot {
  constructor(bodyA,pointB){

   var options = {
       bodyA: bodyA,
       pointB: pointB,
       stiffness: 0.05,
       length: 1
   }

   this.pointB = pointB;
   this.slingShot = Constraint.create(options);
   World.add(world,this.slingShot);
  

  }

  fly(){
   this.slingShot.bodyA = null;
  }

  display(){
    //this.x = x;
    //this.y = y;
  if(this.slingShot.bodyA){
    var pointA = this.slingShot.bodyA.position;
    var pointB = this.pointB;
    strokeWeight(3.5);
    stroke("brown");
    line(pointA.x,pointA.y,pointB.x,pointB.y);

  
  }
    
  


  
}

}