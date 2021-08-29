class Cannon{
        constructor(x, y, width, height, angle) {
          this.x = x;
          this.y = y;
          this.width = width;
          this.height = height;
          this.angle = angle;
          this.image = loadImage("CANON.png");
          this.baseImage = loadImage("cannon_base.png");
          this.cannonBall = null;
          this.cannonBalls = [];
        }
        display() {
      
          
          fill("#676e6a");
          push();
          translate(this.x, this.y);
          rotate(this.angle);
          rect(-10, -20, this.width, this.height);
          pop();
          arc(this.x - 30, this.y + 90, 140, 200, PI, TWO_PI);
          noFill();
          if (keyIsDown(RIGHT_ARROW) && this.angle < 0.35) {
            this.angle += 0.02;
          }
          if (keyIsDown(LEFT_ARROW) && this.angle > -0.25) {
            this.angle -= 0.02;
          }
          for (var i = 0; i < this.cannonBalls.length; i++){
            this.cannonBalls[i].display();
          }
          noFill();
        }

        loadCannon(){
            this.cannonBall = new Cannonball(this.x, this.y, 35);
            this.cannonBalls.push(this.cannonBall);
            World.add(world, this.cannonBall);
        }
      }