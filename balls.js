class partac {
    constructor(x,y,width,height) {
      var options = {
          restitution:0.4
      }

      this.r=r;

      this.body = Bodies.circle(x,y,this.r,options);
      this.color(random(0,255),random(0,255),random(0,255));
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;

      push();
      translate(pos.x, pos.y);
      rotate(angle);
      noStroke();
      fill(this.color)
      ellipseMode(CENTER);
      ellipse(pos.x, pos.y, this.width, this.height);
      pop();
    }
  };
