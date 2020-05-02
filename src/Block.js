class Block {
    constructor(y = 405) {
        this.body = Bodies.rectangle(width - 50, y, 40, 40, { friction: 0, frictionAir: 0 });
        World.add(engine.world, [this.body]);
        Matter.Body.setVelocity(this.body, Matter.Vector.create(-7, 0));
        Matter.Body.setDensity(this.body, 1e99);

        this.id = Math.floor(Math.random() * 10000);
        this.type = "BLOCK";
        this.initialY = y;
    }

    show() {
        let strokeC = color(255);
        let fillC = color(0);

        if (!lowDetailModeOn) {
            if (this.body.position.x < width / 4) {
                strokeC.setAlpha(this.body.position.x);
                fillC.setAlpha(this.body.position.x);
            }
            if (this.body.position.x > width * 3 / 4) {
                let alpha = map(this.body.position.x, width * 3 / 4, width, 255, 0);
                strokeC.setAlpha(alpha);
                fillC.setAlpha(alpha);
            }
        }
        strokeWeight(2);
        stroke(strokeC);
        fill(fillC);
        rectMode(CENTER);

        Matter.Body.applyForce(this.body, this.body.position, Matter.Vector.create(0, -engine.world.gravity.y * engine.world.gravity.scale * this.body.mass));
        Matter.Body.setPosition(this.body, Matter.Vector.create(this.body.position.x, this.initialY));
        rect(this.body.position.x, this.body.position.y, 40, 40);

    }

    removeFromWorld() {
        World.remove(engine.world, [this.body]);
    }
}