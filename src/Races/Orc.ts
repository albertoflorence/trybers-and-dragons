import Race from './Race';

export default class Orc extends Race {
  static numberOfCreatedInstances = 0;
  _maxLifePoints = 74;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Orc.numberOfCreatedInstances += 1;
  }

  static createdRacesInstances(): number {
    return Orc.numberOfCreatedInstances;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}
