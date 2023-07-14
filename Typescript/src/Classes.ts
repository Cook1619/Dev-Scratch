class Player {
    first: string;
    last: string;
    private score = 0;
    numLives = 10;
    constructor(first: string, last: string) {
        this.first = first;
        this.last = last;
    }
    taunt(){
        console.log('Booooyah!')
    }
    loseLife(){
        this.numLives -= 1;
    }
}

const player1 = new Player("Flynn", "Cook");
player1.taunt();
console.log(player1.first)
player1.loseLife()
console.log(player1);

const player2 = new Player("Kali", "Cook");
player2.taunt();