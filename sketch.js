let angle = 0; // Ângulo para o movimento das asas
let x = 0; // Posição inicial no eixo X
let y = 0; // Posição inicial no eixo Y

function setup() {
  createCanvas(800, 600);
  noStroke();
}

function draw() {
  background(135, 206, 250); // Fundo azul do céu

  // Movimento da borboleta
  x = width / 2 + 100 * cos(frameCount * 0.02);
  y = height / 2 + 50 * sin(frameCount * 0.04);

  // Desenhar a borboleta
  drawButterfly(x, y);
}

function drawButterfly(cx, cy) {
  let wingSize = 50;
  angle = sin(frameCount * 0.2) * 30; // Ângulo das asas oscilando

  // Asas superiores
  fill(255, 182, 193); // Rosa claro
  push();
  translate(cx, cy);
  rotate(radians(-angle));
  ellipse(-wingSize, -wingSize, 80, 120); // Asa esquerda
  pop();

  push();
  translate(cx, cy);
  rotate(radians(angle));
  ellipse(wingSize, -wingSize, 80, 120); // Asa direita
  pop();

  // Asas inferiores
  fill(255, 105, 180); // Rosa mais escuro
  push();
  translate(cx, cy);
  rotate(radians(angle));
  ellipse(-wingSize, wingSize, 60, 90); // Asa esquerda
  pop();

  push();
  translate(cx, cy);
  rotate(radians(-angle));
  ellipse(wingSize, wingSize, 60, 90); // Asa direita
  pop();

  // Corpo
  fill(50);
  ellipse(cx, cy, 20, 60); // Corpo central

  // Antenas
  stroke(50);
  strokeWeight(2);
  line(cx, cy - 30, cx - 10, cy - 50); // Antena esquerda
  line(cx, cy - 30, cx + 10, cy - 50); // Antena direita
}