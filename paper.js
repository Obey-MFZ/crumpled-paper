class Paper {
    constructor(x, y, radius ) {
        this.body = Bodies.circle(x, y, radius,{restitution:0.3,
        isStatic:false,
        friction:0,
        density:1.2
        } );
        this.radius = radius;
        this.image= loadImage('paper.png')
      
        //var options = {
        //  'restitution':0.8,
          //'friction':1.0,
          //'density':1.0
      
      
      World.add(world, this.body);
    }
    display(){
      
      push();
      translate(this.body.position.x,this.body.position.y);
      angleMode(RADIANS);
      rotate(this.body.angle)
      stroke("green");
      strokeWeight(10);
      fill('red')
   imageMode(RADIUS);
image(this.image,0, 0, this.radius, this.radius);
      pop();
    }
  }
  