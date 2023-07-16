class Player {
    first: string;
    last: string;
    #score = 0;
    numLives = 10;
    constructor(first: string, last: string) {
        this.first = first;
        this.last = last;
    }

    get fullName(){
        return `${this.first} ${this.last}`
    }

    get score(): number{
        return this.#score;
    }
    taunt(){
        console.log('Booooyah!')
    }
    loseLife(){
        this.numLives -= 1;
    }
    getScore(){
        return this.score;
    }
    updateScore(score: number){
        return this.#score += score;
    }
}

const player1 = new Player("Flynn", "Cook");
player1.taunt();
console.log(player1.first)
player1.loseLife()
console.log(player1);
console.log(player1.getScore());
console.log(player1.updateScore(23));
console.log(player1.getScore());
// doesn't get called like a normal method....gets called like a property
console.log('Getter', player1.fullName)
// gives us access to a private field
console.log('score getter', player1.score);


const player2 = new Player("Kali", "Cook");
player2.taunt();