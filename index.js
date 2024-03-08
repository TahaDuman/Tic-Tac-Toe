let player = {
    oneScore: 0,
    twoScore: 0,
}

let Gameboard = {
    state: ["* * * \n * * * \n * * *"],
    score: 0,
    turnNum: 1,
    turnPlayer: "",
    turnCalc: function(turnNum) {
        this.turnPlayer = turnNum % 2 === 0 ? "second" : "first";
        this.turnNum++;
      },
    action: function(num){
        let state = this.state[0]
        state = state.split(" ")
        const filteredArray = state.filter(element => element !== "\n");
        return filteredArray
        /* return to editing here */
    },
    start: function(turnPlayer){
        prompt(`${turnPlayer}'s turn`)
        /* puts x or o */
        this.turnCalc(this.turnNum)
    },
    
}


/* Gameboard.turnCalc(Gameboard.turnNum); // Call turnCalc to update turnPlayer
Gameboard.start(Gameboard.turnPlayer);  */
console.log(Gameboard.action())