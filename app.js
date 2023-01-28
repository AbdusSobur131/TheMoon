var ball = document.createElement('div');
ball.style.width = '100px';
ball.style.height = '100px';
ball.style.backgroundImage='linear-gradient(65deg,white,black)';
ball.style.borderRadius = '50px';
ball.style.position = 'absolute';
ball.style.top = '0px';
ball.style.left = '0px';
document.body.appendChild(ball);

var x = 0;
var y = 0;
var xDirection = 1;
var yDirection = 1;

function moveBall() {
  x += xDirection;
  y += yDirection;
  ball.style.left = x + 'px';
  ball.style.top = y + 'px';
  if (x >= window.innerWidth - 100) {
    xDirection = -1;
  }
  if (y >= window.innerHeight - 100) {
    yDirection = -1;
  }
  if (x <= 0) {
    xDirection = 1;
  }
  if (y <= 0) {
    yDirection = 1;
  }
}

setInterval(moveBall, 40);

