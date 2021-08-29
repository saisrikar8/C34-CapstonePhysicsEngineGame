class Cannonball{
    constructor(x, y, radius){
        var options = {
            isStatic: true
        };
        this.body = Bodies.circle(x, y, radius, options);
        this.radius = radius;
        this.image = loadImage("cannonball.png");
        this.trajectory = [];
        World.add(world, this.body);

    }
    display(){
        if (this.body != null)
        {
        var pos = this.body.position;
        var t = [pos.x, pos.y];
        this.trajectory.push(t);
        for (var i = 0; i < this.trajectory.length; i++){
            var ct = this.trajectory[i];
            image(this.image, ct[0], ct[1], 5, 5);
        }   
        image(this.image, pos.x, pos.y, this.radius, this.radius);
        var collide = Matter.SAT.collides(this.body, ground);
            var collide2 = Matter.SAT.collides(this.body, hole1);
            var collide3 = Matter.SAT.collides(this.body, hole2);
            var collide4 = Matter.SAT.collides(this.body, hole3);
            if (collide.collided){
              World.remove(world, this.body);
              this.body = null;
            }
            else if (collide2.collided){
              World.remove(world, this.body);
              this.body = null;
              score += 50;
            }
            else if (collide3.collided){
              World.remove(world, this.body);
              this.body = null;
              score += 100;
            }
            else if(collide4.collided){
              World.remove(world, this.body);
              this.body = null;
              score += 25;
        }
    }
    }
    shoot(){
        var velocity = p5.Vector.fromAngle(cannon.angle);
        velocity.mult(20);
        Matter.Body.setStatic(this.body, false);
        Matter.Body.setVelocity(this.body, { x: velocity.x, y: velocity.y });
    }
}