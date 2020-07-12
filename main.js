var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');

var hexagonWidth = 113;
var hexagonHeight = 98;
var counter = 0;

function drawHexagon(positionX, positionY) {
  
  context.beginPath();
  context.moveTo(positionX, positionY);
  context.lineTo(positionX + hexagonWidth / 4, positionY - hexagonHeight / 2);
  context.lineTo(positionX + 3 * (hexagonWidth / 4), positionY - hexagonHeight / 2);
  context.lineTo(positionX + hexagonWidth, positionY);
  context.lineTo(positionX + hexagonWidth - hexagonWidth / 4, positionY + hexagonHeight / 2);
  context.lineTo(positionX + hexagonWidth / 4, positionY + hexagonHeight / 2);
  context.closePath();
  
  context.strokeStyle = 'orange';
  context.stroke();
  
  counter += 1;
  
  if (counter === 7) {
    context.fillStyle = 'orange';
    context.fill();
  } else {
    console.log('');
  }
  
}

drawHexagon(76, 120);
drawHexagon(76, 230);
drawHexagon(168.5, 65);
drawHexagon(168.5, 175);
drawHexagon(168.5, 285);
drawHexagon(261, 120);
drawHexagon(261, 230);