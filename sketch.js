const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var cannon;
var ground;
var canH, canW;
var hole1, hole2, hole3;
var score = 0;
var cannonBalls = 20;



function setup() {
  frameRate(80);
  var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  if(isMobile){
    canW = displayWidth;
    canH = displayHeight;
  }
  else{
    canW = windowWidth;
    canH = windowHeight;
  }
  createCanvas(canW, canH);

  engine = Engine.create();
  world = engine.world;
  cannon = new Cannon(200, height - 500, 100, 50, -(PI)/4)
  var ground_options = {
    isStatic: true
  };
  ground = Bodies.rectangle(canW/2, canH - 5, canW, 810, ground_options);
  World.add(world, ground);

  hole1 = Bodies.rectangle(700, height - 405, 100, 20, ground_options);
  hole2 = Bodies.rectangle(1100, height - 405, 50, 20, ground_options);
  hole3 = Bodies.rectangle(900, height - 405, 150, 20, ground_options);
  World.add(world, hole1);
  World.add(world, hole2);
  World.add(world, hole3);

}


function draw() 
{
  background(35, 198, 255);
  Engine.update(engine);
  cannon.display();

  if (cannonBalls <= 0){
    gameOver();
  }

  push();
  rectMode(CENTER);
  fill(0,190,0);
  rect(ground.position.x, ground.position.y, canW, 810)
  pop();

  push();
  rectMode(CENTER);
  fill("black");
  rect(hole1.position.x, hole1.position.y, 100, 20);
  rect(hole2.position.x, hole2.position.y, 50, 20);
  rect(hole3.position.x, hole3.position.y, 150, 20);
  pop();
  fill("black");
  textSize(30);
  textAlign(CENTER);
  textFont("Trebuchet MS");
  text("Score: " + score, canW - 200, 70);
  text("Cannonballs Left: " + cannonBalls, 200, 70) 
}

function keyPressed(){
  if(keyCode == DOWN_ARROW && cannonBalls > 0){
    cannonBalls--;
    cannon.loadCannon();
  }
}

function keyReleased(){
  if (keyCode == DOWN_ARROW){
    cannon.cannonBall.shoot();
  }
}
function gameOver() {
  swal(
    {
      title: `Game Over!!!`,
      text: "You ran out of cannonballs!! Thanks for playing!",
      imageUrl:
        "https://raw.githubusercontent.com/whitehatjr/PiratesInvasionSatgae-5.5/main/assets/cannonball.png",
      imageSize: "150x150",
      confirmButtonText: "Play Again!"
    },
    function(isConfirm) {
      if (isConfirm) {
        location.reload();
      }
    }
  );
}




