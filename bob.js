class Bob{
    constructor(x,y,radius){
        var options ={
            'density':1.0,
            'friction':1.0,
            'restitution':0.2,
            'isStatic': false

        }
        this.x =x;
        this.y=y;
        this.radius=radius;
        this.body = Bodies.circle(this.x,this.y,(this.radius)/2, options);
        World.add(world, this.body);
    }

    display(){
    var pos = this.body.position;
    push();
    translate(pos.x, pos.y);
    rectMode(CENTER);
    fill(255,0,255);
    ellipse(0,0, this.radius,this.radius);
    pop();
  }
}