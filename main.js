var canvas = document.getElementById("lienzo");
var ctx = canvas.getContext("2d");

// Función para dibujar un rectángulo con bordes redondeados
function dibujarRectanguloRedondeado(x, y, w, h, r) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + w - r, y);
  ctx.quadraticCurveTo(x + w, y, x + w, y + r);
  ctx.lineTo(x + w, y + h - r);
  ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
  ctx.lineTo(x + r, y + h);
  ctx.quadraticCurveTo(x, y + h, x, y + h - r);
  ctx.lineTo(x, y + r);
  ctx.quadraticCurveTo(x, y, x + r, y);
  ctx.closePath();
}

// Limpia el canvas
ctx.clearRect(0, 0, canvas.width, canvas.height);

// Configura sombra del recuadro
ctx.shadowColor = "rgba(0, 0, 0, 0.3)";
ctx.shadowBlur = 10;
ctx.shadowOffsetX = 4;
ctx.shadowOffsetY = 4;

// Color de relleno (café claro)
ctx.fillStyle = "#d2b48c"; // tan / café claro

// Color de la línea (verde)
ctx.strokeStyle = "green";
ctx.lineWidth = 4;

// Dibuja el recuadro con bordes redondeados
dibujarRectanguloRedondeado(20, 20, canvas.width - 40, canvas.height - 40, 20);

// Rellena y dibuja el borde
ctx.fill();
ctx.stroke();
