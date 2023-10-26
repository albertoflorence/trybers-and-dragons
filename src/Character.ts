import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import Fighter, { SimpleFighter } from './Fighter';
import Race, { Elf } from './Races';
import getRandomInt from './utils';

type CharacterStats = {
  race: Race;
  archetype: Archetype;
  maxLifePoints: number;
  lifePoints: number;
  strength: number;
  defense: number;
  dexterity: number;
  energy: Energy;
};

const randDexterity = getRandomInt(1, 10);
const rand1To10 = () => getRandomInt(1, 10);
const mage = new Mage('Mage');
const elf = new Elf('Elf', randDexterity);

const defaultStats: CharacterStats = {
  archetype: new Mage('Mage'),
  race: new Elf('Elf', randDexterity),
  maxLifePoints: elf.maxLifePoints / 2,
  lifePoints: elf.maxLifePoints / 2,
  defense: rand1To10(),
  dexterity: rand1To10(),
  strength: rand1To10(),
  energy: {
    type_: mage.energyType,
    amount: rand1To10(),
  },
};

export default class Character implements Fighter {
  private _maxLifePoints: number;
  private _lifePoints: number;
  private _strength: number;
  private _defense: number;
  private _dexterity: number;
  private _energy: Energy;
  readonly race: Race;
  readonly archetype: Archetype;
  constructor(
    public readonly name: string,
    stats: CharacterStats = defaultStats,
  ) {
    this._maxLifePoints = stats.maxLifePoints;
    this._lifePoints = stats.lifePoints;
    this._strength = stats.strength;
    this._defense = stats.defense;
    this._dexterity = stats.dexterity;
    this._energy = stats.energy;
    this.race = stats.race;
    this.archetype = stats.archetype;
  }

  get lifePoints(): number {
    return this._lifePoints;
  }

  get strength(): number {
    return this._strength;
  }

  get defense(): number {
    return this._defense;
  }

  get dexterity(): number {
    return this._dexterity;
  }

  get energy(): Energy {
    return { ...this._energy };
  }

  setLifePoints(value: number): void {
    this._lifePoints = Math.max(value, 0) || -1;
  }

  attack(enemy: SimpleFighter): void {
    enemy.receiveDamage(this._strength);
  }

  special?(enemy: SimpleFighter): void {
    if (this.energy.amount < this.archetype.cost) {
      throw new Error('Not enough energy');
    }

    enemy.receiveDamage(this._strength + this.archetype.special);
    this._energy.amount -= this.archetype.cost;
  }

  levelUp(): void {
    this._maxLifePoints = Math.min(
      rand1To10() + this._maxLifePoints,
      this.race.maxLifePoints,
    );

    this._strength += rand1To10();
    this._defense += rand1To10();
    this._dexterity += rand1To10();
    this._lifePoints = this._maxLifePoints;
    this._energy.amount = 10;
  }

  receiveDamage(attackPoints: number): number {
    const damage = Math.max(attackPoints - this._defense, 0) || 1;
    const remainingLife = this._lifePoints - damage;

    this.setLifePoints(remainingLife);

    return this._lifePoints;
  }
}
