class Stand {
    constructor(x,y,width,height){
  
      var options = {
          isStatic: true
      }
      this.width = width;
      this.height = height;
      this.body = Bodies.rectangle(x,y,width,height,options);
      World.add(world,this.body);
    }
     
    display(){
        var angle = this.body.angle;
       push();
        fill("white");
        stroke("white");
        rectMode(CENTER);
        rotate(angle);
        translate(this.body.position.x,this.body.position.y);
        rect(0,0,this.width,this.height);
      pop();
    }
}
