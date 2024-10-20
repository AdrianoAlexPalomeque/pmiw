function cargarTexto(texto, index, x, y, anT, an, al, align, tamaño) {
  push();
  fill(0, 200);
  stroke(255);
  rect(x, y, an, al);
  pop();
  push();
  fill(255);
  textSize(tamaño);
  textAlign(align);
  text(texto[index], x+5, y+5, anT);
  pop();
}

function cargarImagen(img, index, x, y, align) {
  imageMode(align);
  image(img[index], x, y);
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
