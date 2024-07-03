import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.scss']
})
export class BackgroundComponent implements OnInit, AfterViewInit {
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  NUM_PARTICLES = 600;
  PARTICLE_SIZE = 0.5; // View heights
  SPEED = 20000; // Milliseconds
  particles = [];

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.initializeCanvas();
    this.startAnimation();
  }

  normalPool(o) {
    let r = 0;
    do {
      const a = Math.round(this.randomNormal({ mean: o.mean, dev: o.dev }));
      if (a < o.pool.length && a >= 0) return o.pool[a];
      r++;
    } while (r < 100);
  }

  randomNormal(o) {
    o = Object.assign({ mean: 0, dev: 1, pool: [] }, o);
    if (Array.isArray(o.pool) && o.pool.length > 0) return this.normalPool(o);
    let r, a, n, e, l = o.mean, t = o.dev;
    do {
      r = (a = 2 * Math.random() - 1) * a + (n = 2 * Math.random() - 1) * n;
    } while (r >= 1);
    return e = a * Math.sqrt(-2 * Math.log(r) / r), t * e + l;
  }

  rand(low, high) {
    return Math.random() * (high - low) + low;
  }

  createParticle() {
    const colour = {
      r: 255,  // Maximum red
      g: 0,    // No green component
      b: 0,    // No blue component
      a: this.rand(0.7, 1),  // Adjust alpha/transparency within a suitable range
    };

    return {
      x: -2,
      y: -2,
      diameter: Math.max(0, this.randomNormal({ mean: this.PARTICLE_SIZE, dev: this.PARTICLE_SIZE / 2 })),
      duration: this.randomNormal({ mean: this.SPEED, dev: this.SPEED * 0.1 }),
      amplitude: this.randomNormal({ mean: 16, dev: 2 }),
      offsetY: this.randomNormal({ mean: 0, dev: 10 }),
      arc: Math.PI * 2,
      startTime: performance.now() - this.rand(0, this.SPEED),
      colour: `rgba(${colour.r}, ${colour.g}, ${colour.b}, ${colour.a})`,
    };
  }

  moveParticle(particle, time) {
    const progress = ((time - particle.startTime) % particle.duration) / particle.duration;
    return {
      ...particle,
      x: progress,
      y: ((Math.sin(progress * particle.arc) * particle.amplitude) + particle.offsetY),
    };
  }

  drawParticle(particle) {
    const vh = this.canvas.height / 100;

    this.ctx.fillStyle = particle.colour;
    this.ctx.beginPath();
    this.ctx.ellipse(
      particle.x * this.canvas.width,
      particle.y * vh + (this.canvas.height / 2),
      particle.diameter * vh,
      particle.diameter * vh,
      0,
      0,
      2 * Math.PI
    );
    this.ctx.fill();
  }

  draw(time) {
    // Move particles
    this.particles.forEach((particle, index) => {
      this.particles[index] = this.moveParticle(particle, time);
    });

    // Clear the canvas
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    // Draw the particles
    this.particles.forEach((particle) => {
      this.drawParticle(particle);
    });

    // Schedule next frame
    requestAnimationFrame((time) => this.draw(time));
  }

  initializeCanvas() {
    this.canvas = document.getElementById('particle-canvas') as HTMLCanvasElement;
    this.canvas.width = this.canvas.offsetWidth * window.devicePixelRatio;
    this.canvas.height = this.canvas.offsetHeight * window.devicePixelRatio;
    this.ctx = this.canvas.getContext('2d');

    window.addEventListener('resize', () => {
      this.canvas.width = this.canvas.offsetWidth * window.devicePixelRatio;
      this.canvas.height = this.canvas.offsetHeight * window.devicePixelRatio;
    });
  }

  startAnimation() {
    // Create a bunch of particles
    for (let i = 0; i < this.NUM_PARTICLES; i++) {
      this.particles.push(this.createParticle());
    }

    requestAnimationFrame((time) => this.draw(time));
  }
}
