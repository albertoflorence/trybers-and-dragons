import { SimpleFighter } from './Fighter';

export default class Monster implements SimpleFighter {
  private _lifePoints: number;
  public readonly strength = 63;
  constructor() {
    this._lifePoints = 85;
  }

  get lifePoints() {
    return this._lifePoints;
  }

  attack(enemy: SimpleFighter) {
    enemy.receiveDamage(this.strength);
  }

  receiveDamage(attackPoints: number): number {
    console.log(this._lifePoints);
    const remainingLife = Math.max(this._lifePoints - attackPoints, 0);
    this._lifePoints = remainingLife || -1;
    return this._lifePoints;
  }
}
