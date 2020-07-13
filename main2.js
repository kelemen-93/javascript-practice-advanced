var canvas = document.getElementById('myCanvasTwo');
var context = canvas.getContext('2d');

var canvasWidth = canvas.width;
var canvasHeight = canvas.height;


var rowCount = 0;
var positionX = 0;
var positionY = 0;

function drawCheckeredPattern(row, col) {

  for (rowCount; rowCount < row; rowCount += 1) {
  
    var squareCount = 0;
  
    for (squareCount; squareCount < col; squareCount += 1) {
  
      context.beginPath();
      context.moveTo(positionX + squareCount * canvasWidth / 8, positionY + rowCount *  canvasHeight / 8);
      context.lineTo(positionX + canvasWidth / 8 + squareCount * canvasWidth / 8, positionY +   rowCount * canvasHeight / 8);
      context.lineTo(positionX + canvasWidth / 8 + squareCount * canvasWidth / 8, positionY +     canvasHeight / 8 + rowCount * canvasHeight / 8);
      context.lineTo(positionX + squareCount * canvasWidth / 8, positionY + canvasHeight / 8 +  rowCount * canvasHeight / 8);
      context.closePath();

      context.strokeStyle = 'black';
      context.stroke();
    
      if (squareCount % 2 !== rowCount % 2) {
        context.fillStyle = 'black';
      } else {
        context.fillStyle = 'white';
      }
      context.fill();
  
    }
  
  }
  
}

drawCheckeredPattern(8, 8);
