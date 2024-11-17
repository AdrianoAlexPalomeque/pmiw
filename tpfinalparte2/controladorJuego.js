class Main {
  constructor(cantCuchillos, imagenCuchillo, imagenJugador, imagenFondos, imagenSuelo, imagenMenu, sonidoDanio) {
    this.imgCuchillo = imagenCuchillo;
    this.imgMenu = imagenMenu;
    this.imgJugador = imagenJugador;
    this.imgFondo = imagenFondos;
    this.imgSuelo = imagenSuelo;
    this.sonidoDanio = sonidoDanio;
    this.tamSuelo = 100;
    this.jugador = new Jugador(width / 2, height / 2, 40, this.imgJugador);
    this.vidas = new ContadordeVidas(3);
    this.cuchillos = [];
    for (let i = 0; i < cantCuchillos; i++) {
      this.cuchillos[i] = new Cuchillo(10, this.imgCuchillo);
    }

    this.tiempo = 40;
    this.escenas = new Escenas(this.imgFondo, this.imgMenu);
    this.escena = "menuPrincipal";
  }

  jugar() {
    if (this.escena == "menuPrincipal") {
      this.escenas.menuPrincipal();
    } else if (this.escena == "juego") {
      this.generarSuelo();
      this.actualizarCuchillo();
      this.actualizarJugador();
      this.actualizarVidas();
      this.contador();
    } else if (this.escena == "perdiste") {
      this.escenas.perdiste();
      this.resetearJuego();
    } else if (this.escena == "ganaste") {
      this.escenas.ganaste();
      this.resetearJuego();
    } else if (this.escena == "creditos") {
      this.escenas.creditos();
    }
  }

  resetearJuego() {
    this.tiempo = 40;
    this.vidas.corazones = 3;
    this.jugador.x = width/2;
    this.jugador.y = height/2
      for (let i = 0; i < this.cuchillos.length; i++) {
      this.cuchillos[i].ubicar();
    }
  }

  actualizarCuchillo() {
    for (let i = 0; i < this.cuchillos.length; i++) {
      this.cuchillos[i].mover();
      this.cuchillos[i].mostrar();

      if (this.Colision(this.jugador, this.cuchillos[i])) {
        this.sonidoDanio.play();
        this.vidas.Restarvidas();
        this.cuchillos[i].ubicar();
      }
      // Reiniciar cuchillo
      if (this.cuchillos[i].reset()) {
        this.cuchillos[i].ubicar();
      }
    }
  }

  Colision(jugador, cuchillo) {
    let distancia = dist(jugador.x, jugador.y, cuchillo.x, cuchillo.y);
    return distancia < (jugador.t / 2 + cuchillo.t / 2);
  }

  actualizarJugador() {
    this.jugador.mover();
    this.jugador.mostrar();
  }

  actualizarVidas() {
    this.vidas.mostrar();
    if (this.vidas.corazones == 0) {
      this.escena = "perdiste";
    } else if (this.tiempo <= 0) {
      this.escena = "ganaste";
    }
  }

  contador() {
    if (this.tiempo <= 40) {
      push();
      fill(255);
      text('TIEMPO: ' + this.tiempo, width / 3, 30);
      pop();
      if (frameCount % 60 === 0) {
        this.tiempo--;
      }
    }
  }

  generarSuelo() {
    for (let i = 0; i < 7; i++) {
      for (let j = 0; j < 6; j++) {
        image(this.imgSuelo, i * this.tamSuelo, j * this.tamSuelo, this.tamSuelo, this.tamSuelo);
      }
    }
  }

  pulsarBoton() {
    if (this.escena == "menuPrincipal" && this.escenas.detectarMouse(this.escenas.x, this.escenas.y, this.escenas.an, this.escenas.al)) {
      this.escena = "juego";
    }
    if (this.escena == "menuPrincipal" && this.escenas.detectarMouse(this.escenas.x, this.escenas.y + this.escenas.al*2, this.escenas.an, this.escenas.al)) {
      this.escena = "creditos";
    }
    if (this.escena == "perdiste" && this.escenas.detectarMouse(this.escenas.x, this.escenas.y*2, this.escenas.an, this.escenas.al)) {
      this.escena = "menuPrincipal";
    }
    if (this.escena == "ganaste" && this.escenas.detectarMouse(this.escenas.x, this.escenas.y*2, this.escenas.an, this.escenas.al)) {
      this.escena = "menuPrincipal";
    }
    if (this.escena == "creditos" && this.escenas.detectarMouse(this.escenas.x, this.escenas.y*2, this.escenas.an, this.escenas.al)) {
      this.escena = "menuPrincipal";
    }
  }
}
