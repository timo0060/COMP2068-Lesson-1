class Player {
    strength: number;
    constructor() {
        this.strength = 10;
    }

    jump() {
        console.debug("You've Jumped");
    }
} 

function main() {

    var tim = new Player();
    tim.jump();

}