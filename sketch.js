function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  background(0);
}

let particles = [];

class Particle {
  constructor(x, y) {
      this.angle = Math.random() * Math.PI * 2;
      this.radius = 0;
      this.speed = Math.random() * 2 + 1;
      this.growthRate = Math.random() * 2 + 1;
      this.x = x;
      this.y = y;
      this.color = color(random(360), 100, 60);
  }

  update() {
      this.radius += this.growthRate;
      this.angle += this.speed * 0.02;
      this.x += cos(this.angle) * this.radius * 0.05;
      this.y += sin(this.angle) * this.radius * 0.05;
  }

  draw() {
      fill(this.color);
      noStroke();
      ellipse(this.x, this.y, 5, 5);
  }
}

function draw() {
  background(0, 50);

  particles.forEach((particle, index) => {
      particle.update();
      particle.draw();

      if (
          particle.x < 0 || particle.x > width ||
          particle.y < 0 || particle.y > height
      ) {
          particles.splice(index, 1);
      }
  });
}

function mouseMoved() {
  for (let i = 0; i < 5; i++) {
      particles.push(new Particle(mouseX, mouseY));
  }
}