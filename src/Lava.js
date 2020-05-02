class Lava {
    constructor() {
        this.body = Bodies.rectangle(width - 50, 435, 40, 20, { friction: 0, frictionAir: 0, isSensor: true });
        World.add(engine.world, [this.body]);
        Matter.Body.setVelocity(this.body, Matter.Vector.create(-7, 0));

        this.id = Math.floor(Math.random() * 10000);
        this.type = "LAVA";
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
        noStroke();
        fill(fillC);
        rectMode(CENTER);

        rect(this.body.position.x, this.body.position.y, 40, 20);
        Matter.Body.applyForce(this.body, this.body.position, Matter.Vector.create(0, -engine.world.gravity.y * engine.world.gravity.scale * this.body.mass));
    }

    removeFromWorld() {
        World.remove(engine.world, [this.body]);
    }
}