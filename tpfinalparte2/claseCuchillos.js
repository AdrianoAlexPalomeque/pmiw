class Cuchillo {

  constructor(_t, imagenCuchillo) {
    this.t = _t;
    this.imagen = imagenCuchillo;
    this.ubicar();
  }

  ubicar() {
    this.lado = int(random(4))

      if (this.lado === 0) { // Arriba
      this.x = random(100, 540);
      this.y = -50;
      this.velX = 0;
      this.velY = random (3, 5);
      this.angulo = PI;
    } else if (this.lado === 1) { // Derecha
      this.x = 690;
      this.y = random(50, 430);
      this.velX = random (-3, -5);
      this.velY = 0;
      this.angulo = -PI/2;
    } else if (this.lado === 2) { // Abajo
      this.x = random(100, 540);
      this.y = 530;
      this.velX = 0;
      this.velY = random (-3, -5);
      this.angulo = 0;
    } else if (this.lado === 3) { // Izquierda
      this.x = -50;
      this.y = random(50, 430);
      this.velX = random (3, 5);
      this.velY = 0;
      this.angulo = PI/2;
    }
  }

  mover() {
    this.x += this.velX;
    this.y += this.velY;
  }

  mostrar() {
    push();
    translate(this.x, this.y);
    rotate(this.angulo);
    imageMode(CENTER);
    image(this.imagen, 0, 0, this.t, this.t*3);
    pop();
  }

  reset() {
    return (this.x > 700 || this.x < -60 || this.y > 540 || this.y < -60)
  }
}
