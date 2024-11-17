//Juan Lehue -- 94773/6
//Alex Palomeque -- 93077/3
//Continuidad de los parques
//https://youtu.be/2BHzUopBWEE

let textos = [];
let imagenes = [];
let bloque, mitadAn, mitadAl;
let ambiente, click;
let titulo;

function preload() {
  textos = loadStrings('data/textosNarrativos.txt');
  titulo= loadFont('data/ftitulo.ttf');
  ambiente = loadSound('data/ambiente.mp3');
  click = loadSound('data/click.mp3');
  for (let i=0; i<17; i++) {
    imagenes[i] = loadImage("data/bloque"+i+".jpeg");
  }
}

function setup() {
  createCanvas(640, 480);
  bloque = "inicio";
  for (let i=0; i<17; i++) {
    imagenes[i].resize(640, 640);
  }
  ambiente.amp(0.2);
  click.amp(0.4);
}


function draw() {
  background(225);
  if (bloque === "inicio") {
    cargarInicio(imagenes, textos, 0, width/2, height/2, 200, 200, CENTER, titulo, 100, 30);
  } else if (bloque === "intro") {
    cargarBloque(imagenes, textos, 1, 50, 330, 500, 130, 16, LEFT, 140, 30, true, "Levantarse", "Seguir leyendo");
  } else if (bloque === "ignorar") {
    cargarBloque(imagenes, textos, 2, 50, 350, 500, 110, 16, LEFT, 140, 30, false, "Seguir leyendo");
  } else if (bloque === "vertigo") {
    cargarBloque(imagenes, textos, 3, 50, 330, 500, 130, 16, LEFT, 140, 30, false, "Continuar");
  } else if (bloque === "final1") {
    cargarBloque(imagenes, textos, 4, 50, 350, 500, 110, 16, LEFT, 140, 30, false, "Volver al inicio");
  } else if (bloque === "levantarse") {
    cargarBloque(imagenes, textos, 5, 50, 350, 500, 110, 16, LEFT, 140, 30, true, "Investigar", "Volver");
  } else if (bloque === "volver") {
    cargarBloque(imagenes, textos, 6, 50, 350, 500, 110, 16, LEFT, 140, 30, false, "Seguir leyendo");
  } else if (bloque === "salir") {
    cargarBloque(imagenes, textos, 7, 50, 350, 500, 110, 16, LEFT, 140, 30, false, "Continuar");
  } else if (bloque === "continuar") {
    cargarBloque(imagenes, textos, 8, 50, 350, 500, 110, 16, LEFT, 140, 30, true, "Abrir la puerta", "Volver");
  } else if (bloque === "empujar") {
    cargarBloque(imagenes, textos, 9, 50, 350, 500, 110, 16, LEFT, 140, 30, false, "Enfrentarlo");
  } else if (bloque === "enfrentamiento") {
    cargarBloque(imagenes, textos, 10, 50, 350, 500, 110, 16, LEFT, 140, 30, false, "Continuar");
  } else if (bloque === "final2") {
    cargarBloque(imagenes, textos, 11, 50, 370, 500, 90, 16, LEFT, 140, 30, false, "Volver al inicio");
  } else if (bloque === "miedo") {
    cargarBloque(imagenes, textos, 12, 50, 350, 500, 110, 16, LEFT, 140, 30, true, "Cerrar el libro", "Seguir leyendo");
  } else if (bloque === "atrapar") {
    cargarBloque(imagenes, textos, 13, 50, 350, 500, 110, 16, LEFT, 140, 30, false, "Continuar");
  } else if (bloque === "cerrar") {
    cargarBloque(imagenes, textos, 14, 50, 350, 500, 110, 16, LEFT, 140, 30, false, "Continuar");
  } else if (bloque === "final3") {
    cargarBloque(imagenes, textos, 15, 50, 350, 500, 110, 16, LEFT, 140, 30, false, "Volver al inicio");
  } else if (bloque === "creditos") {
    cargarCreditos(imagenes, textos, 16, width/2, height/2, 200, 200, CENTER, titulo, 140, 30);
  }
}

function mousePressed() {
  if (bloque === "inicio") {
    if (detectarMouse(270, 180, 100, 30)) {
      bloque="intro";
      if (!ambiente.isPlaying()) {
        ambiente.loop(true);
      }
      click.play();
    }
    if (detectarMouse(270, 270, 100, 30)) { 
      bloque="creditos";
      click.play();
    }
  } else if (bloque === "intro") {
    if (detectarMouse(270, 420, 140, 30)) {
      bloque="ignorar";
      click.play();
    }
    if (detectarMouse(400, 420, 140, 30)) {
      bloque="levantarse";
      click.play();
    }
  } else if (bloque === "ignorar") {
    if (detectarMouse(400, 420, 140, 30)) {
      bloque="vertigo";
      click.play();
    }
  } else if (bloque === "vertigo") {
    if (detectarMouse(400, 420, 140, 30)) {
      bloque="final1";
      click.play();
    }
  } else if (bloque === "final1") {
    if (detectarMouse(400, 420, 140, 30)) {
      bloque="inicio";
      ambiente.loop(false);
      ambiente.stop();
      click.play();
    }
  } else if (bloque === "levantarse") {
    if (detectarMouse(270, 420, 140, 30)) {
      bloque="volver";
      click.play();
    }
    if (detectarMouse(400, 420, 140, 30)) {
      bloque="salir";
      click.play();
    }
  } else if (bloque === "volver") {
    if (detectarMouse(400, 420, 140, 30)) {
      bloque="vertigo";
      click.play();
    }
  } else if (bloque === "salir") {
    if (detectarMouse(400, 420, 140, 30)) {
      bloque="continuar";
      click.play();
    }
  } else if (bloque === "continuar") {
    if (detectarMouse(400, 420, 140, 30)) {
      bloque="empujar";
      click.play();
    }
    if (detectarMouse(270, 420, 140, 30)) {
      bloque="miedo";
      click.play();
    }
  } else if (bloque === "empujar") {
    if (detectarMouse(400, 420, 140, 30)) {
      bloque="enfrentamiento";
      click.play();
    }
  } else if (bloque === "enfrentamiento") {
    if (detectarMouse(400, 420, 140, 30)) {
      bloque="final2";
      click.play();
    }
  } else if (bloque === "final2") {
    if (detectarMouse(400, 420, 140, 30)) {
      bloque="inicio";
      ambiente.loop(false);
      ambiente.stop();
      click.play();
    }
  } else if (bloque === "miedo") {
    if (detectarMouse(260, 420, 140, 30)) {
      bloque="atrapar";
      click.play();
    }
    if (detectarMouse(400, 420, 140, 30)) {
      bloque="cerrar";
      click.play();
    }
  } else if (bloque === "atrapar") {
    if (detectarMouse(400, 420, 140, 30)) {
      bloque="final1";
      click.play();
    }
  } else if (bloque === "cerrar") {
    if (detectarMouse(400, 420, 140, 30)) {
      bloque="final3";
      click.play();
    }
  } else if (bloque === "final3") {
    if (detectarMouse(400, 420, 140, 30)) {
      bloque="inicio";
      ambiente.loop(false);
      ambiente.stop();
      click.play();
    }
  } else if (bloque === "creditos") {
    if (detectarMouse(250, 360, 140, 30)) {
      bloque="inicio";
      click.play();
    }
  }
}
