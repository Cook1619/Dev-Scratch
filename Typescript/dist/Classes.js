"use strict";
class Player {
    constructor(first, last) {
        this.first = first;
        this.last = last;
        console.log('in constructor');
    }
    taunt() {
        console.log('Booooyah!');
    }
}
const player1 = new Player("Flynn", "Cook");
player1.taunt();
console.log(player1.first);
const player2 = new Player("Kali", "Cook");
player2.taunt();
