class ContadordeVidas {
  constructor(vidas) {
    this.corazones = vidas;
  }
  mostrar() {
    fill(255);
    textSize(24);
    text('Vidas:'+this.corazones, 40, 450);
  }
  Restarvidas() {
    if (this.corazones >0);
    this.corazones -=1;
  }
}
