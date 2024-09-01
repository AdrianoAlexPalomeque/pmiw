//Alumno Alex Palomeque(93077/3)
//Video https://www.youtube.com/watch?v=SZpxqGMDwrs
//Tp 1 Programación para medios interactivos orientada a las tecnologías web
let foto;
let distancia = 4;
let trialCant = 40;
let filas = 30;
let tam = 8;
let r = 255, g = 255, b = 255;
let r2 = 200, g2 = 200, b2 = 200;

function preload() {
  foto = loadImage('data/image.jpg');
}

function setup() {
  createCanvas(800, 400);
}

function draw() {
  background(0);
  image(foto, 0, 0, 400, 400);
  for (let j = 0; j < filas; j++) {
    let volD = (j % 2 === 0);
    for (let i = 0; i < trialCant; i++) {
      let opacidad = map(j, 0, filas / 3, 50, 255);
      let angulo = 360 / trialCant * i;
      let scala = j * 0.1;
      trial(tam + distancia * j, tam / 2 + distancia * j, tam * 2 + distancia * j, tam * 2 + distancia * j, tam * 3 + distancia * j, tam / 2 + distancia * j, angulo, scala, volD, opacidad);
    }
  }
  image(foto, 0, 0, 400, 400);
}

function trial(x1, y1, x2, y2, x3, y3, rotacion, scala, vol, opa) {
  push();
  translate(width - 200, height / 2);
  rotate(radians(rotacion));
  scale(scala);
  noStroke();
  fill(r, g, b, opa);
  if (vol) {
    triangle(x1, y1, x2, y2, x3, y3);
    fill(r2, g2, b2, opa);
    triangle(x2, y1, x2, y2, x3, y3);
  } else {
    triangle(x1, -y1, x2, -y2, x3, -y3);
    fill(r2, g2, b2, opa);
    triangle(x2, -y1, x2, -y2, x3, -y3);
  }
  pop();
}

function mouseClicked() {
  if (mouseX >= 0 && mouseX <= 400 && mouseY >= 0 && mouseY <= 400) {
    reiniciarvar();
    return;
  }

  if (mouseButton === LEFT) {
    if (tam <= 16 * 3 + 1) {
      tam += 3;
      distancia++;
      colores();
    }
  }
}
function keyPressed() {
  if (key === 'a'|| key=== 'A') {
    if (tam >= 1 && distancia >= 3) {
      tam -= 3;
      distancia--;
      colores();
    }
  }
}

function reiniciarvar() {
  tam = 8;
  distancia = 4;
  r = 255;
  g = 255;
  b = 255;
  r2 = 200;
  g2 = 200;
  b2 = 200;
}

function colores() {
  r = random(255);
  g = random(255);
  b = random(255);
  r2 = random(200);
  g2 = random(200);
  b2 = random(200);
}
