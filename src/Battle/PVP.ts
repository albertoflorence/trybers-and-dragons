import Battle from './Battle';
import Fighter from '../Fighter';

export default class PVP extends Battle {
  constructor(
    public readonly player1: Fighter,
    public readonly player2: Fighter,
  ) {
    super(player1);
  }

  fight(): number {
    const { player1, player2 } = this;
    let turn = Math.random() > 0.5;

    while (Math.min(player1.lifePoints, player2.lifePoints) > -1) {
      const attacker = turn ? player1 : player2;
      const defender = !turn ? player2 : player1;
      attacker.attack(defender);
      turn = !turn;
    }

    return super.fight();
  }
}
