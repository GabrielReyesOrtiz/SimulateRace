import Player from "./player.js";
export default class Race {
  constructor() {
    this._player1 = new Player(0);
    this._player2 = new Player(0);
  }
  run() {
    do {
      let prob = this._player1.throwDice();

      this._player1.setPos(this._player1.getPos() + prob);

      let prob2 = this._player2.throwDice();
      this._player2.setPos(this._player2.getPos() + prob2);
    } while (this._player1.getPos() < 100 && this._player2.getPos() < 100);
  }
  win() {
    console.log("PLayer1  " + this._player1.getPos());
    console.log("PLayer2  " + this._player2.getPos());
    if (this._player1.getPos() >= 100 && this._player2.getPos() >= 100) {
      console.log("ES EMPATE");
    } else {
      if (this._player1.getPos() > this._player2.getPos()) {
        console.log("EL GANADOR ES PLAYER 1");
      } else {
        console.log("EL GANADOR ES PLAYER 2");
      }
    }
  }
}
