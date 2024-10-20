//Juan Lehue -- 94773/6
//Alex Palomeque -- 93077/3
//Continuidad de los parques
//https://youtu.be/x--5KFi9Bu0

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
  mitadAn = width/2;
  mitadAl = height/2;
  for (let i=1; i<16; i++) {
    imagenes[i].resize(640, 640);
  }
  ambiente.amp(0.2);
  click.amp(0.4);
}


function draw() {
  background(225);
  if (bloque === "inicio") {
    cargarImagen(imagenes, 0, mitadAn, mitadAl, CENTER);
    push();
    textFont(titulo);
    stroke(60,40,20); 
    strokeWeight(5);
    cargarTexto(textos, 0, 100, 80, 380, 0, 0, LEFT, 30);
    pop();
    fill(0, 200);
    rect(172, 155, 200, 200);
    boton(220, 200, 100, 30, "Empezar");
    boton(220, 280, 100, 30, "Creditos");
  } else if (bloque === "intro") {
    cargarImagen(imagenes, 1, mitadAn, mitadAl, CENTER);
    cargarTexto(textos, 1, 50, 330, 500, 500, 130, LEFT, 16);
    boton(270, 420, 130, 30, "Seguir leyendo");
    boton(420, 420, 100, 30, "Levantarse");
  } else if (bloque === "ignorar") {
    cargarImagen(imagenes, 2, mitadAn, mitadAl, CENTER);
    cargarTexto(textos, 2, 50, 350, 500, 500, 115, LEFT, 16);
    boton(400, 420, 130, 30, "Seguir leyendo");
  } else if (bloque === "vertigo") {
    cargarImagen(imagenes, 3, mitadAn, mitadAl, CENTER);
    cargarTexto(textos, 3, 50, 330, 500, 500, 130, LEFT, 16);
    boton(400, 420, 100, 30, "Continuar");
  } else if (bloque === "final1") {
    cargarImagen(imagenes, 4, mitadAn, mitadAl, CENTER);
    cargarTexto(textos, 4, 50, 350, 500, 500, 110, LEFT, 16);
    boton(400, 420, 140, 30, "Volver al inicio");
  } else if (bloque === "levantarse") {
    cargarImagen(imagenes, 5, mitadAn, mitadAl, CENTER);
    cargarTexto(textos, 5, 50, 350, 500, 500, 110, LEFT, 16);
    boton(270, 420, 100, 30, "Volver");
    boton(420, 420, 100, 30, "Investigar");
  } else if (bloque === "volver") {
    cargarImagen(imagenes, 6, mitadAn, mitadAl, CENTER);
    cargarTexto(textos, 6, 50, 350, 500, 500, 110, LEFT, 16);
    boton(400, 420, 130, 30, "Seguir leyendo");
  } else if (bloque === "salir") {
    cargarImagen(imagenes, 7, mitadAn, mitadAl, CENTER);
    cargarTexto(textos, 7, 50, 350, 500, 500, 110, LEFT, 16);
    boton(400, 420, 100, 30, "Continuar");
  } else if (bloque === "continuar") {
    cargarImagen(imagenes, 8, mitadAn, mitadAl, CENTER);
    cargarTexto(textos, 8, 50, 350, 500, 500, 110, LEFT, 16);
    boton(270, 420, 100, 30, "Volver");
    boton(400, 420, 130, 30, "Abrir la puerta");
  } else if (bloque === "empujar") {
    cargarImagen(imagenes, 9, mitadAn, mitadAl, CENTER);
    cargarTexto(textos, 9, 50, 350, 500, 500, 110, LEFT, 16);
    boton(400, 420, 100, 30, "Enfrentarlo");
  } else if (bloque === "enfrentamiento") {
    cargarImagen(imagenes, 10, mitadAn, mitadAl, CENTER);
    cargarTexto(textos, 10, 50, 350, 500, 500, 110, LEFT, 16);
    boton(400, 420, 100, 30, "Continuar");
  } else if (bloque === "final2") {
    cargarImagen(imagenes, 11, mitadAn, mitadAl, CENTER);
    cargarTexto(textos, 11, 50, 370, 500, 500, 90, LEFT, 16);
    boton(400, 420, 130, 30, "Volver al inicio");
  } else if (bloque === "miedo") {
    cargarImagen(imagenes, 12, mitadAn, mitadAl, CENTER);
    cargarTexto(textos, 12, 50, 350, 500, 500, 110, LEFT, 16);
    boton(260, 420, 130, 30, "Seguir leyendo");
    boton(400, 420, 130, 30, "Cerrar el libro");
  } else if (bloque === "atrapar") {
    cargarImagen(imagenes, 13, mitadAn, mitadAl, CENTER);
    cargarTexto(textos, 13, 50, 350, 500, 500, 110, LEFT, 16);
    boton(400, 420, 100, 30, "Continuar");
  } else if (bloque === "cerrar") {
    cargarImagen(imagenes, 14, mitadAn, mitadAl, CENTER);
    cargarTexto(textos, 14, 50, 350, 500, 500, 110, LEFT, 16);
    boton(400, 420, 100, 30, "Continuar");
  } else if (bloque === "final3") {
    cargarImagen(imagenes, 15, mitadAn, mitadAl, CENTER);
    cargarTexto(textos, 15, 50, 350, 500, 500, 110, LEFT, 16);
    boton(400, 420, 130, 30, "Volver al inicio");
  } else if (bloque === "creditos") {
    cargarImagen(imagenes, 16, mitadAn, mitadAl, CENTER);
    push();
    fill(0, 200);
    rect(172, 155, 200, 200);
      push();
    textFont(titulo);
    stroke(60,40,20); 
    strokeWeight(5);
    cargarTexto(textos, 16, 210, 80, 380, 0, 0, LEFT, 30);
    pop()
    fill(255);
    textSize(20);
    text("Juan Lehue", 200, 200);
    text("Alex Palomeque", 200, 230);
    text("Autor del cuento:", 200, 280);
    text("Julio Cortazar", 200, 310);
    pop();
    boton(200, 400, 140, 30, "Volver al inicio");
  }
}

