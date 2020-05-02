class ObjectHandler {
    
    constructor() {
        this.activeObjects = [];
        this.objects = [];
        this.objectsBeforeDeath = [];

        this.currentGridUnit = -10;
        this.speed = 10;
    }


    update() {
        if (frameCount % 3 == 0) {
            this.currentGridUnit += 0.5;
        }

        for (let i = 0; i < this.objects.length; i++) {
            if (this.currentGridUnit >= this.objects[i].initialGridUnit && this.objects[i].hasBeenSpawned == false) {
                this.spawnObject(this.objects[i]);
                this.objects[i].hasBeenSpawned = true;
            }
            else if (this.currentGridUnit > this.objects[i].initialGridUnit + 20 && this.objects[i].spawned == true) {
                this.despawnObject(this.objects[i]);
                this.objects[i].spawned = false;
            }
        }

        for (let j = 0; j < this.activeObjects.length; j++) {
            this.activeObjects[j].show();
        }
    }

    showDeathObjects() {
        for (let j = 0; j < this.objectsBeforeDeath.length; j++) {
            this.objectsBeforeDeath[j].show();
        }
    }
    
    spawnObject(object) {
        if (object.type == "SPIKE") {
            let y = 411 - object.gridUnitsHigh * 40;
            let newObject = new Spike(y);
            newObject.id = object.id;
            this.activeObjects.push(newObject);
            object.spawned = true;
        }
        else if (object.type == "BLOCK") {
            let y = 405 - object.gridUnitsHigh * 40;
            let newObject = new Block(y);
            newObject.id = object.id;
            this.activeObjects.push(newObject);
            object.spawned = true;
        }
        else if (object.type == "LAVA") {
            let newObject = new Lava();
            newObject.id = object.id;
            this.activeObjects.push(newObject);
            object.spawned = true;
        }
    }

    despawnObject(object) {
        let objectToDespawn = this.activeObjects.find(x => x.id == object.id);
        //let index = this.activeObjects.indexOf(objectToDespawn);
        objectToDespawn.removeFromWorld();
        this.activeObjects.shift();
    }

    loadData(data) {
        let lavaStart;
        let lavaEnd;

        for (let i = 0; i < data.length; i++) {
            let object = data[i];
            object.id = Math.floor(Math.random() * 10000);
            object.spawned = false;
            object.hasBeenSpawned = false;
            this.objects.push(object);
    
            if (object.lava != undefined) {
                if (object.lava == "START") {
                    lavaStart = object.initialGridUnit + 1;
                }
                if (object.lava == "END") {
                    lavaEnd = object.initialGridUnit - 1;
                    this.addLava(lavaStart, lavaEnd);
                }
            }
        }
        console.log(this.objects);
    }

    addLava(start, end) {
        for (let i = start; i <= end; i++) {
            let lavaO = {
                type: "LAVA",
                initialGridUnit: i,
                id: Math.floor(Math.random() * 10000),
                spawned: false,
                hasBeenSpawned: false
            };
            this.objects.push(lavaO);
        }
    }

    isOnBlock(player) {
        for (let i = 0; i < this.activeObjects.length; i++) {
            if (this.activeObjects[i].type != "BLOCK") continue;

            let colliding = Matter.SAT.collides(player.body, this.activeObjects[i].body).collided;
            if (!colliding) continue;
            if (player.body.position.y < this.activeObjects[i].body.position.y + 5) {
                return true;
            }
        }
        return false;
    }

    checkCollisions(player) {
        for (let i = 0; i < this.activeObjects.length; i++) {
            let colliding = Matter.SAT.collides(player.body, this.activeObjects[i].body);
            if (!colliding.collided) continue;

            if (this.activeObjects[i].type == "BLOCK" && player.body.position.y < this.activeObjects[i].body.position.y - 20) {
                continue;
            }
            this.objectsBeforeDeath = this.activeObjects;
            firstAnimationFrame = frameCount;
            this.reset();
            
            backgroundC1 = backgroundColors[0].c1;
            backgroundC2 = backgroundColors[0].c2;
            firstFadeAnimationFrame = 0;

            player.deathY = player.body.position.y;
            Matter.Body.setVelocity(player.body, Matter.Vector.create(0, 0));
            Matter.Body.setPosition(player.body, Matter.Vector.create(width / 3.5, 400));
            player.attempts++;
            player.totalScore = player.score;
            player.score = 0;

            player.highScore = (player.totalScore > player.highScore ? player.totalScore : player.highScore);
            document.getElementById("score").innerHTML = "High Score: " + player.highScore;
        }
    }

    reset() {
        for (let i = 0; i < this.activeObjects.length; i++) {
            this.activeObjects[i].removeFromWorld();
        }
        for (let j = 0; j < this.objects.length; j++) {
            this.objects[j].spawned = false;
            this.objects[j].hasBeenSpawned = false;
        }
        this.activeObjects = [];
        this.currentGridUnit = -10;
    }
}