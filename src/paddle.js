export default class Paddle {
  constructor(gamewidth, gameheight) {
    this.width = 150;
    this.height = 30;

    this.position = {
      x: gamewidth / 2 - this.width / 2,
      y: gameheight - this.height - 10
    };
  }

  draw(ctx) {
    ctx.fillStyle = "#0ff";
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
  }

  update(dt) {
    if (!dt) return;

    this.position.x += 5 / dt;
  }
}
