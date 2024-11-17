class Jugador {

  constructor(_x, _y, _t, imagen) {
    this.x = _x;
    this.y = _y;
    this.velocidad = 2;
    this.t = _t;
    this.jugador = imagen;
    this.posicion = 0;
    this.anmin = 100;
    this.anmax = 540;
    this.almin = 50;
    this.almax = 430;
  }

  mover() {
    if (keyIsDown(87) || keyIsDown(UP_ARROW)) {
      this.y -= this.velocidad;
      this.posicion = 1;
    } else if (keyIsDown(83) || keyIsDown(DOWN_ARROW)) {
      this.y += this.velocidad;
      this.posicion = 2;
    } else if (keyIsDown(65) || keyIsDown(LEFT_ARROW)) {
      this.x -= this.velocidad;
      this.posicion = 1;
    } else if (keyIsDown(68)|| keyIsDown(RIGHT_ARROW)) {
      this.x += this.velocidad;
      this.posicion = 2;
    } else {
      this.posicion = 0;
    }
    this.limites();
  }

  limites() {
    if (this.x > this.anmax) {
      this.x = this.anmax;
    } else if (this.x < this.anmin) {
      this.x = this.anmin;
    } else if (this.y > this.almax) {
      this.y = this.almax;
    } else if (this.y < this.almin) {
      this.y = this.almin;
    }
  }

  mostrar() {
    push();
    imageMode(CENTER);
    image(this.jugador[this.posicion], this.x, this.y, this.t, this.t);
    pop();
  }
}
