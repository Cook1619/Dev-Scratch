"use strict";
class Player {
    constructor(first, last) {
        this.score = 0;
        this.numLives = 10;
        this.first = first;
        this.last = last;
    }
    taunt() {
        console.log('Booooyah!');
    }
    loseLife() {
        this.numLives -= 1;
    }
    getScore() {
        return this.score;
    }
    updateScore(score) {
        return this.score += score;
    }
}
const player1 = new Player("Flynn", "Cook");
player1.taunt();
console.log(player1.first);
player1.loseLife();
console.log(player1);
console.log(player1.getScore());
console.log(player1.updateScore(23));
console.log(player1.getScore());
const player2 = new Player("Kali", "Cook");
player2.taunt();