function mousePressed() {
  if (bloque === "inicio") {
    if (detectarMouse(220, 200, 100, 30)) {
      bloque="intro";
      if (!ambiente.isPlaying()) {
        ambiente.loop(true);
      }
      click.play();
    }
    if (detectarMouse(220, 280, 100, 30)) {
      bloque="creditos";
      click.play();
    }
  } else if (bloque === "intro") {
    if (detectarMouse(270, 420, 130, 30)) {
      bloque="ignorar";
      click.play();
    }
    if (detectarMouse(420, 420, 100, 30)) {
      bloque="levantarse";
      click.play();
    }
  } else if (bloque === "ignorar") {
    if (detectarMouse(400, 420, 130, 30)) {
      bloque="vertigo";
      click.play();
    }
  } else if (bloque === "vertigo") {
    if (detectarMouse(400, 420, 100, 30)) {
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
    if (detectarMouse(270, 420, 100, 30)) {
      bloque="volver";
      click.play();
    }
    if (detectarMouse(420, 420, 100, 30)) {
      bloque="salir";
      click.play();
    }
  } else if (bloque === "volver") {
    if (detectarMouse(400, 420, 130, 30)) {
      bloque="vertigo";
      click.play();
    }
  } else if (bloque === "salir") {
    if (detectarMouse(400, 420, 100, 30)) {
      bloque="continuar";
      click.play();
    }
  } else if (bloque === "continuar") {
    if (detectarMouse(400, 420, 130, 30)) {
      bloque="empujar";
      click.play();
    }
    if (detectarMouse(270, 420, 100, 30)) {
      bloque="miedo";
      click.play();
    }
  } else if (bloque === "empujar") {
    if (detectarMouse(400, 420, 100, 30)) {
      bloque="enfrentamiento";
      click.play();
    }
  } else if (bloque === "enfrentamiento") {
    if (detectarMouse(400, 420, 100, 30)) {
      bloque="final2";
      click.play();
    }
  } else if (bloque === "final2") {
    if (detectarMouse(400, 420, 130, 30)) {
      bloque="inicio";
      ambiente.loop(false);
      ambiente.stop();
      click.play();
    }
  } else if (bloque === "miedo") {
    if (detectarMouse(260, 420, 130, 30)) {
      bloque="atrapar";
      click.play();
    }
    if (detectarMouse(400, 420, 130, 30)) {
      bloque="cerrar";
      click.play();
    }
  } else if (bloque === "atrapar") {
    if (detectarMouse(400, 420, 100, 30)) {
      bloque="final1";
      click.play();
    }
  } else if (bloque === "cerrar") {
    if (detectarMouse(400, 420, 100, 30)) {
      bloque="final3";
      click.play();
    }
  } else if (bloque === "final3") {
    if (detectarMouse(400, 420, 130, 30)) {
      bloque="inicio";
      ambiente.loop(false);
      ambiente.stop();
      click.play();
    }
  } else if (bloque === "creditos") {
    if (detectarMouse(220, 400, 140, 30)) {
      bloque="inicio";
      click.play();
    }
  }
}
