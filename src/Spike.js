class Spike {

    constructor(y = 411) {
        this.base = 40;
        this.height = 40;
        this.vertices = [
            { x: 0, y: 0 },
            { x: this.base / 2, y: -this.height },
            { x: this.base, y: 0 }
        ];
        this.body = Bodies.fromVertices(width - 50, y, this.vertices, { friction: 0, frictionAir: 0 });
        World.add(engine.world, [this.body]);
        Matter.Body.setVelocity(this.body, Matter.Vector.create(-7, 0));
        Matter.Body.setDensity(this.body, 1e99);

        this.id = Math.floor(Math.random() * 10000);
        this.type = "SPIKE";
        this.initialY = y;
    }

    show() {
        let a = Math.sqrt(3) * this.radius;
        let r = this.radius / 2;

        let strokeC = color(255);
        let fillC = color(20);

        if (!lowDetailModeOn) {
            if (this.body.position.x < width / 4) {
                strokeC.setAlpha(this.body.position.x);
                fillC.setAlpha(this.body.position.x);
            }
            if (this.body.position.x > width * 3 / 4) {
                let alpha = map(this.body.position.x, width * 3 / 4, width, 255, 100);
                strokeC.setAlpha(alpha);
                fillC.setAlpha(alpha);
            }
        }
        strokeWeight(2);
        stroke(strokeC);
        fill(fillC);

        Matter.Body.applyForce(this.body, this.body.position, Matter.Vector.create(0, -engine.world.gravity.y * engine.world.gravity.scale * this.body.mass));
        Matter.Body.setPosition(this.body, Matter.Vector.create(this.body.position.x, this.initialY));
        triangle(this.body.vertices[0].x, this.body.vertices[0].y, this.body.vertices[1].x, this.body.vertices[1].y, this.body.vertices[2].x, this.body.vertices[2].y);

        if (!lowDetailModeOn) {
            let c1 = color(35, 35, 35);
            let c2 = color(70, 70, 70);
            noStroke();
            for (let i = 20; i >= 0; i--) {
                let inter = map(i, 20, 0, 0, 1);
                let c = lerpColor(c1, c2, inter);
                if (this.body.position.x < width / 4) {
                    c.setAlpha(this.body.position.x - 100);
                }
                fill(c);
                ellipseMode(CENTER);
                ellipse(this.body.position.x, this.body.position.y, i);
            }
        }
    }

    removeFromWorld() {
        World.remove(engine.world, [this.body]);
    }
}