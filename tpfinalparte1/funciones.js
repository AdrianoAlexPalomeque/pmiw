function cargarBloque(img, texto, index, x, y, an, al, tamF, align, anBtn, alBtn, segundoBoton, tb1, tb2) {
  push();
  imageMode(align);
  image(img[index], 0, 0);
  fill(0, 200);
  stroke(255);
  rect(x, y, an, al);
  pop();
  push();
  fill(255);
  textSize(tamF);
  textAlign(align);
  text(texto[index], x+5, y+5, an);
  pop();
  boton(x+an-anBtn-10, y+al-alBtn-10, anBtn, alBtn, tb1);
  if (segundoBoton) {
    boton(x+an-anBtn*2-20, y+al-alBtn-10, anBtn, alBtn, tb2);
  }
}

function cargarInicio(img, texto, index, x, y, an, al, align, fuente, anBtn, alBtn) {
  push();
  imageMode(align);
  image(img[index], x, y);
  fill(0, 200);
  rectMode(align);
  rect(x, y, an, al);
  fill(240);
  textFont(fuente);
  stroke(60, 40, 20);
  strokeWeight(5);
  textSize(32);
  textAlign(align);
  text(texto[index], x, y - al/1.5);
  pop();
  push();
  boton(x - anBtn/2, y - alBtn*2, anBtn, alBtn, "Empezar");
  boton(x - anBtn/2, y + alBtn, anBtn, alBtn, "Creditos");
  pop();
}

function cargarCreditos(img, texto, index, x, y, an, al, align, fuente, anBtn, alBtn) {
  push();
  imageMode(align);
  image(img[index], x, y);
  fill(0, 200);
  rectMode(align);
  rect(x, y, an, al);
  fill(255);
  textFont(fuente);
  stroke(60, 40, 20);
  strokeWeight(5);
  textAlign(align);
  textSize(32);
  text(texto[index], x, y - al/1.5);
  pop();
  push();
  fill(255);
  textSize(20);
  textAlign(align);
  text("Hecho por:\nJuan Lehue\nAlex Palomeque", x, y-al/3);
  text("Autor del cuento:\nJulio Cortazar", x, y + al/5);
  pop();
  boton(x - anBtn/2, y + alBtn*4, anBtn, alBtn, "Volver al inicio");
}


function detectarMouse(x, y, an, al) {
  return mouseX > x && mouseX < x+an && mouseY > y && mouseY < y+al;
}

function boton(x, y, an, al, texto) {
  push();
  textAlign(CENTER, CENTER);
  textSize(18);
  if (detectarMouse(x, y, an, al)) {
    fill(0);
    rect(x, y, an, al, al/2);
    fill(255);
    text(texto, x+an/2, y+al/2);
  } else {
    fill(255);
    rect(x, y, an, al, al/2);
    fill(0);
    text(texto, x+an/2, y+al/2);
  }
  pop();
}
