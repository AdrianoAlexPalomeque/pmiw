class Escenas {
  constructor(imagenFondo, imagenMenu) {
    this.imgFondo = imagenFondo;
    this.imgMenu = imagenMenu;
    this.x = width/12;
    this.y = height/4;
    this.an = 100;
    this.al = 40;
  }

  menuPrincipal() {
    image(this.imgFondo[0], 0, 0);
    image(this.imgMenu, 0, 0, 200, 420)
      push();
    fill(255);
    textSize(14);
    textStyle(BOLDITALIC);
    textAlign(CENTER);
    text("CONTINUIDAD DE\nLOS PARQUES", width/6, height/12);
    pop();
    this.boton(this.x, this.y, this.an, this.al, "Jugar");
    this.boton(this.x, this.y + this.al*2, this.an, this.al, "Creditos");
    push()
      fill(200, 200);
    rect(440, 300, 170, 165, 20);
    fill(0);
    textSize(15);
    text('Esquivá los cuchillos moviendote con "w,a,s,d" o las flechitas del teclado. Conserva al menos una vida hasta que se termine el tiempo para ganar.', 455, 310, 150);
    pop();
  }

  ganaste() {
    push()
      image(this.imgFondo[2], 0, 0);
    image(this.imgMenu, 0, 0, 200, 420)
      textSize(24);
    fill(240);
    text("Ganaste", this.x, this.y);
    this.boton(this.x, this.y*2, this.an, this.al, "Volver");
    pop()
  }

  perdiste() {
    push()
      image(this.imgFondo[1], 0, 0);
    image(this.imgMenu, 0, 0, 200, 420)
      textSize(24);
    fill(240);
    text("Perdiste", this.x, this.y);
    this.boton(this.x, this.y*2, this.an, this.al, "Volver");
    pop();
  }

  creditos() {
    push();
    image(this.imgFondo[3], 0, 0);
    image(this.imgMenu, 0, 0, 200, 420)
      fill(255);
    textSize(18);
    textLeading(30);
    text("Hecho por:\nJuan Lehue\nAlex Palomeque", this.x, this.y);
    this.boton(this.x, this.y*2, this.an, this.al, "Volver");
    pop();
  }

  boton(x, y, an, al, txt) {
    push();
    fill(0);
    rect(x, y, an, al);
    fill(240);
    textSize(18);
    textAlign(CENTER);
    text(txt, x + an/2, y+al/1.5);
    pop();
    if (this.detectarMouse(x, y, an, al)) {
      push();
      fill(0);
      stroke(240);
      rect(x, y, an, al);
      fill(240);
      noStroke();
      textSize(18);
      textAlign(CENTER);
      text(txt, x + an/2, y+al/1.5);
      pop();
    }
  }

  detectarMouse(x, y, an, al) {
    return mouseX > x && mouseX < x+an && mouseY > y && mouseY < y+al;
  }
}
