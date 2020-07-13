var canvas = document.getElementById('myCanvasThree');
var context = canvas.getContext('2d');

var triangleBase = 100;
var triangleHeight = 86.6;

var rowCount = 0;
var drawCount = 1;


function drawTriangle(positionX, positionY) {

  for (rowCount; rowCount < 3; rowCount += 1) {
  
    var triangleCount = 0;
  
    for (triangleCount; triangleCount < drawCount; triangleCount += 1) {
    
      context.beginPath();
      context.moveTo(positionX - rowCount * triangleBase / 2 + triangleCount * triangleBase, positionY + rowCount * triangleHeight);
      context.lineTo(positionX - triangleBase / 2 - rowCount * triangleBase / 2 + triangleCount * triangleBase, positionY + triangleHeight + rowCount * triangleHeight);
      context.lineTo(positionX + triangleBase / 2 - rowCount * triangleBase / 2 + triangleCount * triangleBase, positionY + triangleHeight + rowCount * triangleHeight);
      context.closePath();
    
      if (drawCount === 1) {
        context.strokeStyle = 'rgba(227, 98, 102)';
      } else if (drawCount === 2) {
        context.strokeStyle = 'rgba(38, 172, 73)';
      } else if (drawCount === 3) {
        context.strokeStyle = 'rgba(34, 128, 128)';
      } else {
        console.log('Hiba!');
      }
      context.stroke();
    
      if (drawCount === 1) {
        context.fillStyle = 'rgba(227, 98, 102)';
      } else if (drawCount === 2) {
        context.fillStyle = 'rgba(38, 172, 73)';
      } else if (drawCount === 3) {
        context.fillStyle = 'rgba(34, 128, 128)';
      } else {
        console.log('Hiba!');
      }
      context.fill();
    }
  
    drawCount += 1;
  
  }

}

drawTriangle(225, 33);