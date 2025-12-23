const square = document.getElementById("square");
const scoreText = document.getElementById("score");
const timeText = document.getElementById("time");

let score = 0;
let time = 30; // 30 segundos

// Función para mover el cuadrado
function moveSquare() {
  const x = Math.random() * 350;
  const y = Math.random() * 350;

  square.style.left = x + "px";
  square.style.top = y + "px";
}

// Evento de click
square.addEventListener("click", () => {
  if (time > 0) { // Solo sumar puntos si el tiempo > 0
    score++;
    scoreText.textContent = score;
    moveSquare();
  }
});

// Temporizador
const timer = setInterval(() => {
  time--;
  timeText.textContent = time;

  if (time === 0) {
    clearInterval(timer); // Detener el tiempo
    alert("¡Juego terminado! Puntaje: " + score);
  }
}, 1000);

// Mueve el cuadrado la primera vez
moveSquare();

