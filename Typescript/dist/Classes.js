"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _Player_score;
class Player {
    constructor(first, last) {
        _Player_score.set(this, 0);
        this.numLives = 10;
        this.first = first;
        this.last = last;
    }
    get fullName() {
        return `${this.first} ${this.last}`;
    }
    get score() {
        return __classPrivateFieldGet(this, _Player_score, "f");
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
        return __classPrivateFieldSet(this, _Player_score, __classPrivateFieldGet(this, _Player_score, "f") + score, "f");
    }
}
_Player_score = new WeakMap();
const player1 = new Player("Flynn", "Cook");
player1.taunt();
console.log(player1.first);
player1.loseLife();
console.log(player1);
console.log(player1.getScore());
console.log(player1.updateScore(23));
console.log(player1.getScore());
// doesn't get called like a normal method....gets called like a property
console.log('Getter', player1.fullName);
// gives us access to a private field
console.log('score getter', player1.score);
const player2 = new Player("Kali", "Cook");
player2.taunt();
