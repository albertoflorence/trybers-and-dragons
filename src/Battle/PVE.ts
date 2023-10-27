import Battle from './Battle';
import Fighter, { SimpleFighter } from '../Fighter';
import getRandomInt from '../utils';

export default class PVP extends Battle {
  private monsters: SimpleFighter[];
  constructor(
    public readonly player: Fighter,
    public readonly initialMonsters: SimpleFighter[] = [],
  ) {
    super(player);
    this.monsters = initialMonsters;
  }

  private getMonster() {
    const index = getRandomInt(0, this.monsters.length - 1);
    return this.monsters[index];
  }

  private handleMonsterDeath(monster: SimpleFighter): void {
    if (monster.lifePoints > 0) return;

    this.monsters = this.monsters.filter((m) => m !== monster);
  }

  private shouldBattle() {
    return this.player.lifePoints > 0 && this.monsters.length > 0;
  }

  fight(): number {
    const { player } = this;
    let turn = Math.random() > 0.5;

    while (this.shouldBattle()) {
      const monster = this.getMonster();
      const attacker = turn ? player : monster;
      const defender = turn ? monster : player;
      attacker.attack(defender);
      this.handleMonsterDeath(monster);
      turn = !turn;
    }

    return super.fight();
  }
}
