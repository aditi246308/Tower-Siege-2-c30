class Block {
    constructor(x,y,width,height){
  
     /* var options = {
          restitution: 0.3,
          density: 0.5
          //friction: 2
      }*/
      
      this.width = width;
      this.height = height;
      this.body = Bodies.rectangle(x,y,width,height);
      World.add(world,this.body);
      this.Visibility = 255;
    }
     
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        fill("white");
        stroke("pink");
        strokeWeight(3);
        rotate(angle);
        translate(pos.x,pos.y);
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();
       
        if(this.body.speed < 3){
          this.Visibility = 255;
        }

        else{
          World.remove(world,this.body);
          push();
          this.Visibility = this.Visibility-50;
          tint(255,this.Visibility);
          pop();
        }

    }
        
      
     
  
  
  }