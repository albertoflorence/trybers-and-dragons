import Race from './Race';

export default class Elf extends Race {
  static numberOfCreatedInstances = 0;
  _maxLifePoints = 99;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Elf.numberOfCreatedInstances += 1;
  }

  static createdRacesInstances(): number {
    return Elf.numberOfCreatedInstances;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}
