class Ninja {
    constructor(name, health, speed=3, strength=3) {
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
    }
    sayName() {
        console.log(this.name);
    }
    showStats() {
        console.log(`name: ${this.name}, strength: ${this.strength}, speed: ${this.speed}, health: ${this.health}`);
    }
    drinkSake() {
        this.health += 10;
    }
}

const tom = new Ninja("Tom", 80);
tom.sayName();
tom.showStats();
tom.drinkSake();
tom.showStats();

class Sensei extends Ninja {
    constructor(name, health, speed, strength, wisdom=10) {
        super(name, health, speed, strength);
        this.health = 200;
        this.speed = 10;
        this.strength = 10;
        this.wisdom = wisdom;
    }
    speakWisdom() {
        super.drinkSake();
        console.log("Not all who wander are lost.")
    }
}

const max = new Sensei("Max");
max.showStats();
console.log(`wisdom: ${max.wisdom}`);
max.speakWisdom();
max.showStats();
