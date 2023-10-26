import Race from './Race';

export default class Dwarf extends Race {
  static numberOfCreatedInstances = 0;
  _maxLifePoints = 80;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Dwarf.numberOfCreatedInstances += 1;
  }

  static createdRacesInstances(): number {
    return Dwarf.numberOfCreatedInstances;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}
