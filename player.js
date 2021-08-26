export default class Player {
  constructor(pos) {
    this._pos = pos;
  }

  getPos() {
    return this._pos;
  }

  setPos(pos) {
    this._pos = pos;
  }

  throwDice() {
    let valueDice = Math.floor(Math.random() * 6 + 1);
    if (valueDice == 3) {
      return 3;
    }
    if (valueDice == 1 || valueDice == 2) {
      return 1;
    }
    if (valueDice == 4 || valueDice == 5 || valueDice == 6) {
      return 2;
    }
  }
}
