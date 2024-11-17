//Juan Lehue -- 94773/6
//Alex Palomeque -- 93077/3
//Continuidad de los parques
//https://youtu.be/1WaDA1J2IUU
//https://youtu.be/wadN_gjW674

let game;
let cuchillo;
let personaje = [];
let fondos = [];
let suelo;
let sonidoDanio;

function preload() {
  cuchillo = loadImage("data/Cuchillo.png");
  suelo = loadImage("data/suelo.png");
  menu = loadImage("data/menu.png");
  sonidoDanio = loadSound("data/efectoDanio.mp3");
  for (let i=0; i<4; i++) {
    fondos[i] = loadImage("data/fondo"+i+".jpeg")
  }
  for (let i=0; i<3; i++) {
    personaje[i] = loadImage("data/personaje"+i+".png");
  }
}

function setup() {
  createCanvas(640, 480);
  for (let i=0; i<4; i++) {
    fondos[i].resize(640, 640);
  }
  game = new Main(7, cuchillo, personaje, fondos, suelo, menu, sonidoDanio);
}


function draw() {
  background(200);
  game.jugar();
}


function mousePressed() {
  game.pulsarBoton();
}
