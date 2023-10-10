let ball;
let leftPaddle;
let rightPaddle;
let ballSpeed = 5;

function setup() {
  createCanvas(600, 400);
  ball = new Ball();
  leftPaddle = new Paddle(true);
  rightPaddle = new Paddle(false);
}

function draw() {
  background(0);
  
  ball.update();
  ball.show();
  
  leftPaddle.show();
  rightPaddle.show();
  
  leftPaddle.update();
  rightPaddle.update();
  
  // Verificar colisão da bola com as raquetes
  if (ball.hits(leftPaddle) || ball.hits(rightPaddle)) {
    ball.xSpeed *= -1;
  }
  
  // Verificar gol
  if (ball.x < 0 || ball.x > width) {
    ball.reset();
  }
}

function keyPressed() {
  if (key === 'W' || key === 'w') {
    leftPaddle.move(-20);
  } else if (key === 'S' || key === 's') {
    leftPaddle.move(20);
  }
}

function keyReleased() {
  if (key === 'W' || key === 'w' || key === 'S' || key === 's') {
    leftPaddle.move(0);
  }
}

class Ball {
  constructor() {
    this.x = width / 2;
    this.y = height / 2;
    this.radius = 10;
    this.xSpeed = random(2, 4) * (random() > 0.5 ? 1 : -1);
    this.ySpeed = random(2, 4) * (random() > 0.5 ? 1 : -1);
  }
  
  update() {
    this.x += this.xSpeed;
    this.y += this.ySpeed;
    
    if (this.y < 0 || this.y > height) {
      this.ySpeed *= -1;
    }
  }
  
  show() {
    ellipse(this.x, this.y, this.radius * 2);
  }
  
  hits(paddle) {
    if (this.x - this.radius < paddle.x + paddle.width / 2 &&
        this.x + this.radius > paddle.x - paddle.width / 2 &&
        this.y - this.radius < paddle.y + paddle.height / 2 &&
        this.y + this.radius > paddle.y - paddle.height / 2) {
      return true;
    }
    return false;
  }
  
  reset() {
    this.x = width / 2;
    this.y = height / 2;
    this.xSpeed = random(2, 4) * (random() > 0.5 ? 1 : -1);
    this.ySpeed = random(2, 4) * (random() > 0.5 ? 1 : -1);
  }
}

class Paddle {
  constructor(isLeft) {
    this.width = 10;
    this.height = 80;
    this.isLeft = isLeft;
    this.x = isLeft ? 20 : width - 20;
    this.y = height / 2;
    this.speed = 5;
  }
  
  show() {
    rectMode(CENTER);
    fill(255);
    rect(this.x, this.y, this.width, this.height);
  }
  
  update() {
    // Movimento da raquete do computador
    if (!this.isLeft) {
      let targetY = ball.y;
      this.y = lerp(this.y, targetY, 0.1);
    }
  }
  
  move(dir) {
    this.y += dir;
    this.y = constrain(this.y, this.height / 2, height - this.height / 2);
  }
}


/* 
let bola;
let raqueteEsquerda;
let raqueteDireita;
let velocidadeBola = 5;

function setup() {
  createCanvas(600, 400);
  bola = new Bola();
  raqueteEsquerda = new Raquete(true);
  raqueteDireita = new Raquete(false);
}

function draw() {
  background(0);
  
  bola.atualizar();
  bola.mostrar();
  
  raqueteEsquerda.mostrar();
  raqueteDireita.mostrar();
  
  raqueteEsquerda.atualizar();
  raqueteDireita.atualizar();
  
  // Verificar colisão da bola com as raquetes
  if (bola.colide(raqueteEsquerda) || bola.colide(raqueteDireita)) {
    bola.inverterX();
  }
  
  // Verificar gol
  if (bola.x < 0 || bola.x > width) {
    bola.reiniciar();
  }
}

function keyPressed() {
  if (key === 'W' || key === 'w') {
    raqueteEsquerda.mover(-10);
  } else if (key === 'S' || key === 's') {
    raqueteEsquerda.mover(10);
  }
}

function keyReleased() {
  if (key === 'W' || key === 'w' || key === 'S' || key === 's') {
    raqueteEsquerda.mover(0);
  }
}

class Bola {
  constructor() {
    this.x = width / 2;
    this.y = height / 2;
    this.raio = 10;
    this.velocidadeX = random(2, 4) * (random() > 0.5 ? 1 : -1);
    this.velocidadeY = random(2, 4) * (random() > 0.5 ? 1 : -1);
  }
  
  atualizar() {
    this.x += this.velocidadeX;
    this.y += this.velocidadeY;
    
    if (this.y < 0 || this.y > height) {
      this.velocidadeY *= -1;
    }
  }
  
  mostrar() {
    ellipse(this.x, this.y, this.raio * 2);
  }
  
  colide(raquete) {
    if (this.x - this.raio < raquete.x + raquete.largura / 2 &&
        this.x + this.raio > raquete.x - raquete.largura / 2 &&
        this.y - this.raio < raquete.y + raquete.altura / 2 &&
        this.y + this.raio > raquete.y - raquete.altura / 2) {
      return true;
    }
    return false;
  }
  
  reiniciar() {
    this.x = width / 2;
    this.y = height / 2;
    this.velocidadeX = random(2, 4) * (random() > 0.5 ? 1 : -1);
    this.velocidadeY = random(2, 4) * (random() > 0.5 ? 1 : -1);
  }
}

class Raquete {
  constructor(éEsquerda) {
    this.largura = 10;
    this.altura = 80;
    this.éEsquerda = éEsquerda;
    this.x = éEsquerda ? 20 : width - 20;
    this.y = height / 2;
    this.velocidade = 5;
  }
  
  mostrar() {
    rectMode(CENTER);
    fill(255);
    rect(this.x, this.y, this.largura, this.altura);
  }
  
  atualizar() {
    // Movimento da raquete do computador
    if (!this.éEsquerda) {
      let alvoY = bola.y;
      this.y = lerp(this.y, alvoY, 0.1);
    }
  }
  
  mover(dir) {
    this.y += dir;
    this.y = constrain(this.y, this.altura / 2, height - this.altura / 2);
  }
}
 */